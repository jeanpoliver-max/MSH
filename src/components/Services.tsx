import { useState, useEffect } from 'react';
import { Users, HeartPulse, Ambulance, Hospital, LineChart, Stethoscope, ChevronLeft, ChevronRight, Landmark } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);

  const services = [
    {
      title: "Governança Corporativa",
      description: "Implementamos práticas de governança que asseguram a ética, segurança e integridade, preservando a cultura organizacional de nossos parceiros.",
      icon: <Landmark size={40} className="text-[#0B1B3D]" />,
      bgColor: "bg-[#00B4D8]"
    },
    {
      title: "Gestão de Equipes Médicas",
      description: "Dimensionamento completo de equipes, organização de escalas, cobertura 24/7 com gestão de ausências e controle rigoroso.",
      icon: <Users size={40} className="text-[#0B1B3D]" />,
      bgColor: "bg-[#00B4D8]"
    },
    {
      title: "Urgência e Emergência",
      description: "Plantões hospitalares em pronto-socorro e unidades de urgência com protocolos atualizados ACLS, PALS e ATLS.",
      icon: <HeartPulse size={40} className="text-[#0B1B3D]" />,
      bgColor: "bg-[#00B4D8]"
    },
    {
      title: "SAMU e APH",
      description: "Equipes preparadas para USB e USA com condutores socorristas, técnicos de enfermagem, médicos e enfermeiros RT.",
      icon: <Ambulance size={40} className="text-[#0B1B3D]" />,
      bgColor: "bg-[#00B4D8]"
    },
    {
      title: "Atendimento Ambulatorial",
      description: "Especialidades médicas diversas para clínicas e municípios, visando um atendimento humanizado e de excelência.",
      icon: <Hospital size={40} className="text-[#0B1B3D]" />,
      bgColor: "bg-[#00B4D8]"
    },
    {
      title: "Consultoria em Gestão",
      description: "Diagnóstico profundo, planejamento estratégico e otimização inteligente de fluxos e processos assistenciais.",
      icon: <LineChart size={40} className="text-[#0B1B3D]" />,
      bgColor: "bg-[#00B4D8]"
    },
    {
      title: "Corpo Multidisciplinar",
      description: "Disponibilizamos enfermagem, nutrição, psicologia, fisioterapia, fonoaudiologia e odontologia de alta qualificação.",
      icon: <Stethoscope size={40} className="text-[#0B1B3D]" />,
      bgColor: "bg-[#00B4D8]"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [services.length, activeIndex]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1));
  };

  const activeService = services[activeIndex];

  return (
    <section id="servicos" className="py-24 bg-[#0B1B3D] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          
          {/* Left Column */}
          <div className="lg:w-5/12 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
              Eleve o nível de excelência <span className="text-[#00B4D8]">da sua instituição de saúde com as nossas soluções.</span>
            </h2>
          </div>

          {/* Right Column - Carousel */}
          <div className="lg:w-7/12 w-full flex items-center justify-center gap-4 sm:gap-8">
            <button 
              onClick={handlePrev} 
              className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full border border-white/20 text-white/70 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Anterior"
            >
              <ChevronLeft size={24} />
            </button>
            
            <div className="flex-1 min-h-[220px] relative overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6"
                >
                  <div className={`w-24 h-24 sm:w-28 sm:h-28 flex-shrink-0 flex items-center justify-center rounded-full ${activeService.bgColor}`}>
                    {activeService.icon}
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#00B4D8] mb-4">
                      {activeService.title}
                    </h3>
                    <p className="text-white/80 text-lg leading-relaxed">
                      {activeService.description}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <button 
              onClick={handleNext} 
              className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full border border-white/20 text-white/70 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Próximo"
            >
              <ChevronRight size={24} />
            </button>
          </div>

        </div>
        
        {/* Pagination Dots */}
        <div className="flex justify-center items-center mt-16 gap-2">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === activeIndex ? 'bg-[#00B4D8] w-8' : 'bg-white/20 hover:bg-white/40'}`}
              aria-label={`Ir para o slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
