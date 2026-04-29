import nodemailer from "nodemailer";

export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, error: "Method not allowed" });
  }

  // CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  const { name, email, message } = req.body;

  // Validate
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: "All fields are required." });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"${name}" <${process.env.EMAIL_USER}>`,
    replyTo: email,
    to: process.env.EMAIL_USER,
    subject: `Portfolio Contact — ${name}`,
    html: `
      <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0f0f14; border-radius: 16px; overflow: hidden; border: 1px solid #1e1e2e;">
        <div style="background: linear-gradient(135deg, #6366f1, #8b5cf6); padding: 32px 24px;">
          <h1 style="margin: 0; color: #fff; font-size: 22px; font-weight: 600;">📩 New Portfolio Message</h1>
        </div>
        <div style="padding: 28px 24px; color: #e2e8f0;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; color: #94a3b8; font-size: 13px; width: 80px; vertical-align: top;">From</td>
              <td style="padding: 10px 0; font-size: 15px; font-weight: 500;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #94a3b8; font-size: 13px; vertical-align: top;">Email</td>
              <td style="padding: 10px 0; font-size: 15px;">
                <a href="mailto:${email}" style="color: #818cf8; text-decoration: none;">${email}</a>
              </td>
            </tr>
          </table>
          <div style="margin-top: 20px; padding: 20px; background: #1a1a2e; border-radius: 12px; border-left: 3px solid #6366f1;">
            <p style="margin: 0 0 8px; color: #94a3b8; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Message</p>
            <p style="margin: 0; font-size: 15px; line-height: 1.7; white-space: pre-wrap;">${message}</p>
          </div>
        </div>
        <div style="padding: 16px 24px; border-top: 1px solid #1e1e2e; text-align: center;">
          <p style="margin: 0; color: #475569; font-size: 12px;">Sent from your portfolio contact form</p>
        </div>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Failed to send email:", error.message);
    return res.status(500).json({ success: false, error: "Failed to send email. Please try again." });
  }
}
