import { Hospital, MapPin, Building, ShieldPlus } from 'lucide-react';

export default function Clients() {
  const hospitals = [
    { name: "Hospital Criança", location: "Chapecó/SC" },
    { name: "Hospital e Maternidade Municipal Nossa Senhora da Graça", location: "São Francisco do Sul/SC" },
    { name: "Hospital Municipal Imbituva", location: "Imbituva/PR" },
    { name: "Associação Hospitalar HSS", location: "São Sebastião/SC" },
  ];

  const upas = [
    { name: "Unidade de Pronto Atendimento Doutor Darcy Costa", location: "Lapa/PR", highlight: true },
    { name: "UPA Santa Paula", location: "Ponta Grossa/PR" },
    { name: "UPA Uvaranas", location: "Ponta Grossa/PR" },
    { name: "UPA 24h Maracanã", location: "Canoinhas/SC" },
  ];

  const governments = [
    { name: "Prefeitura Municipal de Miracatu", location: "Miracatu/SP" },
    { name: "CIS Amcespar (Consórcio Intermunicipal de Saúde)", location: "Paraná" },
    { name: "Prefeitura Municipal de Papanduva", location: "Papanduva/SC" },
  ];

  const otherUnits = [
    "Itajaí/SC",
    "Curitiba/PR",
    "Piracicaba/SP (Unidade Vila Sônia e Unidade Vila Cristina)",
    "Rio Negro/PR",
    "Roncador/PR",
    "Itapoá/SC",
    "Garuva/SC",
    "Mafra/SC"
  ];

  return (
    <section id="clientes" className="py-24 bg-[#F3F4F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F2937] mb-4">Quem Confia na MSH</h2>
          <p className="text-lg text-[#6B7280]">Instituições que atendemos com excelência</p>
        </div>
        
        <div className="space-y-16">
          {/* Hospitais */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Hospital className="text-[#0077B6]" size={28} />
              <h3 className="text-2xl font-bold text-[#1F2937]">Hospitais</h3>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {hospitals.map((client, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-center min-h-[120px]">
                  <h4 className="font-bold text-[#1F2937] mb-2">{client.name}</h4>
                  <div className="flex items-center text-sm text-[#6B7280]">
                    <MapPin size={14} className="mr-1" />
                    {client.location}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* UPAs e Pronto Atendimentos */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <ShieldPlus className="text-[#0077B6]" size={28} />
              <h3 className="text-2xl font-bold text-[#1F2937]">UPAs e Pronto Atendimentos</h3>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {upas.map((client, index) => (
                <div key={index} className={`p-6 rounded-xl shadow-sm flex flex-col justify-center min-h-[120px] relative overflow-hidden ${client.highlight ? 'bg-pink-50 border-2 border-[#E91E63]' : 'bg-white border border-gray-100'}`}>
                  {client.highlight && (
                    <div className="absolute top-0 right-0 bg-[#E91E63] text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">
                      Nova Unidade
                    </div>
                  )}
                  {client.highlight && <ShieldPlus size={24} className="text-[#E91E63] mb-3" />}
                  <h4 className={`font-bold mb-2 ${client.highlight ? 'text-[#E91E63]' : 'text-[#1F2937]'}`}>{client.name}</h4>
                  <div className="flex items-center text-sm text-[#6B7280]">
                    <MapPin size={14} className="mr-1" />
                    {client.location}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Prefeituras e Consórcios */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Building className="text-[#0077B6]" size={28} />
              <h3 className="text-2xl font-bold text-[#1F2937]">Prefeituras e Consórcios</h3>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {governments.map((client, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-center min-h-[120px]">
                  <h4 className="font-bold text-[#1F2937] mb-2">{client.name}</h4>
                  <div className="flex items-center text-sm text-[#6B7280]">
                    <MapPin size={14} className="mr-1" />
                    {client.location}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Demais Unidades */}
          <div>
            <h3 className="text-2xl font-bold text-[#1F2937] mb-6">Demais Unidades</h3>
            <div className="flex flex-wrap gap-3">
              {otherUnits.map((unit, index) => (
                <div key={index} className="bg-white px-4 py-2 rounded-lg border border-gray-200 text-[#6B7280] text-sm">
                  {unit}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
