import { NextResponse } from "next/server";

const FIELDS = ["name", "city", "country", "phone"] as const;

/**
 * Receives the boarding-pass form.
 * TODO (developer): forward `lead` to email (e.g. Resend / Nodemailer), a CRM,
 * Google Sheets or WhatsApp Business — whichever Pentawise uses.
 */
export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const lead: Record<string, string> = {};
  for (const field of FIELDS) {
    const raw = body[field];
    const value = typeof raw === "string" ? raw.trim() : "";
    if (!value || value.length > 120) {
      return NextResponse.json({ ok: false, error: `Please provide a valid ${field}.` }, { status: 422 });
    }
    lead[field] = value;
  }

  console.info("New consultation request", { ...lead, receivedAt: new Date().toISOString() });
  return NextResponse.json({ ok: true });
}
