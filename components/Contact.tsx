"use client";

import React, { useState } from "react";
import {
  Mail,
  Send,
  Download,
  CheckCircle2,
  AlertCircle,
  Copy,
  Sparkles,
  ArrowUpRight,
  MessageSquare,
  Clock,
  ShieldCheck,
} from "lucide-react";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import confetti from "canvas-confetti";
import { PERSONAL_INFO } from "@/lib/constants";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errors.name = "Please provide your name (at least 2 characters).";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errors.email = "Please provide a valid email address.";
    }

    if (!formData.subject.trim() || formData.subject.trim().length < 2) {
      errors.subject = "Please enter a subject for your message.";
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errors.message = "Please write a message with at least 10 characters.";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    if (formErrors[name]) {
      setFormErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    setSubmitSuccess(null);

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit message.");
      }

      // Success
      setSubmitSuccess(data.message || "Thank you! Your message has been sent.");
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Confetti celebration
      try {
        confetti({
          particleCount: 80,
          spread: 80,
          origin: { y: 0.6 },
          colors: ["#4F46E5", "#06B6D4", "#7C3AED", "#10B981"],
        });
      } catch {
        // Fallback
      }
    } catch (err: any) {
      setSubmitError(
        err.message || "Could not deliver your message right now. Please try again or reach out directly via LinkedIn."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-[#0B1120] overflow-hidden">
      {/* Background glow */}
      <div className="aurora-bg top-[20%] left-[-10%] w-[500px] h-[500px] bg-indigo-700/15" />
      <div className="aurora-bg bottom-[10%] right-[-10%] w-[500px] h-[500px] bg-cyan-700/15" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold tracking-wider uppercase mb-3">
            <MessageSquare className="w-3.5 h-3.5 text-cyan-400" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Let&apos;s Connect and Grow Together
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed">
            Interested in discussing an entry-level digital marketing opening, freelance project, or collaboration? Send a message and let&apos;s talk.
          </p>
        </div>

        {/* 2-Column Contact Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Info & Social Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Quick Contact Card */}
            <div className="p-7 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
              <h3 className="text-xl font-bold text-white mb-2">Direct Contact</h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                I am actively seeking entry-level opportunities as a Digital Marketing Executive, SEO Executive, or Social Media Executive.
              </p>

              {/* Email Box */}
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 mb-4 flex items-center justify-between">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="truncate">
                    <div className="text-[10px] text-slate-400 uppercase font-semibold">Email Address</div>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-xs sm:text-sm font-medium text-white hover:text-cyan-300 transition-colors truncate block"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors shrink-0 ml-2"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* LinkedIn Box */}
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-indigo-500/40 transition-all mb-4 flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0">
                    <LinkedInIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase font-semibold">LinkedIn Profile</div>
                    <div className="text-xs sm:text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors flex items-center gap-1">
                      <span>Connect on LinkedIn</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </a>

              {/* Response Time & Transparency */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="flex items-center gap-1.5 text-cyan-300 text-xs font-semibold mb-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Quick Response</span>
                  </div>
                  <div className="text-[11px] text-slate-400">Within 24 business hours</div>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="flex items-center gap-1.5 text-emerald-300 text-xs font-semibold mb-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Honest Fresher</span>
                  </div>
                  <div className="text-[11px] text-slate-400">Authentic capabilities</div>
                </div>
              </div>

            </div>

            {/* Resume Download Callout */}
            <div className="p-6 rounded-3xl bg-gradient-to-r from-indigo-500/15 via-purple-500/15 to-cyan-500/15 border border-white/15 backdrop-blur-md flex items-center justify-between">
              <div>
                <h4 className="text-sm font-bold text-white mb-0.5">Need a full copy of my resume?</h4>
                <p className="text-xs text-slate-300">Download formatted PDF with project summaries.</p>
              </div>
              <a
                href="/resume.pdf"
                download="Anisa_Hafila_Resume.pdf"
                className="shrink-0 p-3 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all flex items-center gap-1.5 text-xs font-semibold"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span className="hidden sm:inline">PDF</span>
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-9 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-2xl shadow-black/30">
              
              <h3 className="text-2xl font-bold text-white mb-2">Send a Message</h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Fill in the details below to start a conversation.
              </p>

              {/* Success Message Banner */}
              {submitSuccess && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-200 text-xs sm:text-sm flex items-start gap-3 animate-fade-in">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold">Message Sent Successfully!</div>
                    <div className="mt-0.5">{submitSuccess}</div>
                  </div>
                </div>
              )}

              {/* Error Message Banner */}
              {submitError && (
                <div className="mb-6 p-4 rounded-2xl bg-rose-500/15 border border-rose-500/30 text-rose-200 text-xs sm:text-sm flex items-start gap-3 animate-fade-in">
                  <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold">Submission Notice</div>
                    <div className="mt-0.5">{submitError}</div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name Input */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2"
                    >
                      Your Name <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Sarah Jenkins"
                      required
                      aria-required="true"
                      className={`w-full px-4 py-3 rounded-xl bg-white/[0.04] border ${
                        formErrors.name ? "border-rose-500/70" : "border-white/10"
                      } text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors`}
                    />
                    {formErrors.name && (
                      <p className="mt-1 text-[11px] text-rose-400 font-medium">
                        {formErrors.name}
                      </p>
                    )}
                  </div>

                  {/* Email Input */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2"
                    >
                      Email Address <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. sarah@company.com"
                      required
                      aria-required="true"
                      className={`w-full px-4 py-3 rounded-xl bg-white/[0.04] border ${
                        formErrors.email ? "border-rose-500/70" : "border-white/10"
                      } text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors`}
                    />
                    {formErrors.email && (
                      <p className="mt-1 text-[11px] text-rose-400 font-medium">
                        {formErrors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject Input */}
                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2"
                  >
                    Subject <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Entry-level Digital Marketing Role / Project Inquiry"
                    required
                    aria-required="true"
                    className={`w-full px-4 py-3 rounded-xl bg-white/[0.04] border ${
                      formErrors.subject ? "border-rose-500/70" : "border-white/10"
                    } text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors`}
                  />
                  {formErrors.subject && (
                    <p className="mt-1 text-[11px] text-rose-400 font-medium">
                      {formErrors.subject}
                    </p>
                  )}
                </div>

                {/* Message Input */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2"
                  >
                    Your Message <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about the role, project, or collaboration you have in mind..."
                    required
                    aria-required="true"
                    className={`w-full px-4 py-3 rounded-xl bg-white/[0.04] border ${
                      formErrors.message ? "border-rose-500/70" : "border-white/10"
                    } text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors resize-none`}
                  />
                  {formErrors.message && (
                    <p className="mt-1 text-[11px] text-rose-400 font-medium">
                      {formErrors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] hover:from-indigo-500 hover:to-purple-500 shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-cyan-300" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

                <p className="text-center text-[11px] text-slate-500">
                  Your information is kept private and used only to respond to your inquiry.
                </p>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
