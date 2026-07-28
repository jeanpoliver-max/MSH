import { useState, useEffect, useRef } from 'react';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  separator?: string;
  decimals?: number;
}

export default function AnimatedCounter({ 
  end, 
  duration = 2000, 
  prefix = '', 
  suffix = '', 
  separator = '.',
  decimals = 0
}: AnimatedCounterProps) {
  const [count, setCount] = useState(end); // Fallback to end value immediately for SEO/no-js
  const countRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    // Reset to 0 when JS loads and we're ready to animate, 
    // but only if we haven't animated yet.
    if (!hasAnimated) {
      setCount(0);
    }
  }, [hasAnimated]);

  useEffect(() => {
    const element = countRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          let startTimestamp: number | null = null;
          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            
            // easeOutQuart
            const easeOutProgress = 1 - Math.pow(1 - progress, 4);
            
            setCount(easeOutProgress * end);
            
            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              setCount(end);
            }
          };
          
          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(element);
    
    return () => {
      observer.disconnect();
    };
  }, [end, duration, hasAnimated]);

  // Format the number
  const formattedCount = () => {
    let result = count.toFixed(decimals);
    
    if (separator) {
      const parts = result.split('.');
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, separator);
      result = parts.join(','); // Portuguese decimal separator is comma if there are decimals
    }
    
    return result;
  };

  return (
    <div ref={countRef} className="inline-block">
      {prefix}{formattedCount()}{suffix}
    </div>
  );
}
