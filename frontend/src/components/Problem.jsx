import React from 'react';

const consequences = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
      </svg>
    ),
    stat: '−47pts',
    title: 'Tu score cae con cada rechazo',
    desc: 'Cada aplicación denegada genera una "consulta dura" que deteriora aún más tu perfil.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
    stat: '+38%',
    title: 'Tasas abusivas en cada préstamo',
    desc: 'Los prestamistas alternativos te cobran intereses 3x más altos al verte como "riesgo alto".',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    stat: '0',
    title: 'Sin casa, sin auto, sin inversión',
    desc: 'Los sueños de patrimonio quedan congelados mientras tu historial no esté limpio.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M8 15h8M9 9h.01M15 9h.01"/>
      </svg>
    ),
    stat: '∞',
    title: 'Estrés financiero sin fin',
    desc: 'Vivir sin saber cómo salir del ciclo de rechazos afecta tu salud mental y familiar.',
  },
];

const Problem = () => {
  return (
    <section className="section" style={{
      background: 'var(--color-bg)',
      position: 'relative',
      overflow: 'hidden',
    }}>

      {/* Subtle bg glow */}
      <div style={{
        position: 'absolute', top: '10%', right: '-5%',
        width: '400px', height: '400px',
        background: 'radial-gradient(circle, rgba(239,68,68,0.06), transparent 70%)',
        borderRadius: '50%', pointerEvents: 'none'
      }} />

      <div className="container" style={{ maxWidth: '900px' }}>

        {/* ── HEADLINE ── */}
        <div className="text-center mb-12">
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.25)',
            borderRadius: '50px', padding: '0.4rem 1.2rem', marginBottom: '1.5rem'
          }}>
            <span style={{ color: '#ef4444', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase' }}>
              ⚠ El problema real
            </span>
          </div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', lineHeight: 1.15, marginBottom: '1rem' }}>
            La razón de tus rechazos<br />
            <span style={{
              background: 'linear-gradient(135deg, #ef4444, #f97316)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              no es tu capacidad de pago.
            </span>
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: '560px', margin: '0 auto' }}>
            Es la <strong style={{ color: 'var(--color-accent)' }}>estructura de tu historial crediticio</strong> — y eso sí se puede reparar.
          </p>
        </div>

        {/* ── EXPLANATION CARD ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '1px',
          background: 'rgba(200,141,148,0.2)',
          borderRadius: '1.25rem',
          overflow: 'hidden',
          marginBottom: '3rem',
          border: '1px solid rgba(200,141,148,0.2)',
        }}>
          <div style={{ background: 'var(--color-surface)', padding: '2rem' }}>
            <p style={{ fontSize: '0.75rem', fontWeight: 700, color: '#ef4444', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Lo que el banco ve</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {['Cuentas en colección', 'Consultas múltiples', 'Historial desordenado', 'Marcas negativas activas'].map((item) => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'rgba(239,68,68,0.15)', border: '1.5px solid #ef4444', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="3"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                  </div>
                  <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ background: 'var(--color-surface)', padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', borderLeft: '1px solid rgba(200,141,148,0.2)' }}>
            <p style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-accent)', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Su veredicto instantáneo</p>
            <div style={{
              background: 'rgba(239,68,68,0.08)',
              border: '1px solid rgba(239,68,68,0.25)',
              borderRadius: '0.75rem',
              padding: '1.25rem',
              marginBottom: '1rem'
            }}>
              <p style={{ margin: 0, fontSize: '1.05rem', fontWeight: 600, color: '#ef4444' }}>
                "Cliente de alto riesgo."
              </p>
              <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                No importa cuánto ganes. El algoritmo dice NO.
              </p>
            </div>
            <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              Aunque tengas ingresos sólidos, el sistema solo ve tu expediente crediticio — no tu realidad financiera.
            </p>
          </div>
        </div>

        {/* ── CONSEQUENCES GRID ── */}
        <div style={{ marginBottom: '3rem' }}>
          <p style={{
            fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)',
            letterSpacing: '2px', textTransform: 'uppercase',
            marginBottom: '1.5rem', paddingLeft: '0.25rem'
          }}>
            Si no actúas hoy, esto es lo que te espera:
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1rem',
          }}>
            {consequences.map((item, i) => (
              <div key={i} style={{
                background: 'var(--color-surface)',
                border: '1px solid rgba(239,68,68,0.15)',
                borderRadius: '1rem',
                padding: '1.5rem',
                transition: 'border-color 0.25s, transform 0.25s',
                cursor: 'default',
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(239,68,68,0.45)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(239,68,68,0.15)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{
                  color: '#ef4444',
                  marginBottom: '0.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                  {item.icon}
                  <span style={{ fontSize: '1.5rem', fontWeight: 800, color: 'rgba(239,68,68,0.5)', fontVariantNumeric: 'tabular-nums' }}>
                    {item.stat}
                  </span>
                </div>
                <h4 style={{ margin: '0 0 0.4rem 0', fontSize: '0.95rem', color: 'white' }}>{item.title}</h4>
                <p style={{ margin: 0, fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── GOOD NEWS STRIP ── */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(200,141,148,0.12), rgba(160,80,100,0.08))',
          border: '1px solid rgba(200,141,148,0.35)',
          borderRadius: '1.25rem',
          padding: '2rem 2.5rem',
          display: 'flex',
          alignItems: 'center',
          gap: '2rem',
          flexWrap: 'wrap',
        }}>
          <div style={{
            width: '52px', height: '52px', borderRadius: '50%',
            background: 'var(--gold-gradient)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0,
            boxShadow: '0 0 24px rgba(200,141,148,0.4)'
          }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
          </div>
          <div style={{ flex: 1, minWidth: '220px' }}>
            <p style={{ margin: '0 0 0.35rem 0', fontSize: '1.05rem', fontWeight: 700, color: 'white' }}>
              La buena noticia: <span className="text-gold">tu crédito es 100% reparable.</span>
            </p>
            <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              Con el diagnóstico correcto y la estrategia legal adecuada, podemos limpiar tu perfil y devolverte acceso al financiamiento que mereces.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Problem;
