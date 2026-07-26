import { useEffect, useState, useRef } from 'react';
import { useInView } from 'motion/react';

function Counter({ end, suffix = '', duration = 2 }: { end: number, suffix?: string, duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let startTime: number | null = null;
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          setCount(end);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, end, duration]);

  return <span ref={ref}>{count.toLocaleString('pt-BR')}{suffix}</span>;
}

export default function ImpactNumbers() {
  return (
    <section className="bg-[#0077B6] py-12 md:py-16 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-5 md:divide-x divide-white/20 gap-y-8 md:gap-y-0">
          <div className="text-center px-4">
            <div className="text-3xl md:text-4xl font-bold text-white mb-1">+<Counter end={2000} /></div>
            <div className="text-xs uppercase tracking-wider font-medium text-blue-100">Médicos Ativos</div>
          </div>
          <div className="text-center px-4">
            <div className="text-3xl md:text-4xl font-bold text-white mb-1">+<Counter end={7000} /></div>
            <div className="text-xs uppercase tracking-wider font-medium text-blue-100">Plantões Mensais</div>
          </div>
          <div className="text-center px-4">
            <div className="text-3xl md:text-4xl font-bold text-white mb-1">0<Counter end={4} /></div>
            <div className="text-xs uppercase tracking-wider font-medium text-blue-100">Estados Atendidos</div>
          </div>
          <div className="text-center px-4">
            <div className="text-3xl md:text-4xl font-bold text-white mb-1">+<Counter end={10} /></div>
            <div className="text-xs uppercase tracking-wider font-medium text-blue-100">Cidades Atendidas</div>
          </div>
          <div className="text-center px-4 col-span-2 lg:col-span-1">
            <div className="text-xl md:text-2xl font-bold text-white uppercase mt-2 md:mt-1 mb-1">ACLS / ATLS</div>
            <div className="text-xs uppercase tracking-wider font-medium text-blue-100">Protocolos Int.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
