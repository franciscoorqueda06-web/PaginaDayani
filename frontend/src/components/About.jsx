import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="nosotros" className="section" style={{ background: 'var(--color-surface)', position: 'relative', overflow: 'hidden', borderTop: '1px solid var(--color-border)' }}>
      
      {/* Decorative Glow */}
      <div style={{
        position: 'absolute', top: '10%', left: '-10%',
        width: '400px', height: '400px', background: 'var(--color-accent-glow)', filter: 'blur(120px)', borderRadius: '50%', zIndex: 0
      }}></div>

      <div className="container relative" style={{ zIndex: 1 }}>
        <div className="grid gap-12 items-center" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
          >
            <div>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                background: 'rgba(200, 141, 148, 0.1)', border: '1px solid rgba(200, 141, 148, 0.2)',
                borderRadius: '50px', padding: '0.4rem 1.2rem', marginBottom: '1rem'
              }}>
                <span style={{ color: 'var(--color-accent)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase' }}>
                  Detrás de la estrategia
                </span>
              </div>
              
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', lineHeight: 1.2 }}>
                Conoce a <span className="text-gold">Dayani Cardoso</span>
              </h2>
            </div>
            
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
              Sé de primera mano lo frustrante que es que un banco te cierre las puertas o te ahogue con tasas abusivas simplemente por un error del pasado, un descuido o un historial joven. El sistema no perdona, pero <strong>sí se puede dominar.</strong>
            </p>

            <motion.div 
              style={{
                borderLeft: '4px solid var(--color-accent)',
                paddingLeft: '1.5rem',
                background: 'linear-gradient(90deg, rgba(200, 141, 148, 0.08) 0%, transparent 100%)',
                padding: '1.5rem',
                borderRadius: '0 var(--radius-md) var(--radius-md) 0'
              }}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <p style={{ fontSize: '1.15rem', fontStyle: 'italic', color: 'var(--text-primary)', margin: 0, lineHeight: 1.6 }}>
                "Mi objetivo en los últimos años ha sido uno solo: descubrir las fallas del sistema de los burós de crédito para usarlas a tu favor y devolverte tu poder adquisitivo."
              </p>
            </motion.div>

            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
              No me limito a enviar cartas genéricas. Mi trabajo es crear un plan de ataque legal a tu medida, borrar lo negativo y educarte. Quiero verte manejar el auto que deseas, dormir tranquilo sin el estrés de las deudas y ver a tu familia entrar a la casa de sus sueños.
            </p>

            <motion.div 
              style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginTop: '1rem' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <div style={{ flex: 1 }}>
                <a href="#agendar" className="btn btn-primary" style={{ padding: '0.8rem 2rem', fontSize: '1rem' }}>Habla conmigo hoy</a>
              </div>
              <div style={{ flex: 1 }}>
                <span style={{ 
                  fontFamily: "'Brush Script MT', 'Lucida Handwriting', cursive", 
                  fontSize: '2.5rem', 
                  color: 'var(--color-accent)',
                  opacity: 0.8,
                  transform: 'rotate(-5deg)',
                  display: 'inline-block'
                }}>Dayani</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Image Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ position: 'relative' }}
          >
            <div className="glass-panel" style={{ 
              padding: '1rem', 
              borderRadius: 'var(--radius-lg)', 
              boxShadow: '0 25px 50px rgba(0,0,0,0.5)',
              position: 'relative',
              zIndex: 2,
              aspectRatio: '4/5',
              overflow: 'hidden'
            }}>
              <img 
                src="/Fotodayani.jpeg" 
                alt="Dayani Credit Expert" 
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'var(--radius-md)' }}
              />
            </div>
            
            {/* Background geometric shape for aesthetics */}
            <div style={{
              position: 'absolute',
              top: '5%',
              right: '-5%',
              width: '100%',
              height: '100%',
              border: '2px solid var(--color-accent)',
              borderRadius: 'var(--radius-lg)',
              zIndex: 1,
              opacity: 0.5
            }}></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
