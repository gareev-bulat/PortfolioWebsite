"use client";

import { useState, useEffect } from "react";

const Connect = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (status === "sent" || status === "error") {
      const timer = setTimeout(() => setStatus("idle"), 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const update = (field: string, value: string) =>
    setForm((f) => ({ ...f, [field]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error || "Something went wrong.");
        setStatus("error");
        return;
      }

      setStatus("sent");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  };

  const inputClass =
    "w-full border-0 border-b-[1.5px] border-ink/40 bg-transparent py-3 text-xl font-normal text-ink outline-none transition focus:border-burnt";

  return (
    <section
      id="contact"
      className="mx-3 mt-4 flex flex-wrap gap-14 rounded-[32px] bg-paper px-5 py-20 text-ink sm:mx-7 lg:px-14"
    >
      <div className="min-w-0 flex-[1_1_460px]">
        <div className="label">05 / Contact</div>
        <h2 className="mt-3 font-display text-[clamp(48px,7vw,104px)] font-medium leading-[0.95] tracking-[-0.03em]">
          Let&apos;s talk<span className="text-burnt">.</span>
        </h2>
        <p className="mt-7 max-w-[460px] font-normal">
          Open to conversations about AI engineering, mobile and co-ops. I read every message.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex min-w-0 flex-[1_1_420px] flex-col gap-7 self-end">
        <div>
          <label htmlFor="c-name" className="label">
            Full name<span className="pl-1 text-burnt">*</span>
          </label>
          <input
            id="c-name"
            required
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="c-email" className="label">
            Email<span className="pl-1 text-burnt">*</span>
          </label>
          <input
            id="c-email"
            required
            type="email"
            placeholder="your.email@example.com"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="c-subject" className="label">Subject</label>
          <input
            id="c-subject"
            value={form.subject}
            onChange={(e) => update("subject", e.target.value)}
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="c-message" className="label">
            Message<span className="pl-1 text-burnt">*</span>
          </label>
          <textarea
            id="c-message"
            required
            rows={4}
            value={form.message}
            onChange={(e) => update("message", e.target.value)}
            className={`${inputClass} resize-none`}
          />
        </div>

        <div className="flex flex-col items-start gap-4">
          <button
            type="submit"
            disabled={status === "sending"}
            className="min-h-[56px] rounded-full bg-ink px-8 font-mono text-sm tracking-normal text-paper transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {status === "sending" ? "Sending…" : "Send message →"}
          </button>

          {status === "sent" && (
            <div role="status" className="flex items-center gap-3 rounded-xl bg-ink px-5 py-3 text-paper">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-ink">
                ✓
              </span>
              <span className="text-sm font-medium">Message sent - I&apos;ll get back to you soon!</span>
            </div>
          )}

          {status === "error" && (
            <div role="alert" className="flex items-center gap-3 rounded-xl border border-burnt px-5 py-3 text-burnt">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-burnt text-sm font-bold text-paper">
                !
              </span>
              <span className="text-sm font-medium">{errorMsg}</span>
            </div>
          )}
        </div>
      </form>
    </section>
  );
};

export default Connect;
