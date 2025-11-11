
import React, { useState } from 'react';
import { getHairstyleSuggestions } from '../services/geminiService';

const HairstyleSuggester: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [suggestion, setSuggestion] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSuggest = async () => {
    if (!prompt.trim()) {
      setError('Bitte beschreiben Sie Ihren Haar-Typ oder Wunsch.');
      return;
    }
    setIsLoading(true);
    setError(null);
    setSuggestion('');
    try {
      const result = await getHairstyleSuggestions(prompt);
      setSuggestion(result);
    } catch (e) {
      setError('Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.');
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };
  
  const formatSuggestion = (text: string) => {
    return text.split('\n').map((line, index) => {
        if (line.startsWith('* ') || line.startsWith('- ')) {
            return <li key={index} className="mb-2">{line.substring(2)}</li>;
        }
        if (line.match(/^\d+\./)) {
            return <li key={index} className="mb-2">{line}</li>;
        }
        return <p key={index} className="mb-4">{line}</p>;
    });
  };

  return (
    <section id="ai-suggester" className="py-20 bg-brand-gray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-poppins">AI Frisuren-Berater</h2>
        <div className="w-24 h-1 bg-brand-red mx-auto mt-4"></div>
        <p className="mt-4 mb-8 max-w-2xl mx-auto text-gray-300">
          Unsicher, welche Frisur zu Ihnen passt? Beschreiben Sie Ihren Haartyp, Ihre Gesichtsform oder Ihre Wünsche und unsere KI gibt Ihnen ein paar Vorschläge.
        </p>

        <div className="max-w-2xl mx-auto">
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="z.B. 'Ich habe dickes, welliges Haar und ein ovales Gesicht. Ich suche einen pflegeleichten, modernen Stil.'"
            className="w-full p-4 rounded-md bg-brand-dark border border-gray-600 focus:ring-2 focus:ring-brand-red focus:outline-none transition-shadow text-white"
            rows={4}
          />
          <button
            onClick={handleSuggest}
            disabled={isLoading}
            className="mt-4 bg-brand-red text-white font-bold py-3 px-8 rounded-md text-lg hover:bg-red-800 transition-all duration-300 disabled:bg-gray-500 disabled:cursor-not-allowed w-full sm:w-auto"
          >
            {isLoading ? 'Denke nach...' : 'Vorschläge erhalten'}
          </button>

          {error && <p className="mt-4 text-red-400">{error}</p>}

          {isLoading && (
            <div className="mt-8 flex justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-red"></div>
            </div>
          )}

          {suggestion && (
            <div className="mt-8 p-6 bg-brand-dark rounded-lg text-left border border-gray-700">
              <h3 className="text-xl font-poppins font-semibold mb-4 text-brand-red">Hier sind ein paar Ideen:</h3>
              <div className="text-gray-300 space-y-2 prose prose-invert max-w-none">
                 {formatSuggestion(suggestion)}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HairstyleSuggester;
