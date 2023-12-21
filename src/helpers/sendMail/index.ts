import { createTransport } from 'nodemailer';
import { ISendMail } from './type';

const transporter = createTransport({
  host: process.env.NODEMAILER_HOST,
  port: Number(process.env.NODEMAILER_PORT),
  secure: true,
  auth: {
    user: process.env.NODEMAILER_USER,
    pass: process.env.NODEMAILER_PASSWORD,
  },
});

export async function sendMail({
  fromName,
  toEmail,
  template: { html, subject },
}: ISendMail) {
  try {
    await transporter.sendMail({
      from: fromName,
      to: toEmail,
      subject,
      html,
    });

  } catch (e) {
    throw e;
  }
}
