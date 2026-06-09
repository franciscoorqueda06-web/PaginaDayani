import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
    <style>
      {`
        .desktop-nav { display: flex; align-items: center; gap: 2.5rem; }
        .nav-item { color: var(--text-secondary); font-weight: 500; font-size: 0.95rem; transition: color 0.3s ease; text-decoration: none; }
        .nav-item:hover { color: var(--color-accent); }
        .mobile-nav-toggle { display: none; background: transparent; border: none; color: var(--text-primary); font-size: 1.8rem; cursor: pointer; padding: 0; }
        .mobile-menu {
          position: absolute; top: 100%; left: 0; right: 0; background: rgba(11, 21, 40, 0.98); backdrop-filter: blur(16px);
          border-radius: 1rem; padding: 1.5rem; display: flex; flex-direction: column; gap: 1rem; margin-top: 0.5rem;
          border: 1px solid rgba(255,255,255,0.08); box-shadow: 0 10px 30px rgba(0,0,0,0.5);
        }
        @media (max-width: 768px) {
          .desktop-nav { display: none; }
          .desktop-btn { display: none !important; }
          .mobile-nav-toggle { display: block; }
        }
      `}
    </style>
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed',
        top: '20px',
        left: 0, right: 0,
        margin: '0 auto',
        maxWidth: '900px',
        width: '95%',
        height: '75px',
        zIndex: 1000,
        background: scrolled ? 'rgba(11, 21, 40, 0.85)' : 'rgba(11, 21, 40, 0.2)',
        backdropFilter: scrolled ? 'blur(16px)' : 'blur(4px)',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'blur(4px)',
        border: scrolled ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(255,255,255,0.03)',
        borderRadius: '3rem',
        boxShadow: scrolled ? '0 20px 40px -10px rgba(0,0,0,0.5)' : 'none',
        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        display: 'flex',
        alignItems: 'center',
        padding: '0 1.5rem'
      }}
    >
      <div className="container flex items-center justify-between" style={{ height: '100%', width: '100%', padding: '0', position: 'relative' }}>
        <a href="#" className="logo flex items-center gap-2" style={{ textDecoration: 'none' }}>
          <img 
            src="/Logo.png" 
            alt="Dayani Credit Pro Logo" 
            style={{ width: '35px', height: '35px', borderRadius: '8px', objectFit: 'cover', transition: 'all 0.3s ease' }} 
          />
          <h2 style={{ fontSize: '1.3rem', margin: 0, transition: 'all 0.3s ease', color: 'var(--text-primary)' }}>
            Dc <span className="text-gold">Credit</span>
          </h2>
        </a>

        <nav className="desktop-nav">
          <a href="#nosotros" className="nav-item">Conóceme</a>
          <a href="#testimonios" className="nav-item">Casos de Éxito</a>
          <a href="#oferta" className="nav-item">Beneficios</a>
        </nav>

        <div className="flex items-center gap-4">
          <a href="#agendar" className="btn btn-primary desktop-btn" style={{ display: 'flex', padding: '0.5rem 1.2rem', fontSize: '0.9rem' }}>
            Agendar Diagnóstico
          </a>
          <button className="mobile-nav-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="mobile-menu"
            >
              <a href="#nosotros" className="nav-item" style={{ fontSize: '1.1rem', padding: '0.5rem 0' }} onClick={() => setMobileMenuOpen(false)}>Conóceme</a>
              <div style={{ height: '1px', background: 'rgba(255,255,255,0.05)' }}></div>
              <a href="#testimonios" className="nav-item" style={{ fontSize: '1.1rem', padding: '0.5rem 0' }} onClick={() => setMobileMenuOpen(false)}>Casos de Éxito</a>
              <div style={{ height: '1px', background: 'rgba(255,255,255,0.05)' }}></div>
              <a href="#oferta" className="nav-item" style={{ fontSize: '1.1rem', padding: '0.5rem 0' }} onClick={() => setMobileMenuOpen(false)}>Beneficios</a>
              
              <a href="#agendar" className="btn btn-primary" style={{ width: '100%', textAlign: 'center', marginTop: '1rem' }} onClick={() => setMobileMenuOpen(false)}>
                Agendar Diagnóstico
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
    </>
  );
};

export default Navbar;
