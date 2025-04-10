import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
const About: React.FC = () => {
  const observerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && observerRef.current) {
        observerRef.current.classList.add('opacity-100', 'translate-y-0');
        observerRef.current.classList.remove('opacity-0', 'translate-y-10');
        if (imageRef.current) {
          imageRef.current.classList.add('opacity-100', 'scale-100');
          imageRef.current.classList.remove('opacity-0', 'scale-95');
        }
      }
    }, {
      threshold: 0.1
    });
    if (observerRef.current) {
      observer.observe(observerRef.current);
    }
    return () => observer.disconnect();
  }, []);
  return <section id="despre" className="section">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute -z-10 w-full h-full bg-finance-blue/10 rounded-lg transform rotate-3 translate-x-4 translate-y-4"></div>
              <img ref={imageRef} alt="Alin-Alexandru Bota" className="rounded-lg shadow-xl max-w-sm w-full h-auto object-cover transition-all duration-700 opacity-0 scale-95" src="/lovable-uploads/4052e388-1d4c-4985-8926-1eb69db76096.jpg" />
            </div>
          </div>
          
          {/* Content */}
          <div ref={observerRef} className="lg:w-1/2 opacity-0 translate-y-10 transition-all duration-700">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-finance-blue">Despre Mine</h2>
            <p className="text-lg mb-4 text-finance-gray">Salut, sunt Alin-Alexandru Bota – consultant financiar, lider de echipă și inovator în domeniul financiar. Experiența acumulată ca Team Leader/Manager la OVB Allfinanz România, cât și studiile în Computer Science la Universitatea Tehnică din Cluj-Napoca m-au învățat cum să transform complexitatea financiară într-o experiență accesibilă.</p>
            <p className="text-lg mb-6 text-finance-gray">
              Cu o abordare personalizată și o pasiune pentru tehnologie, ajut clienții să își optimizeze investițiile și să 
              își planifice viitorul financiar.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-[#0A66C2] text-white rounded-lg hover:bg-[#0A66C2]/90 transition-colors">
                <Linkedin size={20} />
                LinkedIn
              </a>
              <Button variant="outline" className="border-finance-teal text-finance-teal hover:bg-finance-teal/10" onClick={() => document.getElementById('contact')?.scrollIntoView({
              behavior: 'smooth'
            })}>
                Contactează-mă
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;