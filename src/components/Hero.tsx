
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollPosition = window.scrollY;
        const opacity = 1 - scrollPosition / 700;
        const translateY = scrollPosition * 0.3;
        if (opacity >= 0) {
          heroRef.current.style.opacity = opacity.toString();
          heroRef.current.style.transform = `translateY(${translateY}px)`;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('despre')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-finance-lightGray to-white overflow-hidden">
      <div ref={heroRef} className="container mx-auto text-center z-10 px-4">
        <div className="mb-4 flex justify-center">
          <Avatar className="h-48 w-48 border-4 border-white shadow-lg">
            <AvatarImage alt="Alin-Alexandru Bota" src="/lovable-uploads/35816424-ddc1-4574-bd10-3dcd16a51246.jpg" className="object-cover" />
            <AvatarFallback>AB</AvatarFallback>
          </Avatar>
        </div>

        <p className="text-lg text-finance-teal mb-4">Consultant & Planificator financiar</p>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight text-finance-blue">
          Finanțele Tale Merită un Manager de Încredere
        </h1>
        <p className="text-xl md:text-2xl text-finance-gray max-w-3xl mx-auto mb-10">
          Indiferent că vrei o casă, independență financiară sau un portofoliu solid, 
          ai nevoie de un plan. Hai să-l construim împreună.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" className="bg-finance-blue hover:bg-finance-blue/90 text-white px-8 py-6 text-lg rounded-full" onClick={() => document.getElementById('servicii')?.scrollIntoView({
          behavior: 'smooth'
        })}>
            Descoperă Serviciile
          </Button>
          <Button variant="outline" size="lg" className="bg-white text-finance-blue border-finance-blue hover:bg-finance-blue/10 px-8 py-6 text-lg rounded-full" onClick={() => document.getElementById('contact')?.scrollIntoView({
          behavior: 'smooth'
        })}>
            Contactează-mă
          </Button>
        </div>
        
        <button onClick={scrollToAbout} className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={36} className="text-finance-gray" />
        </button>
      </div>
      
      {/* Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-finance-blue/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/5 w-96 h-96 bg-finance-teal/10 rounded-full blur-3xl"></div>
    </div>
  );
};

export default Hero;
