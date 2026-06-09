import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "¿Es verdaderamente legal borrar información de mi reporte de crédito?",
    answer: "Sí, es 100% legal bajo la Ley de Informe Justo de Crédito (FCRA). Tienes el derecho legal de disputar cualquier información que sea inexacta, obsoleta o que no pueda ser verificada por los burós de crédito. Si no pueden comprobarla, están obligados por ley a eliminarla."
  },
  {
    question: "¿En cuánto tiempo empezaré a ver resultados?",
    answer: "Aunque cada caso es único y no podemos garantizar tiempos exactos, la mayoría de nuestros clientes comienzan a ver cambios y eliminaciones en sus reportes dentro de los primeros 35 a 45 días después de enviar las primeras disputas."
  },
  {
    question: "¿Puedo aplicar si no tengo Número de Seguro Social (SSN)?",
    answer: "¡Por supuesto! Si tienes un ITIN (Número de Identificación Personal del Contribuyente), también tienes derecho a construir y reparar tu historial crediticio. Nosotros te guiaremos paso a paso."
  },
  {
    question: "¿Por qué debería contratar a un experto en lugar de hacerlo yo mismo?",
    answer: "Puedes hacerlo tú mismo, pero requiere mucho tiempo, conocimiento de leyes federales y paciencia lidiando con los burós. Un error en la forma de disputar puede validar la deuda en tu contra. Un experto sabe exactamente qué leyes citar y cómo presionar legalmente para obtener resultados rápidos y efectivos."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section" style={{ background: 'var(--color-surface)', position: 'relative', borderTop: '1px solid var(--color-border)' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 style={{ marginBottom: '1rem' }}>Preguntas <span className="text-gold">Frecuentes</span></h2>
          <p>Todo lo que necesitas saber antes de dar el siguiente paso.</p>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              style={{
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-md)',
                background: 'rgba(11, 21, 40, 0.5)',
                overflow: 'hidden'
              }}
            >
              <button 
                onClick={() => toggleOpen(index)}
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '1.5rem',
                  background: 'transparent',
                  border: 'none',
                  color: 'var(--text-primary)',
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  textAlign: 'left',
                  fontFamily: 'var(--font-body)'
                }}
              >
                {faq.question}
                <span style={{ 
                  color: 'var(--color-accent)', 
                  transform: openIndex === index ? 'rotate(45deg)' : 'rotate(0deg)',
                  transition: 'transform 0.3s ease',
                  fontSize: '1.5rem',
                  lineHeight: 1
                }}>
                  +
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div style={{ padding: '0 1.5rem 1.5rem 1.5rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
