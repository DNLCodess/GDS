"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Fast progress ramp — feels instant but gives the animation room to breathe
    const steps = [
      { target: 40, delay: 0, duration: 300 },
      { target: 70, delay: 300, duration: 250 },
      { target: 90, delay: 550, duration: 200 },
      { target: 100, delay: 750, duration: 150 },
    ];

    steps.forEach(({ target, delay }) => {
      setTimeout(() => setProgress(target), delay);
    });

    // Dismiss after progress completes
    const timer = setTimeout(() => setVisible(false), 1100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            y: -12,
            transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
          }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "var(--bg-base)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "2rem",
          }}
        >
          {/* ── Wordmark ── */}
          <div style={{ textAlign: "center" }}>
            {/* Animated brand line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              style={{
                height: "2px",
                background:
                  "linear-gradient(90deg, var(--brand-dark), var(--brand), var(--brand-gold))",
                borderRadius: "2px",
                marginBottom: "1.25rem",
                transformOrigin: "left center",
                width: "100%",
              }}
            />

            {/* Glory — primary word */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.45,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 900,
                fontSize: "clamp(2.25rem, 6vw, 3.5rem)",
                letterSpacing: "-0.03em",
                lineHeight: 1,
                color: "var(--text-primary)",
                marginBottom: "0.25rem",
              }}
            >
              Glory
            </motion.h1>

            {/* Educational Services — subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 400,
                fontSize: "0.7rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--text-muted)",
              }}
            >
              Educational Services
            </motion.p>
          </div>

          {/* ── Progress bar ── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.25 }}
            style={{
              width: "clamp(160px, 30vw, 240px)",
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
              alignItems: "center",
            }}
          >
            {/* Track */}
            <div
              style={{
                width: "100%",
                height: "2px",
                background: "var(--border)",
                borderRadius: "2px",
                overflow: "hidden",
              }}
            >
              {/* Fill */}
              <motion.div
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                style={{
                  height: "100%",
                  background:
                    "linear-gradient(90deg, var(--brand) 0%, var(--brand-gold) 100%)",
                  borderRadius: "2px",
                }}
              />
            </div>

            {/* Est. label */}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.65rem",
                fontWeight: 600,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--text-muted)",
              }}
            >
              Est. 1998 &nbsp;·&nbsp; Career-First Guidance
            </motion.span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
