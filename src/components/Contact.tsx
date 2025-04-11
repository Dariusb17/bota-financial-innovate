
import React, { useRef, useState } from 'react';
import { Phone, Mail, Linkedin, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import emailjs from 'emailjs-com';

const Contact: React.FC = () => {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const contactItems = [
    { 
      icon: <Phone size={24} className="text-finance-blue" />,
      title: 'Telefon',
      value: '0746 622 032',
      href: 'tel:0746622032'
    },
    {
      icon: <Mail size={24} className="text-finance-blue" />,
      title: 'Email',
      value: 'alinalexandrubota@gmail.com',
      href: 'mailto:alinalexandrubota@gmail.com'
    },
    {
      icon: <Linkedin size={24} className="text-finance-blue" />,
      title: 'LinkedIn',
      value: 'Profilul meu LinkedIn',
      href: 'https://www.linkedin.com/in/alin-alexandru-bota/'
    }
  ];
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    if (!formRef.current) {
      setIsSubmitting(false);
      return;
    }
    
    // Send email using EmailJS
    emailjs.sendForm(
      'service_b75w3y7', 
      'template_qbun0ra',
      formRef.current,
      'dNsPF44T9wpPQiV8_' 
    )
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        if (formRef.current) formRef.current.reset();
        
        toast({
          title: "Mesaj trimis cu succes!",
          description: "Voi reveni cu un răspuns în cel mai scurt timp posibil.",
        });
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        
        toast({
          title: "Eroare",
          description: "Nu am putut trimite mesajul. Vă rugăm să încercați din nou sau să mă contactați direct.",
          variant: "destructive",
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };
  
  return (
    <section id="contact" className="section bg-gradient-to-b from-white to-finance-lightGray">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-finance-blue mb-4">
            Contact
          </h2>
          <p className="text-lg text-finance-gray max-w-2xl mx-auto">
            Pentru colaborări sau informații suplimentare, nu ezita să mă contactezi folosind una dintre metodele de mai jos
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="glass p-8 rounded-2xl shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-semibold text-finance-blue">Trimite un mesaj</h3>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="flex items-center text-finance-gray hover:text-finance-blue cursor-help">
                    <Info size={18} />
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-sm max-w-xs">
                    Completați formularul pentru a trimite un mesaj direct.
                  </p>
                </TooltipContent>
              </Tooltip>
            </div>
            
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-3">
                <label htmlFor="name" className="block text-sm font-medium text-finance-gray">Nume</label>
                <Input 
                  id="name" 
                  name="name" 
                  type="text"
                  required 
                  placeholder="Numele tău" 
                  className="w-full"
                />
              </div>
              
              <div className="space-y-3">
                <label htmlFor="email" className="block text-sm font-medium text-finance-gray">Email</label>
                <Input 
                  id="email" 
                  name="email" 
                  type="email"
                  required 
                  placeholder="adresa@exemplu.ro" 
                  className="w-full"
                />
              </div>
              
              <div className="space-y-3">
                <label htmlFor="message" className="block text-sm font-medium text-finance-gray">Mesaj</label>
                <Textarea 
                  id="message" 
                  name="message" 
                  required 
                  placeholder="Scrie mesajul tău aici..." 
                  className="w-full min-h-[120px]"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-finance-blue hover:bg-finance-blue/90"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Se trimite...' : 'Trimite mesajul'}
              </Button>
            </form>
          </div>
          
          <div className="space-y-8">
            {contactItems.map((item, index) => (
              <a 
                key={index}
                href={item.href}
                target={item.title === 'LinkedIn' ? '_blank' : undefined}
                rel={item.title === 'LinkedIn' ? 'noopener noreferrer' : undefined}
                className="flex items-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 hover:bg-finance-blue/5"
              >
                <div className="mr-6 p-3 bg-finance-lightGray rounded-full">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-lg font-medium text-finance-blue">{item.title}</h4>
                  <p className="text-finance-gray">{item.value}</p>
                </div>
              </a>
            ))}
            
            <div className="p-6 bg-finance-blue/10 rounded-xl">
              <h4 className="text-lg font-medium text-finance-blue mb-2">Program consultații</h4>
              <p className="text-finance-gray mb-1">Luni - Vineri: 08:00 - 20:00</p>
              <p className="text-finance-gray">Weekend: Cu programare</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
