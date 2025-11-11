import React from 'react';

// FIX: Added explicit type annotation to the services array to ensure correct type inference.
const services: { icon: React.ReactNode; title: string; description: string }[] = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
    ),
    title: "Herrenhaarschnitt",
    description: "Klassisch oder modern, wir finden den perfekten Schnitt für Sie."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
    ),
    title: "Bartpflege",
    description: "Kontur, Pflege und Styling für den perfekten Bart."
  },
  {
    icon: (
       <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v4.517a1 1 0 01-1.447.894L10 8m4 0l2-2m-2 2l-2-2" /></svg>
    ),
    title: "Nassrasur",
    description: "Die traditionelle Rasur mit Messer und warmen Kompressen."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
    ),
    title: "Kinder & Teen Schnitt",
    description: "Coole und pflegeleichte Haarschnitte für junge Kunden."
  }
];

// FIX: Replaced JSX.Element with React.ReactNode to fix "Cannot find namespace 'JSX'" error.
const ServiceCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="bg-brand-gray p-8 rounded-lg text-center transform hover:-translate-y-2 transition-transform duration-300 shadow-lg">
    <div className="text-brand-red mx-auto mb-4">{icon}</div>
    <h3 className="text-xl font-bold font-poppins mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-brand-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins">Unsere Dienstleistungen</h2>
          <div className="w-24 h-1 bg-brand-red mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map(service => <ServiceCard key={service.title} {...service} />)}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
