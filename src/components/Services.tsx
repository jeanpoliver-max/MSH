import { Users, HeartPulse, Ambulance, Hospital, LineChart, Stethoscope } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: "Gestão de Equipes Médicas",
      description: "Dimensionamento completo de equipes, organização de escalas, cobertura 24/7 com gestão de ausências",
      icon: <Users size={28} />,
      color: "text-[#0077B6]"
    },
    {
      title: "Urgência e Emergência",
      description: "Plantões hospitalares em pronto-socorro e unidades de urgência com protocolos ACLS, PALS e ATLS",
      icon: <HeartPulse size={28} />,
      color: "text-[#E91E63]"
    },
    {
      title: "SAMU e APH",
      description: "Equipes para USB com condutores socorristas, técnicos de enfermagem e enfermeiro RT",
      icon: <Ambulance size={28} />,
      color: "text-[#0077B6]"
    },
    {
      title: "Atendimento Ambulatorial",
      description: "Especialidades médicas diversas para clínicas e municípios, visando atendimento humanizado.",
      icon: <Hospital size={28} />,
      color: "text-[#E91E63]"
    },
    {
      title: "Consultoria em Gestão",
      description: "Diagnóstico, planejamento e otimização de processos assistenciais.",
      icon: <LineChart size={28} />,
      color: "text-[#0077B6]"
    },
    {
      title: "Corpo Multidisciplinar",
      description: "Enfermagem, nutrição, psicologia, fisioterapia, fonoaudiologia e odontologia.",
      icon: <Stethoscope size={28} />,
      color: "text-[#E91E63]"
    }
  ];

  return (
    <section id="servicos" className="py-24 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-12 lg:items-start">
        <div className="lg:w-1/4 flex-shrink-0">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F2937] leading-tight">Nossos<br className="hidden lg:block"/> Serviços</h2>
          <div className="w-12 h-1 bg-[#E91E63] mt-4 mb-6"></div>
          <p className="text-[#6B7280]">Soluções completas em gestão de saúde para instituições públicas e privadas.</p>
        </div>
        <div className="flex-1 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start space-x-4 hover:shadow-md transition-shadow">
              <div className={`${service.color} flex-shrink-0 mt-1`}>
                {service.icon}
              </div>
              <div>
                <h3 className="font-bold text-[#1F2937] text-lg mb-2">{service.title}</h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
