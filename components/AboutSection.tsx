
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-brand-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img 
              src="https://picsum.photos/seed/barberteam/800/600" 
              alt="Candemir's Barber Shop Team"
              className="rounded-lg shadow-2xl w-full"
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">Über Uns</h2>
            <div className="w-24 h-1 bg-brand-red mx-auto md:mx-0 mt-2 mb-6"></div>
            <p className="text-gray-300 leading-relaxed mb-4">
              Willkommen bei Candemir’s Barber Shop, Ihrem traditionellen und doch modernen Herrenfriseur im Herzen von Kornwestheim. Unser Inhaber, Candemir, und sein Team legen größten Wert auf Handwerkskunst, Präzision und eine freundliche Atmosphäre.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Bei uns ist jeder Besuch mehr als nur ein Haarschnitt – es ist eine Auszeit vom Alltag. Wir nehmen uns Zeit für Sie und beraten Sie individuell, um den perfekten Look zu kreieren, der zu Ihnen passt. Kommen Sie vorbei und überzeugen Sie sich selbst!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
