// File: backend/utils/sendEmail.js
import nodemailer from 'nodemailer';

export const sendResetEmail = async (email, resetLink) => {
  const transporter = nodemailer.createTransport({
    service: 'Gmail', // or any SMTP service
    auth: {
      user: process.env.EMAIL_USER, // your email address
      pass: process.env.EMAIL_PASS  // your email password or app password
    }
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Password Reset Link',
    html: `<p>You requested a password reset.</p>
           <p>Click <a href="${resetLink}">here</a> to reset your password. This link is valid for 1 hour.</p>`
  };

  await transporter.sendMail(mailOptions);
};
