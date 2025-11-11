import React from 'react';

// FIX: Defined props as a type alias to resolve potential JSX parsing issues.
type SocialIconProps = {
    href: string;
    children: React.ReactNode;
};

const SocialIcon = ({ href, children }: SocialIconProps) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-red transition-colors duration-300">
        {children}
    </a>
);

const Footer: React.FC = () => {
    return (
        <footer className="bg-black text-gray-400 py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                    <div>
                        <h3 className="text-white text-lg font-poppins font-semibold mb-4">Adresse</h3>
                        <p>Candemir’s Barber Shop</p>
                        <p>Lindenstraße 26</p>
                        <p>70806 Kornwestheim</p>
                    </div>
                    <div>
                        <h3 className="text-white text-lg font-poppins font-semibold mb-4">Öffnungszeiten</h3>
                        <p>Mo - Fr: 09:00 - 19:00 Uhr</p>
                        <p>Sa: 09:00 - 16:00 Uhr</p>
                        <p>So: Geschlossen</p>
                    </div>
                    <div>
                        <h3 className="text-white text-lg font-poppins font-semibold mb-4">Folgen Sie uns</h3>
                        <div className="flex justify-center md:justify-start space-x-6">
                            <SocialIcon href="#">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                            </SocialIcon>
                            <SocialIcon href="#">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.013-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 013.45 2.525c.636-.247 1.363-.416 2.427-.465C6.901 2.013 7.255 2 9.685 2h2.63zM12 9.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zm0-2.25a4.5 4.5 0 100 9 4.5 4.5 0 000-9z" clipRule="evenodd" /></svg>
                            </SocialIcon>
                        </div>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} Candemir’s Barber Shop. Alle Rechte vorbehalten.</p>
                    <div className="mt-4">
                        <a href="#" className="hover:text-white transition-colors duration-300">Impressum</a>
                        <span className="mx-2">|</span>
                        <a href="#" className="hover:text-white transition-colors duration-300">Datenschutz</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
