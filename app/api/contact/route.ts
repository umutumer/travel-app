import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message, recaptcha } = await req.json();
    const recaptchaResponse = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptcha}`,
      { method: "POST" }
    );
    const recaptchaResult = await recaptchaResponse.json();

    if (!recaptchaResult.success) {
      return NextResponse.json(
        { message: "reCAPTCHA verification failed." },
        { status: 400 }
      );
    }
    const emailResponse = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "utumer6@gmail.com",
      subject: "New Contact Form Submission",
      html: `
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong> ${message}</p>
            `,
    });
    return NextResponse.json({ message: "Message Success!" }, { status: 200 });
  } catch (error) {
    
    return (
      NextResponse.json({ success: false, error: "Failed to send email" }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
