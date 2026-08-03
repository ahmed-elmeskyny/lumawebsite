import { NextResponse } from "next/server";
import { z } from "zod";

/**
 * Newsletter subscription endpoint.
 *
 * Provider-agnostic: set NEWSLETTER_WEBHOOK_URL to any service that
 * accepts a JSON POST (Mailchimp, Klaviyo, Brevo, Zapier, Formspree...)
 * and subscribers are forwarded there.
 *
 * If the variable is not set, the submission is validated and logged but
 * NOT stored anywhere. That is fine for local development; connect a
 * provider before launch or addresses will be discarded.
 */
const subscribeSchema = z.object({
  email: z
    .string({ error: "Enter your email address." })
    .trim()
    .toLowerCase()
    .email("Enter a valid email address."),
});

export async function POST(request: Request) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: "We could not read that request." },
      { status: 400 },
    );
  }

  const parsed = subscribeSchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json(
      {
        ok: false,
        message:
          parsed.error.issues[0]?.message ?? "Enter a valid email address.",
      },
      { status: 400 },
    );
  }

  const { email } = parsed.data;
  const webhook = process.env.NEWSLETTER_WEBHOOK_URL;

  if (!webhook) {
    console.warn(
      `[newsletter] NEWSLETTER_WEBHOOK_URL is not set — "${email}" was not stored.`,
    );
    return NextResponse.json({ ok: true, stored: false });
  }

  try {
    const response = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, source: "luma-storefront" }),
    });
    if (!response.ok) {
      throw new Error(`Provider responded ${response.status}`);
    }
  } catch (error) {
    console.error("[newsletter] provider request failed", error);
    return NextResponse.json(
      { ok: false, message: "We could not add you right now. Please try again." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true, stored: true });
}
