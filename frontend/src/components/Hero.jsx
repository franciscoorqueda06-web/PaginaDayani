import React from 'react';

const Hero = ({ onOpenModal }) => {
  return (
    <section className="section" style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      paddingTop: 'calc(var(--navbar-height) + 2rem)',
      background: 'radial-gradient(circle at 15% 50%, rgba(200, 141, 148, 0.15), transparent 40%), var(--color-bg)'
    }}>
      <div className="container grid grid-cols-2 gap-12 items-center" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>

        {/* Left Column: Copy */}
        <div className="hero-content flex-col gap-6 flex">
          <div className="tag" style={{
            color: 'var(--color-accent)', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.85rem'
          }}>
            Consultoría Premium y Diagnóstico
          </div>

          <h1 style={{ marginBottom: '1rem' }}>
            Aumenta tu <span className="text-gold">Score +700</span> y Accede a Financiamiento sin Trabas
          </h1>

          <p className="mb-8" style={{ fontSize: '1.2rem', maxWidth: '500px' }}>
            Empresarios y familias ya han transformado su futuro financiero. Agenda tu diagnóstico crediticio gratuito hoy y descubre el plan exacto para liberar tu potencial.
          </p>

          <div className="flex gap-4">
            <a
              href="#agendar"
              onClick={onOpenModal}
              className="btn btn-primary"
              style={{ flex: '1', maxWidth: '300px' }}
            >
              Agendar Diagnóstico Gratuito
            </a>
            <a href="#testimonios" className="btn btn-outline" style={{ display: 'flex', gap: '0.5rem', flex: '1', maxWidth: '200px', justifyContent: 'center', alignItems: 'center' }}>
              Ver Casos de Éxito
            </a>
          </div>

          <div className="trust-badges flex items-center gap-4 mt-6" style={{ marginTop: '2rem' }}>
            <div className="flex -space-x-3" style={{ display: 'flex' }}>
              {[1, 2, 3, 4].map(num => (
                <img key={num} src={`https://i.pravatar.cc/100?img=${num + 10}`} alt="Cliente Feliz"
                  style={{ width: '40px', height: '40px', borderRadius: '50%', border: '2px solid var(--color-bg)' }} />
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1" style={{ color: 'var(--color-accent)' }}>
                ★★★★★ <span style={{ color: 'var(--text-primary)', marginLeft: '0.5rem', fontWeight: 600 }}>4.9/5</span>
              </div>
              <p style={{ fontSize: '0.85rem', margin: 0 }}>Más de 200+ familias ayudadas.</p>
            </div>
          </div>
        </div>

        {/* Right Column: Visual */}
        <div className="hero-visual" style={{ position: 'relative' }}>
          {/* Decorative Glow */}
          <div style={{
            position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
            width: '80%', height: '80%', background: 'var(--color-accent-glow)', filter: 'blur(80px)', borderRadius: '50%', zIndex: 0
          }}></div>

          {/* Video Placeholder Container */}
          <div className="glass-panel" style={{
            position: 'relative', zIndex: 1, padding: '1rem', aspectRatio: '4/5', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center'
          }}>
            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop"
              alt="Dayani Credit Consultant Placeholder"
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'var(--radius-md)' }} />

            {/* Play Button Overlay */}
            <div style={{
              position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
              width: '80px', height: '80px', background: 'var(--gold-gradient)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 0 30px rgba(200, 141, 148, 0.5)'
            }}>
              <div style={{
                width: 0, height: 0, borderTop: '12px solid transparent', borderBottom: '12px solid transparent', borderLeft: '20px solid black', marginLeft: '5px'
              }}></div>
            </div>

            {/* Overlay Text */}
            <div className="glass-panel" style={{
              position: 'absolute', bottom: '2rem', left: '2rem', right: '2rem', padding: '1rem',
              border: '1px solid rgba(200, 141, 148, 0.3)'
            }}>
              <p style={{ color: 'var(--color-accent)', fontWeight: 600, margin: 0, fontSize: '0.9rem' }}>Solo 15 minutos</p>
              <h3 style={{ fontSize: '1.2rem', margin: 0, color: 'white' }}>Pueden cambiar todo tu futuro financiero</h3>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
