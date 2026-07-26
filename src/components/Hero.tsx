import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-24 bg-white overflow-hidden">
      <div className="absolute right-0 top-0 w-1/2 md:w-1/3 h-full bg-gradient-to-l from-[#0077B6]/5 to-transparent flex items-center justify-center pointer-events-none">
         <div className="w-64 h-64 border-8 border-white rounded-full shadow-2xl opacity-20 hidden md:block"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center md:text-left">
        <div className="max-w-3xl">
          <span className="text-[#0077B6] font-bold tracking-widest uppercase text-xs mb-4 inline-block md:block underline decoration-[#E91E63] decoration-2 underline-offset-4">
            Liderança em Gestão de Saúde
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1F2937] leading-[1.1] mb-6">
            Gestão Médica de Alta <span className="text-[#0077B6]">Performance</span> para Instituições de Saúde
          </h1>
          <p className="text-lg md:text-xl text-[#6B7280] leading-relaxed mb-10 max-w-2xl mx-auto md:mx-0">
            Mais de 2.000 médicos ativos, 7.000+ plantões por mês e presença em 4 estados. Estruturamos equipes qualificadas com excelência assistencial e continuidade garantida.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="#contato" className="px-8 py-4 bg-[#E91E63] hover:bg-[#C2185B] text-white rounded-xl font-bold shadow-lg flex items-center justify-center transition-colors">
              Solicitar Proposta
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            <a href="#contato" className="px-8 py-4 bg-transparent border-2 border-[#0077B6] hover:bg-gray-50 text-[#0077B6] rounded-xl font-bold transition-colors text-center flex items-center justify-center">
              Sou Médico — Ver Vagas
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
