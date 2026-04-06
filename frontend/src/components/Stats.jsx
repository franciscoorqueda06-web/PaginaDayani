import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const AnimatedNumber = ({ end, suffix }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          clearInterval(timer);
          setCount(end);
        } else {
          setCount(Math.ceil(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [inView, end]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
};

const Stats = () => {
  const statsData = [
    { 
      number: 199, 
      suffix: "+", 
      label: "Familias Ayudadas",
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ margin: '0 auto 1rem auto' }}>
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      )
    },
    { 
      number: 719, 
      suffix: "", 
      label: "Score Promedio Alcanzado",
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ margin: '0 auto 1rem auto' }}>
          <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
          <polyline points="16 7 22 7 22 13"></polyline>
        </svg>
      )
    },
    { 
      number: 94, 
      suffix: "%", 
      label: "Tasa de Éxito en Aprobación",
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ margin: '0 auto 1rem auto' }}>
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
      )
    }
  ];

  return (
    <section className="section" style={{ background: 'var(--color-surface)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
      <div className="container">
        <div className="grid grid-cols-3 gap-8 text-center" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
          {statsData.map((stat, index) => (
             <div key={index} className="stat-card" style={{ padding: '2rem' }}>
              {stat.icon}
              <h2 className="text-gold" style={{ fontSize: '3.5rem', marginBottom: '0.5rem' }}>
                <AnimatedNumber end={stat.number} suffix={stat.suffix} />
              </h2>
              <p style={{ fontWeight: 600, color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '1rem' }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
