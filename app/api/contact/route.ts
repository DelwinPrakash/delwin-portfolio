import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields (name, email, message) are required." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_EMAIL || "dev.delwin@gmail.com";

    const resend = new Resend(apiKey);

    const data = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: toEmail,
      subject: `New Portfolio Message from ${name}`,
      replyTo: email,
      html: `
        <div style="font-family: sans-serif; padding: 20px; border: 4px solid black; background-color: #FDF6E2; color: black; max-width: 600px; margin: 0 auto;">
          <h2 style="border-bottom: 3px solid black; padding-bottom: 10px; margin-top: 0; text-transform: uppercase; font-size: 20px;">New Portfolio Contact</h2>
          <p style="font-size: 14px; margin: 10px 0;"><strong>Name:</strong> ${name}</p>
          <p style="font-size: 14px; margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #2563EB; text-decoration: underline;">${email}</a></p>
          <div style="margin-top: 20px; padding: 15px; border: 2px solid black; background-color: white;">
            <p style="margin-top: 0; font-weight: bold; text-transform: uppercase; font-size: 12px; letter-spacing: 0.05em;">Message Body:</p>
            <p style="white-space: pre-wrap; margin-bottom: 0; font-size: 14px; line-height: 1.5;">${message}</p>
          </div>
        </div>
      `,
    });

    if (data.error) {
      return NextResponse.json({ error: data.error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data.data?.id });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Something went wrong." },
      { status: 500 }
    );
  }
}
