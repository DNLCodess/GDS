"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// Unsplash — confident graduate / success moment
const PROOF_IMAGE =
  "https://images.unsplash.com/photo-1627556704302-624286467c65?w=900&q=85&auto=format&fit=crop";

const BLUR_URL =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/wAARCAAEAAYDASIAAhEBAxEB/8QAFAABAAAAAAAAAAAAAAAAAAAACf/EABQQAQAAAAAAAAAAAAAAAAAAAAD/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AJQAB/9k=";

const STATS = [
  {
    value: "28",
    unit: "Years",
    label: "Trusted by Nigerian students since 1998",
    large: true,
  },
  {
    value: "10+",
    unit: "Countries",
    label: "Destinations we actively advise on",
    large: false,
  },
  {
    value: "6",
    unit: "Core Topics",
    label: "Covered in every webinar session",
    large: false,
  },
  {
    value: "100%",
    unit: "Virtual",
    label: "All engagements delivered online — no travel required",
    large: false,
  },
];

const TRUST_POINTS = [
  {
    heading: "Almost three decades of experience",
    body: "Founded in 1998, Glory Educational Services has watched the overseas education landscape shift — and adapted our guidance accordingly. We don't guess; we know.",
  },
  {
    heading: "Career outcomes, not just admissions",
    body: "Most consultants stop at getting you enrolled. We start with where you want to be in ten years and work backwards to the course, the country, and the city.",
  },
  {
    heading: "Practical, destination-specific intelligence",
    body: "We don't give generic advice. Every session is grounded in the real job market, real regional data, and real funding opportunities of your chosen destination.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.06 } },
};

export default function SocialProof() {
  return (
    <section
      id="social-proof"
      aria-labelledby="proof-heading"
      style={{
        background: "var(--bg-subtle)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div className="container-page">
        <div
          style={{
            paddingTop: "clamp(3.5rem, 7vw, 6rem)",
            paddingBottom: "clamp(3.5rem, 7vw, 6rem)",
          }}
        >
          {/* ── Section header ── */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            style={{
              marginBottom: "clamp(2.5rem, 5vw, 4rem)",
              paddingBottom: "clamp(1.5rem, 3vw, 2.5rem)",
              borderBottom: "1px solid var(--border)",
              display: "grid",
              gap: "1rem",
            }}
            className="proof-header"
          >
            <motion.p variants={fadeUp} className="section-label">
              Why Trust Us
            </motion.p>

            <motion.h2
              id="proof-heading"
              variants={fadeUp}
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "clamp(1.875rem, 4.5vw, 3.25rem)",
                lineHeight: 1.1,
                letterSpacing: "-0.025em",
                color: "var(--text-primary)",
                maxWidth: "22ch",
              }}
            >
              Let our{" "}
              <em style={{ fontStyle: "italic", color: "var(--brand)" }}>
                28 years
              </em>{" "}
              of experience work for you.
            </motion.h2>

            <motion.p
              variants={fadeUp}
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "clamp(0.9375rem, 1.6vw, 1.0625rem)",
                lineHeight: 1.78,
                color: "var(--text-secondary)",
                maxWidth: "55ch",
              }}
            >
              We appreciate your tenacity in coming this far. At Glory
              Educational Services, we are here to assist you and let nearly
              three decades of on-the-ground knowledge work in your favour.
            </motion.p>
          </motion.div>

          {/* ── Stats row ── */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              borderTop: "1px solid var(--border)",
              borderLeft: "1px solid var(--border)",
              marginBottom: "clamp(2.5rem, 5vw, 4.5rem)",
              borderRadius: "0.5rem",
              overflow: "hidden",
              background: "var(--bg-card)",
              boxShadow: "0 1px 16px rgba(26,10,15,0.05)",
            }}
            className="proof-stats"
          >
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.value}
                variants={fadeUp}
                style={{
                  padding: "clamp(1.25rem, 3vw, 2rem)",
                  borderRight: "1px solid var(--border)",
                  borderBottom: "1px solid var(--border)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.375rem",
                  background: i === 0 ? "var(--brand)" : "var(--bg-card)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Ghost brand pattern on featured stat */}
                {i === 0 && (
                  <span
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      right: "-0.75rem",
                      bottom: "-1rem",
                      fontFamily: "var(--font-display)",
                      fontWeight: 900,
                      fontSize: "clamp(4rem, 10vw, 7rem)",
                      lineHeight: 1,
                      color: "rgba(255,255,255,0.07)",
                      userSelect: "none",
                      pointerEvents: "none",
                      letterSpacing: "-0.04em",
                    }}
                  >
                    {stat.value}
                  </span>
                )}

                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 900,
                    fontSize:
                      i === 0
                        ? "clamp(2.5rem, 6vw, 4rem)"
                        : "clamp(1.75rem, 4vw, 2.75rem)",
                    lineHeight: 1,
                    letterSpacing: "-0.03em",
                    color: i === 0 ? "#fff" : "var(--brand)",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  {stat.value}
                  <span
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontWeight: 500,
                      fontSize: "clamp(0.75rem, 1.5vw, 1rem)",
                      letterSpacing: "0.04em",
                      marginLeft: "0.375rem",
                      color:
                        i === 0
                          ? "rgba(255,255,255,0.65)"
                          : "var(--text-muted)",
                    }}
                  >
                    {stat.unit}
                  </span>
                </div>

                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.8rem",
                    fontWeight: 500,
                    lineHeight: 1.5,
                    color:
                      i === 0 ? "rgba(255,255,255,0.72)" : "var(--text-muted)",
                    position: "relative",
                    zIndex: 1,
                    maxWidth: "24ch",
                  }}
                >
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* ── Two-column: trust points left, image right ── */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "clamp(2rem, 4vw, 4.5rem)",
              alignItems: "center",
            }}
            className="proof-body"
          >
            {/* Trust points */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              style={{ display: "flex", flexDirection: "column", gap: 0 }}
            >
              {TRUST_POINTS.map((point, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  style={{
                    display: "flex",
                    gap: "1.25rem",
                    paddingTop: i === 0 ? 0 : "1.75rem",
                    paddingBottom: "1.75rem",
                    borderBottom:
                      i < TRUST_POINTS.length - 1
                        ? "1px solid var(--border)"
                        : "none",
                    alignItems: "flex-start",
                  }}
                >
                  {/* Check mark */}
                  <div
                    style={{
                      width: "28px",
                      height: "28px",
                      borderRadius: "50%",
                      background: "rgba(139,26,74,0.08)",
                      border: "1.5px solid var(--brand-light)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      marginTop: "0.2rem",
                    }}
                  >
                    <CheckIcon />
                  </div>

                  <div>
                    <h3
                      style={{
                        fontFamily: "var(--font-display)",
                        fontWeight: 700,
                        fontSize: "clamp(1rem, 1.8vw, 1.175rem)",
                        lineHeight: 1.3,
                        color: "var(--text-primary)",
                        letterSpacing: "-0.01em",
                        marginBottom: "0.5rem",
                      }}
                    >
                      {point.heading}
                    </h3>
                    <p
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.9375rem",
                        lineHeight: 1.72,
                        color: "var(--text-secondary)",
                      }}
                    >
                      {point.body}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              style={{ position: "relative" }}
            >
              <div
                style={{
                  borderRadius: "0.5rem",
                  overflow: "hidden",
                  aspectRatio: "4 / 3",
                  background: "var(--bg-subtle)",
                  boxShadow: "0 2px 32px rgba(26,10,15,0.08)",
                  position: "relative",
                }}
              >
                <Image
                  src={PROOF_IMAGE}
                  alt="Graduate celebrating success after studying abroad"
                  fill
                  sizes="(max-width: 900px) 100vw, 45vw"
                  quality={82}
                  placeholder="blur"
                  blurDataURL={BLUR_URL}
                  style={{ objectFit: "cover", objectPosition: "center top" }}
                />

                {/* Bottom overlay — Est. badge */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "1rem",
                    right: "1rem",
                    background: "rgba(253,252,251,0.95)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid var(--border)",
                    borderRadius: "0.5rem",
                    padding: "0.75rem 1rem",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                    gap: "0.125rem",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 700,
                      fontSize: "1.5rem",
                      lineHeight: 1,
                      color: "var(--brand)",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    1998
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.65rem",
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--text-muted)",
                    }}
                  >
                    Est. in Nigeria
                  </span>
                </div>

                {/* Decorative left rule */}
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    left: 0,
                    width: "3px",
                    background:
                      "linear-gradient(180deg, var(--brand) 0%, var(--brand-gold) 100%)",
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── Responsive styles ── */}
      <style>{`
        @media (min-width: 640px) {
          .proof-stats {
            grid-template-columns: repeat(4, 1fr) !important;
          }
          .proof-stats > *:last-child {
            border-right: none !important;
          }
        }
        @media (min-width: 900px) {
          .proof-header {
            grid-template-columns: 1fr 1fr !important;
            column-gap: 3rem !important;
            align-items: end !important;
          }
          .proof-header .section-label {
            grid-column: 1 / -1;
          }
          .proof-body {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

/* ── Icons ── */
function CheckIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="var(--brand)"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
