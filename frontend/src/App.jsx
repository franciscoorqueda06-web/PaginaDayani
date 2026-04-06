import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Problem from './components/Problem';
import Testimonials from './components/Testimonials';
import SuccessCases from './components/SuccessCases';
import Offer from './components/Offer';
import Booking from './components/Booking';
import Footer from './components/Footer';
import AccessGate from './components/AccessGate';
import './index.css';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [bookingUnlocked, setBookingUnlocked] = useState(
    localStorage.getItem('dayani_access_granted') === 'true'
  );

  const handleOpenModal = (e) => {
    // If user already gave their info, go straight to booking
    if (bookingUnlocked) {
      e.preventDefault();
      document.getElementById('agendar')?.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    e.preventDefault();
    setShowModal(true);
  };

  const handleAccessGranted = () => {
    localStorage.setItem('dayani_access_granted', 'true');
    setShowModal(false);
    setBookingUnlocked(true);
    setTimeout(() => {
      document.getElementById('agendar')?.scrollIntoView({ behavior: 'smooth' });
    }, 300);
  };

  return (
    <>
      {showModal && (
        <AccessGate
          onAccessGranted={handleAccessGranted}
          onClose={() => setShowModal(false)}
        />
      )}

      <div style={{ position: 'relative' }}>
        <Navbar onOpenModal={handleOpenModal} />
        <Hero onOpenModal={handleOpenModal} />
        <Stats />
        <Problem />
        <Testimonials />
        <SuccessCases />
        <Offer onOpenModal={handleOpenModal} />
        <Booking bookingUnlocked={bookingUnlocked} onOpenModal={handleOpenModal} />
        <Footer />
      </div>
    </>
  );
}

export default App;
