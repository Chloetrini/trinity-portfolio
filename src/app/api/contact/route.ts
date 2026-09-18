import { NextResponse } from "next/server";
import { Resend } from "resend";

import { EMAIL } from "@/lib/constants";

export const dynamic = "force-dynamic";

interface ContactBody {
  name?: string;
  email?: string;
  message?: string;
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  let body: ContactBody;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();
  const message = (body.message ?? "").trim();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Name, email and message are all required." }, { status: 400 });
  }
  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "That email address doesn't look right." }, { status: 400 });
  }
  if (message.length > 5000) {
    return NextResponse.json({ error: "Message is too long." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set — contact form cannot send email.");
    return NextResponse.json(
      { error: "Email sending isn't configured yet. Please email me directly instead." },
      { status: 500 },
    );
  }

  const resend = new Resend(apiKey);

  // Resend's default onboarding@resend.dev sender can only deliver to the
  // email address the Resend account itself was signed up with, unless a
  // custom domain is verified (see README "Contact form email"). Set
  // CONTACT_FROM / CONTACT_TO once a domain is verified.
  const from = process.env.CONTACT_FROM ?? "Portfolio contact form <onboarding@resend.dev>";
  const to = process.env.CONTACT_TO ?? EMAIL;

  try {
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `Portfolio enquiry from ${name}`,
      text: `${message}\n\n— ${name} (${email})`,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Couldn't send that — please try again shortly." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form send failed:", err);
    return NextResponse.json({ error: "Couldn't send that — please try again shortly." }, { status: 500 });
  }
}
