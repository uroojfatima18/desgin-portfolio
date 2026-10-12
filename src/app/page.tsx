"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Download } from "lucide-react";
import SlidesSection from "@/components/SlidesSection";
import AIVideoSection from "@/components/AIVideoSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { motion } from "framer-motion";
import { Globe, Sparkles, Palette, Send, Compass } from "lucide-react";

const WORKFLOW_STEPS = [
  {
    step: "Step 01",
    title: "Take inspiration from internet",
    icon: Globe,
    accent: "#5835E5",
    accentBg: "rgba(88, 53, 229, 0.08)",
  },
  {
    step: "Step 02",
    title: "Set it for my own work with any LLM",
    icon: Sparkles,
    accent: "#8B5CF6",
    accentBg: "rgba(139, 92, 246, 0.08)",
  },
  {
    step: "Step 03",
    title: "Edit in Canva & Text layout",
    icon: Palette,
    accent: "#06B6D4",
    accentBg: "rgba(6, 182, 212, 0.08)",
  },
  {
    step: "Step 04",
    title: "Publish",
    icon: Send,
    accent: "#10B981",
    accentBg: "rgba(16, 185, 129, 0.08)",
  },
];

export default function HomePage() {
  return (
    <div className="about-page-wrapper" style={{ gap: "90px" }}>
      {/* 1. TOP HERO SECTION: CINEMATIC REFERENCE DESIGN (GIANT PORTFOLIO + PORTRAIT CUTOUT + NAME) */}
      <section id="about" className="cinematic-hero-section">
        <div className="cinematic-hero-glow" />

        {/* Status Pill Badge */}
        <div
          style={{
            position: "relative",
            zIndex: 10,
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "6px 18px",
            borderRadius: "var(--radius-full)",
            background: "rgba(255, 255, 255, 0.08)",
            border: "1px solid rgba(255, 255, 255, 0.15)",
            backdropFilter: "blur(10px)",
            fontSize: "12px",
            fontWeight: 600,
            color: "#ECE5D8",
            marginBottom: "16px",
            boxShadow: "0 4px 16px rgba(0,0,0,0.3)",
          }}
        >
          <span className="pulse-dot" />
          <span>Available for Projects &amp; Collaborations</span>
        </div>

        {/* Giant PORTFOLIO typography layered with Portrait Cutout */}
        <div className="cinematic-marquee-title-wrap">
          {/* Layer 1: Solid Giant Text behind */}
          <div className="cinematic-bg-text" aria-hidden="true">
            PORTFOLIO
          </div>

          {/* Layer 2: Urooj's Center Portrait Cutout */}
          <div className="cinematic-portrait-container">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/urooj.jpg"
              alt="Urooj Fatima"
              className="cinematic-portrait-img"
            />
          </div>

          {/* Layer 3: Giant Text Outlines on top of the portrait */}
          <div className="cinematic-outline-text" aria-hidden="true">
            PORTFOLIO
          </div>
        </div>

        {/* Name and Tagline below the display */}
        <div style={{ position: "relative", zIndex: 10, marginTop: "20px" }}>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(26px, 4.5vw, 42px)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              color: "#FFFFFF",
              marginBottom: "8px",
            }}
          >
            Urooj Fatima
          </h1>

          <p
            style={{
              fontSize: "clamp(14px, 1.8vw, 17px)",
              color: "rgba(236, 229, 216, 0.7)",
              maxWidth: "580px",
              lineHeight: 1.6,
              margin: "0 auto 26px",
            }}
          >
            Product &amp; UI/UX Designer &amp; Agentic AI Developer crafting high-impact digital experiences.
          </p>

          {/* Action Buttons */}
          <div style={{ display: "flex", gap: "12px", alignItems: "center", flexWrap: "wrap", justifyContent: "center" }}>
            <a
              href="/assets/urooj-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "#ECE5D8",
                color: "#0E0E0E",
                fontSize: "13.5px",
                fontWeight: 600,
                padding: "11px 26px",
                borderRadius: "var(--radius-full)",
                transition: "all 0.2s ease",
                boxShadow: "0 4px 14px rgba(0, 0, 0, 0.2)",
              }}
            >
              <span>Download Resume</span>
              <Download size={15} />
            </a>

            <a
              href="#contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "11px 26px",
                borderRadius: "var(--radius-full)",
                background: "var(--accent-violet)",
                color: "#FFFFFF",
                fontSize: "13.5px",
                fontWeight: 600,
                boxShadow: "0 4px 18px rgba(88, 53, 229, 0.4)",
              }}
            >
              <span>Contact Me</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. POST I DESIGNS (HORIZONTAL INFINITE MARQUEE, JEV FIRST) */}
      <section id="posters" style={{ width: "100%", margin: "0 auto", padding: "10px 0" }}>
        <div className="section-header" style={{ marginBottom: "22px" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
              <span
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  color: "var(--accent-violet)",
                  background: "var(--accent-violet-subtle)",
                  padding: "3px 10px",
                  borderRadius: "var(--radius-sm)",
                }}
              >
                Creative Posters
              </span>
            </div>
            <h2 className="section-title">POST I DESIGNS</h2>
          </div>
        </div>

        <div className="posters-marquee-container">
          <div className="posters-marquee-track">
            {/* Array doubled for seamless continuous loop */}
            {[
              {
                id: "jev",
                img: "/assets/posters/poster-4.jpg",
                alt: "What is JEV",
                statsBadge: "4,525 Impressions",
                statsSub: "30 comments • 42+ loves",
                screenshot: "/assets/stats/post-jev.png",
              },
              {
                id: "p1",
                img: "/assets/posters/poster-1.png",
                alt: "I was building AI Agents",
                statsBadge: "4,878 Impressions",
                statsSub: "74 comments • 134+ loves",
                screenshot: "/assets/stats/post-buzzword.png",
              },
              {
                id: "p5",
                img: "/assets/posters/poster-5.png",
                alt: "AI Video Generation Is Not What I Expected",
                statsBadge: "1,277 Impressions",
                statsSub: "14 comments • 27+ likes",
                screenshot: "/assets/stats/post-ai-video.png",
              },
              {
                id: "p2",
                img: "/assets/posters/poster-2.jpg",
                alt: "Your AI Agent Isn't Broken",
                statsBadge: "2,720 Impressions",
                statsSub: "26 comments • 83+ loves",
                screenshot: "/assets/stats/post-broken.png",
              },
              {
                id: "p3",
                img: "/assets/posters/poster-3.png",
                alt: "How AI Agents Saved Your Company",
                statsBadge: "1,184 Impressions",
                statsSub: "9 comments • 47+ loves",
                screenshot: "/assets/stats/post-saved-company.png",
              },
              {
                id: "jev-dup",
                img: "/assets/posters/poster-4.jpg",
                alt: "What is JEV",
                statsBadge: "4,525 Impressions",
                statsSub: "30 comments • 42+ loves",
                screenshot: "/assets/stats/post-jev.png",
              },
              {
                id: "p1-dup",
                img: "/assets/posters/poster-1.png",
                alt: "I was building AI Agents",
                statsBadge: "4,878 Impressions",
                statsSub: "74 comments • 134+ loves",
                screenshot: "/assets/stats/post-buzzword.png",
              },
              {
                id: "p5-dup",
                img: "/assets/posters/poster-5.png",
                alt: "AI Video Generation Is Not What I Expected",
                statsBadge: "1,277 Impressions",
                statsSub: "14 comments • 27+ likes",
                screenshot: "/assets/stats/post-ai-video.png",
              },
              {
                id: "p2-dup",
                img: "/assets/posters/poster-2.jpg",
                alt: "Your AI Agent Isn't Broken",
                statsBadge: "2,720 Impressions",
                statsSub: "26 comments • 83+ loves",
                screenshot: "/assets/stats/post-broken.png",
              },
              {
                id: "p3-dup",
                img: "/assets/posters/poster-3.png",
                alt: "How AI Agents Saved Your Company",
                statsBadge: "1,184 Impressions",
                statsSub: "9 comments • 47+ loves",
                screenshot: "/assets/stats/post-saved-company.png",
              },
            ].map((p, index) => (
              <div
                key={`${p.id}-${index}`}
                className="poster-marquee-item"
                onClick={() => p.screenshot && window.open(p.screenshot, "_blank")}
                title={p.screenshot ? "Click to view full LinkedIn analytics screenshot" : undefined}
              >
                {/* Poster Graphic */}
                <div style={{ position: "relative", width: "100%", height: "290px" }}>
                  <Image
                    src={p.img}
                    alt={p.alt}
                    fill
                    style={{ objectFit: "contain" }}
                    sizes="(max-width: 640px) 280px, 340px"
                    priority={index < 4}
                  />
                </div>

                {/* Prominent High-Visibility Stats Bottom Bar */}
                {p.statsBadge && (
                  <div
                    style={{
                      width: "100%",
                      padding: "8px 14px",
                      background: "rgba(244, 244, 246, 0.95)",
                      borderTop: "1px solid var(--border-light)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "6px",
                    }}
                  >
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <span
                        style={{
                          fontSize: "12px",
                          fontWeight: 800,
                          color: p.statsBadge.includes("Impressions") ? "#5835E5" : "var(--text-main)",
                          display: "flex",
                          alignItems: "center",
                          gap: "4px",
                        }}
                      >
                        {p.statsBadge.includes("Impressions") && <span>📈</span>}
                        {p.statsBadge}
                      </span>
                      {p.statsSub && (
                        <span style={{ fontSize: "10.5px", color: "var(--text-muted)" }}>
                          {p.statsSub}
                        </span>
                      )}
                    </div>

                    {p.screenshot && (
                      <span
                        style={{
                          fontSize: "10px",
                          fontWeight: 700,
                          background: "#0E0E0E",
                          color: "#FFFFFF",
                          padding: "3px 8px",
                          borderRadius: "6px",
                          letterSpacing: "0.02em",
                          flexShrink: 0,
                        }}
                      >
                        Proof ↗
                      </span>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SLIDES WALA PART (INTERACTIVE CAROUSEL) */}
      <SlidesSection />

      {/* 4. AI VIDEO GENERATION SECTION */}
      <AIVideoSection />

      {/* 5. HOW DO I WORK (4-STEP ANIMATED BOXES) */}
      <section id="workflow">
        <div className="center-section-header">
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <Compass size={15} color="#5835E5" />
            <span className="about-pill">Creative Process</span>
          </div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(28px, 4vw, 42px)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              color: "#0E0E0E",
              marginTop: "4px",
            }}
          >
            How Do I Work?
          </h2>
          <p style={{ fontSize: "15px", color: "var(--text-muted)", maxWidth: "560px" }}>
            My 4-step creative process from inspiration to live publication
          </p>
        </div>

        <div className="workflow-grid">
          {WORKFLOW_STEPS.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.step}
                className="workflow-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 400, damping: 25 },
                }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="workflow-card-header">
                  <span className="workflow-step-pill">{item.step}</span>
                  <motion.div
                    className="workflow-icon-box"
                    style={{ background: item.accentBg, color: item.accent }}
                    whileHover={{ rotate: [0, -12, 12, 0], scale: 1.15 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Icon size={22} />
                  </motion.div>
                </div>

                <h3 className="workflow-card-title">{item.title}</h3>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 6. CONTACT ME SECTION */}
      <section id="contact" style={{ maxWidth: "760px", margin: "0 auto", width: "100%" }}>
        <ContactForm />
      </section>

      {/* Converto Reference Style Luxury Footer */}
      <Footer />
    </div>
  );
}
