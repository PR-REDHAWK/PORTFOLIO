"use client";

import { useState } from "react";
import { siteConfig } from "@/data/site";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedDirectly, setSubmittedDirectly] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message content is required.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    // Since no backend service is configured, launch the native mailto client
    // with pre-filled parameters and display clear feedback
    const recipient = siteConfig.contact.email || "arpitpriyanshupanwar098@gmail.com";
    const mailtoSubject = encodeURIComponent(
      `[Portfolio Inquiry] ${formData.subject.trim()}`
    );
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name.trim()}\nEmail: ${formData.email.trim()}\n\nMessage:\n${formData.message.trim()}`
    );

    const mailtoUrl = `mailto:${recipient}?subject=${mailtoSubject}&body=${mailtoBody}`;
    window.location.href = mailtoUrl;
    setSubmittedDirectly(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear field-specific error as user types
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <div className="border border-border bg-background-elevated p-6 sm:p-8 relative">
      {/* Top Header Label */}
      <div className="flex items-center justify-between pb-4 mb-6 border-b border-border/50">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent-crimson flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-accent-crimson inline-block" />
          Direct Dispatch
        </span>
        <span className="font-mono text-[10px] text-text-secondary/60 uppercase">
          Client-Verified
        </span>
      </div>

      {submittedDirectly ? (
        <div className="p-6 bg-background border border-border space-y-4 text-left animate-in fade-in duration-300">
          <div className="flex items-center gap-2 text-accent-crimson font-mono text-xs uppercase tracking-wider">
            <span className="w-2 h-2 bg-accent-crimson rounded-[1px]" />
            Mail Client Prepared
          </div>
          <p className="text-sm text-text-primary font-light leading-relaxed">
            Your system email client has been prepared with your message payload. If your client didn&apos;t open automatically, you can send your message directly to:
          </p>
          <div className="p-3 bg-background-elevated border border-border/60 font-mono text-xs text-accent-crimson select-all break-all">
            {siteConfig.contact.email}
          </div>
          <button
            type="button"
            onClick={() => setSubmittedDirectly(false)}
            className="font-mono text-xs uppercase tracking-wider text-text-secondary hover:text-text-primary transition-colors pt-2 underline underline-offset-4 cursor-pointer"
          >
            ← Modify or Resend Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          {/* Note regarding backend status */}
          <div className="p-3 bg-background/80 border border-border/40 text-[11px] font-mono text-text-secondary/80 flex items-start gap-2">
            <span className="text-accent-crimson font-bold">ℹ</span>
            <span>
              Submitting triggers your native email client with pre-filled headers directly to {siteConfig.contact.email}.
            </span>
          </div>

          {/* Name & Email Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Name */}
            <div className="space-y-1.5 text-left">
              <label
                htmlFor="contact-name"
                className="block font-mono text-xs uppercase tracking-wider text-text-secondary"
              >
                Name <span className="text-accent-crimson">*</span>
              </label>
              <input
                type="text"
                id="contact-name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "name-error" : undefined}
                className={`w-full px-3.5 py-2.5 bg-background border text-sm text-text-primary placeholder:text-text-secondary/40 focus:outline-hidden focus:border-accent-crimson transition-colors rounded-[1px] ${
                  errors.name ? "border-accent-crimson" : "border-border/80"
                }`}
              />
              {errors.name && (
                <p id="name-error" className="font-mono text-[11px] text-accent-crimson">
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="space-y-1.5 text-left">
              <label
                htmlFor="contact-email"
                className="block font-mono text-xs uppercase tracking-wider text-text-secondary"
              >
                Email <span className="text-accent-crimson">*</span>
              </label>
              <input
                type="email"
                id="contact-email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "email-error" : undefined}
                className={`w-full px-3.5 py-2.5 bg-background border text-sm text-text-primary placeholder:text-text-secondary/40 focus:outline-hidden focus:border-accent-crimson transition-colors rounded-[1px] ${
                  errors.email ? "border-accent-crimson" : "border-border/80"
                }`}
              />
              {errors.email && (
                <p id="email-error" className="font-mono text-[11px] text-accent-crimson">
                  {errors.email}
                </p>
              )}
            </div>
          </div>

          {/* Subject */}
          <div className="space-y-1.5 text-left">
            <label
              htmlFor="contact-subject"
              className="block font-mono text-xs uppercase tracking-wider text-text-secondary"
            >
              Subject <span className="text-accent-crimson">*</span>
            </label>
            <input
              type="text"
              id="contact-subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Project Collaboration / Opportunity / Technical Inquiry"
              aria-invalid={Boolean(errors.subject)}
              aria-describedby={errors.subject ? "subject-error" : undefined}
              className={`w-full px-3.5 py-2.5 bg-background border text-sm text-text-primary placeholder:text-text-secondary/40 focus:outline-hidden focus:border-accent-crimson transition-colors rounded-[1px] ${
                errors.subject ? "border-accent-crimson" : "border-border/80"
              }`}
            />
            {errors.subject && (
              <p id="subject-error" className="font-mono text-[11px] text-accent-crimson">
                {errors.subject}
              </p>
            )}
          </div>

          {/* Message */}
          <div className="space-y-1.5 text-left">
            <label
              htmlFor="contact-message"
              className="block font-mono text-xs uppercase tracking-wider text-text-secondary"
            >
              Message <span className="text-accent-crimson">*</span>
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project, idea, or questions..."
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? "message-error" : undefined}
              className={`w-full px-3.5 py-2.5 bg-background border text-sm text-text-primary placeholder:text-text-secondary/40 focus:outline-hidden focus:border-accent-crimson transition-colors resize-y rounded-[1px] ${
                errors.message ? "border-accent-crimson" : "border-border/80"
              }`}
            />
            {errors.message && (
              <p id="message-error" className="font-mono text-[11px] text-accent-crimson">
                {errors.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full font-mono text-xs uppercase tracking-[0.2em] py-3.5 px-6 bg-accent-crimson hover:bg-accent-crimson/90 text-white font-medium transition-colors flex items-center justify-center gap-2 cursor-pointer focus:outline-hidden focus-visible:ring-1 focus-visible:ring-accent-crimson rounded-[1px]"
          >
            <span>Dispatch Message</span>
            <span aria-hidden="true">→</span>
          </button>
        </form>
      )}
    </div>
  );
}

