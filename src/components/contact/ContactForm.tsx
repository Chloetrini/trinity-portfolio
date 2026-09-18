"use client";

import { useState, type FormEvent } from "react";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface FormState {
  name: string;
  email: string;
  message: string;
}

const EMPTY: FormState = { name: "", email: "", message: "" };

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error ?? "Something went wrong — try again in a moment.");
      }

      setStatus("success");
      setForm(EMPTY);
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong — try again in a moment.");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-3 rounded-[14px] border border-accent/30 bg-accent/5 px-6 py-12 text-center">
        <CheckCircle2 size={28} className="text-accent" />
        <p className="text-[15px] font-medium">Message sent — thanks for reaching out.</p>
        <p className="text-sm text-muted-foreground">I usually reply within a day or two.</p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className={cn(buttonVariants({ variant: "ghost", size: "sm" }), "mt-2")}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4.5">
        <label htmlFor="name" className="mb-2 block font-mono text-xs tracking-[0.05em] text-faint uppercase">
          Name
        </label>
        <input
          id="name"
          required
          value={form.name}
          onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
          placeholder="Your name"
          className="w-full rounded-[10px] border border-border bg-card px-3.5 py-3.5 text-[14.5px] outline-none focus:border-accent"
        />
      </div>
      <div className="mb-4.5">
        <label htmlFor="email" className="mb-2 block font-mono text-xs tracking-[0.05em] text-faint uppercase">
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          value={form.email}
          onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
          placeholder="you@email.com"
          className="w-full rounded-[10px] border border-border bg-card px-3.5 py-3.5 text-[14.5px] outline-none focus:border-accent"
        />
      </div>
      <div className="mb-4.5">
        <label htmlFor="message" className="mb-2 block font-mono text-xs tracking-[0.05em] text-faint uppercase">
          Message
        </label>
        <textarea
          id="message"
          required
          value={form.message}
          onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
          placeholder="What are you building?"
          rows={5}
          className="w-full resize-y rounded-[10px] border border-border bg-card px-3.5 py-3.5 text-[14.5px] outline-none focus:border-accent"
        />
      </div>

      {status === "error" && (
        <div className="mb-4.5 flex items-start gap-2 rounded-[10px] border border-[#f47174]/30 bg-[#f47174]/10 px-3.5 py-3 text-[13.5px] text-[#f47174]">
          <AlertCircle size={16} className="mt-0.5 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      <button type="submit" disabled={status === "submitting"} className={cn(buttonVariants())}>
        {status === "submitting" ? (
          <>
            <Loader2 size={15} className="animate-spin" /> Sending…
          </>
        ) : (
          "Send message →"
        )}
      </button>
    </form>
  );
}
