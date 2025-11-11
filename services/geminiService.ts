import { GoogleGenAI } from "@google/genai";

// Eğer build zamanı veya runtime'da API anahtarı yoksa, gerçek API çağrısı yerine
// lokal bir stub kullanacağız. Bu sayede uygulama API key olmadan da çalışır.
const API_KEY = (process.env as any)?.API_KEY || (process.env as any)?.GEMINI_API_KEY || '';
let ai: any | null = null;
try {
  if (API_KEY) {
    ai = new GoogleGenAI({ apiKey: API_KEY });
  }
} catch (e) {
  // Eğer kütüphane tarayıcıda bir hata verirse, sessizce devam edip stub kullanacağız.
  console.warn('GoogleGenAI init failed, falling back to stub.', e);
  ai = null;
}

const localStubResponse = async (prompt: string): Promise<string> => {
  // Basit, deterministik ve kullanıcı girdisine dayalı statik öneriler üretir.
  await new Promise((r) => setTimeout(r, 200)); // hafif gecikme simülasyonu

  const suggestions = [
    {
      name: 'Classic Taper',
      desc: 'Kısa yanlar ve ense, üst kısım orta uzunlukta; kolay şekillenir.',
      why: 'Çoğu yüz tipine uyum sağlar ve bakım gereksinimi düşüktür.',
    },
    {
      name: 'Textured Crop',
      desc: 'Üstte kısa, doku verilmiş katmanlar; modern ve genç bir görünüm.',
      why: 'İnce telli saçlara hacim verir ve kısa sürede şekillendirilir.',
    },
    {
      name: 'Layered Shoulder-Length',
      desc: 'Omuz hizasında katmanlı kesim; doğal dalgalarla güzel görünür.',
      why: 'Orta-uzun saç isteyenler için esneklik ve hareket sağlar.',
    },
  ];

  // Kullanıcı prompt'undan birkaç anahtar kelime çıkarıp cevabı hafifçe özelleştirelim.
  const p = (prompt || '').toLowerCase();
  let chosen = suggestions.slice(0, 2);
  if (p.includes('uzun') || p.includes('omuz')) chosen = suggestions.slice(1);
  if (p.includes('kısa') || p.includes('kısalt')) chosen = suggestions.slice(0, 2);

  const md = chosen
    .map((s) => `### ${s.name}\n\n${s.desc}\n\n**Neden:** ${s.why}\n`)
    .join('\n');

  return `**Simülasyon (anahtarsız)**\n\n${md}`;
};

export const getHairstyleSuggestions = async (prompt: string): Promise<string> => {
  // Eğer ai nesnesi yoksa (anahtar yok veya init başarısız), stub kullan.
  if (!ai) {
    return await localStubResponse(prompt);
  }

  try {
    const systemInstruction = `You are a professional and creative barber and hairstylist. A customer is looking for hairstyle suggestions. 
    Based on their description, provide 2-3 specific, actionable hairstyle suggestions. 
    For each suggestion, give it a name, briefly describe it, and explain why it would be a good fit. 
    Format your response clearly using markdown.`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        systemInstruction,
      },
    });

    // GenAI SDK response biçimi farklı olabilir; güvenli fallback yapıyoruz.
    if (response && typeof response === 'object') {
      if (response.text) return response.text as string;
      // bazı sürümlerde candidates veya serverContent olabilir
      if ((response as any).candidates && Array.isArray((response as any).candidates)) {
        const first = (response as any).candidates[0];
        if (first && first.content && first.content.length) return first.content.map((p: any) => p.text || p).join('\n');
      }
    }

    return String(response);
  } catch (error) {
    console.error('Error calling Gemini API:', error);
    // Hata durumunda da stub döndürerek uygulamanın çalışmaya devam etmesini sağla.
    return await localStubResponse(prompt);
  }
};

