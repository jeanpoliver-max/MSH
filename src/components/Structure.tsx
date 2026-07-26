import { MapPin } from 'lucide-react';

export default function Structure() {
  const cities = [
    "Chapecó/SC", "São Francisco do Sul/SC", "Itajaí/SC", "Itapoá/SC", "Garuva/SC",
    "Curitiba/PR", "Ponta Grossa/PR", "Rio Negro/PR", "Roncador/PR", "Piracicaba/SP"
  ];

  return (
    <section id="estrutura" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F2937] mb-6">Nossa Estrutura e Alcance</h2>
          <p className="text-lg text-[#6B7280] leading-relaxed">
            A MSH - Clínica, Gestão e Serviços Médicos LTDA é uma empresa consolidada e altamente respeitada no setor da saúde, especializada na prestação de serviços médicos abrangentes para unidades de saúde em várias cidades brasileiras.
          </p>
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
