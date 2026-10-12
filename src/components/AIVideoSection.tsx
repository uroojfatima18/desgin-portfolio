"use client";

import { useState } from "react";
import Image from "next/image";
import { Play, Sparkles, Wand2 } from "lucide-react";

interface AIVideoSectionProps {
  videoSrc?: string;
}

export default function AIVideoSection({ videoSrc = "/assets/videos/ai-demo.mp4" }: AIVideoSectionProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <section id="ai-video" style={{ position: "relative" }}>
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
              Generative Motion &amp; Media
            </span>
            <span style={{ fontSize: "12px", color: "var(--text-light)" }}>•</span>
            <span style={{ fontSize: "12px", color: "var(--text-muted)", fontWeight: 500 }}>
              AI Video Production
            </span>
          </div>

          <h2 className="section-title">AI VIDEO GENERATION</h2>
        </div>
      </div>

      <div
        className="card-base"
        style={{
          padding: "24px",
          display: "flex",
          flexDirection: "column",
          gap: "18px",
        }}
      >
        {/* Video Player Box */}
        <div
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: "16 / 9",
            borderRadius: "var(--radius-xl)",
            overflow: "hidden",
            background: "#0E0E12",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            boxShadow: "0 20px 50px rgba(0, 0, 0, 0.25)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {!hasError && videoSrc ? (
            <video
              src={videoSrc}
              controls
              playsInline
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              onError={() => setHasError(true)}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            />
          ) : null}

          {/* Fallback / Mockup Overlay if video is loading or awaiting user's file */}
          {(hasError || !videoSrc) && (
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                background: "linear-gradient(135deg, #18132B 0%, #0E0E12 100%)",
                padding: "24px",
                textAlign: "center",
                color: "#FFFFFF",
              }}
            >
              <div
                style={{
                  width: "72px",
                  height: "72px",
                  borderRadius: "50%",
                  background: "var(--accent-violet)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 8px 30px rgba(88, 53, 229, 0.5)",
                  marginBottom: "16px",
                  cursor: "pointer",
                }}
              >
                <Play size={30} color="#FFFFFF" style={{ marginLeft: "4px" }} />
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#A78BFA", fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "6px" }}>
                <Wand2 size={14} />
                <span>AI Video Showcase Ready</span>
              </div>

              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "22px", fontWeight: 700, marginBottom: "8px" }}>
                AI Video Generation Player
              </h3>
              <p style={{ fontSize: "14px", color: "#A1A1AA", maxWidth: "420px", lineHeight: 1.5 }}>
                Your custom AI video will play right here seamlessly. Attach or paste your video and it will be embedded instantly.
              </p>
            </div>
          )}
        </div>

        {/* Video Meta Info */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
            paddingTop: "6px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span
              style={{
                fontSize: "12px",
                fontWeight: 600,
                padding: "4px 12px",
                borderRadius: "var(--radius-full)",
                background: "var(--bg-body)",
                border: "1px solid var(--border-light)",
                color: "var(--text-main)",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <Sparkles size={12} color="#5835E5" />
              <span>Prompt to Video • Agentic AI</span>
            </span>
          </div>

          <span style={{ fontSize: "12px", color: "var(--text-light)" }}>
            Direction &amp; Prompts by Urooj Fatima
          </span>
        </div>
      </div>
    </section>
  );
}
