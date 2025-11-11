
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section 
      className="relative flex items-center justify-center h-screen bg-cover bg-center"
      // Place your hero image as `public/hero.jpg` (see README below). Vite serves files in `/public` at root.
      style={{ backgroundImage: "url('/candemirbarber.png')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-poppins leading-tight mb-4">
          Candemir’s Barber Shop
        </h1>
        <p className="text-xl sm:text-2xl font-light mb-8">
          Ihr Barbershop in Kornwestheim
        </p>
        <a 
          href="#contact"
          className="bg-brand-red text-white font-bold py-3 px-8 rounded-md text-lg hover:bg-red-800 transition-transform duration-300 transform hover:scale-105"
        >
          Termin vereinbaren
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
