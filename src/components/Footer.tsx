
import React from 'react';
import { Linkedin, Mail, Phone, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Column 1 */}
          <div>
            <h3 className="text-xl font-bold mb-4">Alin-Alexandru Bota</h3>
            <p className="text-gray-400 mb-6">
              Consultant Financiar & Inovator, dedicat transformării complexității financiare în soluții accesibile și personalizate.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 hover:bg-finance-blue rounded-full transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="mailto:alinalexandrubota@gmail.com" 
                className="p-2 bg-gray-800 hover:bg-finance-blue rounded-full transition-colors"
              >
                <Mail size={18} />
              </a>
              <a 
                href="tel:0746622032" 
                className="p-2 bg-gray-800 hover:bg-finance-blue rounded-full transition-colors"
              >
                <Phone size={18} />
              </a>
            </div>
          </div>
          
          {/* Column 2 */}
          <div>
            <h3 className="text-xl font-bold mb-4">Linkuri Rapide</h3>
            <ul className="space-y-2">
              <li>
                <a href="#despre" className="text-gray-400 hover:text-white transition-colors">Despre Mine</a>
              </li>
              <li>
                <a href="#experienta" className="text-gray-400 hover:text-white transition-colors">Experiență</a>
              </li>
              <li>
                <a href="#servicii" className="text-gray-400 hover:text-white transition-colors">Servicii</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          {/* Column 3 */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <Phone size={18} className="text-finance-blue" />
                <span className="text-gray-400">0746 622 032</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="text-finance-blue" />
                <span className="text-gray-400">alinalexandrubota@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 mt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-center md:text-left mb-4 md:mb-0">
            © {currentYear} Alin-Alexandru Bota. Toate drepturile rezervate.
          </p>
          <button 
            onClick={scrollToTop}
            className="p-3 bg-gray-800 hover:bg-finance-blue rounded-full transition-colors"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
