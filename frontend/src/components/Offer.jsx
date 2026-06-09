import React from 'react';
import { motion } from 'framer-motion';
import { Search, ShieldCheck, TrendingUp } from 'lucide-react';

const Offer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="oferta" className="section" style={{ background: 'var(--color-surface)', position: 'relative', overflow: 'hidden' }}>
      
      {/* Decorative Glow */}
      <div style={{
        position: 'absolute', bottom: '-20%', left: '-10%',
        width: '500px', height: '500px', background: 'var(--color-accent-glow)', filter: 'blur(100px)', borderRadius: '50%', zIndex: 0
      }}></div>

      <div className="container relative" style={{ zIndex: 1 }}>
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 style={{ marginBottom: '1rem' }}>El Camino para <span className="text-gold">Reparar tu Crédito</span></h2>
          <p style={{ maxWidth: '600px', margin: '0 auto' }}>Nuestro proceso es transparente, rápido y enfocado 100% en resultados. Así es como logramos subir tu score.</p>
        </motion.div>

        <motion.div 
          className="grid gap-8" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          
          {/* Step 1 */}
          <motion.div variants={itemVariants} className="card glass-panel" style={{ textAlign: 'center' }}>
            <div style={{
              width: '70px', height: '70px', borderRadius: '50%', background: 'rgba(200, 141, 148, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto', border: '1px solid var(--color-accent)', boxShadow: '0 0 20px rgba(200, 141, 148, 0.2)'
            }}>
              <Search size={32} color="var(--color-accent)" />
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Diagnóstico Profundo</h3>
            <p>Analizamos tu reporte de crédito en busca de errores, cuentas negativas e información desactualizada que hunde tu score.</p>
          </motion.div>

          {/* Step 2 */}
          <motion.div variants={itemVariants} className="card glass-panel" style={{ textAlign: 'center' }}>
            <div style={{
              width: '70px', height: '70px', borderRadius: '50%', background: 'rgba(200, 141, 148, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto', border: '1px solid var(--color-accent)', boxShadow: '0 0 20px rgba(200, 141, 148, 0.2)'
            }}>
              <ShieldCheck size={32} color="var(--color-accent)" />
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Estrategia a Medida</h3>
            <p>Creamos un plan de acción legal para disputar y eliminar elementos negativos directamente con los burós de crédito.</p>
          </motion.div>

          {/* Step 3 */}
          <motion.div variants={itemVariants} className="card glass-panel" style={{ textAlign: 'center' }}>
            <div style={{
              width: '70px', height: '70px', borderRadius: '50%', background: 'rgba(200, 141, 148, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto', border: '1px solid var(--color-accent)', boxShadow: '0 0 20px rgba(200, 141, 148, 0.2)'
            }}>
              <TrendingUp size={32} color="var(--color-accent)" />
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Crecimiento Acelerado</h3>
            <p>Mientras eliminamos lo negativo, te enseñamos tácticas para construir crédito nuevo y fuerte rápidamente.</p>
          </motion.div>

        </motion.div>

        {/* CTA Bar */}
        <motion.div 
          style={{ marginTop: '5rem', background: 'var(--gold-gradient)', borderRadius: 'var(--radius-lg)', padding: '3rem', textAlign: 'center', color: '#fff', boxShadow: '0 15px 40px rgba(200, 141, 148, 0.3)' }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.01 }}
        >
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#fff' }}>No Dejes Que Tu Puntaje Te Detenga</h2>
          <p style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto 2rem auto', fontWeight: 600, color: '#fff', textShadow: '0 2px 4px rgba(0,0,0,0.4)', letterSpacing: '0.3px' }}>Estamos listos para evaluar tu caso sin costo alguno. Obtén el mapa de ruta exacto para el score que mereces.</p>
          <a
            href="#agendar"
            className="btn"
            style={{ background: 'var(--color-bg)', color: 'var(--color-accent-light)', padding: '1rem 3rem', fontSize: '1.1rem', display: 'inline-block' }}
          >
            Agendar Mi Cita de 30 Minutos
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Offer;
