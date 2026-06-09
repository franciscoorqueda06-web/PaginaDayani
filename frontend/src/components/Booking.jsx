import React from 'react';
import { InlineWidget } from 'react-calendly';
import { motion } from 'framer-motion';

const Booking = () => {
  return (
    <section id="agendar" className="section" style={{ background: 'var(--color-bg)', borderTop: '1px solid var(--color-border)' }}>
      <div className="container">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 style={{ marginBottom: '1rem' }}>Reserva tu <span className="text-gold">Diagnóstico Gratuito</span></h2>
          <p style={{ maxWidth: '600px', margin: '0 auto' }}>Selecciona el día y la hora que mejor te convenga. Es 100% online y sin compromiso.</p>
        </motion.div>

        <motion.div 
          className="card glass-panel" 
          style={{ overflow: 'hidden', maxWidth: '1040px', margin: '0 auto', padding: '0.5rem' }}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <InlineWidget
            url="https://calendly.com/cardosodayani0/30min"
            styles={{ height: '700px', minWidth: '320px', width: '100%' }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Booking;
