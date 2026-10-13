"use client";

import { useState } from "react";
import { Sparkles, Maximize2, X } from "lucide-react";

interface ComplimentItem {
  id: string;
  img: string;
  alt: string;
  platform: "LinkedIn" | "Instagram" | "Client Feedback";
  badge: string;
}

const COMPLIMENT_ITEMS: ComplimentItem[] = [
  {
    id: "c-hamza",
    img: "/assets/proof/hamza-comment.png",
    alt: "LinkedIn Comment by Muhammad Hamza: What do you use to create these images?",
    platform: "LinkedIn",
    badge: "LinkedIn",
  },
  {
    id: "c1",
    img: "/assets/proof/compliment-1.png",
    alt: "LinkedIn Comment: Lit - As your first attempt its impressive",
    platform: "LinkedIn",
    badge: "LinkedIn",
  },
  {
    id: "c2",
    img: "/assets/proof/compliment-2.png",
    alt: "LinkedIn Comment: It's awesome mate",
    platform: "LinkedIn",
    badge: "LinkedIn",
  },
  {
    id: "c3",
    img: "/assets/proof/compliment-3.png",
    alt: "LinkedIn Comment: This is cool",
    platform: "LinkedIn",
    badge: "LinkedIn",
  },
  {
    id: "c4",
    img: "/assets/proof/ppl-say.png",
    alt: "LinkedIn Comment: Your visuals day by day",
    platform: "LinkedIn",
    badge: "LinkedIn",
  },
  {
    id: "c5",
    img: "/assets/proof/client-above-and-beyond.png",
    alt: "Client WhatsApp Review: Excellent job Above and Beyond",
    platform: "Client Feedback",
    badge: "Client Review",
  },
  {
    id: "c6",
    img: "/assets/proof/client-impressed.png",
    alt: "Client WhatsApp Review: I am impressed - You are a very intelligent girl",
    platform: "Client Feedback",
    badge: "Client Review",
  },
  {
    id: "c7",
    img: "/assets/proof/compliment-4.jpg",
    alt: "Instagram Comment: This looks amazinggg, great work",
    platform: "Instagram",
    badge: "Instagram",
  },
  {
    id: "c8",
    img: "/assets/proof/compliment-5.jpg",
    alt: "Instagram Comment: The image quality",
    platform: "Instagram",
    badge: "Instagram",
  },
];

export default function TestimonialsSection() {
  const [selectedProof, setSelectedProof] = useState<string | null>(null);
  const [isHoverPaused, setIsHoverPaused] = useState(false);

  // Duplicated for seamless infinite marquee loop (8 items * 2 = 16 items)
  const loopedList = [...COMPLIMENT_ITEMS, ...COMPLIMENT_ITEMS];

  return (
    <section id="compliments" style={{ width: "100%", margin: "0 auto", padding: "10px 0" }}>
      {/* Section Header */}
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
              Social Proof &amp; Client Feedback
            </span>
            <span style={{ fontSize: "12px", color: "var(--text-light)" }}>•</span>
            <span style={{ fontSize: "12px", color: "var(--text-muted)", fontWeight: 500 }}>
              Live Reel
            </span>
          </div>

          <h2
            className="section-title"
            style={{
              fontSize: "clamp(22px, 2.8vw, 32px)",
              letterSpacing: "-0.02em",
              lineHeight: 1.25,
            }}
          >
            <span>WHAT PEOPLE SAY ABOUT</span>
            <span style={{ display: "block", color: "var(--accent-violet)", marginTop: "2px" }}>
              DESIGNS &amp; VIDEO GENERATION
            </span>
          </h2>
          <p style={{ fontSize: "14px", color: "var(--text-muted)", marginTop: "6px", maxWidth: "620px" }}>
            Real reviews and compliments on design work, AI videos, and creative production.
          </p>
        </div>
      </div>

      {/* Horizontal Continuous Marquee Reel */}
      <div
        className="compliments-marquee-container"
        onMouseEnter={() => setIsHoverPaused(true)}
        onMouseLeave={() => setIsHoverPaused(false)}
      >
        <div
          className="compliments-marquee-track"
          style={{
            animationPlayState: isHoverPaused ? "paused" : "running",
          }}
        >
          {loopedList.map((item, idx) => {
            const isClient = item.platform === "Client Feedback";
            const isInsta = item.platform === "Instagram";

            return (
              <div
                key={`${item.id}-${idx}`}
                className="compliment-marquee-card"
                onClick={() => setSelectedProof(item.img)}
                title="Click to view full screenshot"
              >
                {/* Top Badge Tag */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "10px" }}>
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "5px",
                      fontSize: "11px",
                      fontWeight: 700,
                      padding: "3px 10px",
                      borderRadius: "var(--radius-full)",
                      background: isClient
                        ? "rgba(16, 185, 129, 0.12)"
                        : isInsta
                        ? "linear-gradient(135deg, rgba(131, 58, 180, 0.12), rgba(253, 29, 29, 0.12))"
                        : "rgba(10, 102, 194, 0.1)",
                      color: isClient ? "#059669" : isInsta ? "#C13584" : "#0A66C2",
                      border: isClient
                        ? "1px solid rgba(16, 185, 129, 0.25)"
                        : isInsta
                        ? "1px solid rgba(193, 53, 132, 0.2)"
                        : "1px solid rgba(10, 102, 194, 0.2)",
                    }}
                  >
                    {isClient ? "💬 Client Review" : isInsta ? "📸 Instagram" : "💼 LinkedIn"}
                  </span>

                  <span
                    style={{
                      fontSize: "10px",
                      fontWeight: 700,
                      color: "var(--text-light)",
                      display: "flex",
                      alignItems: "center",
                      gap: "3px",
                    }}
                  >
                    <span>View</span>
                    <Maximize2 size={10} />
                  </span>
                </div>

                {/* Pure Clean Screenshot Graphic (no extra text underneath) */}
                <div
                  style={{
                    background: isInsta ? "#0E0E12" : isClient ? "#FAF7F2" : "#F8F8FA",
                    padding: "10px",
                    borderRadius: "12px",
                    border: "1px solid var(--border-light)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    minHeight: "100px",
                    maxHeight: "135px",
                    overflow: "hidden",
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.img}
                    alt={item.alt}
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                      maxHeight: "120px",
                      objectFit: "contain",
                      borderRadius: "6px",
                      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.04)",
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal for Full Proof View */}
      {selectedProof && (
        <div
          role="dialog"
          aria-modal="true"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "rgba(10, 10, 14, 0.85)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
          }}
          onClick={() => setSelectedProof(null)}
        >
          <div
            style={{
              position: "relative",
              maxWidth: "540px",
              width: "100%",
              background: "#181820",
              padding: "20px",
              borderRadius: "20px",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              boxShadow: "0 25px 60px rgba(0, 0, 0, 0.6)",
              textAlign: "center",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
              <span style={{ fontSize: "13px", fontWeight: 700, color: "#ECE5D8" }}>
                Verified Screenshot
              </span>
              <button
                onClick={() => setSelectedProof(null)}
                style={{
                  background: "rgba(255, 255, 255, 0.1)",
                  border: "none",
                  color: "#FFFFFF",
                  padding: "4px 10px",
                  borderRadius: "var(--radius-full)",
                  cursor: "pointer",
                  fontSize: "12px",
                }}
              >
                Close ✕
              </button>
            </div>

            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={selectedProof}
              alt="Screenshot"
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "12px",
                boxShadow: "0 8px 24px rgba(0, 0, 0, 0.4)",
              }}
            />
          </div>
        </div>
      )}
    </section>
  );
}
