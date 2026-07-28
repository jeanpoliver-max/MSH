import aboutTeam from "../assets/about-team.jpg";


export default function About() {
  return (
    <section id="quem-somos" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2937] mb-6">Sobre Nós</h2>
            <div className="w-20 h-1 bg-[#E91E63] mb-8"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
              <div className="bg-gray-50 p-5 rounded-2xl border-t-4 border-[#0077B6] h-full">
                <h3 className="font-bold text-lg text-[#1F2937] mb-2">Missão</h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">Garantir soluções médicas seguras, eficientes e responsáveis.</p>
              </div>
              <div className="bg-gray-50 p-5 rounded-2xl border-t-4 border-[#E91E63] h-full">
                <h3 className="font-bold text-lg text-[#1F2937] mb-2">Visão</h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">Ser referência nacional em gestão e prestação de serviços médicos.</p>
              </div>
              <div className="bg-gray-50 p-5 rounded-2xl border-t-4 border-[#0077B6] h-full">
                <h3 className="font-bold text-lg text-[#1F2937] mb-2">Valores</h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">Ética, transparência, responsabilidade assistencial, compromisso com resultados e melhoria contínua.</p>
              </div>
            </div>
            
            <div className="flex items-center gap-6 mt-8 bg-gray-50 p-6 rounded-2xl">
              <div className="w-16 h-16 rounded-full bg-[#0077B6] text-white flex items-center justify-center font-bold text-xl flex-shrink-0 shadow-inner">
                WM
              </div>
              <div>
                <h4 className="font-bold text-[#1F2937] text-lg">Dr. Wilson Malaquias Ramos</h4>
                <p className="text-[#6B7280] mb-2">CEO da MSH</p>
                <p className="text-xs font-semibold text-gray-500 bg-white px-3 py-1 rounded-full border border-gray-200 inline-block">
                  CRM/MG 44.918 | CRM/SC 24.611 | CRM/PR 29.095 | CRM/SP 198.266
                </p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="rounded-3xl overflow-hidden bg-gray-100 relative">
               <div className="absolute inset-0 bg-gradient-to-tr from-[#0077B6]/20 to-transparent z-10"></div>
               <img 
                 src={aboutTeam} 
                 alt="Equipe médica da MSH - profissionais qualificados em ambiente hospitalar"
                 loading="lazy"
                 className="w-full h-auto block"
                 style={{ width: "100%", borderRadius: "12px", boxShadow: "0 4px 6px rgba(0,0,0,0.07)" }}
               />
            </div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-dots-pattern opacity-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
