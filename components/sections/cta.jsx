"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const GOOGLE_FORM_URL = "https://forms.gle/Q4xsjgRmd6E2AEgaA";

const BLUR_URL =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/wAARCAAEAAYDASIAAhEBAxEB/8QAFAABAAAAAAAAAAAAAAAAAAAACf/EABQQAQAAAAAAAAAAAAAAAAAAAAD/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AJQAB/9k=";

// Unsplash — group of students in a webinar / online learning setting
const CTA_IMAGE =
  "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=900&q=85&auto=format&fit=crop";

const WHAT_YOU_GET = [
  "Destination-specific career roadmap",
  "High-demand courses matched to jobs",
  "Part-time work guidance",
  "Scholarship & bursary intelligence",
  "Regional industry mapping",
  "Live Q&A with our consultants",
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
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.06 } },
};

export default function WebinarCTA() {
  return (
    <section
      id="register"
      aria-labelledby="cta-heading"
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
          {/* ── Main CTA grid ── */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "clamp(2rem, 4vw, 5rem)",
              alignItems: "start",
            }}
            className="cta-grid"
          >
            {/* LEFT — copy + form link */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
            >
              {/* Section label + heading */}
              <div>
                <motion.p
                  variants={fadeUp}
                  className="section-label"
                  style={{ marginBottom: "0.875rem" }}
                >
                  Free Webinar — Limited Seats
                </motion.p>

                <motion.h2
                  id="cta-heading"
                  variants={fadeUp}
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 800,
                    fontSize: "clamp(1.875rem, 4.5vw, 3.25rem)",
                    lineHeight: 1.1,
                    letterSpacing: "-0.025em",
                    color: "var(--text-primary)",
                    marginBottom: "1rem",
                  }}
                >
                  If you are interested, register to attend one of our{" "}
                  <em style={{ fontStyle: "italic", color: "var(--brand)" }}>
                    webinars.
                  </em>
                </motion.h2>

                <motion.p
                  variants={fadeUp}
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "clamp(0.9375rem, 1.6vw, 1.0625rem)",
                    lineHeight: 1.78,
                    color: "var(--text-secondary)",
                    maxWidth: "52ch",
                  }}
                >
                  These and many others we cover in our various virtual
                  engagements. One session can change the entire trajectory of
                  your overseas experience — and it costs you nothing.
                </motion.p>
              </div>

              {/* What you get */}
              <motion.div variants={fadeUp}>
                <p className="section-label" style={{ marginBottom: "1rem" }}>
                  What you walk away with
                </p>
                <ul
                  style={{
                    listStyle: "none",
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "0.625rem",
                  }}
                >
                  {WHAT_YOU_GET.map((item) => (
                    <li
                      key={item}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "0.5rem",
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.875rem",
                        fontWeight: 500,
                        lineHeight: 1.5,
                        color: "var(--text-secondary)",
                      }}
                    >
                      <span
                        style={{
                          color: "var(--brand)",
                          flexShrink: 0,
                          marginTop: "2px",
                        }}
                      >
                        <CheckIcon />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* CTA block */}
              <motion.div
                variants={fadeUp}
                style={{
                  padding: "1.75rem",
                  borderRadius: "0.75rem",
                  background: "var(--bg-subtle)",
                  border: "1px solid var(--border)",
                  borderTop: "3px solid var(--brand)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.25rem",
                }}
              >
                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 700,
                      fontSize: "1.0625rem",
                      color: "var(--text-primary)",
                      marginBottom: "0.375rem",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    Register via our online form
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.875rem",
                      color: "var(--text-muted)",
                      lineHeight: 1.65,
                    }}
                  >
                    Click below to open our registration form. Takes less than 2
                    minutes. Our team will confirm your spot via email.
                  </p>
                </div>

                <a
                  href={GOOGLE_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.625rem",
                    padding: "0.9375rem 2rem",
                    borderRadius: "0.5rem",
                    fontSize: "1rem",
                    fontWeight: 700,
                    textDecoration: "none",
                    width: "100%",
                    boxShadow: "0 4px 20px rgba(201,151,58,0.28)",
                    transition: "transform 150ms ease, box-shadow 150ms ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow =
                      "0 10px 32px rgba(201,151,58,0.4)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 4px 20px rgba(201,151,58,0.28)";
                  }}
                >
                  Register for Free Webinar
                  <ExternalLinkIcon />
                </a>

                {/* Trust micro-line */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "1rem",
                    flexWrap: "wrap",
                  }}
                >
                  {[
                    "Free to attend",
                    "Delivered virtually",
                    "Limited seats",
                  ].map((t, i, arr) => (
                    <span
                      key={t}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.35rem",
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
                            marginLeft: "1rem",
                          }}
                        />
                      )}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Or contact directly */}
              <motion.div
                variants={fadeUp}
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "1rem",
                  alignItems: "center",
                  paddingTop: "0.5rem",
                  borderTop: "1px solid var(--border)",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.8rem",
                    color: "var(--text-muted)",
                  }}
                >
                  Prefer to reach us directly?
                </span>
                <a
                  href="tel:+2348170685999"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.375rem",
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    color: "var(--brand)",
                    textDecoration: "none",
                    transition: "opacity 150ms ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.75")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                >
                  <PhoneIcon />
                  +234-8170685999
                </a>
                <span
                  style={{
                    width: "1px",
                    height: "12px",
                    background: "var(--border-strong)",
                    display: "inline-block",
                  }}
                />
                <a
                  href="mailto:enquiries@gloryeduserve.com"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.375rem",
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    color: "var(--brand)",
                    textDecoration: "none",
                    transition: "opacity 150ms ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.75")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                >
                  <MailIcon />
                  enquiries@gloryeduserve.com
                </a>
              </motion.div>
            </motion.div>

            {/* RIGHT — image + closing quote */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
                position: "sticky",
                top: "6rem",
              }}
            >
              {/* Image */}
              <div
                style={{
                  borderRadius: "0.5rem",
                  overflow: "hidden",
                  aspectRatio: "4 / 3",
                  background: "var(--bg-subtle)",
                  boxShadow: "0 2px 32px rgba(26,10,15,0.07)",
                  position: "relative",
                }}
              >
                <Image
                  src={CTA_IMAGE}
                  alt="Students in a virtual webinar session"
                  fill
                  sizes="(max-width: 900px) 100vw, 45vw"
                  quality={82}
                  placeholder="blur"
                  blurDataURL={BLUR_URL}
                  style={{ objectFit: "cover", objectPosition: "center" }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(26,10,15,0.7) 0%, transparent 55%)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: "1.25rem",
                    left: "1.25rem",
                    right: "1.25rem",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-display)",
                      fontStyle: "italic",
                      fontWeight: 600,
                      fontSize: "clamp(1rem, 1.8vw, 1.2rem)",
                      lineHeight: 1.45,
                      color: "#fff",
                      marginBottom: "0.375rem",
                    }}
                  >
                    &ldquo;Good luck!&rdquo;
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
                    — Glory Educational Services
                  </cite>
                </div>
              </div>

              {/* Closing note card */}
              <div
                style={{
                  padding: "1.25rem 1.5rem",
                  borderRadius: "0.5rem",
                  background: "var(--bg-subtle)",
                  border: "1px solid var(--border)",
                  borderLeft: "3px solid var(--brand-gold)",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontStyle: "italic",
                    fontWeight: 600,
                    fontSize: "1rem",
                    lineHeight: 1.6,
                    color: "var(--text-primary)",
                    marginBottom: "0.5rem",
                  }}
                >
                  &ldquo;We appreciate your tenacity coming this far.&rdquo;
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.85rem",
                    lineHeight: 1.65,
                    color: "var(--text-muted)",
                  }}
                >
                  At Glory Educational Services, we are here to assist you and
                  let our 28 years of experience work for you.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── Responsive styles ── */}
      <style>{`
        @media (min-width: 900px) {
          .cta-grid {
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
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
function ExternalLinkIcon() {
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
