
import React, { useEffect, useRef } from 'react';
import { CheckCircle, Target, Home, PiggyBank, Calendar, Clock, Baby, CreditCard, Wallet } from 'lucide-react';
import { 
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Services: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);
  const objectivesRef = useRef<HTMLDivElement>(null);
  
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
    if (stepsRef.current) observer.observe(stepsRef.current);
    if (objectivesRef.current) observer.observe(objectivesRef.current);
    
    // Clean up the observer when component unmounts
    return () => observer.disconnect();
  }, []);
  
  const steps = [
    {
      number: 1,
      title: "Analiză",
      description: "Analizăm împreună situația ta actuală și obiectivele personale."
    },
    {
      number: 2,
      title: "Plan",
      description: "Construim un plan care face sens pentru tine și îl ajustăm cât e nevoie."
    },
    {
      number: 3,
      title: "Colaborare",
      description: "Colaborăm pe termen lung – tu evoluezi, eu sunt mereu acolo."
    }
  ];
  
  const objectives = [
    {
      icon: <PiggyBank className="w-6 h-6 text-finance-blue" />,
      title: "Investiții cu orizont pe termen lung"
    },
    {
      icon: <Wallet className="w-6 h-6 text-finance-blue" />,
      title: "Independență financiară"
    },
    {
      icon: <Home className="w-6 h-6 text-finance-blue" />,
      title: "Achiziție locuință"
    },
    {
      icon: <CreditCard className="w-6 h-6 text-finance-blue" />,
      title: "Închidere anticipată de credit"
    },
    {
      icon: <Baby className="w-6 h-6 text-finance-blue" />,
      title: "Plan pentru viitorul copilului"
    },
    {
      icon: <Calendar className="w-6 h-6 text-finance-blue" />,
      title: "Plan pentru pensie"
    },
    {
      icon: <Target className="w-6 h-6 text-finance-blue" />,
      title: "Bugetare"
    }
  ];
  
  return (
    <section id="servicii" className="section">
      <div className="container mx-auto">
        <div 
          ref={sectionRef}
          className="text-center mb-12 opacity-0 translate-y-20 transition-all duration-700"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-finance-blue mb-4">
            Ghidul Tău Financiar Personal – 3 Pași Simpli
          </h2>
        </div>
        
        {/* Steps Process */}
        <div 
          ref={stepsRef}
          className="grid md:grid-cols-3 gap-8 mb-16 opacity-0 translate-y-20 transition-all duration-700"
        >
          {steps.map((step, index) => (
            <Card key={index} className="text-center border-2 hover:border-finance-blue/50 transition-all duration-300 card-shadow hover:scale-105">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-finance-blue text-white flex items-center justify-center mx-auto">
                  <span className="text-xl font-bold">{step.number}</span>
                </div>
                <CardTitle className="mt-4">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-finance-gray">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Objectives */}
        <div
          ref={objectivesRef}
          className="mt-20 opacity-0 translate-y-20 transition-all duration-700"
        >
          <h3 className="text-2xl font-bold text-center mb-10">În obiective precum:</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {objectives.map((objective, index) => (
              <div 
                key={index}
                className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:bg-finance-blue/5"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-3 bg-finance-lightGray rounded-full mb-4">
                  {objective.icon}
                </div>
                <h4 className="text-center font-medium">{objective.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
