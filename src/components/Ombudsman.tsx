import { MessageSquareWarning } from 'lucide-react';

export default function Ombudsman() {
  return (
    <section id="ouvidoria" className="py-24 bg-[#F3F4F6]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-white p-12 rounded-3xl shadow-lg border-t-8 border-[#0077B6]">
        <div className="w-20 h-20 bg-blue-50 text-[#0077B6] rounded-2xl flex items-center justify-center mx-auto mb-8">
          <MessageSquareWarning size={40} />
        </div>
        <h2 className="text-3xl font-bold text-[#1F2937] mb-6">Ouvidoria</h2>
        <p className="text-lg text-[#6B7280] leading-relaxed mb-10 max-w-3xl mx-auto">
          A Ouvidoria da MSH é um canal seguro e confidencial para acolher manifestações, sugestões, elogios, dúvidas e reclamações relacionadas aos nossos serviços. Este espaço reforça nosso compromisso com a transparência, a ética, a melhoria contínua e a qualidade na gestão em saúde.
        </p>
        <a 
          href="https://wa.me/554198581831?text=Olá! Gostaria de falar com a Ouvidoria da MSH"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-8 py-4 bg-[#E91E63] hover:bg-[#C2185B] text-white rounded-xl font-bold transition-colors shadow-md"
        >
          Falar com a Ouvidoria
        </a>
      </div>
    </section>
  );
}
