
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const SuccessCases = () => {
  const cases = [
    {
      name: "Yan M.",
      role: "Usuario Apple Card",
      description: "Limpiamos su historial por completo y con nuevas estrategias logró la aprobación de su Apple Card.",
      stars: 5,
      image: "/caso-yan.jpeg"
    },
    {
      name: "Linet R.",
      role: "Remoción de Colecciones",
      description: "16 cuentas negativas borradas en 2 meses. Su deuda bajó de $42,000 a $18,000.",
      stars: 5,
      image: "/caso-linet.png"
    },
    {
      name: "Claudia R.",
      role: "Dueña de E-Commerce",
      description: "Su score subió y logró una tasa excelente. Hoy tiene las llaves de su primer hogar.",
      stars: 5,
      image: "/imagen1.png"
    },
    {
      name: "Diego F.",
      role: "Construcción",
      description: "De 560 a 720 puntos en 90 días. Consiguió la línea de crédito para expandir su empresa.",
      stars: 5,
      image: "/Caso-sinnombre.jpeg"
    },
    {
      name: "Laura J.",
      role: "Consultoría",
      description: "Su perfil era 'fantasma'. Dayani le construyó un score de 780 y accedió a financiamiento.",
      stars: 5,
      image: "/Imagen2.png"
    },
    {
      name: "Roberto S.",
      role: "Importador",
      description: "Logró tasas de interés mucho más bajas para sus propiedades de inversión.",
      stars: 5,
      image: "/imagen3.png"
    }
  ];

  return (
    <section id="casos-de-exito" className="section" style={{ background: 'var(--color-surface)', borderTop: '1px solid var(--color-border)' }}>
      <div className="container" style={{ maxWidth: '1400px' }}>
        <div className="text-center mb-12">
          <p style={{ color: 'var(--color-accent)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.85rem', marginBottom: '0.5rem' }}>
            Resultados Reales
          </p>
          <h2 style={{ marginBottom: '1rem', fontSize: '2.5rem' }}>CASOS DE ÉXITO</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-secondary)' }}>
            Empresarios que transformaron su perfil crediticio con Dayani Credit Pro
          </p>
        </div>

        <div style={{ margin: '0 -1rem' }}>
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
              1280: { slidesPerView: 5 }
            }}
            modules={[Autoplay]}
            style={{ padding: '1rem 1rem 4rem 1rem' }}
          >
            {cases.map((c, idx) => (
              <SwiperSlide key={idx} style={{ height: 'auto', display: 'flex' }}>
                <div className="card" style={{ padding: 0, overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column' }}>

                  {/* Image (Real screenshot or Fallback) */}
                  <div style={{ height: '180px', width: '100%', background: 'var(--color-surface-hover)', borderBottom: '1px solid var(--color-border)' }}>
                    <img
                      src={c.image ? c.image : `https://placehold.co/400x200/0b1528/c88d94?text=Resultados+reales+en+score`}
                      alt={`Resultados ${c.name}`}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>

                  {/* Content */}
                  <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1, backgroundColor: 'var(--color-bg)' }}>
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 style={{ margin: 0, fontSize: '1.1rem', color: 'var(--text-primary)' }}>{c.name}</h4>
                        <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--color-accent)' }}>{c.role}</p>
                      </div>
                      <span style={{ color: 'var(--color-accent)', fontWeight: 'bold', fontSize: '0.9rem' }}>{c.points}</span>
                    </div>

                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', flexGrow: 1 }}>
                      {c.description}
                    </p>

                    <div style={{ color: 'var(--color-accent)', fontSize: '0.9rem' }}>
                      {"★".repeat(c.stars)}
                    </div>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default SuccessCases;
