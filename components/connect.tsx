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
    "h-10 bg-white border border-gray-300 focus:outline-none transition ease-in-out rounded-[5px] text-black text-base font-normal p-4";

  return (
    <section id="connect">
      <h2 className="font-display text-3xl text-white text-center sm:text-3xl lg:text-5xl p-10">
        Connect with me
      </h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto mt-8 mb-[200px] space-y-4 text-white text-base_l shadow-2xl shadow-white bg-gradient-to-b flex flex-col items-center p-4 rounded-3xl from-[#964734] to-[#0FA4AF]"
      >
        <div className="flex flex-col gap-2 w-full px-4">
          <label className="font-semibold">
            Full Name<span className="text-brand-1000 pl-1">*</span>
          </label>
          <input
            required
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            className={inputClass}
          />
        </div>

        <div className="flex flex-col gap-2 w-full px-4">
          <label className="font-semibold">
            Email<span className="text-brand-1000 pl-1">*</span>
          </label>
          <input
            required
            type="email"
            placeholder="your.email@example.com"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            className={inputClass}
          />
        </div>

        <div className="flex flex-col gap-2 w-full px-4">
          <label className="font-semibold">Subject</label>
          <input
            value={form.subject}
            onChange={(e) => update("subject", e.target.value)}
            className={inputClass}
          />
        </div>

        <div className="flex flex-col gap-2 w-full px-4">
          <label className="font-semibold">
            Message<span className="text-brand-1000 pl-1">*</span>
          </label>
          <textarea
            required
            rows={5}
            value={form.message}
            onChange={(e) => update("message", e.target.value)}
            className="h-30 bg-white border border-gray-300 focus:outline-none transition ease-in-out rounded-[5px] text-left align-top leading-normal resize-none text-black text-base font-extralight px-4 pt-2"
          />
        </div>

        <div className="flex flex-col items-center gap-3 pt-2">
          <button
            type="submit"
            disabled={status === "sending"}
            className="px-12 py-3 font-semibold bg-brand-900 hover:bg-brand-1000 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-full transition"
          >
            {status === "sending" ? "Sending…" : "Send"}
          </button>

          {status === "sent" && (
            <div className="flex items-center gap-3 bg-white text-brand-700 rounded-xl px-5 py-3 shadow-lg animate-soft-bounce">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-brand-teal text-white text-sm font-bold shrink-0">
                ✓
              </span>
              <span className="font-semibold text-sm">
                Message sent - I&apos;ll get back to you soon!
              </span>
            </div>
          )}

          {status === "error" && (
            <div className="flex items-center gap-3 bg-white text-brand-1000 rounded-xl px-5 py-3 shadow-lg">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-brand-1000 text-white text-sm font-bold shrink-0">
                !
              </span>
              <span className="font-semibold text-sm">{errorMsg}</span>
            </div>
          )}
        </div>
      </form>
    </section>
  );
};

export default Connect;
