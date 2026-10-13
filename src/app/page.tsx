"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import SlidesSection from "@/components/SlidesSection";
import AIVideoSection from "@/components/AIVideoSection";
import TestimonialsSection from "@/components/TestimonialsSection";
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
      {/* 1. TOP HERO SECTION: CINEMATIC REFERENCE DESIGN (MATCHING UPLOADED MOCKUP) */}
      <section id="about" className="cinematic-hero-section">
        <div className="cinematic-hero-glow" />

        {/* Giant PORTFOLIO typography layered with Portrait Cutout */}
        <div className="hero-display-wrap">
          {/* Layer 1: Background letters behind image (T and F outlined) */}
          <div className="hero-portfolio-text hero-portfolio-bg" aria-hidden="true">
            <div className="hero-word-track">
              <span className="hero-char-ghost">P</span>
              <span className="hero-char-ghost">O</span>
              <span className="hero-char-ghost">R</span>
              <span className="hero-char-outline">T</span>
              <span className="hero-char-outline">F</span>
              <span className="hero-char-ghost">O</span>
              <span className="hero-char-ghost">L</span>
              <span className="hero-char-ghost">I</span>
              <span className="hero-char-ghost">O</span>
            </div>
          </div>

          {/* Layer 2: Urooj's Center High-Quality Portrait (in front of T and F) */}
          <div className="hero-portrait-wrap">
            <motion.div
              style={{ width: "100%", height: "100%", display: "flex", alignItems: "flex-end", justifyContent: "center" }}
              initial={{ opacity: 0, scale: 0.94, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/urooj_cutout.png"
                alt="Urooj Fatima"
                className="hero-portrait-img"
              />
            </motion.div>
          </div>

          {/* Layer 3: Foreground letters (solid POR, outlined O over shoulder, solid LIO) */}
          <div className="hero-portfolio-text hero-portfolio-fg" aria-hidden="true">
            <div className="hero-word-track">
              <span className="hero-char-solid">P</span>
              <span className="hero-char-solid">O</span>
              <span className="hero-char-solid">R</span>
              <span className="hero-char-ghost">T</span>
              <span className="hero-char-ghost">F</span>
              <span className="hero-char-outline">O</span>
              <span className="hero-char-solid">L</span>
              <span className="hero-char-solid">I</span>
              <span className="hero-char-solid">O</span>
            </div>
          </div>
        </div>

        {/* Text and Action Buttons below portrait with clean breathing room */}
        <motion.div
          className="hero-meta-wrap"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
        >
          <h1 className="hero-name">Hi, I'm Urooj Fatima</h1>

          <p className="hero-subtitle-primary">
            I create High quality Posters, Slides, AI Videos, AI Agents &amp; Automations workflows too. Scroll to see my work.
            <br />
            See you on LinkedIn &amp; Instagram &mdash; just DM me for Creative Work
          </p>

          <p className="hero-subtitle-secondary">
            Post Design | AI Video Generation |  Agentic AI  | AI Automation 
          </p>

          {/* Action Buttons: LinkedIn, Instagram & Contact Me */}
          <div className="hero-actions-row">
            <a
              href="https://www.linkedin.com/in/urooj-fatima-b2698431a/"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-pill-btn hero-btn-dark"
            >
              <span className="hero-btn-icon hero-icon-linkedin">
                <span className="hero-linkedin-badge">in</span>
              </span>
              <span>LinkedIn</span>
            </a>

            <a
              href="https://www.instagram.com/_urooj.fatimaaa_?igsi=MWd6MnFhdzd2azRpOA=="
              target="_blank"
              rel="noopener noreferrer"
              className="hero-pill-btn hero-btn-dark"
            >
              <span className="hero-btn-icon hero-icon-instagram">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </span>
              <span>Instagram</span>
            </a>

            <a
              href="#contact"
              className="hero-pill-btn hero-btn-accent"
            >
              <span>Contact Me</span>
            </a>
          </div>
        </motion.div>
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

      {/* 6. WHAT PEOPLE SAY ABOUT DESIGNS (COMMUNITY COMPLIMENTS & TESTIMONIALS) */}
      <TestimonialsSection />

      {/* 7. CONTACT ME SECTION */}
      <section id="contact" style={{ maxWidth: "760px", margin: "0 auto", width: "100%" }}>
        <ContactForm />
      </section>

      {/* Converto Reference Style Luxury Footer */}
      <Footer />
    </div>
  );
}
