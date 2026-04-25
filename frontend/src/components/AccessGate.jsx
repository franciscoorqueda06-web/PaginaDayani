import React, { useState, useEffect } from 'react';

const AccessGate = ({ onAccessGranted, onClose }) => {
  const [success, setSuccess] = useState(false);

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  // Load Tally script and listen for submission
  useEffect(() => {
    let successTriggered = false;

    const handleMessage = (e) => {
      if (successTriggered) return;

      // Validar si el mensaje viene de Tally y es un submit
      let isSubmit = false;

      try {
        const data = typeof e.data === 'string' ? JSON.parse(e.data) : e.data;
        if (data && data.event === 'Tally.FormSubmitted') {
          isSubmit = true;
        }
      } catch (err) {
        // Ignorar mensajes que no sean JSON válido
      }
      
      // Manejar el formato alternativo de Tally (string literal)
      if (typeof e.data === 'string' && e.data.includes('Tally.FormSubmitted')) {
          isSubmit = true;
      }

      if (isSubmit) {
        successTriggered = true;
        localStorage.setItem('dayani_access_granted', 'true');
        setSuccess(true);
        setTimeout(() => {
          onAccessGranted();
        }, 1500);
      }
    };

    window.addEventListener('message', handleMessage);
    
    // Cargar script de Tally
    const script = document.createElement('script');
    script.src = "https://tally.so/widgets/embed.js";
    script.async = true;
    document.body.appendChild(script);

    // Intentar inicializar embeds si el script ya estaba cargado
    if (window.Tally) {
      window.Tally.loadEmbeds();
    }

    return () => {
      window.removeEventListener('message', handleMessage);
      if (document.body.contains(script)) {
         document.body.removeChild(script);
      }
    };
  }, [onAccessGranted]);

  return (
    <div
      onClick={(e) => { if (e.target === e.currentTarget && onClose) onClose(); }}
      style={{
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(2, 6, 23, 0.80)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        padding: '2rem',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 9999,
        overflow: 'auto',
        animation: 'fadeInOverlay 0.3s ease'
      }}
    >
      <style>{`
        @keyframes fadeInOverlay {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUpModal {
          from { opacity: 0; transform: translateY(30px) scale(0.97); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>

      <div className="glass-panel" style={{
        maxWidth: '500px',
        width: '100%',
        padding: '3rem 2.5rem',
        borderRadius: 'var(--radius-lg)',
        boxShadow: '0 25px 80px rgba(0,0,0,0.6), var(--shadow-glow)',
        border: '1px solid rgba(200, 141, 148, 0.35)',
        position: 'relative',
        animation: 'slideUpModal 0.35s ease'
      }}>

        {/* Close Button */}
        {onClose && !success && (
          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              background: 'rgba(255,255,255,0.07)',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: '50%',
              width: '36px',
              height: '36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: 'var(--text-secondary)',
              fontSize: '1.1rem',
              transition: 'all 0.2s ease',
              zIndex: 10
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.15)'; e.currentTarget.style.color = 'white'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.07)'; e.currentTarget.style.color = 'var(--text-secondary)'; }}
          >
            ✕
          </button>
        )}

        {success ? (
          <div className="text-center flex-col flex items-center justify-center py-8">
            <div style={{
              width: '80px',
              height: '80px',
              background: 'rgba(16, 185, 129, 0.12)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.5rem auto',
              border: '2px solid #10b981',
            }}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#10b981' }}>¡Registro Exitoso!</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>
              Redirigiendo al calendario...
            </p>
          </div>
        ) : (
          <div style={{ minHeight: '300px' }}>
            <div className="text-center mb-6">
              <div style={{
                width: '60px',
                height: '60px',
                background: 'var(--gold-gradient)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem auto'
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/>
                </svg>
              </div>
              <h2 style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>
                Agenda tu <span className="text-gold">Diagnóstico</span>
              </h2>
            </div>
            <iframe
              data-tally-src="https://tally.so/embed/vG0OVd?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
              loading="lazy"
              width="100%"
              height="250"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              title="Diagnóstico Gratuito"
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
};

export default AccessGate;
