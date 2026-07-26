export default function Clients() {
  const clients = [
    { name: "Hospital Criança", location: "Chapecó/SC" },
    { name: "Hospital e Maternidade Municipal N. Sra. da Graça", location: "São Francisco do Sul/SC" },
    { name: "Unidades de Saúde", location: "Itajaí/SC" },
    { name: "Unidades de Saúde", location: "Curitiba/PR" },
    { name: "Unidades de Saúde", location: "Ponta Grossa/PR" },
    { name: "Unidades de Saúde", location: "Piracicaba/SP" },
    { name: "Unidades de Saúde", location: "Rio Negro/PR" },
    { name: "Unidades de Saúde", location: "Roncador/PR" },
    { name: "Unidades de Saúde", location: "Itapoá/SC" },
    { name: "Unidades de Saúde", location: "Garuva/SC" },
  ];

  return (
    <section id="clientes" className="py-24 bg-[#F3F4F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F2937] mb-4">Quem Confia na MSH</h2>
          <p className="text-lg text-[#6B7280]">Instituições que atendemos com excelência</p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {clients.map((client, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-center min-h-[120px]">
              <h3 className="font-bold text-[#1F2937] mb-1">{client.name}</h3>
              <p className="text-sm text-[#6B7280]">{client.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
