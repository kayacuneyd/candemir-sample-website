import React, { useState } from 'react';

// FIX: Defined props as a type alias to resolve potential JSX parsing issues.
type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
};

const NavLink = ({ href, children, onClick }: NavLinkProps) => (
  <a
    href={href}
    onClick={onClick}
    className="block md:inline-block py-2 px-4 text-gray-300 hover:text-white hover:bg-brand-red transition-colors duration-300 rounded-md"
  >
    {children}
  </a>
);

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="bg-black bg-opacity-80 backdrop-blur-sm sticky top-0 z-50 shadow-lg shadow-brand-red/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#" className="text-white font-bold text-xl font-poppins">
              Candemir's
            </a>
          </div>
          <div className="hidden md:block">
            <nav className="ml-10 flex items-baseline space-x-4">
              <NavLink href="#services">Services</NavLink>
              <NavLink href="#gallery">Galerie</NavLink>
              <NavLink href="#about">Über Uns</NavLink>
              <NavLink href="#ai-suggester">AI-Berater</NavLink>
              <NavLink href="#contact">Kontakt</NavLink>
            </nav>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <nav className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink href="#services" onClick={closeMenu}>Services</NavLink>
            <NavLink href="#gallery" onClick={closeMenu}>Galerie</NavLink>
            <NavLink href="#about" onClick={closeMenu}>Über Uns</NavLink>
            <NavLink href="#ai-suggester" onClick={closeMenu}>AI-Berater</NavLink>
            <NavLink href="#contact" onClick={closeMenu}>Kontakt</NavLink>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
