import React from 'react';
import { motion } from 'framer-motion';

const AuthorityBanner = () => {
  const logos = [
    { name: "Equifax", text: "EQUIFAX" },
    { name: "Experian", text: "Experian" },
    { name: "TransUnion", text: "TransUnion" },
  ];

  return (
    <section style={{ 
      padding: '2rem 0', 
      background: 'rgba(11, 21, 40, 0.4)', 
      borderTop: '1px solid rgba(255,255,255,0.02)',
      borderBottom: '1px solid rgba(255,255,255,0.02)' 
    }}>
      <div className="container">
        <p style={{ 
          textAlign: 'center', 
          fontSize: '0.85rem', 
          textTransform: 'uppercase', 
          letterSpacing: '2px', 
          color: 'var(--text-muted)',
          marginBottom: '1.5rem',
          fontWeight: 600
        }}>
          Estrategias compatibles y efectivas con
        </p>
        
        <motion.div 
          style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            gap: 'clamp(2rem, 8vw, 6rem)',
            flexWrap: 'wrap'
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {logos.map((logo, index) => (
            <div key={index} style={{ 
              color: 'var(--text-secondary)', 
              opacity: 0.6,
              filter: 'grayscale(100%)',
              transition: 'opacity 0.3s ease',
              cursor: 'default'
            }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
            onMouseLeave={(e) => e.currentTarget.style.opacity = '0.6'}
            >
              <h3 style={{ 
                fontFamily: 'sans-serif', 
                fontSize: '1.8rem', 
                fontWeight: 800, 
                letterSpacing: logo.name === "FICO" ? '4px' : '-1px',
                margin: 0
              }}>
                {logo.text}
              </h3>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AuthorityBanner;
