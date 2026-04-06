import React, { useState, useEffect } from 'react';

const Navbar = ({ onOpenModal }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="navbar" style={{
      position: 'fixed',
      top: 0, left: 0, right: 0,
      height: 'var(--navbar-height)',
      zIndex: 1000,
      background: scrolled ? 'rgba(2, 6, 23, 0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--color-border)' : '1px solid transparent',
      transition: 'all 0.3s ease'
    }}>
      <div className="container flex items-center justify-between" style={{ height: '100%' }}>
        <div className="logo flex items-center gap-2">
          <div style={{
            width: '40px', height: '40px',
            background: 'var(--gold-gradient)',
            borderRadius: '8px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#000', fontWeight: 'bold', fontSize: '1.2rem'
          }}>
            D
          </div>
          <h2 style={{ fontSize: '1.5rem', margin: 0 }}>Dayani <span className="text-gold">Credit Pro</span></h2>
        </div>

        <nav className="nav-links flex gap-8 items-center" style={{ display: 'none' }}>
          <a href="#testimonios" className="nav-link">Testimonios</a>
          <a href="#oferta" className="nav-link">La Oferta</a>
          <a href="#agendar" onClick={onOpenModal} className="btn btn-primary" style={{ padding: '0.6rem 1.5rem' }}>Agendar Cita</a>
        </nav>

        <div className="mobile-menu" style={{ display: 'flex' }}>
          <a href="#agendar" onClick={onOpenModal} className="btn btn-outline" style={{ padding: '0.6rem 1.2rem' }}>Agendar</a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
