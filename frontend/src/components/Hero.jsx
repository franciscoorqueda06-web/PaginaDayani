import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="section" style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      paddingTop: 'calc(var(--navbar-height) + 2rem)',
      background: 'radial-gradient(circle at 15% 50%, rgba(200, 141, 148, 0.15), transparent 40%), var(--color-bg)'
    }}>
      <div className="container" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '3rem' }}>

        {/* Left Column: Copy */}
        <motion.div 
          className="hero-content flex-col gap-6 flex"
          style={{ flex: '1 1 400px' }}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="tag" style={{
            color: 'var(--color-accent)', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.85rem'
          }}>
            Consultoría Premium y Diagnóstico
          </div>

          <h1 style={{ marginBottom: '1rem', fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1.1 }}>
            Aumenta tu <span className="text-gold">Score +700</span> y Accede a Financiamiento sin Trabas
          </h1>

          <p className="mb-8" style={{ fontSize: '1.2rem', maxWidth: '500px' }}>
            Empresarios y familias ya han transformado su futuro financiero. Agenda tu diagnóstico crediticio gratuito hoy y descubre el plan exacto para liberar tu potencial.
          </p>

          <div className="flex gap-4" style={{ display: 'flex', flexWrap: 'wrap' }}>
            <a
              href="#agendar"
              className="btn btn-primary"
              style={{ flex: '1', minWidth: '250px', textAlign: 'center' }}
            >
              Agendar Diagnóstico Gratuito
            </a>
            <a href="#testimonios" className="btn btn-outline" style={{ display: 'flex', gap: '0.5rem', flex: '1', minWidth: '200px', justifyContent: 'center', alignItems: 'center' }}>
              Ver Casos de Éxito
            </a>
          </div>

          <motion.div 
            className="trust-badges flex items-center gap-4 mt-6" style={{ marginTop: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <div className="flex -space-x-3" style={{ display: 'flex', marginLeft: '0.5rem' }}>
              {[1, 2, 3, 4].map(num => (
                <img key={num} src={`https://i.pravatar.cc/100?img=${num + 10}`} alt="Cliente Feliz"
                  style={{ width: '40px', height: '40px', borderRadius: '50%', border: '2px solid var(--color-bg)', marginLeft: '-0.5rem' }} />
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1" style={{ color: 'var(--color-accent)', display: 'flex', alignItems: 'center' }}>
                ★★★★★ <span style={{ color: 'var(--text-primary)', marginLeft: '0.5rem', fontWeight: 600 }}>4.9/5</span>
              </div>
              <p style={{ fontSize: '0.85rem', margin: 0 }}>Más de 200+ familias ayudadas.</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column: Visual */}
        <motion.div 
          className="hero-visual" style={{ position: 'relative', flex: '1.5 1 500px', width: '100%', display: 'flex', justifyContent: 'center' }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Decorative Glow */}
          <div style={{
            position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
            width: '100%', height: '100%', background: 'var(--color-accent-glow)', filter: 'blur(100px)', borderRadius: '50%', zIndex: 0
          }}></div>

          {/* Seamless Floating Video Container */}
          <motion.div 
            style={{
              position: 'relative', 
              zIndex: 1, 
              width: '100%', 
              maxWidth: '800px', /* Aumentado para que pueda crecer mucho más */
              borderRadius: '1.2rem', 
              overflow: 'hidden', 
              boxShadow: '0 25px 50px -12px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.05)',
              background: '#000'
            }}
            whileHover={{ 
              y: -5, 
              boxShadow: '0 30px 60px -12px rgba(200, 141, 148, 0.25), 0 0 0 1px rgba(200, 141, 148, 0.4)' 
            }}
            transition={{ type: 'tween', ease: 'easeOut', duration: 0.3 }}
          >
            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, width: '100%' }}>
              <iframe 
                src="https://www.loom.com/embed/53fb15d48eea498bb250e53872ca6b29?hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true" 
                title="Dayani Credit Consultant Video"
                frameBorder="0"
                allowFullScreen
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} 
              ></iframe>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
