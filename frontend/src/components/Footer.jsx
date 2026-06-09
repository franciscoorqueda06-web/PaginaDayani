import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer 
      style={{ 
        background: 'linear-gradient(to bottom, var(--color-bg) 0%, #010308 100%)', 
        padding: '5rem 0 2rem 0', 
        position: 'relative',
        overflow: 'hidden'
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Footer Top Accent Line */}
      <div style={{
        position: 'absolute', top: 0, left: 0, width: '100%', height: '1px',
        background: 'linear-gradient(90deg, transparent 0%, var(--color-accent) 50%, transparent 100%)',
        opacity: 0.3
      }}></div>

      <div className="container">
        <div className="grid gap-8 mb-12" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
          
          {/* Column 1: Brand Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
          >
             <h2 style={{ fontSize: '1.8rem', margin: 0, display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
              <div style={{
                width: '35px', height: '35px', background: 'var(--gold-gradient)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000', fontWeight: 'bold', fontSize: '1.2rem', boxShadow: '0 0 15px rgba(200, 141, 148, 0.4)'
              }}>D</div>
              Dayani <span className="text-gold">Credit</span>
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', maxWidth: '320px', margin: 0, lineHeight: 1.6 }}>
              Tu futuro financiero asegurado. Especialistas en reparación legal de crédito y construcción de perfiles financieros para familias y emprendedores hispanos.
            </p>
            
            {/* Social Icons Placeholder */}
            <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
              {['Instagram', 'Facebook', 'TikTok'].map((social, i) => (
                <a key={i} href="#" style={{ 
                  width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', 
                  display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-secondary)',
                  border: '1px solid rgba(255,255,255,0.1)', transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--color-accent-glow)'; e.currentTarget.style.color = '#fff'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.color = 'var(--text-secondary)'; }}
                title={social}
                >
                  <span style={{ fontSize: '0.8rem', fontWeight: 600 }}>{social[0]}</span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
          >
            <h4 style={{ color: 'var(--text-primary)', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Enlaces Rápidos</h4>
            {['Inicio', 'Testimonios', 'Sobre Mí', 'Beneficios', 'Agendar Diagnóstico'].map((link, i) => (
              <a key={i} href="#" style={{ color: 'var(--text-secondary)', fontSize: '1rem', textDecoration: 'none', transition: 'color 0.2s ease' }}
                 onMouseEnter={(e) => e.target.style.color = 'var(--color-accent)'}
                 onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}>
                {link}
              </a>
            ))}
          </motion.div>

          {/* Column 3: Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
          >
            <h4 style={{ color: 'var(--text-primary)', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Contacto Directo</h4>
            <div style={{ color: 'var(--text-secondary)', fontSize: '1rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <p style={{ margin: 0 }}>📍 Estados Unidos (Servicio Nacional)</p>
              <p style={{ margin: 0 }}>✉️ info@dayanicredit.com</p>
              <p style={{ margin: 0 }}>🕒 Lunes a Viernes: 9am - 6pm EST</p>
            </div>
            
            <a href="#agendar" className="btn btn-outline" style={{ marginTop: '1rem', alignSelf: 'flex-start', padding: '0.5rem 1.5rem', fontSize: '0.9rem' }}>
              Hablar con un Asesor
            </a>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <motion.div 
          style={{ 
            display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem',
            paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.05)', fontSize: '0.85rem', color: 'var(--text-muted)' 
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <p style={{ margin: 0 }}>&copy; {new Date().getFullYear()} Dayani Credit Pro. Todos los derechos reservados.</p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="#" style={{ color: 'inherit' }}>Términos y Condiciones</a>
            <a href="#" style={{ color: 'inherit' }}>Política de Privacidad</a>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
