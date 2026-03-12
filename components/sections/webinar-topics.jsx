"use client";

import { motion } from "framer-motion";

const TOPICS = [
  { tag: "Career Pivot", title: "Emerging Conversion Courses" },
  { tag: "Earning Potential", title: "High-Paying Careers & the Courses That Lead to Them" },
  { tag: "Income Whilst Studying", title: "Getting Part-Time Jobs Whilst Studying" },
  { tag: "Location Strategy", title: "Regional Variations in Economic Activity" },
  { tag: "Industry Mapping", title: "Location & Localisation of Industries" },
  { tag: "Funding", title: "Scholarships, Bursaries & Discounts" },
];

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.04 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
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
            paddingTop: "clamp(2.5rem, 5vw, 4rem)",
            paddingBottom: "clamp(2.5rem, 5vw, 4rem)",
          }}
        >
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            style={{
              marginBottom: "clamp(1.75rem, 3vw, 2.5rem)",
              paddingBottom: "clamp(1.25rem, 2vw, 1.75rem)",
              borderBottom: "1px solid var(--border)",
            }}
          >
            <p className="section-label" style={{ marginBottom: "0.5rem" }}>
              What We Cover
            </p>
            <h2
              id="topics-heading"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)",
                lineHeight: 1.15,
                letterSpacing: "-0.025em",
                color: "var(--text-primary)",
              }}
            >
              Six topics covered in every session —{" "}
              <em style={{ fontStyle: "italic", color: "var(--brand)" }}>all in one free webinar.</em>
            </h2>
          </motion.div>

          {/* Topics grid */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-40px" }}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "0.75rem",
            }}
            className="topics-grid"
          >
            {TOPICS.map((topic, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  padding: "0.875rem 1.125rem",
                  borderRadius: "0.5rem",
                  border: "1px solid var(--border)",
                  background: "var(--bg-subtle)",
                  transition: "border-color 150ms ease",
                }}
                whileHover={{ backgroundColor: "rgba(139,26,74,0.025)" }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    fontSize: "0.8rem",
                    color: "var(--brand-light)",
                    letterSpacing: "0.05em",
                    flexShrink: 0,
                    minWidth: "2rem",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  style={{
                    display: "inline-block",
                    padding: "0.2rem 0.6rem",
                    borderRadius: "9999px",
                    background: "rgba(139,26,74,0.07)",
                    border: "1px solid var(--brand-light)",
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.65rem",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--brand)",
                    flexShrink: 0,
                  }}
                >
                  {topic.tag}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.9375rem",
                    fontWeight: 600,
                    color: "var(--text-primary)",
                    lineHeight: 1.3,
                  }}
                >
                  {topic.title}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (min-width: 640px) {
          .topics-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (min-width: 1024px) {
          .topics-grid { grid-template-columns: 1fr 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
}
