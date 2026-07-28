import { CalendarDays, FileCheck, Zap, ShieldCheck, MessageCircle } from 'lucide-react';

export default function Differentials() {
  const differentials = [
    {
      icon: <CalendarDays size={32} />,
      title: "Gestão Eficiente de Escalas",
      description: "Organização otimizada de plantões com cobertura garantida e previsibilidade operacional."
    },
    {
      icon: <FileCheck size={32} />,
      title: "Conformidade Documental Rigorosa",
      description: "Todos os profissionais com documentação verificada e em conformidade com exigências legais."
    },
    {
      icon: <Zap size={32} />,
      title: "Resposta Rápida a Demandas Emergenciais",
      description: "Capacidade de mobilização imediata para coberturas urgentes e não previstas."
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "Redução de Riscos Operacionais",
      description: "Protocolos que minimizam riscos assistenciais e operacionais para instituições parceiras."
    },
    {
      icon: <MessageCircle size={32} />,
      title: "Comunicação Direta",
      description: "Canal direto com gestores e corpo clínico para alinhamento contínuo e transparente."
    }
  ];

  return (
    <section className="py-24 bg-[#F3F4F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F2937] mb-4">Diferenciais da MSH</h2>
          <p className="text-lg text-[#6B7280]">Compromisso com a qualidade em cada atendimento</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-6">
          {differentials.map((diff, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-[#E91E63] transition-all duration-300 flex flex-col items-center text-center group"
            >
              <div className="text-[#0077B6] mb-6 group-hover:text-[#E91E63] group-hover:scale-110 transition-transform duration-300">
                {diff.icon}
              </div>
              <h3 className="text-xl font-bold text-[#1F2937] mb-4">{diff.title}</h3>
              <p className="text-[#6B7280] leading-relaxed">{diff.description}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-16">
          <a href="#contato" className="px-8 py-4 bg-[#0077B6] hover:bg-[#005f92] text-white rounded-xl font-bold shadow-lg transition-colors flex items-center justify-center">
            Falar com Especialista
          </a>
        </div>
      </div>
    </section>
  );
}
