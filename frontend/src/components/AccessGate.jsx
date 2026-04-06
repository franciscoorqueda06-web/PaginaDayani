import React, { useState, useEffect } from 'react';

const AccessGate = ({ onAccessGranted, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    instagram: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      const response = await fetch(`${API_URL}/api/access`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Error en el servidor');
      }

      localStorage.setItem('dayani_access_granted', 'true');
      setSuccess(true);

      setTimeout(() => {
        onAccessGranted();
      }, 2500);
    } catch (err) {
      setError('Ha ocurrido un error al conectar. Verifica tu internet o intenta más tarde.');
    } finally {
      setLoading(false);
    }
  };

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
              transition: 'all 0.2s ease'
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
              Revisa tu correo — te enviamos una confirmación. Redirigiendo...
            </p>
          </div>
        ) : (
          <>
            <div className="text-center mb-8">
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
              <p style={{ fontSize: '0.95rem', margin: 0, color: 'var(--text-secondary)' }}>
                Déjanos tus datos y en segundos accedes al calendario de citas gratuitas.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex-col flex gap-4">
              <div className="form-group flex flex-col gap-2">
                <label style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: 500 }}>Nombre Completo</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Ej. María González"
                  required
                  style={{
                    width: '100%',
                    padding: '0.8rem 1rem',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--color-border)',
                    background: 'rgba(2, 6, 23, 0.5)',
                    color: 'white',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                />
              </div>

              <div className="form-group flex flex-col gap-2">
                <label style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: 500 }}>Correo Electrónico</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="tu@correo.com"
                  required
                  style={{
                    width: '100%',
                    padding: '0.8rem 1rem',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--color-border)',
                    background: 'rgba(2, 6, 23, 0.5)',
                    color: 'white',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                />
              </div>

              <div className="form-group flex flex-col gap-2 mb-2">
                <label style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: 500 }}>Perfil de Instagram <span style={{ color: 'var(--text-muted)', fontWeight: 400 }}>(opcional)</span></label>
                <input
                  type="text"
                  name="instagram"
                  value={formData.instagram}
                  onChange={handleChange}
                  placeholder="@tu_usuario"
                  style={{
                    width: '100%',
                    padding: '0.8rem 1rem',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--color-border)',
                    background: 'rgba(2, 6, 23, 0.5)',
                    color: 'white',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                />
              </div>

              {error && (
                <div style={{ color: '#ef4444', fontSize: '0.85rem', textAlign: 'center', background: 'rgba(239,68,68,0.08)', padding: '0.6rem 1rem', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(239,68,68,0.2)' }}>
                  {error}
                </div>
              )}

              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: '100%', marginTop: '0.5rem', opacity: loading ? 0.7 : 1 }}
                disabled={loading}
              >
                {loading ? 'Enviando...' : '🗓️ Quiero mi Diagnóstico Gratuito'}
              </button>

              <p style={{ fontSize: '0.75rem', textAlign: 'center', marginTop: '0.5rem', color: 'var(--text-muted)' }}>
                🔒 Tu información está 100% segura. No enviamos spam.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default AccessGate;
