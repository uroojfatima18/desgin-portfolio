"use client";

import { useState, FormEvent } from "react";
import { Send, CheckCircle2, Sparkles, Mail, Copy, Check, AlertCircle, Loader2 } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Post & Graphic Design",
    budget: "Flexible / Open to Discuss",
    message: "",
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("uroojf199@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("https://formsubmit.co/ajax/uroojf199@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `Portfolio Inquiry from ${formData.name}`,
          Name: formData.name,
          Email: formData.email,
          Service: formData.service,
          Budget: formData.budget,
          Message: formData.message,
          _captcha: "false",
          _template: "table",
        }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        throw new Error("Could not send directly. Please use the direct email button below.");
      }
    } catch (err: unknown) {
      console.error(err);
      // Fallback: If network blocks third-party endpoints, generate pre-filled mailto
      const mailtoUrl = `mailto:uroojf199@gmail.com?subject=${encodeURIComponent(
        `Portfolio Inquiry: ${formData.name} - ${formData.service}`
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nService: ${formData.service}\nBudget: ${formData.budget}\n\nMessage:\n${formData.message}`
      )}`;
      window.location.href = mailtoUrl;
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div
        className="card-base"
        style={{
          padding: "48px 32px",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "16px",
          border: "1px solid rgba(88, 53, 229, 0.2)",
          boxShadow: "0 18px 45px rgba(88, 53, 229, 0.08)",
        }}
      >
        <div
          style={{
            width: "64px",
            height: "64px",
            borderRadius: "50%",
            background: "#DCFCE7",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 8px 24px rgba(22, 163, 74, 0.15)",
          }}
        >
          <CheckCircle2 size={34} color="#16A34A" />
        </div>

        <h3 style={{ fontFamily: "var(--font-display)", fontSize: "24px", fontWeight: 700 }}>
          Inquiry Sent to uroojf199@gmail.com!
        </h3>
        <p style={{ fontSize: "15px", color: "var(--text-muted)", maxWidth: "460px", lineHeight: 1.6 }}>
          Thank you, <strong>{formData.name || "there"}</strong>! Your message has been dispatched to{" "}
          <strong style={{ color: "var(--accent-violet)" }}>uroojf199@gmail.com</strong>. I will review your project brief and get back to you within 24 business hours.
        </p>

        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({
              name: "",
              email: "",
              service: "Post & Graphic Design",
              budget: "Flexible / Open to Discuss",
              message: "",
            });
          }}
          style={{
            marginTop: "12px",
            background: "var(--bg-body)",
            border: "1px solid var(--border-light)",
            padding: "10px 22px",
            borderRadius: "var(--radius-full)",
            fontSize: "13px",
            fontWeight: 600,
            cursor: "pointer",
            transition: "all 0.2s ease",
          }}
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="card-base"
      style={{ padding: "36px" }}
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Header Badge */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "10px", marginBottom: "8px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Sparkles size={16} color="#5835E5" />
          <span style={{ fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--accent-violet)" }}>
            Project Inquiry
          </span>
        </div>

        {/* Direct Email Pill with Copy Button */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "5px 12px",
            borderRadius: "var(--radius-full)",
            background: "rgba(88, 53, 229, 0.06)",
            border: "1px solid rgba(88, 53, 229, 0.15)",
            fontSize: "12px",
          }}
        >
          <Mail size={13} color="#5835E5" />
          <a
            href="mailto:uroojf199@gmail.com"
            style={{ fontWeight: 600, color: "var(--accent-violet)", textDecoration: "none" }}
          >
            uroojf199@gmail.com
          </a>
          <button
            type="button"
            onClick={handleCopyEmail}
            title="Copy email to clipboard"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "2px",
              display: "flex",
              alignItems: "center",
              color: copied ? "#16A34A" : "var(--text-muted)",
            }}
          >
            {copied ? <Check size={13} color="#16A34A" /> : <Copy size={13} />}
          </button>
        </motion.div>
      </div>

      <h3
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "26px",
          fontWeight: 700,
          letterSpacing: "-0.02em",
          marginBottom: "12px",
        }}
      >
        Let&apos;s build something exceptional together
      </h3>
      <p style={{ fontSize: "14px", color: "var(--text-muted)", marginBottom: "26px", lineHeight: 1.5 }}>
        Fill in your details below and your brief will go straight to <strong>uroojf199@gmail.com</strong>.
      </p>

      {error && (
        <div
          style={{
            padding: "10px 14px",
            borderRadius: "8px",
            background: "rgba(239, 68, 68, 0.1)",
            border: "1px solid rgba(239, 68, 68, 0.2)",
            color: "#DC2626",
            fontSize: "13px",
            marginBottom: "18px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <AlertCircle size={15} />
          <span>{error}</span>
        </div>
      )}

      <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
        {/* Row 1: Name and Email */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
          <div>
            <label style={{ display: "block", fontSize: "12.5px", fontWeight: 600, marginBottom: "6px" }}>
              Your Name *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Sarah Jenkins"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              style={{
                width: "100%",
                padding: "12px 14px",
                borderRadius: "var(--radius-md)",
                border: "1px solid var(--border-light)",
                background: "var(--bg-body)",
                fontSize: "14px",
                color: "var(--text-main)",
                outline: "none",
                transition: "border-color 0.2s, box-shadow 0.2s",
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "var(--accent-violet)";
                e.target.style.boxShadow = "0 0 0 3px rgba(88, 53, 229, 0.12)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "var(--border-light)";
                e.target.style.boxShadow = "none";
              }}
            />
          </div>

          <div>
            <label style={{ display: "block", fontSize: "12.5px", fontWeight: 600, marginBottom: "6px" }}>
              Work Email *
            </label>
            <input
              type="email"
              required
              placeholder="e.g. sarah@acme.co"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              style={{
                width: "100%",
                padding: "12px 14px",
                borderRadius: "var(--radius-md)",
                border: "1px solid var(--border-light)",
                background: "var(--bg-body)",
                fontSize: "14px",
                color: "var(--text-main)",
                outline: "none",
                transition: "border-color 0.2s, box-shadow 0.2s",
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "var(--accent-violet)";
                e.target.style.boxShadow = "0 0 0 3px rgba(88, 53, 229, 0.12)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "var(--border-light)";
                e.target.style.boxShadow = "none";
              }}
            />
          </div>
        </div>

        {/* Row 2: Service & Budget */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
          <div>
            <label style={{ display: "block", fontSize: "12.5px", fontWeight: 600, marginBottom: "6px" }}>
              Service Needed
            </label>
            <select
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              style={{
                width: "100%",
                padding: "12px 14px",
                borderRadius: "var(--radius-md)",
                border: "1px solid var(--border-light)",
                background: "var(--bg-body)",
                fontSize: "14px",
                color: "var(--text-main)",
                outline: "none",
              }}
            >
              <option value="Post & Graphic Design">Post & Graphic Design</option>
              <option value="AI Video Generation">AI Video Generation</option>
              <option value="Carousel / Slide Deck">Carousel / Slide Deck</option>
              <option value="Agentic AI Development">Agentic AI Development</option>
              <option value="Other Creative Project">Other Creative Project</option>
            </select>
          </div>

          <div>
            <label style={{ display: "block", fontSize: "12.5px", fontWeight: 600, marginBottom: "6px" }}>
              Estimated Budget
            </label>
            <select
              value={formData.budget}
              onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
              style={{
                width: "100%",
                padding: "12px 14px",
                borderRadius: "var(--radius-md)",
                border: "1px solid var(--border-light)",
                background: "var(--bg-body)",
                fontSize: "14px",
                color: "var(--text-main)",
                outline: "none",
              }}
            >
              <option value="Flexible / Open to Discuss">Flexible / Open to Discuss</option>
              <option value="Project-Based (Negotiable)">Project-Based (Negotiable)</option>
              <option value="Monthly Collaboration">Monthly Collaboration</option>
              <option value="Let's Discuss">Let&apos;s Discuss</option>
            </select>
          </div>
        </div>

        {/* Message */}
        <div>
          <label style={{ display: "block", fontSize: "12.5px", fontWeight: 600, marginBottom: "6px" }}>
            Project Details &amp; Timeline *
          </label>
          <textarea
            required
            rows={4}
            placeholder="Tell me about your product, objectives, and any deadlines..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            style={{
              width: "100%",
              padding: "12px 14px",
              borderRadius: "var(--radius-md)",
              border: "1px solid var(--border-light)",
              background: "var(--bg-body)",
              fontSize: "14px",
              color: "var(--text-main)",
              outline: "none",
              resize: "vertical",
              fontFamily: "inherit",
              transition: "border-color 0.2s, box-shadow 0.2s",
            }}
            onFocus={(e) => {
              e.target.style.borderColor = "var(--accent-violet)";
              e.target.style.boxShadow = "0 0 0 3px rgba(88, 53, 229, 0.12)";
            }}
            onBlur={(e) => {
              e.target.style.borderColor = "var(--border-light)";
              e.target.style.boxShadow = "none";
            }}
          />
        </div>

        {/* Submit Button & Direct Option */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "12px", marginTop: "6px" }}>
          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              background: "var(--accent-violet)",
              color: "#FFFFFF",
              padding: "14px 30px",
              borderRadius: "var(--radius-full)",
              fontSize: "14px",
              fontWeight: 700,
              cursor: loading ? "not-allowed" : "pointer",
              opacity: loading ? 0.8 : 1,
              border: "none",
              boxShadow: "0 6px 22px rgba(88, 53, 229, 0.35)",
            }}
          >
            {loading ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                <span>Sending to Inbox...</span>
              </>
            ) : (
              <>
                <span>Send Inquiry to Email</span>
                <Send size={15} />
              </>
            )}
          </motion.button>

          <span style={{ fontSize: "12.5px", color: "var(--text-muted)" }}>
            Delivered directly to <strong>uroojf199@gmail.com</strong>
          </span>
        </div>
      </div>
    </motion.form>
  );
}
