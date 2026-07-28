import { ArrowRight } from 'lucide-react';


export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://i.imgur.com/dLfcnt6.jpeg" 
          alt="Gestão Médica" 
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center md:text-left">
        <div className="max-w-3xl">
          <p className="text-[#E91E63] font-bold tracking-[0.15em] uppercase text-sm md:text-base mb-4 inline-block md:block">
            SAÚDE: NOSSA MISSÃO, CUIDAR: NOSSO COMPROMISSO
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1F2937] leading-[1.1] mb-6">
            Gestão Médica de Alta <span className="text-[#0077B6]">Performance</span> para Instituições de Saúde
          </h1>
          <p className="text-lg md:text-xl text-[#4B5563] leading-relaxed mb-10 max-w-2xl mx-auto md:mx-0 font-medium">
            Mais de 2.000 médicos ativos, 7.000+ plantões por mês e presença em 4 estados. Estruturamos equipes qualificadas com excelência assistencial e continuidade garantida.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="#contato" className="px-8 py-4 bg-[#E91E63] hover:bg-[#C2185B] text-white rounded-xl font-bold shadow-lg flex items-center justify-center transition-colors">
              Solicitar Proposta
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            <a href="#sou-medico" className="px-8 py-4 bg-white/80 backdrop-blur-sm border-2 border-[#0077B6] hover:bg-white text-[#0077B6] rounded-xl font-bold transition-colors text-center flex items-center justify-center shadow-sm">
              Sou Médico — Ver Vagas
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
