import { createTransport } from 'nodemailer';
import { emailTemplate, IEmailTemplate } from './templates';

interface ISendMail {
  templateHtml: string;
  fromName: string;
  toEmail: string;
  toName?: string;
}

const transporter = createTransport({
  host: process.env.NODEMAILER_HOST,
  port: Number(process.env.NODEMAILER_PORT),
  secure: true,
  auth: {
    user: process.env.NODEMAILER_USER,
    pass: process.env.NODEMAILER_PASSWORD,
  },
});

export async function sendMail({ fromName, toEmail, templateHtml }: ISendMail) {
  const token = '';
  const info = await transporter.sendMail({
    from: fromName,
    to: toEmail,
    html: templateHtml,
  });
}
