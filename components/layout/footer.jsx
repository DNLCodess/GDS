"use client";
import Image from "next/image";
import Link from "next/link";

const GOOGLE_FORM_URL = "https://forms.gle/Q4xsjgRmd6E2AEgaA";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Our Approach", href: "#solution" },
  { label: "Webinar Topics", href: "#topics" },
  { label: "Register", href: GOOGLE_FORM_URL, external: true },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="contact"
      aria-label="Site footer"
      style={{
        background: "var(--text-primary)",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      {/* ── Main footer body ── */}
      <div className="container-page">
        <div
          style={{
            paddingTop: "clamp(2.5rem, 5vw, 4rem)",
            paddingBottom: "clamp(2rem, 4vw, 3rem)",
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "clamp(2rem, 4vw, 3.5rem)",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
          }}
          className="footer-body"
        >
          {/* Brand column */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
          >
            {/* Logo + wordmark */}
            <Link
              href="/"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.75rem",
                textDecoration: "none",
              }}
              aria-label="Glory Educational Services — Home"
            >
              <div style={{ position: "relative", width: 40, height: 40 }}>
                <Image
                  src="/logo.png"
                  alt="Glory Educational Services"
                  fill
                  sizes="40px"
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  lineHeight: 1.2,
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    fontSize: "1rem",
                    color: "#fff",
                    letterSpacing: "-0.01em",
                  }}
                >
                  Glory
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontWeight: 400,
                    fontSize: "0.62rem",
                    color: "rgba(255,255,255,0.45)",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  Educational Services
                </span>
              </div>
            </Link>

            {/* Tagline */}
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.875rem",
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.5)",
                maxWidth: "30ch",
              }}
            >
              Career-first study abroad consulting for Nigerians. Trusted since
              1997.
            </p>

            {/* Contact details */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              <a
                href="tel:+2348170685999"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  color: "rgba(255,255,255,0.65)",
                  textDecoration: "none",
                  transition: "color 150ms ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "rgba(255,255,255,0.65)")
                }
              >
                <PhoneIcon />
                +234-8170685999
              </a>
              <a
                href="mailto:enquiries@gloryeduserve.com"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  color: "rgba(255,255,255,0.65)",
                  textDecoration: "none",
                  transition: "color 150ms ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "rgba(255,255,255,0.65)")
                }
              >
                <MailIcon />
                enquiries@gloryeduserve.com
              </a>
            </div>
          </div>

          {/* Navigation column */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.65rem",
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.3)",
                marginBottom: "1rem",
              }}
            >
              Navigation
            </p>
            <nav aria-label="Footer navigation">
              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.625rem",
                }}
              >
                {NAV_LINKS.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          fontFamily: "var(--font-sans)",
                          fontSize: "0.9rem",
                          fontWeight: 500,
                          color: "rgba(255,255,255,0.6)",
                          textDecoration: "none",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.35rem",
                          transition: "color 150ms ease",
                        }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.color = "var(--brand-gold)")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.color =
                            "rgba(255,255,255,0.6)")
                        }
                      >
                        {link.label}
                        <ExternalLinkIcon />
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        style={{
                          fontFamily: "var(--font-sans)",
                          fontSize: "0.9rem",
                          fontWeight: 500,
                          color: "rgba(255,255,255,0.6)",
                          textDecoration: "none",
                          transition: "color 150ms ease",
                          display: "inline-block",
                        }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.color = "#fff")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.color =
                            "rgba(255,255,255,0.6)")
                        }
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Webinar CTA column */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.65rem",
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.3)",
                marginBottom: "1rem",
              }}
            >
              Join a Webinar
            </p>

            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.875rem",
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.5)",
                marginBottom: "1.25rem",
                maxWidth: "28ch",
              }}
            >
              Register for one of our free virtual sessions and arrive abroad
              with a career plan.
            </p>

            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.75rem 1.375rem",
                borderRadius: "0.5rem",
                fontFamily: "var(--font-sans)",
                fontWeight: 700,
                fontSize: "0.875rem",
                letterSpacing: "0.01em",
                background: "linear-gradient(135deg, #C9973A 0%, #E8C97A 100%)",
                color: "#1A0A0F",
                textDecoration: "none",
                transition: "opacity 150ms ease, transform 150ms ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = "0.88";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "1";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Register Now
              <ExternalLinkIcon />
            </a>

            {/* Est. badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                marginTop: "1.5rem",
                padding: "0.5rem 0.875rem",
                borderRadius: "9999px",
                border: "1px solid rgba(255,255,255,0.1)",
                background: "rgba(255,255,255,0.04)",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "0.875rem",
                  color: "var(--brand-gold)",
                }}
              >
                28
              </span>
              <span
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.68rem",
                  fontWeight: 500,
                  color: "rgba(255,255,255,0.38)",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
              >
                years of trusted experience
              </span>
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div
          style={{
            paddingTop: "1.25rem",
            paddingBottom: "1.5rem",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "0.75rem",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.75rem",
              color: "rgba(255,255,255,0.28)",
              lineHeight: 1.5,
            }}
          >
            © {year} Glory Educational Services Ltd. All rights reserved.
          </p>

          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.75rem",
              color: "rgba(255,255,255,0.2)",
            }}
          >
            Registered in Nigeria · Est. 1997
          </p>
        </div>
      </div>

      {/* ── Responsive styles ── */}
      <style>{`
        @media (min-width: 640px) {
          .footer-body {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (min-width: 1024px) {
          .footer-body {
            grid-template-columns: 1.5fr 1fr 1.25fr !important;
          }
        }
      `}</style>
    </footer>
  );
}

/* ── Icons ── */
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
function ExternalLinkIcon() {
  return (
    <svg
      width="11"
      height="11"
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
