"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=900&q=85&auto=format&fit=crop&crop=top";

const BLUR_URL =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/wAARCAAEAAYDASIAAhEBAxEB/8QAFAABAAAAAAAAAAAAAAAAAAAACf/EABQQAQAAAAAAAAAAAAAAAAAAAAD/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AJQAB/9k=";

const STATS = [
  { value: "28", label: "Years of\nexperience" },
  { value: "10+", label: "Countries\ncovered" },
  { value: "100%", label: "Career-first\nguidance" },
];

const TOPICS = [
  "Nursing",
  "Science",
  "Education",
  "IT & Data Science",
  "Engineering",
  "Business & Management",
  "Public Health",
];

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};
const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.5 } },
};

export default function Hero() {
  return (
    <section
      aria-label="Hero"
      style={{
        background: "var(--bg-base)",
        borderBottom: "1px solid var(--border)",
        overflow: "hidden",
      }}
    >
      {/* ── Masthead strip — hidden on mobile via CSS, not Tailwind ──
          Key fix: the element itself gets display:none below md,
          so it takes zero height and causes zero layout shift.        */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="show"
        className="hero-masthead"
      >
        <div
          className="container-page"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "0.5rem",
            padding: "0.6rem 0",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
            <span
              className="section-label"
              style={{ color: "var(--text-muted)", letterSpacing: "0.12em" }}
            >
              Est. 1998
            </span>
            <span
              style={{
                width: "1px",
                height: "12px",
                background: "var(--border-strong)",
                display: "inline-block",
              }}
            />
            <span
              className="section-label"
              style={{ color: "var(--text-muted)", letterSpacing: "0.12em" }}
            >
              Career Guidance & Study Abroad Consulting
            </span>
          </div>
          <span
            className="section-label"
            style={{ color: "var(--brand)", letterSpacing: "0.12em" }}
          >
            Free Webinar — Limited Seats
          </span>
        </div>
      </motion.div>

      {/* ── Main hero grid ── */}
      <div className="container-page">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            paddingTop: "clamp(2rem, 4vw, 3.5rem)",
            paddingBottom: "clamp(2.5rem, 5vw, 4rem)",
            gap: "2.5rem",
          }}
        >
          {/* ── HEADLINE ── */}
          <motion.div
            variants={fadeUp}
            style={{
              borderBottom: "2px solid var(--brand)",
              paddingBottom: "1.5rem",
            }}
          >
            <p className="section-label" style={{ marginBottom: "0.875rem" }}>
              Glory Educational Services
            </p>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 900,
                fontSize: "clamp(2.5rem, 7vw, 5.25rem)",
                lineHeight: 1.04,
                letterSpacing: "-0.03em",
                color: "var(--text-primary)",
                maxWidth: "18ch",
              }}
            >
              Don&rsquo;t Just Study Abroad.{" "}
              <em style={{ fontStyle: "italic", color: "var(--brand)" }}>
                Arrive with a Career.
              </em>
            </h1>
          </motion.div>

          {/* ── Three-column body ── */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(1, 1fr)",
              gap: "2rem",
            }}
            className="hero-grid"
          >
            {/* COL 1 — Stat strip */}
            <motion.aside
              variants={fadeUp}
              aria-label="Key statistics"
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                gap: "1.25rem",
              }}
              className="hero-stats"
            >
              {STATS.map((s, i) => (
                <div
                  key={i}
                  style={{
                    paddingLeft: "0.875rem",
                    borderLeft: "2px solid var(--brand-light)",
                    flex: "1 1 80px",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 700,
                      fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                      lineHeight: 1,
                      color: "var(--brand)",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {s.value}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.7rem",
                      fontWeight: 500,
                      letterSpacing: "0.04em",
                      textTransform: "uppercase",
                      color: "var(--text-muted)",
                      marginTop: "0.3rem",
                      whiteSpace: "pre-line",
                      lineHeight: 1.4,
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.aside>

            {/* COL 2 — Image */}
            <motion.div
              variants={fadeUp}
              className="hero-image-col"
              style={{
                position: "relative",
                borderRadius: "0.5rem",
                overflow: "hidden",
                border: "3px solid var(--brand)",
                aspectRatio: "4 / 5",
                minHeight: "300px",
                background: "var(--bg-subtle)",
              }}
            >
              <Image
                src={HERO_IMAGE}
                alt="Students studying together — Glory Educational Services"
                fill
                priority
                fetchPriority="high"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 380px"
                quality={88}
                placeholder="blur"
                blurDataURL={BLUR_URL}
                style={{ objectFit: "cover", objectPosition: "center top" }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: "var(--brand)",
                  padding: "0.5rem 0.875rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.68rem",
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.85)",
                  }}
                >
                  28 Years of Trusted Guidance
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "0.75rem",
                    fontStyle: "italic",
                    color: "rgba(255,255,255,0.65)",
                  }}
                >
                  Est. 1998
                </span>
              </div>
            </motion.div>

            {/* COL 3 — Body copy + CTAs */}
            <motion.div
              variants={stagger}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
              className="hero-copy-col"
            >
              <motion.p
                variants={fadeUp}
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "clamp(0.9375rem, 1.6vw, 1.0625rem)",
                  lineHeight: 1.78,
                  color: "var(--text-secondary)",
                  borderTop: "1px solid var(--border)",
                  paddingTop: "1rem",
                }}
              >
                Too many Nigerians finish overseas and end up in menial jobs —
                not because they lacked talent, but because they chose courses
                without understanding the job market they were entering.{" "}
                <strong
                  style={{ fontWeight: 600, color: "var(--text-primary)" }}
                >
                  We fix that — before you travel.
                </strong>
              </motion.p>

              <motion.div variants={fadeUp}>
                <p
                  className="section-label"
                  style={{ marginBottom: "0.625rem" }}
                >
                  We cover courses in
                </p>
                <div
                  style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}
                >
                  {TOPICS.map((t) => (
                    <span
                      key={t}
                      style={{
                        display: "inline-block",
                        padding: "0.3rem 0.75rem",
                        borderRadius: "9999px",
                        border: "1px solid var(--border-strong)",
                        background: "var(--bg-subtle)",
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.75rem",
                        fontWeight: 500,
                        color: "var(--text-secondary)",
                        letterSpacing: "0.01em",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                  <span
                    style={{
                      display: "inline-block",
                      padding: "0.3rem 0.75rem",
                      borderRadius: "9999px",
                      border: "1px solid var(--brand-light)",
                      background: "rgba(139,26,74,0.04)",
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      color: "var(--brand)",
                    }}
                  >
                    + more
                  </span>
                </div>
              </motion.div>

              <motion.div
                variants={fadeUp}
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.75rem",
                  paddingTop: "0.5rem",
                  borderTop: "1px solid var(--border)",
                }}
              >
                <Link
                  href="#register"
                  className="btn-primary"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    padding: "0.8125rem 1.625rem",
                    borderRadius: "0.5rem",
                    fontSize: "0.9375rem",
                    textDecoration: "none",
                  }}
                >
                  Register for Free Webinar
                  <ArrowRight />
                </Link>
                <Link
                  href="#solution"
                  className="btn-ghost"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    padding: "0.8125rem 1.25rem",
                    borderRadius: "0.5rem",
                    fontSize: "0.9375rem",
                    textDecoration: "none",
                  }}
                >
                  How It Works
                  <ChevronDown />
                </Link>
              </motion.div>

              <motion.div
                variants={fadeUp}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  flexWrap: "wrap",
                }}
              >
                <a
                  href="tel:+2348170685999"
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.8rem",
                    fontWeight: 500,
                    color: "var(--text-muted)",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.375rem",
                    transition: "color 150ms ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--brand)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--text-muted)")
                  }
                >
                  <PhoneIcon />
                  +234-8170685999
                </a>
                <span
                  style={{
                    width: "1px",
                    height: "12px",
                    background: "var(--border)",
                    display: "inline-block",
                  }}
                />
                <a
                  href="mailto:enquiries@gloryeduserve.com"
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.8rem",
                    fontWeight: 500,
                    color: "var(--text-muted)",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.375rem",
                    transition: "color 150ms ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--brand)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--text-muted)")
                  }
                >
                  <MailIcon />
                  enquiries@gloryeduserve.com
                </a>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* ── All responsive styles in one place ── */}
      <style>{`
        /* MASTHEAD — the fix:
           display:none collapses the element fully (zero height, zero margin).
           This is the only correct way to prevent layout push on mobile.
           Tailwind's hidden class only sets visibility on children,
           not the container itself — which caused the gap.              */
        .hero-masthead {
          display: none;
          border-bottom: 1px solid var(--border);
        }
        @media (min-width: 768px) {
          .hero-masthead {
            display: block;
          }
        }

        /* HERO GRID */
        @media (min-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .hero-stats {
            grid-column: 1 / -1;
            flex-direction: row !important;
            gap: 2rem !important;
          }
          .hero-image-col {
            aspect-ratio: 3 / 4 !important;
          }
        }
        @media (min-width: 1024px) {
          .hero-grid {
            grid-template-columns: 180px 1fr 1fr !important;
            gap: 2.5rem !important;
          }
          .hero-stats {
            grid-column: 1 !important;
            flex-direction: column !important;
            gap: 2rem !important;
            border-right: 1px solid var(--border);
            padding-right: 2rem;
          }
          .hero-image-col {
            aspect-ratio: 4 / 5 !important;
          }
        }
      `}</style>
    </section>
  );
}

/* ── Icons ── */
function ArrowRight() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}
function ChevronDown() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}
function PhoneIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.29 6.29l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}
