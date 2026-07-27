import { MapPin } from 'lucide-react';

export default function Structure() {
  const cities = [
    "Chapecó/SC", "São Francisco do Sul/SC", "Itajaí/SC", "Itapoá/SC", "Garuva/SC", "Mafra/SC", "Canoinhas/SC", "Papanduva/SC",
    "Curitiba/PR", "Ponta Grossa/PR", "Rio Negro/PR", "Roncador/PR", "Imbituva/PR", "Lapa/PR", "Piracicaba/SP", "Miracatu/SP"
  ];

  return (
    <section id="estrutura" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F2937] mb-6">Nossa Estrutura e Alcance</h2>
          <p className="text-lg text-[#6B7280] leading-relaxed">
            A MSH é uma empresa consolidada no setor da saúde, com atuação focada na continuidade assistencial, segurança operacional e conformidade regulatória. Nossa missão é garantir que o atendimento médico aconteça com qualidade, previsibilidade e responsabilidade. Atuamos diretamente na gestão de equipes médicas, escalas, documentação e suporte operacional, permitindo que hospitais e gestores públicos tenham tranquilidade na execução de seus contratos.
          </p>
        </div>

        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center text-[#1F2937] mb-8">Tipos de Instituições que Atendemos</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-2xl border border-gray-200">
              <div className="w-16 h-16 bg-[#0077B6]/10 text-[#0077B6] rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-hospital"><path d="M12 6v4"/><path d="M14 14h-4"/><path d="M14 18h-4"/><path d="M14 8h-4"/><path d="M18 12h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2"/><path d="M18 22V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v18"/></svg>
              </div>
              <h4 className="font-bold text-[#1F2937]">Hospitais públicos, privados e filantrópicos</h4>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-2xl border border-gray-200">
              <div className="w-16 h-16 bg-[#E91E63]/10 text-[#E91E63] rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-landmark"><line x1="3" x2="21" y1="22" y2="22"/><line x1="6" x2="6" y1="18" y2="11"/><line x1="10" x2="10" y1="18" y2="11"/><line x1="14" x2="14" y1="18" y2="11"/><line x1="18" x2="18" y1="18" y2="11"/><polygon points="12 2 20 7 4 7"/></svg>
              </div>
              <h4 className="font-bold text-[#1F2937]">Prefeituras e Secretarias Municipais de Saúde</h4>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-2xl border border-gray-200">
              <div className="w-16 h-16 bg-[#0077B6]/10 text-[#0077B6] rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-square-activity"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M17 12h-2l-2 5-2-10-2 5H7"/></svg>
              </div>
              <h4 className="font-bold text-[#1F2937]">UPAs e unidades de pronto atendimento</h4>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-2xl border border-gray-200">
              <div className="w-16 h-16 bg-[#E91E63]/10 text-[#E91E63] rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-stethoscope"><path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"/><path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4"/><circle cx="20" cy="10" r="2"/></svg>
              </div>
              <h4 className="font-bold text-[#1F2937]">Clínicas e ambulatórios especializados</h4>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-50 rounded-2xl p-8 border-l-4 border-[#0077B6]">
            <h3 className="font-bold text-xl text-[#1F2937] mb-2">Rede de Parceiros</h3>
            <p className="text-[#6B7280]">Mais de 2 mil médicos ativos</p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-8 border-l-4 border-[#E91E63]">
            <h3 className="font-bold text-xl text-[#1F2937] mb-2">Volume de Atendimentos</h3>
            <p className="text-[#6B7280]">Mais de 7 mil plantões por mês</p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-8 border-l-4 border-[#0077B6]">
            <h3 className="font-bold text-xl text-[#1F2937] mb-2">Presença Nacional</h3>
            <p className="text-[#6B7280]">Mais de 4 estados brasileiros</p>
          </div>
        </div>
        
        <div className="text-center mb-10">
          <h3 className="text-2xl font-bold text-[#1F2937] mb-2">Cidades de Atuação</h3>
          <p className="text-[#6B7280]">Profissionais de Alto Padrão: treinados em ACLS, PALS e ATLS</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {cities.map((city, index) => (
            <div key={index} className="flex items-center gap-2 bg-gray-50 px-5 py-3 rounded-full text-[#1F2937] font-medium border border-gray-200">
              <MapPin size={18} className="text-[#E91E63]" />
              {city}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
