
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import GallerySection from './components/GallerySection';
import AboutSection from './components/AboutSection';
import HairstyleSuggester from './components/HairstyleSuggester';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-brand-dark text-gray-200 font-roboto">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <GallerySection />
        <AboutSection />
        <HairstyleSuggester />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
