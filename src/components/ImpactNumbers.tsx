import AnimatedCounter from './AnimatedCounter';

export default function ImpactNumbers() {
  return (
    <section className="bg-[#0077B6] py-12 md:py-16 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-5 md:divide-x divide-white/20 gap-y-8 md:gap-y-0">
          <div className="text-center px-4">
            <div className="text-3xl md:text-4xl font-bold text-white mb-1">
              <AnimatedCounter end={2000} prefix="+" separator="." />
            </div>
            <div className="text-xs uppercase tracking-wider font-medium text-blue-100">Médicos Ativos</div>
          </div>
          <div className="text-center px-4">
            <div className="text-3xl md:text-4xl font-bold text-white mb-1">
              <AnimatedCounter end={7000} prefix="+" separator="." />
            </div>
            <div className="text-xs uppercase tracking-wider font-medium text-blue-100">Plantões Mensais</div>
          </div>
          <div className="text-center px-4">
            <div className="text-3xl md:text-4xl font-bold text-white mb-1">
              <AnimatedCounter end={4} prefix="+" separator="" />
            </div>
            <div className="text-xs uppercase tracking-wider font-medium text-blue-100">Estados Atendidos</div>
          </div>
          <div className="text-center px-4">
            <div className="text-3xl md:text-4xl font-bold text-white mb-1">
              <AnimatedCounter end={16} prefix="+" separator="" />
            </div>
            <div className="text-xs uppercase tracking-wider font-medium text-blue-100">Cidades Atendidas</div>
          </div>
          <div className="text-center px-4 col-span-2 lg:col-span-1">
            <div className="text-xl md:text-2xl font-bold text-white uppercase mt-2 md:mt-1 mb-1">ACLS / PALS / ATLS</div>
            <div className="text-xs uppercase tracking-wider font-medium text-blue-100">Protocolos Int.</div>
          </div>
        </div>
      </div>
    </section>
  );
}

