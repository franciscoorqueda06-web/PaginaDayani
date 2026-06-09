import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const videos = [
  { id: '5b988143f5b24290ab6ea6d2a4aa9a92' },
  { id: 'bcef529dc0364c2bb221f6c755643f13' },
  { id: 'c3d4962045b94e1c8d1ea27209d286dd' }
];

const VideoTestimonials = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <section id="testimonios" className="section" style={{ background: 'var(--color-bg)', position: 'relative', overflow: 'hidden' }}>
      
      {/* Decorative Blur */}
      <div style={{
        position: 'absolute', top: '20%', right: '-10%',
        width: '400px', height: '400px', background: 'var(--color-accent-glow)', filter: 'blur(100px)', borderRadius: '50%', zIndex: 0
      }}></div>

      <div className="container relative" style={{ zIndex: 1 }}>
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 style={{ marginBottom: '1rem' }}>Historias de <span className="text-gold">Éxito Reales</span></h2>
          <p style={{ maxWidth: '600px', margin: '0 auto' }}>
            No solo reparamos crédito, cambiamos vidas. Escucha de primera mano cómo nuestros clientes han transformado su futuro financiero.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          style={{ maxWidth: '800px', margin: '0 auto' }}
        >
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            initialSlide={1}
            coverflowEffect={{
              rotate: 30,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[EffectCoverflow, Pagination, Navigation]}
            style={{ paddingBottom: '3rem', paddingTop: '1rem' }}
            onSlideChange={() => setActiveVideo(null)} // Reset active video on slide change
          >
            {videos.map((video, index) => (
              <SwiperSlide key={index} style={{ width: '320px', maxWidth: '80vw' }}>
                <div 
                  className="card glass-panel"
                  style={{ padding: '0.5rem', paddingBottom: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
                >
                  <div 
                    style={{ 
                      position: 'relative', 
                      width: '100%', 
                      paddingBottom: '120%', 
                      borderRadius: 'var(--radius-md) var(--radius-md) 0 0', 
                      overflow: 'hidden',
                      background: '#000',
                      cursor: activeVideo === index ? 'default' : 'pointer'
                    }}
                    onClick={() => setActiveVideo(index)}
                  >
                    {/* Overlay transparente para capturar el gesto de deslizar */}
                    {activeVideo !== index && (
                      <div style={{
                        position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                        zIndex: 10, background: 'transparent'
                      }} title="Toca para activar el video" />
                    )}
                    
                    <iframe 
                      src={`https://www.loom.com/embed/${video.id}?hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true`}
                      frameBorder="0"
                      allowFullScreen
                      style={{ 
                        position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                        pointerEvents: activeVideo === index ? 'auto' : 'none'
                      }}
                    ></iframe>
                  </div>
                  
                  {/* Área exclusiva para deslizar en celular */}
                  <div style={{ 
                    padding: '1rem', textAlign: 'center', color: 'var(--text-secondary)', cursor: 'grab', 
                    display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem',
                    background: 'rgba(200, 141, 148, 0.05)'
                  }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                    <span style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600 }}>Deslizar</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

      </div>
      
      {/* Estilos adicionales */}
      <style>{`
        .swiper-pagination-bullet {
          background: var(--text-secondary);
        }
        .swiper-pagination-bullet-active {
          background: var(--color-accent);
        }
        .swiper-button-next, .swiper-button-prev {
          color: var(--color-accent);
        }
      `}</style>
    </section>
  );
};

export default VideoTestimonials;
