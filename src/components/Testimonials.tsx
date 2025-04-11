
import React, { useEffect, useRef } from 'react';
import { Star } from 'lucide-react';

type TestimonialProps = {
  name: string;
  position?: string;
  text: string;
  rating: number;
  image?: string;
};

const Testimonial: React.FC<TestimonialProps> = ({ name, position, text, rating, image }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl">
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star 
            key={i} 
            size={20} 
            className={`${i < rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`} 
          />
        ))}
      </div>
      
      <p className="text-finance-gray italic mb-6">"{text}"</p>
      
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4 bg-finance-lightGray flex items-center justify-center">
          {image ? (
            <img src={image} alt={name} className="w-full h-full object-cover" />
          ) : (
            <span className="text-lg font-medium text-finance-blue">{name.charAt(0)}</span>
          )}
        </div>
        <div>
          <h4 className="font-medium text-finance-blue">{name}</h4>
          {position && <p className="text-sm text-finance-gray">{position}</p>}
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-20');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) observer.observe(sectionRef.current);
    
    return () => observer.disconnect();
  }, []);
  
  const testimonials: TestimonialProps[] = [
    {
      name: "Maria Popescu",
      position: "Profesor",
      text: "Am început să lucrez cu Alin acum 6 luni și deja văd îmbunătățiri în modul în care îmi gestionez economiile. Explică totul clar și răspunde la toate întrebările mele, oricât de banale ar părea.",
      rating: 5
    },
    {
      name: "Andrei Ionescu",
      position: "Antreprenor",
      text: "De când colaborez cu Alin, am reușit să-mi închid un credit anticipat și să pun bazele unui portofoliu de investiții solid. Apreciez abordarea personalizată și disponibilitatea lui de a adapta planul când apar schimbări în viața mea.",
      rating: 5
    },
    {
      name: "Elena Dumitrescu",
      position: "Medic",
      text: "Ca persoană ocupată, aveam mereu problema timpului când venea vorba de finanțele personale. Alin mi-a oferit soluții simple și eficiente pentru a-mi atinge obiectivele financiare fără stres.",
      rating: 5
    },
    {
      name: "Mihai Stancu",
      position: "Inginer IT",
      text: "Am fost sceptic inițial, dar după câteva luni de colaborare, pot spune că decizia de a lucra cu Alin a fost una dintre cele mai bune pentru viitorul meu financiar. Planul pentru independență financiară pe care l-am construit împreună funcționează exact cum mi-am dorit.",
      rating: 5
    }
  ];
  
  return (
    <section id="testimoniale" className="section bg-finance-lightGray">
      <div className="container mx-auto">
        <div 
          ref={sectionRef} 
          className="text-center mb-12 opacity-0 translate-y-20 transition-all duration-700"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-finance-blue mb-4">
            Ce Spun Clienții Mei
          </h2>
          <p className="text-lg text-finance-gray max-w-3xl mx-auto">
            Experiențele reale ale celor care au ales să-și construiască viitorul financiar împreună cu mine
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="opacity-0 translate-y-10"
              style={{ 
                transitionDelay: `${index * 150}ms`,
                animation: `fadeInUp 0.6s ease-out ${index * 0.15}s forwards` 
              }}
            >
              <Testimonial {...testimonial} />
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
