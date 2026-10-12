"use client";

import { useState, FormEvent } from "react";
import { Send, CheckCircle2, Sparkles } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Product (UI/UX) Design",
    budget: "$5,000 - $10,000",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
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
        }}
      >
        <div
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            background: "#DCFCE7",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CheckCircle2 size={32} color="#16A34A" />
        </div>

        <h3 style={{ fontFamily: "var(--font-display)", fontSize: "24px", fontWeight: 700 }}>
          Inquiry Received!
        </h3>
        <p style={{ fontSize: "15px", color: "var(--text-muted)", maxWidth: "420px", lineHeight: 1.6 }}>
          Thank you, <strong>{formData.name}</strong>. I will review your project brief and get back to you within 24 business hours at <strong>{formData.email}</strong>.
        </p>

        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({
              name: "",
              email: "",
              service: "Product (UI/UX) Design",
              budget: "$5,000 - $10,000",
              message: "",
            });
          }}
          style={{
            marginTop: "12px",
            background: "var(--bg-body)",
            border: "1px solid var(--border-light)",
            padding: "10px 20px",
            borderRadius: "var(--radius-full)",
            fontSize: "13px",
            fontWeight: 600,
          }}
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card-base" style={{ padding: "36px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
        <Sparkles size={16} color="#5835E5" />
        <span style={{ fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--accent-violet)" }}>
          Project Inquiry
        </span>
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
      <p style={{ fontSize: "14px", color: "var(--text-muted)", marginBottom: "28px", lineHeight: 1.5 }}>
        Fill in your details below and I&apos;ll get back to you with availability, initial scoping thoughts, and next steps.
      </p>

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
              <option value="Product (UI/UX) Design">Product (UI/UX) Design</option>
              <option value="Scalable Design System">Scalable Design System</option>
              <option value="Interactive Web & Framer">Interactive Web & Framer</option>
              <option value="Design Advisory / Audit">Design Advisory / Audit</option>
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
              <option value="< $5,000">&lt; $5,000</option>
              <option value="$5,000 - $10,000">$5,000 - $10,000</option>
              <option value="$10,000 - $25,000">$10,000 - $25,000</option>
              <option value="$25,000+">$25,000+</option>
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
            }}
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            background: "var(--accent-violet)",
            color: "#FFFFFF",
            padding: "14px 28px",
            borderRadius: "var(--radius-full)",
            fontSize: "14px",
            fontWeight: 700,
            transition: "all 0.2s ease",
            marginTop: "6px",
          }}
        >
          <span>Send Inquiry</span>
          <Send size={15} />
        </button>
      </div>
    </form>
  );
}
