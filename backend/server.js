require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const nodemailer = require('nodemailer');

// Modelos
const AccessLead = require('./models/AccessLead');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:3000',
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


// --- Nodemailer Transporter (Gmail) ---
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,   // App Password (no la contraseña real de Gmail)
  },
});

// --- Helper: Enviar email de confirmación ---
async function sendConfirmationEmail(fullName, email) {
  const mailOptions = {
    from: `"Dayani Credit Pro" <${process.env.GMAIL_USER}>`,
    to: email,
    subject: '✅ ¡Tu diagnóstico gratuito está confirmado!',
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body style="margin:0;padding:0;background:#020617;font-family:'Segoe UI',sans-serif;">
        <div style="max-width:600px;margin:0 auto;padding:40px 20px;">
          
          <!-- Header -->
          <div style="text-align:center;margin-bottom:32px;">
            <div style="display:inline-flex;align-items:center;justify-content:center;width:56px;height:56px;background:linear-gradient(135deg,#c88d94,#a05060);border-radius:12px;margin-bottom:16px;">
              <span style="color:#000;font-weight:900;font-size:1.4rem;">D</span>
            </div>
            <h1 style="color:#ffffff;font-size:1.4rem;margin:0;">Dayani <span style="color:#c88d94;">Credit Pro</span></h1>
          </div>

          <!-- Card -->
          <div style="background:rgba(255,255,255,0.04);border:1px solid rgba(200,141,148,0.3);border-radius:20px;padding:40px 32px;text-align:center;">
            
            <!-- Check icon -->
            <div style="width:72px;height:72px;background:rgba(16,185,129,0.15);border:2px solid #10b981;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 24px auto;">
              <span style="font-size:2rem;">✓</span>
            </div>

            <h2 style="color:#ffffff;font-size:1.8rem;margin:0 0 12px 0;">
              ¡Hola, ${fullName}! 🎉
            </h2>
            <p style="color:#94a3b8;font-size:1rem;margin:0 0 32px 0;line-height:1.6;">
              Tu registro fue recibido exitosamente. Estamos reservando tu lugar para el diagnóstico crediticio gratuito.
            </p>

            <!-- What to expect -->
            <div style="background:rgba(200,141,148,0.08);border:1px solid rgba(200,141,148,0.2);border-radius:12px;padding:24px;margin-bottom:32px;text-align:left;">
              <p style="color:#c88d94;font-weight:600;margin:0 0 16px 0;font-size:0.85rem;letter-spacing:1px;text-transform:uppercase;">¿Qué sigue?</p>
              <div style="display:flex;gap:12px;margin-bottom:12px;align-items:flex-start;">
                <span style="color:#c88d94;font-size:1.2rem;min-width:24px;">📅</span>
                <p style="color:#e2e8f0;margin:0;font-size:0.95rem;line-height:1.5;">Selecciona el día y hora que mejor te convenga en el calendario de la página</p>
              </div>
              <div style="display:flex;gap:12px;margin-bottom:12px;align-items:flex-start;">
                <span style="color:#c88d94;font-size:1.2rem;min-width:24px;">💻</span>
                <p style="color:#e2e8f0;margin:0;font-size:0.95rem;line-height:1.5;">La consulta es 100% online — te enviaremos el link de la videollamada</p>
              </div>
              <div style="display:flex;gap:12px;align-items:flex-start;">
                <span style="color:#c88d94;font-size:1.2rem;min-width:24px;">🚀</span>
                <p style="color:#e2e8f0;margin:0;font-size:0.95rem;line-height:1.5;">En 15 minutos tendrás el plan exacto para subir tu score crediticio</p>
              </div>
            </div>

            <!-- CTA Button -->
            <a href="${process.env.FRONTEND_URL || 'http://localhost:5173'}/#agendar" 
               style="display:inline-block;background:linear-gradient(135deg,#c88d94,#a05060);color:#ffffff;text-decoration:none;padding:14px 36px;border-radius:50px;font-weight:700;font-size:1rem;margin-bottom:24px;">
              Ver mi Calendario 📅
            </a>

            <p style="color:#64748b;font-size:0.85rem;margin:0;line-height:1.6;">
              ¿Preguntas? Escríbenos a <a href="mailto:${process.env.GMAIL_USER}" style="color:#c88d94;">${process.env.GMAIL_USER}</a>
            </p>
          </div>

          <!-- Footer -->
          <div style="text-align:center;margin-top:32px;">
            <p style="color:#475569;font-size:0.8rem;margin:0;">
              © 2025 Dayani Credit Pro. Todos los derechos reservados.<br>
              Este correo fue enviado porque solicitaste información en nuestro sitio web.
            </p>
          </div>

        </div>
      </body>
      </html>
    `,
  };

  await transporter.sendMail(mailOptions);
}

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

    if (!fullName || !email) {
      return res.status(400).json({ error: 'Nombre y correo son obligatorios' });
    }

    // 1. Guardar en MongoDB
    const newAccessLead = new AccessLead({ fullName, email, instagram: instagram || '' });
    await newAccessLead.save();

    // 2. Enviar email de confirmación al usuario
    if (process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD) {
      try {
        await sendConfirmationEmail(fullName, email);
        console.log(`✅ Email de confirmación enviado a ${email}`);
      } catch (mailError) {
        // No bloqueamos el flujo si el email falla
        console.error('⚠️ Error al enviar email de confirmación:', mailError.message);
      }
    }

    // 3. Enviar a Google Sheets
    if (process.env.GOOGLE_SHEETS_HOOK) {
      try {
        await fetch(process.env.GOOGLE_SHEETS_HOOK, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ fullName, email, instagram })
        });
        console.log('✅ Lead enviado a Google Sheets');
      } catch (sheetError) {
        console.error('⚠️ Error al enviar a Google Sheets:', sheetError);
      }
    }

    res.status(201).json({ message: 'Acceso concedido y guardado exitosamente' });
  } catch (error) {
    console.error('Error al guardar Access Lead:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
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
