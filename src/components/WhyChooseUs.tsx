import { CheckCircle2 } from 'lucide-react';

export default function WhyChooseUs() {
  const points = [
    "+2.000 médicos qualificados e ativos em rede nacional",
    "Protocolos internacionais ACLS, PALS e ATLS",
    "Cobertura ininterrupta 24/7 com gestão proativa de ausências",
    "Direção médica responsável com CRM em 4 estados (MG, SC, PR, SP)"
  ];

  return (
    <section className="py-20 bg-[#0077B6] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Por Que Escolher a MSH?</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {points.map((point, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10">
              <CheckCircle2 size={40} className="text-[#E91E63] mb-6" />
              <p className="text-lg font-medium leading-relaxed">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
