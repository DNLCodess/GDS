"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// Unsplash — career counselling / planning session
const SOLUTION_IMAGE =
  "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=900&q=85&auto=format&fit=crop";

const BLUR_URL =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/wAARCAAEAAYDASIAAhEBAxEB/8QAFAABAAAAAAAAAAAAAAAAAAAACf/EABQQAQAAAAAAAAAAAAAAAAAAAAD/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AJQAB/9k=";

// Replace with actual GDS Google Form URL
const GOOGLE_FORM_URL = "https://forms.gle/Q4xsjgRmd6E2AEgaA";

const APPROACH_STEPS = [
  {
    step: "01",
    title: "Research the destination job market",
    body: "Before you pick a course, we help you understand which sectors are hiring, which regions have the highest demand, and what employers in your target country actually look for.",
  },
  {
    step: "02",
    title: "Match courses to career outcomes",
    body: "We identify programmes that directly lead to high-paying roles — including conversion courses that open doors even if your undergraduate background is unrelated.",
  },
  {
    step: "03",
    title: "Plan for life whilst studying",
    body: "From part-time work opportunities to scholarships, bursaries, and regional economic variations — we prepare you for the full picture, not just the classroom.",
  },
];

const OUTCOMES = [
  { label: "Arrive with a job strategy", icon: <BriefcaseIcon /> },
  { label: "Know your target sector", icon: <TargetIcon /> },
  { label: "Secure funding & discounts", icon: <ScholarshipIcon /> },
  { label: "Earn whilst you study", icon: <EarnIcon /> },
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
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.08 } },
};

