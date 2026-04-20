import React from 'react';
import { InlineWidget } from 'react-calendly';

const Booking = ({ bookingUnlocked, onOpenModal }) => {
  return (
    <section id="agendar" className="section" style={{ background: 'var(--color-bg)', borderTop: '1px solid var(--color-border)' }}>
      <div className="container">
        <div className="text-center mb-12">
          <h2 style={{ marginBottom: '1rem' }}>Reserva tu <span className="text-gold">Diagnóstico Gratuito</span></h2>
          <p style={{ maxWidth: '600px', margin: '0 auto' }}>Selecciona el día y la hora que mejor te convenga. Es 100% online y sin compromiso.</p>
        </div>

        {bookingUnlocked ? (
          <div className="card glass-panel" style={{ overflow: 'hidden', maxWidth: '1040px', margin: '0 auto', padding: '0.5rem' }}>
            <InlineWidget
              url="https://calendly.com/cardosodayani0/30min"
              styles={{ height: '700px', minWidth: '320px', width: '100%' }}
            />
          </div>
        ) : (
          /* Locked preview — blurred Calendly behind a CTA */
          <div style={{ position: 'relative', maxWidth: '1040px', margin: '0 auto', overflow: 'hidden', borderRadius: 'var(--radius-lg)' }}>
            <div style={{
              position: 'absolute', inset: 0,
              filter: 'blur(6px)',
              pointerEvents: 'none',
              userSelect: 'none',
              opacity: 0.5,
              background: 'var(--color-surface)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <div style={{ textAlign: 'center', padding: '2rem' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📅</div>
              </div>
            </div>

            {/* Overlay CTA */}
            <div style={{
              position: 'relative', zIndex: 1,
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center',
              gap: '1.5rem', padding: '3rem 2rem',
              background: 'rgba(2, 6, 23, 0.6)',
              backdropFilter: 'blur(4px)',
              border: '1px solid rgba(200, 141, 148, 0.3)'
            }}>
              <div style={{
                width: '64px', height: '64px', background: 'var(--gold-gradient)',
                borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 0 30px rgba(200,141,148,0.4)'
              }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
              </div>
              <div style={{ textAlign: 'center' }}>
                <h3 style={{ fontSize: '1.6rem', marginBottom: '0.5rem' }}>¡Un paso para agendar!</h3>
                <p style={{ color: 'var(--text-secondary)', maxWidth: '400px' }}>
                  Déjanos tu nombre y correo para confirmar tu lugar y enviarte los detalles de la cita.
                </p>
              </div>
              <a
                href="#agendar"
                onClick={onOpenModal}
                className="btn btn-primary"
                style={{ fontSize: '1.05rem', padding: '0.9rem 2.5rem' }}
              >
                Completar Registro y Ver Horarios
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Booking;
