"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  Layers,
  Sparkles,
  Share2,
  Check,
} from "lucide-react";
import { PORTFOLIO_DATA, SlideDeck } from "@/data/portfolioData";

export default function SlidesSection() {
  const decks = PORTFOLIO_DATA.slideDecks || [];
  const [activeDeckIndex, setActiveDeckIndex] = useState(0);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!decks.length) return null;

  const currentDeck: SlideDeck = decks[activeDeckIndex];
  const slides = currentDeck.slides;
  const currentSlide = slides[currentSlideIndex];

  const handleNext = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlideIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section id="slides" style={{ position: "relative" }}>
      {/* Section Header */}
      <div className="section-header">
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
              Interactive Carousel
            </span>
            <span style={{ fontSize: "12px", color: "var(--text-light)" }}>•</span>
            <span style={{ fontSize: "12px", color: "var(--text-muted)", fontWeight: 500 }}>
              {currentDeck.category}
            </span>
          </div>

          <h2 className="section-title">SLIDES I MADE</h2>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <button
            onClick={handleShare}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              padding: "7px 14px",
              borderRadius: "var(--radius-full)",
              background: "var(--bg-card)",
              border: "1px solid var(--border-light)",
              fontSize: "12px",
              fontWeight: 600,
              color: "var(--text-main)",
            }}
          >
            {copied ? (
              <>
                <Check size={13} color="#16A34A" />
                <span style={{ color: "#16A34A" }}>Copied!</span>
              </>
            ) : (
              <>
                <Share2 size={13} />
                <span>Share</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Main Slide Carousel Card (Compact & Responsive) */}
      <div
        className="card-base"
        style={{
          padding: "clamp(16px, 3vw, 24px)",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        {/* Deck Switcher Tabs if multiple decks exist */}
        {decks.length > 1 && (
          <div
            style={{
              display: "flex",
              gap: "8px",
              paddingBottom: "14px",
              borderBottom: "1px solid var(--border-light)",
              overflowX: "auto",
            }}
          >
            {decks.map((deck, idx) => {
              const isSelected = idx === activeDeckIndex;
              return (
                <button
                  key={deck.id}
                  onClick={() => {
                    setActiveDeckIndex(idx);
                    setCurrentSlideIndex(0);
                  }}
                  style={{
                    padding: "8px 16px",
                    borderRadius: "var(--radius-full)",
                    background: isSelected ? "var(--accent-violet)" : "var(--bg-body)",
                    color: isSelected ? "#FFFFFF" : "var(--text-main)",
                    border: isSelected ? "none" : "1px solid var(--border-light)",
                    fontSize: "12.5px",
                    fontWeight: 600,
                    cursor: "pointer",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    whiteSpace: "nowrap",
                    transition: "all 0.2s ease",
                  }}
                >
                  <span>{deck.title}</span>
                  <span
                    style={{
                      fontSize: "11px",
                      opacity: 0.8,
                      background: isSelected ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.06)",
                      padding: "2px 7px",
                      borderRadius: "10px",
                    }}
                  >
                    {deck.totalSlides} slides
                  </span>
                </button>
              );
            })}
          </div>
        )}

        {/* Top Deck Info Row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <div>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "22px",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                color: "var(--text-main)",
                marginBottom: "4px",
              }}
            >
              {currentDeck.title}
            </h3>
            <p style={{ fontSize: "13.5px", color: "var(--text-muted)" }}>
              {currentDeck.subtitle}
            </p>
          </div>

          {/* Slide Counter Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              padding: "6px 14px",
              borderRadius: "var(--radius-full)",
              background: "var(--bg-body)",
              border: "1px solid var(--border-light)",
              fontSize: "12.5px",
              fontWeight: 700,
              color: "var(--text-main)",
            }}
          >
            <Layers size={14} color="#5835E5" />
            <span>
              Slide {currentSlideIndex + 1} / {slides.length}
            </span>
          </div>
        </div>

        {/* Slide Viewer Area (Compact & Optimized) */}
        <div
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "480px",
            margin: "0 auto",
            aspectRatio: "1 / 1",
            borderRadius: "var(--radius-lg)",
            overflow: "hidden",
            background: "#0E0E0E",
            boxShadow: "0 12px 32px rgba(0, 0, 0, 0.12)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
          }}
        >
          {/* Active Slide Image with Animated Fade/Slide Transition */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide.number}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              style={{ position: "relative", width: "100%", height: "100%" }}
            >
              <Image
                src={currentSlide.image}
                alt={currentSlide.title}
                fill
                style={{ objectFit: "contain" }}
                priority
                sizes="(max-width: 768px) 100vw, 620px"
              />
            </motion.div>
          </AnimatePresence>

          {/* Left Arrow Button */}
          <button
            onClick={handlePrev}
            aria-label="Previous slide"
            style={{
              position: "absolute",
              left: "14px",
              top: "50%",
              transform: "translateY(-50%)",
              width: "42px",
              height: "42px",
              borderRadius: "50%",
              background: "rgba(255, 255, 255, 0.9)",
              color: "#0E0E0E",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 4px 16px rgba(0, 0, 0, 0.25)",
              backdropFilter: "blur(8px)",
              transition: "transform 0.2s ease, background 0.2s ease",
              zIndex: 10,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-50%) scale(1.08)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(-50%) scale(1)")}
          >
            <ChevronLeft size={22} />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            aria-label="Next slide"
            style={{
              position: "absolute",
              right: "14px",
              top: "50%",
              transform: "translateY(-50%)",
              width: "42px",
              height: "42px",
              borderRadius: "50%",
              background: "rgba(255, 255, 255, 0.9)",
              color: "#0E0E0E",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 4px 16px rgba(0, 0, 0, 0.25)",
              backdropFilter: "blur(8px)",
              transition: "transform 0.2s ease, background 0.2s ease",
              zIndex: 10,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-50%) scale(1.08)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(-50%) scale(1)")}
          >
            <ChevronRight size={22} />
          </button>

          {/* Fullscreen Expand Icon */}
          <button
            onClick={() => setIsModalOpen(true)}
            aria-label="View Fullscreen"
            style={{
              position: "absolute",
              top: "14px",
              right: "14px",
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              background: "rgba(0, 0, 0, 0.55)",
              color: "#FFFFFF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              zIndex: 10,
            }}
          >
            <Maximize2 size={16} />
          </button>

          {/* Bottom Slide Indicators / Dots */}
          <div
            style={{
              position: "absolute",
              bottom: "16px",
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              padding: "5px 12px",
              borderRadius: "var(--radius-full)",
              background: "rgba(0, 0, 0, 0.65)",
              backdropFilter: "blur(8px)",
              zIndex: 10,
            }}
          >
            {slides.map((s, idx) => (
              <button
                key={s.number}
                onClick={() => setCurrentSlideIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                style={{
                  width: idx === currentSlideIndex ? "22px" : "7px",
                  height: "7px",
                  borderRadius: "9999px",
                  background: idx === currentSlideIndex ? "#FFFFFF" : "rgba(255, 255, 255, 0.4)",
                  transition: "all 0.25s ease",
                }}
              />
            ))}
          </div>
        </div>

        {/* Caption & Thumbnail Strip */}
        <div style={{ marginTop: "4px" }}>
          {currentSlide.caption && (
            <p
              style={{
                fontSize: "13.5px",
                color: "var(--text-muted)",
                textAlign: "center",
                marginBottom: "16px",
              }}
            >
              {currentSlide.caption}
            </p>
          )}

          {/* Clickable Mini Thumbnails */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "10px",
              overflowX: "auto",
              padding: "4px 0",
            }}
          >
            {slides.map((s, idx) => {
              const isSelected = idx === currentSlideIndex;
              return (
                  <button
                    key={s.number}
                    onClick={() => setCurrentSlideIndex(idx)}
                    style={{
                      position: "relative",
                      width: "48px",
                      height: "48px",
                      borderRadius: "10px",
                      overflow: "hidden",
                      border: isSelected ? "2px solid #5835E5" : "1px solid var(--border-light)",
                      transform: isSelected ? "scale(1.05)" : "scale(1)",
                      opacity: isSelected ? 1 : 0.65,
                      transition: "all 0.2s ease",
                      flexShrink: 0,
                      background: "#18181B",
                    }}
                  >
                    <Image
                      src={s.image}
                      alt={`Thumbnail ${idx + 1}`}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="48px"
                    />
                  </button>
              );
            })}
          </div>
        </div>

        {/* Verified LinkedIn Reach & Impressions Proof Card */}
        {currentDeck.stats && (
          <div
            style={{
              marginTop: "8px",
              padding: "18px 22px",
              borderRadius: "var(--radius-lg)",
              background: "linear-gradient(135deg, rgba(88, 53, 229, 0.04) 0%, rgba(6, 182, 212, 0.04) 100%)",
              border: "1px solid rgba(88, 53, 229, 0.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "16px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              <div
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "12px",
                  background: "#5835E5",
                  color: "#FFFFFF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 4px 12px rgba(88, 53, 229, 0.3)",
                  flexShrink: 0,
                }}
              >
                <Sparkles size={20} />
              </div>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", color: "#5835E5" }}>
                    Verified Audience Impact
                  </span>
                  <span
                    style={{
                      fontSize: "11px",
                      fontWeight: 700,
                      background: "#22C55E",
                      color: "#FFFFFF",
                      padding: "1px 7px",
                      borderRadius: "10px",
                    }}
                  >
                    Live Proof
                  </span>
                </div>
                <div style={{ fontSize: "18px", fontWeight: 800, color: "var(--text-main)", marginTop: "2px" }}>
                  {currentDeck.stats.impressions}
                </div>
                <div style={{ fontSize: "12.5px", color: "var(--text-muted)", marginTop: "2px" }}>
                  {currentDeck.stats.reactions} • {currentDeck.stats.comments} • {currentDeck.stats.reposts}
                </div>
              </div>
            </div>

            {/* LinkedIn Analytics Screenshot Preview (Enlarged & Prominently Visible) */}
            <div
              style={{
                position: "relative",
                width: "min(100%, 340px)",
                height: "90px",
                borderRadius: "12px",
                overflow: "hidden",
                border: "1.5px solid rgba(88, 53, 229, 0.25)",
                boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
                background: "#FFFFFF",
                cursor: "pointer",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
              onClick={() => window.open(currentDeck.stats?.screenshot, "_blank")}
              title="Click to view full screenshot in high-res"
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.03)";
                e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 4px 14px rgba(0,0,0,0.08)";
              }}
            >
              <Image
                src={currentDeck.stats.screenshot}
                alt="LinkedIn Impressions Proof"
                fill
                style={{ objectFit: "contain", background: "#FFFFFF" }}
                sizes="340px"
              />
            </div>
          </div>
        )}

        {/* Tags row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: "16px",
            borderTop: "1px solid var(--border-light)",
            flexWrap: "wrap",
            gap: "10px",
          }}
        >
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
            {currentDeck.tags.map((t) => (
              <span
                key={t}
                style={{
                  fontSize: "11px",
                  fontWeight: 600,
                  background: "var(--bg-body)",
                  border: "1px solid var(--border-light)",
                  padding: "3px 10px",
                  borderRadius: "var(--radius-full)",
                  color: "var(--text-muted)",
                }}
              >
                #{t}
              </span>
            ))}
          </div>

          <span style={{ fontSize: "12px", color: "var(--text-light)" }}>
            Designed &amp; Authored by Urooj Fatima
          </span>
        </div>
      </div>

      {/* Fullscreen Modal Dialog */}
      {isModalOpen && (
        <div
          className="modal-overlay"
          onClick={() => setIsModalOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: "720px",
              padding: "24px",
              background: "#111113",
              color: "#FFFFFF",
            }}
          >
            <button
              className="modal-close-btn"
              onClick={() => setIsModalOpen(false)}
              aria-label="Close modal"
              style={{ background: "#27272A", color: "#FFFFFF", border: "none" }}
            >
              <X size={20} />
            </button>

            <div style={{ marginBottom: "16px" }}>
              <span style={{ fontSize: "12px", color: "#A78BFA", fontWeight: 600 }}>
                Slide {currentSlideIndex + 1} of {slides.length}
              </span>
              <h3 style={{ fontSize: "18px", fontWeight: 700, marginTop: "4px" }}>
                {currentSlide.title}
              </h3>
            </div>

            <div
              style={{
                position: "relative",
                width: "100%",
                aspectRatio: "1 / 1",
                borderRadius: "14px",
                overflow: "hidden",
                background: "#000",
              }}
            >
              <Image
                src={currentSlide.image}
                alt={currentSlide.title}
                fill
                style={{ objectFit: "contain" }}
              />
            </div>

            {/* Modal Controls */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "16px",
              }}
            >
              <button
                onClick={handlePrev}
                style={{
                  padding: "8px 18px",
                  borderRadius: "var(--radius-full)",
                  background: "#27272A",
                  color: "#FFF",
                  fontWeight: 600,
                  fontSize: "13px",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                <ChevronLeft size={16} />
                <span>Prev</span>
              </button>

              <span style={{ fontSize: "13px", color: "#9CA3AF" }}>
                {currentSlideIndex + 1} / {slides.length}
              </span>

              <button
                onClick={handleNext}
                style={{
                  padding: "8px 18px",
                  borderRadius: "var(--radius-full)",
                  background: "var(--accent-violet)",
                  color: "#FFF",
                  fontWeight: 600,
                  fontSize: "13px",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                <span>Next</span>
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
