
import React, { useEffect, useRef } from 'react';
import { Briefcase, Code, Users, GraduationCap } from 'lucide-react';
import { 
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string[];
  icon: React.ReactNode;
}

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      title: "Team Leader/Manager și Consultant Financiar",
      company: "OVB Allfinanz România",
      period: "05/12/2023 – prezent",
      description: [
        "Conduc și inspir echipa de consultanți financiari, cu responsabilități în recrutare, formare și coaching.",
        "Ofer consultanță strategică clienților pentru a dezvolta planuri personalizate în investiții, pensii, credite și asigurări.",
        "Organizez traininguri și seminarii interactive pentru a stimula performanța echipei."
      ],
      icon: <Briefcase className="text-finance-blue" size={24} />
    },
    {
      title: "Internship",
      company: "Softex",
      period: "01/06/2024 – 24/09/2024",
      description: [
        "Am participat la dezvoltarea de aplicații, implementând noi funcționalități și optimizând procesele tehnice.",
        "Am colaborat strâns cu managerii de proiect pentru a soluționa provocările tehnice."
      ],
      icon: <Code className="text-finance-teal" size={24} />
    },
    {
      title: "Co-Fondator",
      company: "Under Rise Games",
      period: "05/03/2021 – 10/03/2022",
      description: [
        "Am coordonat dezvoltarea jocului \"A Millionaire's Story\", de la concept până la lansarea pe platforma Steam.",
        "Am gestionat strategii de monetizare și optimizarea experienței utilizatorilor."
      ],
      icon: <Users className="text-finance-gray" size={24} />
    },
    {
      title: "Voluntar",
      company: "Societatea Antreprenorială Studențească UTCN",
      period: "din 2023",
      description: [
        "Am contribuit la organizarea de evenimente antreprenoriale, îmbunătățindu-mi abilitățile de public speaking și management de proiect."
      ],
      icon: <GraduationCap className="text-finance-lightBlue" size={24} />
    }
  ];
  
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-20');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    itemsRef.current.forEach((item) => {
      if (item) {
        observer.observe(item);
      }
    });
    
    return () => observer.disconnect();
  }, []);
  
  return (
    <section id="experienta" className="section bg-finance-lightGray">
      <div className="container mx-auto">
        <div 
          ref={sectionRef} 
          className="text-center mb-16 opacity-0 translate-y-20 transition-all duration-700"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-finance-blue mb-4">
            Experiență Profesională
          </h2>
          <p className="text-lg text-finance-gray max-w-3xl mx-auto">
            Parcursul meu profesional combină expertiza financiară cu aptitudini tehnice și de leadership, oferind valoare adăugată în fiecare rol
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              ref={el => itemsRef.current[index] = el}
              className={`opacity-0 translate-y-20 transition-all duration-700 delay-${index * 100}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <Card className="h-full card-shadow hover-scale">
                <CardHeader className="flex flex-row items-center gap-3">
                  <div className="p-2 rounded-full bg-white shadow-sm">
                    {exp.icon}
                  </div>
                  <div>
                    <CardTitle>{exp.title}</CardTitle>
                    <CardDescription className="text-base">{exp.company}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-finance-blue font-medium">{exp.period}</p>
                  <ul className="list-disc list-inside space-y-1 text-finance-gray">
                    {exp.description.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
