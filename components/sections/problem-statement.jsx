"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// Unsplash — pensive/thoughtful student, quiet moment
const PROBLEM_IMAGE =
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&q=85&auto=format&fit=crop";

const BLUR_URL =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/wAARCAAEAAYDASIAAhEBAxEB/8QAFAABAAAAAAAAAAAAAAAAAAAACf/EABQQAQAAAAAAAAAAAAAAAAAAAAD/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AJQAB/9k=";

const PAIN_POINTS = [
  {
    number: "01",
    heading: "Choosing courses with a Nigerian lens",
    body: "Most students research programmes based on what's valued back home — not what the job market in their destination country actually demands.",
  },
  {
    number: "02",
    heading: "Arriving without a career plan",
    body: "They settle into coursework, finish on time — then the real panic begins. Days become weeks, weeks become months of fruitless job searching.",
  },
  {
    number: "03",
    heading: "Accepting less than they deserve",
    body: "Without guidance, talented graduates become entrenched in menial work — not because of ability, but because of decisions made before they even landed.",
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
  show: { transition: { staggerChildren: 0.11, delayChildren: 0.1 } },
};

export default function ProblemStatement() {
  return (
    <section
      id="about"
      aria-labelledby="problem-heading"
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
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "1rem",
              marginBottom: "clamp(2.5rem, 5vw, 4rem)",
              paddingBottom: "clamp(1.5rem, 3vw, 2.5rem)",
              borderBottom: "1px solid var(--border)",
            }}
            className="problem-header"
          >
            <motion.p variants={fadeUp} className="section-label">
              The Problem We Solve
            </motion.p>

            <motion.h2
              id="problem-heading"
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
              It is heartbreaking seeing Nigerians finish overseas and end up in{" "}
              <em
                style={{
                  fontStyle: "italic",
                  color: "var(--brand)",
                }}
              >
                menial jobs.
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
              You wonder why? The reason is not far-fetched. The majority
              don&rsquo;t pay attention to the decisions they make at home,
              ahead of travelling. With experience, we&rsquo;ve seen this
              pattern — and we know exactly how to break it.
            </motion.p>
          </motion.div>

          {/* ── Two-column: image left, pain points right ── */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "clamp(2rem, 4vw, 4rem)",
              alignItems: "start",
            }}
            className="problem-body"
          >
            {/* Image column */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              style={{ position: "relative" }}
            >
              {/* Pull-quote overlay card */}
              <div
                style={{
                  position: "relative",
                  borderRadius: "0.5rem",
                  overflow: "hidden",
                  aspectRatio: "4 / 3",
                  background: "var(--bg-card)",
                  boxShadow: "0 2px 32px rgba(26,10,15,0.08)",
                }}
              >
                <Image
                  src={PROBLEM_IMAGE}
                  alt="Student reflecting on career path abroad"
                  fill
                  sizes="(max-width: 768px) 100vw, 45vw"
                  quality={82}
                  placeholder="blur"
                  blurDataURL={BLUR_URL}
                  style={{ objectFit: "cover", objectPosition: "center" }}
                />

                {/* Dark editorial overlay — bottom third */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(26,10,15,0.88) 0%, rgba(26,10,15,0.2) 50%, transparent 100%)",
                  }}
                />

                {/* Pull quote — newspaper style */}
                <blockquote
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: "1.5rem",
                    margin: 0,
                    borderTop: "2px solid var(--brand-gold)",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-display)",
                      fontStyle: "italic",
                      fontWeight: 600,
                      fontSize: "clamp(1rem, 2vw, 1.25rem)",
                      lineHeight: 1.45,
                      color: "#fff",
                      marginBottom: "0.5rem",
                    }}
                  >
                    &ldquo;They soon start counting days… into weeks, then
                    months.&rdquo;
                  </p>
                  <cite
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.7rem",
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--brand-gold)",
                      fontStyle: "normal",
                    }}
                  >
                    — Glory Educational Services, 28 years of observation
                  </cite>
                </blockquote>
              </div>

              {/* Decorative offset rule — editorial accent */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  top: "1rem",
                  left: "-0.75rem",
                  bottom: "-0.75rem",
                  width: "3px",
                  background:
                    "linear-gradient(180deg, var(--brand) 0%, var(--brand-light) 100%)",
                  borderRadius: "2px",
                }}
              />
            </motion.div>

            {/* Pain points column */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0",
              }}
            >
              {PAIN_POINTS.map((point, i) => (
                <motion.div
                  key={point.number}
                  variants={fadeUp}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "3rem 1fr",
                    gap: "1.25rem",
                    paddingTop: i === 0 ? "0" : "1.75rem",
                    paddingBottom: "1.75rem",
                    borderBottom:
                      i < PAIN_POINTS.length - 1
                        ? "1px solid var(--border)"
                        : "none",
                    alignItems: "start",
                  }}
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
                    {point.number}
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

              {/* Bottom callout — transition into solution */}
              <motion.div
                variants={fadeUp}
                style={{
                  marginTop: "2rem",
                  padding: "1.25rem 1.5rem",
                  borderRadius: "0.5rem",
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  borderLeft: "3px solid var(--brand)",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "1rem",
                }}
              >
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    background:
                      "linear-gradient(135deg, var(--brand-dark), var(--brand))",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    marginTop: "2px",
                  }}
                >
                  <LightbulbIcon />
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontWeight: 600,
                      fontSize: "0.9375rem",
                      color: "var(--text-primary)",
                      marginBottom: "0.3rem",
                      lineHeight: 1.4,
                    }}
                  >
                    The good news? Every one of these mistakes is preventable.
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.875rem",
                      color: "var(--text-muted)",
                      lineHeight: 1.65,
                    }}
                  >
                    With the right guidance before you travel, you can arrive
                    with a clear career strategy — not just a student visa.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── Responsive grid ── */}
      <style>{`
        @media (min-width: 900px) {
          .problem-header {
            grid-template-columns: 1fr 1fr !important;
            grid-template-rows: auto auto !important;
            column-gap: 3rem !important;
            align-items: end !important;
          }
          .problem-header .section-label {
            grid-column: 1 / -1;
          }
          .problem-body {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

function LightbulbIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
      <path d="M9 18h6" />
      <path d="M10 22h4" />
    </svg>
  );
}
