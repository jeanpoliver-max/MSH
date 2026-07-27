import { Building2, UserRound, ArrowRight } from 'lucide-react';

export default function TwoPaths() {
  return (
    <section className="py-24 bg-[#F3F4F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F2937]">Soluções para Cada Público</h2>
          <div className="w-12 h-1 bg-[#E91E63] mx-auto mt-4"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="bg-white border-t-4 border-[#0077B6] rounded-2xl p-10 text-[#1F2937] shadow-lg flex flex-col items-start hover:shadow-xl transition-shadow relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#0077B6]/5 rounded-bl-[100px] -z-0 pointer-events-none"></div>
            <div className="bg-[#0077B6]/10 p-4 rounded-xl mb-6 text-[#0077B6] relative z-10">
              <Building2 size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-[#1F2937] relative z-10">Para Instituições de Saúde</h3>
            <p className="text-[#6B7280] mb-8 leading-relaxed flex-grow relative z-10">
              Gestão de equipes médicas, SAMU, atendimento hospitalar, ambulatório e consultoria. Atendemos hospitais, municípios e clínicas em 4 estados.
            </p>
            <a href="#contato" className="inline-flex items-center px-6 py-3 bg-[#E91E63] hover:bg-[#C2185B] text-white rounded-lg font-semibold transition-colors relative z-10">
              Solicitar Proposta
              <ArrowRight size={18} className="ml-2" />
            </a>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl p-10 text-[#1F2937] shadow-sm border border-gray-100 flex flex-col items-start hover:shadow-md transition-shadow relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#0077B6]/5 rounded-bl-[100px] -z-0 pointer-events-none"></div>
            <div className="bg-[#0077B6]/10 p-4 rounded-xl mb-6 text-[#0077B6] relative z-10">
              <UserRound size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-[#1F2937] relative z-10">Para Médicos</h3>
            <p className="text-[#6B7280] mb-8 leading-relaxed flex-grow relative z-10">
              Oportunidades de plantão em hospitais e clínicas em 4 estados. Pagamento em dia, suporte técnico e desenvolvimento profissional.
            </p>
            <a href="https://wa.me/5585987884574?text=Olá! Vim do site da MSH e sou médico interessado em vagas" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 bg-[#E91E63] hover:bg-[#C2185B] text-white rounded-lg font-semibold transition-colors relative z-10">
              Quero me Cadastrar
              <ArrowRight size={18} className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
