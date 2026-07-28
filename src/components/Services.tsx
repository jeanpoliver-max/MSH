import { Users, HeartPulse, Ambulance, Hospital, LineChart, Stethoscope, Landmark } from 'lucide-react';

export default function Services() {
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

  return (
    <section id="servicos" className="py-24 bg-[#0B1B3D] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
            Nossas <span className="text-[#00B4D8]">Soluções</span>
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Eleve o nível de excelência da sua instituição de saúde com as nossas soluções.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors flex flex-col group">
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${service.bgColor} group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-white/70 leading-relaxed text-sm">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-16">
          <a href="#contato" className="px-8 py-4 bg-[#E91E63] hover:bg-[#C2185B] text-white rounded-xl font-bold shadow-lg transition-colors flex items-center justify-center">
            Solicitar Proposta
          </a>
        </div>
      </div>
    </section>
  );
}
