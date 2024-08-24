import express from 'express';
import { config } from 'dotenv';
import cors from 'cors';
import nodemailer from 'nodemailer';

// Load environment variables
config({ path: './config.env' });

const app = express();

// Configure CORS
app.use(cors({
  origin: [process.env.FRONTEND_URL],
  methods: ['POST'],
  credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Create Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  secure: true, // Use true for port 465, false for port 587
  port: 465, // Port for SSL
});

// Function to send email
const sendEmail = ({ email, subject, message, userEmail }) => {
  const mailOptions = {
    from: email,
    to: process.env.SMTP_MAIL,
    subject,
    text: `Message from: ${userEmail}\n\n${message}`,
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return reject(error);
      }
      resolve(info);
    });
  });
};

// Route to handle email sending
app.post('/send/mail', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: 'Please provide all details',
    });
  }

  try {
    await sendEmail({
      email: process.env.SMTP_MAIL,
      subject: 'GYM WEBSITE CONTACT',
      message,
      userEmail: email,
    });

    res.status(200).json({
      success: true,
      message: 'Message Sent Successfully.',
    });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({
      success: false,
      message: 'Internal Server Error',
    });
  }
});

// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}`);
});