export default function Solution() {
  return (
    <section
      id="solution"
      aria-labelledby="solution-heading"
      style={{
        background: "var(--bg-card)",
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
            className="solution-header"
          >
            <motion.p variants={fadeUp} className="section-label">
              Our Approach
            </motion.p>

            <motion.h2
              id="solution-heading"
              variants={fadeUp}
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "clamp(1.875rem, 4.5vw, 3.25rem)",
                lineHeight: 1.1,
                letterSpacing: "-0.025em",
                color: "var(--text-primary)",
                maxWidth: "24ch",
              }}
            >
              With our career guidance counselling,{" "}
              <em style={{ fontStyle: "italic", color: "var(--brand)" }}>
                you can do better.
              </em>
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
              We research the job sector in the country you&rsquo;re travelling
              to, identify the courses that guarantee those jobs, and tell you
              exactly what else you need to do — all before you travel.
            </motion.p>
          </motion.div>

          {/* ── Main content: steps left, image right ── */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "clamp(2rem, 4vw, 4.5rem)",
              alignItems: "start",
              marginBottom: "clamp(2.5rem, 5vw, 4rem)",
            }}
            className="solution-body"
          >
            {/* LEFT — three approach steps */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              style={{ display: "flex", flexDirection: "column", gap: 0 }}
            >
              {APPROACH_STEPS.map((item, i) => (
                <motion.div
                  key={item.step}
                  variants={fadeUp}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "3rem 1fr",
                    gap: "1.25rem",
                    paddingTop: i === 0 ? 0 : "1.875rem",
                    paddingBottom: "1.875rem",
                    borderBottom:
                      i < APPROACH_STEPS.length - 1
                        ? "1px solid var(--border)"
                        : "none",
                    alignItems: "start",
                  }}
                >
                  {/* Step number */}
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 700,
                      fontSize: "0.875rem",
                      color: "var(--brand-light)",
                      letterSpacing: "0.05em",
                      paddingTop: "0.25rem",
                      lineHeight: 1,
                    }}
                  >
                    {item.step}
                  </div>

                  {/* Content */}
                  <div>
                    <h3
                      style={{
                        fontFamily: "var(--font-display)",
                        fontWeight: 700,
                        fontSize: "clamp(1rem, 1.8vw, 1.2rem)",
                        lineHeight: 1.3,
                        color: "var(--text-primary)",
                        letterSpacing: "-0.01em",
                        marginBottom: "0.625rem",
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.9375rem",
                        lineHeight: 1.72,
                        color: "var(--text-secondary)",
                      }}
                    >
                      {item.body}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* RIGHT — image + outcome chips */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              {/* Image */}
              <div
                style={{
                  position: "relative",
                  borderRadius: "0.5rem",
                  overflow: "hidden",
                  aspectRatio: "4 / 3",
                  background: "var(--bg-subtle)",
                  boxShadow: "0 2px 32px rgba(26,10,15,0.07)",
                }}
              >
                <Image
                  src={SOLUTION_IMAGE}
                  alt="Career counselling and planning session"
                  fill
                  sizes="(max-width: 900px) 100vw, 45vw"
                  quality={82}
                  placeholder="blur"
                  blurDataURL={BLUR_URL}
                  style={{ objectFit: "cover", objectPosition: "center" }}
                />

                {/* Top-left editorial badge */}
                <div
                  style={{
                    position: "absolute",
                    top: "1rem",
                    left: "1rem",
                    background: "var(--brand)",
                    color: "#fff",
                    padding: "0.375rem 0.875rem",
                    borderRadius: "9999px",
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  Career-First Guidance
                </div>
              </div>

              {/* Outcome chips grid */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "0.75rem",
                }}
              >
                {OUTCOMES.map((outcome) => (
                  <div
                    key={outcome.label}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      padding: "0.875rem 1rem",
                      borderRadius: "0.5rem",
                      background: "var(--bg-subtle)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    <div
                      style={{
                        width: "32px",
                        height: "32px",
                        borderRadius: "50%",
                        background: "rgba(139,26,74,0.08)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        color: "var(--brand)",
                      }}
                    >
                      {outcome.icon}
                    </div>
                    <span
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.8rem",
                        fontWeight: 600,
                        color: "var(--text-secondary)",
                        lineHeight: 1.3,
                      }}
                    >
                      {outcome.label}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ── CTA band — Google Form registration ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "1.5rem",
              padding: "clamp(1.5rem, 3vw, 2.5rem)",
              borderRadius: "0.75rem",
              background: "var(--bg-subtle)",
              border: "1px solid var(--border)",
              borderLeft: "4px solid var(--brand)",
            }}
            className="solution-cta"
          >
            {/* Copy */}
            <div>
              <p className="section-label" style={{ marginBottom: "0.5rem" }}>
                Ready to get started?
              </p>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "clamp(1.125rem, 2.5vw, 1.5rem)",
                  lineHeight: 1.25,
                  letterSpacing: "-0.015em",
                  color: "var(--text-primary)",
                  marginBottom: "0.625rem",
                }}
              >
                Join one of our virtual webinars — free, focused, and built for{" "}
                <em style={{ color: "var(--brand)", fontStyle: "italic" }}>
                  your future.
                </em>
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.9375rem",
                  lineHeight: 1.7,
                  color: "var(--text-muted)",
                }}
              >
                These and many others we cover in our various virtual
                engagements. Register below — seats are limited.
              </p>
            </div>

            {/* Actions */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.75rem",
                alignItems: "center",
              }}
            >
              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.8125rem 1.625rem",
                  borderRadius: "0.5rem",
                  fontSize: "0.9375rem",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              >
                Register for Webinar
                <ExternalLinkIcon />
              </a>

              <a
                href="tel:+2348170685999"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  fontFamily: "var(--font-sans)",
                  fontWeight: 500,
                  fontSize: "0.875rem",
                  color: "var(--text-muted)",
                  textDecoration: "none",
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
                Prefer to call? +234-8170685999
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Responsive styles ── */}
      <style>{`
        @media (min-width: 900px) {
          .solution-header {
            grid-template-columns: 1fr 1fr !important;
            column-gap: 3rem !important;
            align-items: end !important;
          }
          .solution-header .section-label {
            grid-column: 1 / -1;
          }
          .solution-body {
            grid-template-columns: 1fr 1fr !important;
          }
          .solution-cta {
            grid-template-columns: 1fr auto !important;
            align-items: center !important;
          }
        }
      `}</style>
    </section>
  );
}

/* ── Icons ── */
function BriefcaseIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      <line x1="12" y1="12" x2="12" y2="12" />
      <path d="M2 12h20" />
    </svg>
  );
}

function TargetIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

function ScholarshipIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  );
}

function EarnIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="12" y1="1" x2="12" y2="23" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
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
