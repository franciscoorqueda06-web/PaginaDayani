import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AuthorityBanner from './components/AuthorityBanner';
import Stats from './components/Stats';
import Problem from './components/Problem';
import VideoTestimonials from './components/VideoTestimonials';
import About from './components/About';
import Offer from './components/Offer';
import FAQ from './components/FAQ';
import Booking from './components/Booking';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div style={{ position: 'relative' }}>
      <Navbar />
      <Hero />
      <AuthorityBanner />
      <Stats />
      <Problem />
      <VideoTestimonials />
      <About />
      <Offer />
      <FAQ />
      <Booking />
      <Footer />
    </div>
  );
}

export default App;
