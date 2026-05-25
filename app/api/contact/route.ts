import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body as {
      name:    string;
      email:   string;
      message: string;
    };

    // Basic validation
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

    // -----------------------------------------------------------------------
    // TODO: Integrate an email provider (Resend recommended).
    // 1. npm install resend
    // 2. Set RESEND_API_KEY in .env.local
    // 3. Uncomment the block below:
    //
    // import { Resend } from "resend";
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from:    "portfolio@yourdomain.com",
    //   to:      "kimx3129@gmail.com",
    //   subject: `Portfolio contact from ${name}`,
    //   text:    `Name: ${name}\nEmail: ${email}\n\n${message}`,
    // });
    // -----------------------------------------------------------------------

    console.log("Contact form submission:", { name, email, message });

    return NextResponse.json(
      { success: true, message: "Message received! I will get back to you soon." },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}
