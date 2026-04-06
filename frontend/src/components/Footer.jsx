import React from 'react';

const Footer = () => {
  return (
    <footer style={{ background: 'var(--color-bg)', padding: '4rem 0 2rem 0', borderTop: '1px solid var(--color-border)', position: 'relative' }}>
      <div className="container">
        <div className="grid gap-8 mb-8" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
          
          {/* Brand Info */}
          <div>
             <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{
                width: '30px', height: '30px', background: 'var(--gold-gradient)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000', fontWeight: 'bold'
              }}>D</div>
              Dayani <span className="text-gold">Credit Pro</span>
            </h2>
            <p style={{ fontSize: '0.9rem', maxWidth: '300px' }}>Tu futuro financiero asegurado. Estrategias comprobadas de reparación y construcción de crédito para familias y emprendedores.</p>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: 'var(--text-primary)', marginBottom: '1rem', letterSpacing: '1px' }}>Contacto Directo</h4>
            <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>📍 Oficina Principal: (Ubicación Pendiente)</p>
            <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>📞 Teléfono: (xxx) xxx-xxxx</p>
            <p style={{ fontSize: '0.9rem' }}>✉️ Email: hola@dayanicreditpro.com</p>
          </div>

          {/* Social Links */}
          <div>
            <h4 style={{ color: 'var(--text-primary)', marginBottom: '1rem', letterSpacing: '1px' }}>Redes Sociales</h4>
            <div className="flex gap-4">
              <a href="#" style={{ padding: '0.5rem', background: 'var(--color-surface)', borderRadius: '50%', color: 'var(--color-accent)' }}>IG</a>
              <a href="#" style={{ padding: '0.5rem', background: 'var(--color-surface)', borderRadius: '50%', color: 'var(--color-accent)' }}>FB</a>
              <a href="#" style={{ padding: '0.5rem', background: 'var(--color-surface)', borderRadius: '50%', color: 'var(--color-accent)' }}>IN</a>
            </div>
          </div>
        </div>

        <div style={{ textAlign: 'center', paddingTop: '2rem', borderTop: '1px solid var(--color-surface)', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
          <p>&copy; {new Date().getFullYear()} Dayani Credit Pro. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
