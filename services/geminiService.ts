import { GoogleGenAI } from "@google/genai";

// FIX: Aligned with @google/genai coding guidelines.
// Initialized directly from process.env.API_KEY, assuming it's available.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getHairstyleSuggestions = async (prompt: string): Promise<string> => {
  try {
    // FIX: Aligned with @google/genai coding guidelines.
    // Used systemInstruction for persona and instructions, and contents for the user prompt.
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
    
    return response.text;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    throw new Error("Failed to get hairstyle suggestions from AI.");
  }
};
