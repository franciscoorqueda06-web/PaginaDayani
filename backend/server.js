require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Modelos
const AccessLead = require('./models/AccessLead');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:3000',
  'https://dccreditpro.com',
  'https://www.dccreditpro.com',
  process.env.FRONTEND_URL,
].filter(Boolean);


app.use(cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (e.g. mobile apps, curl)
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) return callback(null, true);
    callback(new Error('Not allowed by CORS'));
  },
  credentials: true,
}));
app.use(express.json());


// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Dayani Credit Pro Backend Running' });
});

// Mock Lead Endpoint
app.post('/api/leads', (req, res) => {
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    return res.status(400).json({ error: 'Faltan datos requeridos' });
  }
  res.status(201).json({ message: 'Cita agendada provisionalmente', data: { name, email, phone } });
});

// Access Endpoint (con email de confirmación)
app.post('/api/access', async (req, res) => {
  try {
    const { fullName, email, instagram } = req.body;

    if (!fullName || !email || !instagram) {
      return res.status(400).json({ error: 'Nombre, correo y perfil de Instagram son obligatorios' });
    }

    // Respondemos INMEDIATAMENTE para que el frontend no se quede "Enviando..."
    res.status(201).json({ message: 'Acceso concedido. Procesando en segundo plano.' });

    // 1. Guardar en MongoDB (en segundo plano)
    try {
      const newAccessLead = new AccessLead({ fullName, email, instagram });
      newAccessLead.save().catch(err => console.error('Error al guardar en MongoDB:', err));
    } catch (saveError) {
      console.error('Mongoose save initialization error:', saveError);
    }

    // 2. Enviar a Google Sheets (en segundo plano)
    if (process.env.GOOGLE_SHEETS_HOOK) {
      fetch(process.env.GOOGLE_SHEETS_HOOK, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fullName, email, instagram })
      })
        .then(() => console.log('✅ Lead enviado a Google Sheets'))
        .catch(sheetError => console.error('⚠️ Error al enviar a Google Sheets:', sheetError));
    }

  } catch (error) {
    console.error('Error general al procesar Access Lead:', error);
  }
});

// Database Connection
if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('✅ Conectado a MongoDB Atlas'))
    .catch(err => console.error('❌ Error de conexión a MongoDB:', err));
} else {
  console.log('⚠️ MONGODB_URI no definida. Base de datos no conectada.');
}

app.listen(PORT, () => {
  console.log(`🚀 Servidor backend corriendo en http://localhost:${PORT}`);
});
