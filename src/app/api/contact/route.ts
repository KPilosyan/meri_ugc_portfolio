import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, brand, budget, message } = body;

    console.log("📥 Incoming Form Submission:", { name, email, brand, budget });

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("❌ ERROR: RESEND_API_KEY is missing from process.env!");
      return NextResponse.json({ error: "Missing API Key" }, { status: 500 });
    }

    const resend = new Resend(apiKey);

    const { data, error } = await resend.emails.send({
      from: "UGC Portfolio <contact@maryzatikian.com>",
      to: [process.env.CONTACT_EMAIL || "maryzatikian@gmail.com"],
      subject: `New UGC Inquiry from ${brand || name}`,
      replyTo: email,
      html: `
        <div style="font-family: sans-serif; padding: 24px; color: #2A1E20; background-color: #F4EDE4; border-radius: 8px;">
          <h2 style="color: #943248; margin-bottom: 16px;">New UGC Brand Inquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Brand / Company:</strong> ${brand || "N/A"}</p>
          <p><strong>Budget Range:</strong> ${budget || "Not specified"}</p>
          <hr style="border: 0; border-top: 1px solid rgba(148, 50, 72, 0.2); margin: 20px 0;" />
          <p><strong>Project Details / Message:</strong></p>
          <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
        </div>
      `,
    });

    if (error) {
      console.error("❌ RESEND API ERROR:", error);
      return NextResponse.json({ error }, { status: 400 });
    }

    console.log("✅ EMAIL SENT SUCCESSFULLY:", data);
    return NextResponse.json({ success: true, data });
  } catch (err) {
    console.error("❌ UNCAUGHT SERVER ERROR:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}