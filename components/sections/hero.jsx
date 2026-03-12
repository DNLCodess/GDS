"use client";

import { motion } from "framer-motion";

const GOOGLE_FORM_URL = "https://forms.gle/Q4xsjgRmd6E2AEgaA";

const BENEFITS = [
  "Destination-specific career roadmap",
  "High-demand courses matched to jobs",
  "Part-time work & scholarship guidance",
  "Live Q&A with our consultants",
];

const STATS = [
  { value: "28", label: "Years experience" },
  { value: "10+", label: "Countries covered" },
  { value: "100%", label: "Virtual & free" },
];

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.04 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  return (
    <section
      aria-label="Hero"
      style={{
        background: "var(--bg-base)",
        borderBottom: "1px solid var(--border)",
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      {/* ── Masthead strip ── */}
      <div className="hero-masthead" style={{ borderBottom: "1px solid var(--border)" }}>
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
            <span className="section-label" style={{ color: "var(--text-muted)", letterSpacing: "0.12em" }}>
              Est. 1998
            </span>
            <span style={{ width: "1px", height: "12px", background: "var(--border-strong)", display: "inline-block" }} />
            <span className="section-label" style={{ color: "var(--text-muted)", letterSpacing: "0.12em" }}>
              Career Guidance & Study Abroad Consulting
            </span>
          </div>
          <span className="section-label" style={{ color: "var(--brand)", letterSpacing: "0.12em" }}>
            Free Webinar — Limited Seats
          </span>
        </div>
      </div>

      {/* ── Main grid ── */}
      <div className="container-page" style={{ flex: 1, display: "flex", alignItems: "center" }}>
        <div
          className="hero-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "clamp(2rem, 4vw, 4rem)",
            paddingTop: "clamp(2.5rem, 5vw, 4rem)",
            paddingBottom: "clamp(2.5rem, 5vw, 4rem)",
            width: "100%",
          }}
        >
          {/* ── LEFT: copy ── */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}
          >
            <motion.div variants={fadeUp}>
              <p className="section-label" style={{ marginBottom: "0.75rem" }}>
                Glory Educational Services
              </p>
              <h1
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 900,
                  fontSize: "clamp(2.25rem, 6vw, 4.5rem)",
                  lineHeight: 1.05,
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

            <motion.p
              variants={fadeUp}
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "clamp(0.9375rem, 1.5vw, 1.0625rem)",
                lineHeight: 1.75,
                color: "var(--text-secondary)",
                maxWidth: "48ch",
                borderTop: "1px solid var(--border)",
                paddingTop: "1.25rem",
              }}
            >
              Too many Nigerians finish overseas and end up in menial jobs — not because they lacked talent, but because they chose courses without understanding the job market.{" "}
              <strong style={{ fontWeight: 600, color: "var(--text-primary)" }}>
                We fix that — before you travel.
              </strong>
            </motion.p>

            {/* Benefits */}
            <motion.ul
              variants={fadeUp}
              style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem" }}
            >
              {BENEFITS.map((b) => (
                <li
                  key={b}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.625rem",
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.9375rem",
                    fontWeight: 500,
                    color: "var(--text-secondary)",
                  }}
                >
                  <CheckIcon />
                  {b}
                </li>
              ))}
            </motion.ul>

            {/* Stats */}
            <motion.div
              variants={fadeUp}
              style={{
                display: "flex",
                gap: "1.5rem",
                flexWrap: "wrap",
                paddingTop: "1rem",
                borderTop: "1px solid var(--border)",
              }}
            >
              {STATS.map((s) => (
                <div key={s.label} style={{ paddingLeft: "0.75rem", borderLeft: "2px solid var(--brand-light)" }}>
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 700,
                      fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
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
                      marginTop: "0.2rem",
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── RIGHT: register card ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            style={{
              padding: "clamp(1.5rem, 3vw, 2.25rem)",
              borderRadius: "0.875rem",
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              borderTop: "4px solid var(--brand)",
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
              alignSelf: "start",
              position: "sticky",
              top: "5rem",
            }}
          >
            <div>
              <p className="section-label" style={{ marginBottom: "0.5rem", color: "var(--brand)" }}>
                Free Webinar — Limited Seats
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: "clamp(1.375rem, 2.5vw, 1.75rem)",
                  lineHeight: 1.2,
                  letterSpacing: "-0.02em",
                  color: "var(--text-primary)",
                  marginBottom: "0.625rem",
                }}
              >
                Register for our free virtual webinar
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.9rem",
                  lineHeight: 1.65,
                  color: "var(--text-muted)",
                }}
              >
                Takes less than 2 minutes. Our team will confirm your spot via email.
              </p>
            </div>

            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.625rem",
                padding: "1rem 2rem",
                borderRadius: "0.5rem",
                fontSize: "1rem",
                fontWeight: 700,
                textDecoration: "none",
                boxShadow: "0 4px 20px rgba(201,151,58,0.28)",
                transition: "transform 150ms ease, box-shadow 150ms ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 10px 32px rgba(201,151,58,0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 20px rgba(201,151,58,0.28)";
              }}
            >
              Register for Free Webinar
              <ExternalLinkIcon />
            </a>

            {/* Trust signals */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "0.875rem",
              }}
            >
              {["Free to attend", "Delivered virtually", "Limited seats"].map((t, i, arr) => (
                <span
                  key={t}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.3rem",
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.75rem",
                    color: "var(--text-muted)",
                    fontWeight: 500,
                  }}
                >
                  <CheckIcon />
                  {t}
                  {i < arr.length - 1 && (
                    <span
                      style={{
                        display: "inline-block",
                        width: "1px",
                        height: "10px",
                        background: "var(--border-strong)",
                        marginLeft: "0.875rem",
                      }}
                    />
                  )}
                </span>
              ))}
            </div>

            {/* Contact */}
            <div
              style={{
                paddingTop: "1rem",
                borderTop: "1px solid var(--border)",
                display: "flex",
                flexWrap: "wrap",
                gap: "0.75rem",
                alignItems: "center",
              }}
            >
              <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.8rem", color: "var(--text-muted)" }}>
                Prefer to reach us directly?
              </span>
              <a
                href="tel:+2348170685999"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.35rem",
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  color: "var(--brand)",
                  textDecoration: "none",
                }}
              >
                <PhoneIcon />
                +234-8170685999
              </a>
              <a
                href="mailto:enquiries@gloryeduserve.com"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.35rem",
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  color: "var(--brand)",
                  textDecoration: "none",
                }}
              >
                <MailIcon />
                enquiries@gloryeduserve.com
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .hero-masthead { display: none; }
        @media (min-width: 768px) { .hero-masthead { display: block; } }
        @media (min-width: 900px) {
          .hero-grid { grid-template-columns: 1fr 1fr !important; align-items: start !important; }
        }
        @media (min-width: 1100px) {
          .hero-grid { grid-template-columns: 1.1fr 0.9fr !important; }
        }
      `}</style>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--brand)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flexShrink: 0 }}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
function ExternalLinkIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}
function PhoneIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.29 6.29l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}
