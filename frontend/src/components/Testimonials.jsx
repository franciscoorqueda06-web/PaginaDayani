import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Yan Morales",
      role: "Usuario Apple Card",
      image: "/Yan.jpeg",
      quote: "No tenía esperanzas con tantas marcas negativas. Dayani limpió mi historial por completo y aplicó las estrategias exactas para que por fin me aprobaran mi Apple Card. ¡Increíble!",
      score_increase: "+42 pts",
      stars: 5
    },
    {
      name: "Linet Ramos",
      role: "Libre de Colecciones",
      image: "/Linet.jpeg",
      quote: "Tenía 16 cuentas negativas ahogándome y $42,000 en deudas. En solo dos meses me removieron todo y mi deuda bajó a $18,000. Me devolvieron la tranquilidad.",
      score_increase: "-$24K Deuda",
      stars: 5
    },
    {
      name: "Claudia Ríos",
      role: "Nueva Propietaria",
      image: "/Claudia.jpeg",
      quote: "Pensé que el sueño de comprar una casa para mi familia tendría que esperar por culpa de mi mal crédito. Gracias a las gestiones de Dayani, mi score subió lo suficiente para lograr una tasa excelente. ¡Hoy por fin tengo las llaves de mi primer hogar!",
      score_increase: "Aprobación Casa",
      stars: 5
    },
    {
      name: "Roberto Silva",
      role: "Inversionista Inmobiliario",
      image: "https://i.pravatar.cc/150?img=8",
      quote: "La mejor inversión. Con el score que logramos pude conseguir tasas de interés mucho más bajas para mis propiedades. 100% recomendada.",
      score_increase: "+210 pts",
      stars: 5
    },
    {
      name: "Laura Jiménez",
      role: "Desarrolladora de Software",
      image: "https://i.pravatar.cc/150?img=1",
      quote: "Pensé que tener buen sueldo bastaba para comprar casa. Dayani me explicó que mi perfil era 'fantasma'. En meses me construyó un score de 780.",
      score_increase: "Perfil Nuevo",
      stars: 5
    },
    {
      name: "Diego Fernandes",
      role: "Empresario de Construcción",
      image: "https://i.pravatar.cc/150?img=12",
      quote: "Llevaba dos años intentando conseguir financiamiento para expandir mi empresa y nadie me aprobaba. Dayani revisó mi reporte, encontró deudas que ni sabía que tenía y las disputó. En menos de 90 días mi score pasó de 560 a 720. Hoy tengo la línea de crédito que necesitaba para crecer.",
      score_increase: "+160 pts",
      stars: 5
    },
  ];

  return (
    <section id="testimonios" className="section" style={{ background: 'var(--color-bg)', overflow: 'hidden' }}>
      <div className="container" style={{ maxWidth: '1000px' }}>
        <div className="text-center mb-12">
          <h2 style={{ marginBottom: '1rem' }}>Lo Que Dicen Los <span className="text-gold">Empresarios</span></h2>
          <p style={{ maxWidth: '600px', margin: '0 auto' }}>Casos reales de familias y negocios que transformaron su vida gracias a una estrategia crediticia sólida.</p>
        </div>

        <div style={{ paddingBottom: '3rem', margin: '0 -2rem' }}>
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2,
              slideShadows: false,
            }}
            modules={[EffectCoverflow, Autoplay]}
            style={{ width: '100%', padding: '2rem 2rem 4rem 2rem' }}
          >
            {[...testimonials, ...testimonials].map((t, index) => (
              <SwiperSlide key={index} style={{ width: '350px', height: 'auto', display: 'flex' }}>

                <div className="card flex-col flex" style={{ width: '100%', height: '100%', position: 'relative', overflow: 'hidden', minHeight: '320px' }}>
                  {/* Score Badge */}
                  <div style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'var(--gold-gradient)', color: '#fff', textShadow: '0 1px 2px rgba(0,0,0,0.3)', padding: '0.3rem 0.8rem', borderRadius: '20px', fontWeight: 'bold', fontSize: '0.85rem' }}>
                    {t.score_increase}
                  </div>

                  {/* Stars */}
                  <div style={{ color: 'var(--color-accent)', alignSelf: 'flex-start', marginBottom: '1rem' }}>
                    {"★".repeat(t.stars)}
                  </div>

                  {/* Quote */}
                  <p style={{ fontStyle: 'italic', marginBottom: '2rem', flexGrow: 1, color: 'var(--text-primary)' }}>"{t.quote}"</p>

                  {/* User Info */}
                  <div className="flex items-center gap-4" style={{ marginTop: 'auto', paddingTop: '1.5rem', borderTop: '1px solid var(--color-border)' }}>
                    <img src={t.image} alt={t.name} style={{ width: '50px', height: '50px', borderRadius: '50%', border: '2px solid var(--color-accent)', objectFit: 'cover' }} />
                    <div>
                      <h4 style={{ margin: 0, fontSize: '1.1rem' }}>{t.name}</h4>
                      <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--color-accent)' }}>{t.role}</p>
                    </div>
                  </div>
                </div>

              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="text-center mt-6">
          <a href="#agendar" className="btn btn-primary">Quiero mi caso de éxito</a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
