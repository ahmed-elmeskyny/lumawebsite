"use client";

import { useId, useState } from "react";
import Link from "next/link";

type Status = "idle" | "loading" | "success" | "error";

/**
 * Newsletter signup. Posts to /api/newsletter, which forwards to whatever
 * provider is configured via NEWSLETTER_WEBHOOK_URL.
 */
export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const inputId = useId();

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");
    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = (await response.json()) as {
        ok: boolean;
        message?: string;
      };
      if (!response.ok || !data.ok) {
        setStatus("error");
        setMessage(data.message ?? "We could not add you right now.");
        return;
      }
      setStatus("success");
      setMessage("You’re on the list.");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("We could not add you right now. Please try again.");
    }
  }

  return (
    <form onSubmit={onSubmit} noValidate className="w-full max-w-xl">
      <label
        htmlFor={inputId}
        className="block text-sm font-bold uppercase tracking-[0.14em] text-onyx"
      >
        Join the sock party
      </label>
      <p className="mt-1 text-onyx/75">
        New drops, new designs, and the occasional silly email.
      </p>

      <div className="mt-4 flex flex-col gap-2 sm:flex-row">
        <input
          id={inputId}
          type="email"
          name="email"
          required
          autoComplete="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            if (status !== "idle") setStatus("idle");
          }}
          placeholder="you@example.com"
          aria-describedby={`${inputId}-status`}
          aria-invalid={status === "error"}
          className="min-h-13 flex-1 rounded-full border-2 border-onyx/20 bg-luma-white px-5 text-base text-onyx placeholder:text-onyx/45 focus:border-onyx focus:outline-none"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="min-h-13 shrink-0 rounded-full bg-onyx px-7 text-base font-semibold text-luma-white transition-colors hover:bg-celtic-blue disabled:opacity-60"
        >
          {status === "loading" ? "Joining…" : "Subscribe"}
        </button>
      </div>

      <p
        id={`${inputId}-status`}
        aria-live="polite"
        className={`mt-2 min-h-5 text-sm ${
          status === "error" ? "text-orange-red" : "text-onyx/80"
        }`}
      >
        {message}
      </p>

      <p className="mt-1 text-xs text-onyx/65">
        By subscribing you agree to our{" "}
        <Link href="/privacy" className="underline underline-offset-2">
          privacy policy
        </Link>
        . Unsubscribe any time.
      </p>
    </form>
  );
}
