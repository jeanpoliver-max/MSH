export default function About() {
  return (
    <section id="quem-somos" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2937] mb-6">Nossa Missão</h2>
            <div className="w-20 h-1 bg-[#E91E63] mb-8"></div>
            <p className="text-lg text-[#6B7280] leading-relaxed mb-10 italic border-l-4 border-gray-200 pl-6 py-2">
              "Nosso objetivo é criar um ambiente de trabalho colaborativo e de crescimento, onde médicos se sintam valorizados e possam desenvolver suas carreiras plenamente. Nosso compromisso com a ética e a melhoria contínua em nossos processos garante que todos os nossos profissionais e parceiros trabalhem com tranquilidade e transparência."
            </p>
            
            <div className="flex items-center gap-6 mt-12 bg-gray-50 p-6 rounded-2xl">
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
                 src="https://i.imgur.com/Atfgrh0.jpg" 
                 alt="Equipe médica trabalhando"
                 className="w-full h-auto block"
               />
            </div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-dots-pattern opacity-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
