
import { useState, useEffect } from 'react';

type StatItemProps = {
  value: number;
  label: string;
  suffix?: string;
  duration?: number;
};

const StatsBar = () => {
  return (
    <section id="stats" className="py-12 bg-leaf-50 border-y border-leaf-100">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
          <StatItem value={87} label="Cows Rescued" suffix="+" duration={2000} />
          <StatItem value={3400} label="Families Served" suffix="+" duration={2500} />
          <StatItem value={2500} label="Litres Produced" suffix="/day" duration={2200} />
        </div>
      </div>
    </section>
  );
};

const StatItem = ({ value, label, suffix = "", duration = 2000 }: StatItemProps) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let start = 0;
    const end = value;
    const totalMiliseconds = duration;
    const incrementTime = totalMiliseconds / end;
    
    let timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);
    
    return () => clearInterval(timer);
  }, [value, duration]);

  return (
    <div className="text-center p-6">
      <div className="flex items-center justify-center">
        <span className="text-5xl md:text-6xl font-playfair font-bold text-earth-800">
          {count}
        </span>
        <span className="text-xl md:text-2xl text-terracotta-500 font-medium ml-1">
          {suffix}
        </span>
      </div>
      <p className="text-earth-600 text-lg mt-2">{label}</p>
    </div>
  );
};

export default StatsBar;
