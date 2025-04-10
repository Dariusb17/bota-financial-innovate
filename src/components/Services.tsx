
import React, { useEffect, useRef, useState } from 'react';
import { ChartPieIcon, BriefcaseIcon, CalculatorIcon, ShieldCheck } from 'lucide-react';
import { 
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  services: {
    icon: React.ReactNode;
    title: string;
    description: string;
  }[];
}

const Services: React.FC = () => {
  const [activeTab, setActiveTab] = useState("consultanta");
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  
  const servicesData: ServiceCategory[] = [
    {
      id: "consultanta",
      title: "Consultanță Financiară",
      description: "Framework-ul POPO pentru o consultanță financiară adaptată nevoilor tale specifice",
      services: [
        {
          icon: <ChartPieIcon className="w-10 h-10 text-finance-blue" />,
          title: "Potențial Financiar",
          description: "Evaluarea detaliată a capacității tale de investiții și optimizarea fluxurilor financiare pentru rezultate maxime."
        },
        {
          icon: <BriefcaseIcon className="w-10 h-10 text-finance-blue" />,
          title: "Orizont de Timp",
          description: "Stabilirea perioadelor optime pentru diversele tipuri de investiții, adaptate obiectivelor tale pe termen scurt, mediu și lung."
        },
        {
          icon: <CalculatorIcon className="w-10 h-10 text-finance-blue" />,
          title: "Profil de Risc",
          description: "Identificarea și adaptarea strategiilor la apetitul tău pentru risc, pentru un echilibru optim între siguranță și rentabilitate."
        },
        {
          icon: <ShieldCheck className="w-10 h-10 text-finance-blue" />,
          title: "Obiectiv",
          description: "Definirea clară a obiectivelor tale financiare și stabilirea pașilor concreți pentru atingerea acestora."
        }
      ]
    },
    {
      id: "specializate",
      title: "Servicii Specializate",
      description: "Soluții personalizate pentru nevoile tale financiare specifice",
      services: [
        {
          icon: <ChartPieIcon className="w-10 h-10 text-finance-teal" />,
          title: "Planificare pentru Pensii",
          description: "Strategii complete pentru asigurarea unui venit stabil la pensie și maximizarea beneficiilor disponibile."
        },
        {
          icon: <BriefcaseIcon className="w-10 h-10 text-finance-teal" />,
          title: "Venituri Pasive",
          description: "Dezvoltarea de surse de venit care lucrează pentru tine, cu focus pe investiții și diversificarea portofoliului."
        },
        {
          icon: <CalculatorIcon className="w-10 h-10 text-finance-teal" />,
          title: "Optimizarea Creditelor",
          description: "Analiză și restructurare a creditelor existente și soluții pentru închiderea anticipată eficientă."
        },
        {
          icon: <ShieldCheck className="w-10 h-10 text-finance-teal" />,
          title: "Consultanță în Asigurări",
          description: "Evaluarea riscurilor și implementarea soluțiilor de asigurare adaptate profilului și nevoilor tale."
        }
      ]
    },
    {
      id: "suport",
      title: "Suport Integrat",
      description: "Instrumente și asistență continuă pentru investițiile și planificarea ta financiară",
      services: [
        {
          icon: <ChartPieIcon className="w-10 h-10 text-finance-gray" />,
          title: "Investment Policy Statement",
          description: "Elaborarea unui IPS complet care definește strategia ta de investiții și obiectivele financiare."
        },
        {
          icon: <BriefcaseIcon className="w-10 h-10 text-finance-gray" />,
          title: "Template-uri Personalizate",
          description: "Acces la template-uri profesionale pentru portofoliu și strategii de investiții adaptate situației tale."
        },
        {
          icon: <CalculatorIcon className="w-10 h-10 text-finance-gray" />,
          title: "Instrumente Analitice",
          description: "Utilizarea instrumentelor avansate pentru evaluarea companiilor și oportunităților de investiții."
        },
        {
          icon: <ShieldCheck className="w-10 h-10 text-finance-gray" />,
          title: "Mentenanță Portofoliu",
          description: "Monitorizare continuă și ajustări proactive ale portofoliului tău pentru optimizarea performanței."
        }
      ]
    }
  ];
  
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
    
    // Clean up the observer when component unmounts
    return () => observer.disconnect();
  }, []);

  // Reset animation classes when tab changes
  useEffect(() => {
    // Short timeout to allow the DOM to update
    const timer = setTimeout(() => {
      const cards = document.querySelectorAll('.service-card');
      cards.forEach((card, index) => {
        card.classList.add('opacity-0', 'translate-y-10');
        card.classList.remove('opacity-100', 'translate-y-0');
        
        setTimeout(() => {
          card.classList.add('opacity-100', 'translate-y-0');
          card.classList.remove('opacity-0', 'translate-y-10');
        }, 50 + index * 100);
      });
    }, 50);
    
    return () => clearTimeout(timer);
  }, [activeTab]);
  
  return (
    <section id="servicii" className="section">
      <div className="container mx-auto">
        <div 
          ref={sectionRef}
          className="text-center mb-12 opacity-0 translate-y-20 transition-all duration-700"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-finance-blue mb-4">
            Servicii Oferite
          </h2>
          <p className="text-lg text-finance-gray max-w-3xl mx-auto">
            Portofoliul de servicii pe care ți-l ofer acoperă întreg spectrul nevoilor tale financiare, de la consultanță personalizată la instrumente specializate
          </p>
        </div>
        
        <Tabs defaultValue="consultanta" value={activeTab} onValueChange={setActiveTab} className="w-full max-w-5xl mx-auto">
          <TabsList className="grid grid-cols-3 mb-8">
            {servicesData.map((category) => (
              <TabsTrigger 
                key={category.id} 
                value={category.id}
                className="text-base py-3"
              >
                {category.title}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {servicesData.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold mb-2">{category.title}</h3>
                <p className="text-finance-gray">{category.description}</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {category.services.map((service, idx) => (
                  <Card 
                    key={idx}
                    className="service-card opacity-0 translate-y-10 transition-all duration-500 card-shadow"
                  >
                    <CardHeader className="flex flex-row items-center gap-4 pb-2">
                      <div className="p-2 bg-gray-50 rounded-lg">
                        {service.icon}
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-finance-gray">{service.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Services;
