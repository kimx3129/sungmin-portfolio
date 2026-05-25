import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const TO_EMAIL   = "kimx3129@gmail.com";
const FROM_EMAIL = "onboarding@resend.dev"; // free tier sender (no domain needed)

export async function POST(request: NextRequest) {
  // Lazy-init so the build doesn't fail when RESEND_API_KEY is absent
  // Strip BOM (U+FEFF = 65279) that Windows PowerShell may inject via piped env var input
  const rawKey = process.env.RESEND_API_KEY ?? "";
  const apiKey = (rawKey.charCodeAt(0) === 0xFEFF ? rawKey.slice(1) : rawKey).trim();

  if (!apiKey) {
    return NextResponse.json(
      { error: "Email service not configured. Please contact me directly at kimx3129@gmail.com" },
      { status: 503 }
    );
  }
  const resend = new Resend(apiKey);

  try {
    const body = await request.json();
    const { name, email, message } = body as {
      name:    string;
      email:   string;
      message: string;
    };

    // -- Validation -----------------------------------------------------------
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    // -- Send email via Resend ------------------------------------------------
    const { error } = await resend.emails.send({
      from:    FROM_EMAIL,
      to:      TO_EMAIL,
      replyTo: email,
      subject: `[Portfolio] New message from ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:560px;margin:0 auto;background:#0a0a0a;color:#ffffff;border-radius:12px;padding:32px;">
          <h2 style="color:#818cf8;margin:0 0 24px;">New Portfolio Contact</h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr>
              <td style="color:#a1a1aa;padding:8px 0;width:80px;vertical-align:top;">Name</td>
              <td style="color:#ffffff;padding:8px 0;font-weight:600;">${name}</td>
            </tr>
            <tr>
              <td style="color:#a1a1aa;padding:8px 0;vertical-align:top;">Email</td>
              <td style="padding:8px 0;">
                <a href="mailto:${email}" style="color:#818cf8;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="color:#a1a1aa;padding:8px 0;vertical-align:top;">Message</td>
              <td style="color:#ffffff;padding:8px 0;white-space:pre-wrap;">${message}</td>
            </tr>
          </table>
          <hr style="border:none;border-top:1px solid #27272a;margin:24px 0;" />
          <p style="color:#a1a1aa;font-size:12px;margin:0;">
            Sent via <a href="https://sungmin-kim-portfolio.dev" style="color:#818cf8;">sungmin-kim-portfolio.dev</a>
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send message. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Message sent! I'll get back to you soon." },
      { status: 200 }
    );
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}
