"use client";

import { motion } from "framer-motion";

// Replace with actual GDS Google Form URL
const GOOGLE_FORM_URL = "https://forms.gle/Q4xsjgRmd6E2AEgaA";

const TOPICS = [
  {
    number: "01",
    title: "Emerging Conversion Courses",
    body: "Discover programmes that let you pivot into high-demand fields — even if your undergraduate degree is in an unrelated discipline. These courses are your shortcut to employability.",
    tag: "Career Pivot",
  },
  {
    number: "02",
    title: "High-Paying Careers & the Courses That Lead to Them",
    body: "We map the highest-earning career paths in your destination country and work backwards to the exact qualifications that open those doors.",
    tag: "Earning Potential",
  },
  {
    number: "03",
    title: "Getting Part-Time Jobs Whilst Studying",
    body: "Understand the legal work allowances, the sectors most open to international students, and how to position yourself to earn from day one of arrival.",
    tag: "Income Whilst Studying",
  },
  {
    number: "04",
    title: "Regional Variations in Economic Activity",
    body: "The job market in London looks nothing like Manchester. We break down regional employment landscapes so you choose a location — not just a university.",
    tag: "Location Strategy",
  },
  {
    number: "05",
    title: "Location & Localisation of Industries",
    body: "Where are the tech hubs? Where is healthcare hiring? Where do engineering firms cluster? We show you exactly where to plant yourself for maximum career leverage.",
    tag: "Industry Mapping",
  },
  {
    number: "06",
    title: "Scholarships, Bursaries & Discounts",
    body: "Funding your study abroad journey is possible. We surface the scholarships, institutional bursaries, and lesser-known discounts available to Nigerian students.",
    tag: "Funding",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

export default function WebinarTopics() {
  return (
    <section
      id="topics"
      aria-labelledby="topics-heading"
      style={{
        background: "var(--bg-base)",
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
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "1rem",
              marginBottom: "clamp(2.5rem, 5vw, 4rem)",
              paddingBottom: "clamp(1.5rem, 3vw, 2.5rem)",
              borderBottom: "1px solid var(--border)",
            }}
            className="topics-header"
          >
            <motion.p variants={fadeUp} className="section-label">
              What We Cover
            </motion.p>

            <motion.h2
              id="topics-heading"
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
              Six topics that will{" "}
              <em style={{ fontStyle: "italic", color: "var(--brand)" }}>
                change how you plan
              </em>{" "}
              your move abroad.
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
              In every virtual engagement, we go deep on the decisions that
              determine whether you thrive abroad or just survive. These are the
              six pillars every session covers.
            </motion.p>
          </motion.div>

          {/* ── Topics grid ── */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "0",
              marginBottom: "clamp(2.5rem, 5vw, 4rem)",
            }}
            className="topics-grid"
          >
            {TOPICS.map((topic, i) => (
              <TopicRow
                key={topic.number}
                topic={topic}
                index={i}
                total={TOPICS.length}
              />
            ))}
          </motion.div>

          {/* ── Bottom CTA band ── */}
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
              border: "1px solid var(--border)",
              background: "var(--bg-subtle)",
              position: "relative",
              overflow: "hidden",
            }}
            className="topics-cta"
          >
            {/* Decorative large number watermark */}
            <span
              aria-hidden="true"
              style={{
                position: "absolute",
                right: "-0.5rem",
                top: "50%",
                transform: "translateY(-50%)",
                fontFamily: "var(--font-display)",
                fontWeight: 900,
                fontSize: "clamp(6rem, 14vw, 10rem)",
                lineHeight: 1,
                color: "rgba(139,26,74,0.04)",
                userSelect: "none",
                pointerEvents: "none",
                letterSpacing: "-0.04em",
              }}
            >
              6
            </span>

            {/* Content */}
            <div style={{ position: "relative", zIndex: 1 }}>
              <p className="section-label" style={{ marginBottom: "0.5rem" }}>
                All covered in one session
              </p>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "clamp(1.125rem, 2.5vw, 1.625rem)",
                  lineHeight: 1.25,
                  letterSpacing: "-0.015em",
                  color: "var(--text-primary)",
                  marginBottom: "0.625rem",
                }}
              >
                These six pillars and more — all in our{" "}
                <em style={{ color: "var(--brand)", fontStyle: "italic" }}>
                  free virtual webinar.
                </em>
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.9375rem",
                  lineHeight: 1.7,
                  color: "var(--text-muted)",
                  maxWidth: "52ch",
                }}
              >
                Register now — seats are limited and sessions fill up fast. Good
                luck!
              </p>
            </div>

            {/* Actions */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.75rem",
                alignItems: "center",
                position: "relative",
                zIndex: 1,
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
                }}
              >
                Register for Free Webinar
                <ExternalLinkIcon />
              </a>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.8rem",
                  color: "var(--text-muted)",
                }}
              >
                <CheckIcon />
                Free to attend &nbsp;·&nbsp;
                <CheckIcon />
                Delivered virtually &nbsp;·&nbsp;
                <CheckIcon />
                Limited seats
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Responsive styles ── */}
      <style>{`
        @media (min-width: 768px) {
          .topics-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .topics-grid > *:nth-child(odd) {
            border-right: 1px solid var(--border);
          }
        }
        @media (min-width: 1024px) {
          .topics-header {
            grid-template-columns: 1fr 1fr !important;
            column-gap: 3rem !important;
            align-items: end !important;
          }
          .topics-header .section-label {
            grid-column: 1 / -1;
          }
          .topics-cta {
            grid-template-columns: 1fr auto !important;
            align-items: center !important;
          }
        }
      `}</style>
    </section>
  );
}

/* ── Single topic row ── */
function TopicRow({ topic, index, total }) {
  const isLastRow =
    index === total - 1 || (total % 2 === 0 && index === total - 2);

  return (
    <motion.div
      variants={fadeUp}
      style={{
        display: "grid",
        gridTemplateColumns: "3rem 1fr",
        gap: "1.25rem",
        padding: "1.875rem 1.25rem 1.875rem 0",
        borderBottom: index < total - 1 ? "1px solid var(--border)" : "none",
        alignItems: "start",
        transition: "background 150ms ease",
        borderRadius: "0.25rem",
        cursor: "default",
      }}
      whileHover={{
        backgroundColor: "rgba(139,26,74,0.025)",
        transition: { duration: 0.15 },
      }}
      className="topic-row"
    >
      {/* Number */}
      <div
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 700,
          fontSize: "0.875rem",
          color: "var(--brand-light)",
          letterSpacing: "0.05em",
          paddingTop: "0.2rem",
          lineHeight: 1,
        }}
      >
        {topic.number}
      </div>

      {/* Content */}
      <div>
        {/* Tag pill */}
        <span
          style={{
            display: "inline-block",
            padding: "0.2rem 0.625rem",
            borderRadius: "9999px",
            background: "rgba(139,26,74,0.07)",
            border: "1px solid var(--brand-light)",
            fontFamily: "var(--font-sans)",
            fontSize: "0.65rem",
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "var(--brand)",
            marginBottom: "0.5rem",
          }}
        >
          {topic.tag}
        </span>

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
          {topic.title}
        </h3>

        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "0.9rem",
            lineHeight: 1.72,
            color: "var(--text-secondary)",
          }}
        >
          {topic.body}
        </p>
      </div>
    </motion.div>
  );
}

/* ── Icons ── */
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
