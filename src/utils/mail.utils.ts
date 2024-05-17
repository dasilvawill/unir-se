import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

const transporter = nodemailer.createTransport({
  host: process.env.SYSTEM_MAIL_HOST,
  port: Number(process.env.SYSTEM_MAIL_PORT),
  secure: Boolean(process.env.SYSTME_MAIL_SECURE),
  auth: {
    user: process.env.SYSTEM_MAIL_USERNAME,
    pass: process.env.SYSTEM_MAIL_PASSWORD,
  },
});

type SendEmailDto = {
  sender: Mail.Address;
  receipients: Mail.Address[];
  subject: string;
  message: string;
};

export const sendMail = async (dto: SendEmailDto) => {
  const { sender, receipients, subject, message } = dto;
  return await transporter.sendMail({
    from: sender,
    to: receipients,
    subject,
    html: message,
    text: message,
  });
};
