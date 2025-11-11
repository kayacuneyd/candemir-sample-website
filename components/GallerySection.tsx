
import React from 'react';

const galleryImages = [
  "barber1", "barber2", "barber3", "barber4", "barber5", "barber6"
];

const GallerySection: React.FC = () => {
  return (
    <section id="gallery" className="py-20 bg-brand-gray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins">Galerie</h2>
          <div className="w-24 h-1 bg-brand-red mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((seed) => (
            <div key={seed} className="overflow-hidden rounded-lg shadow-lg group">
              <img 
                src={`https://picsum.photos/seed/${seed}/600/400`} 
                alt="Barbershop Gallery Image" 
                className="w-full h-full object-cover transition-transform duration-500 transform group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
