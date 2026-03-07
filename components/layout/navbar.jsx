"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Our Approach", href: "#solution" },
  { label: "Webinar Topics", href: "#topics" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(null);
  const hoverRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      {/* ── Top contact bar ── */}
      <div
        className="hidden md:flex items-center justify-end gap-6 px-8 py-2 text-xs font-medium tracking-wide"
        style={{
          background: "var(--brand-dark)",
          color: "rgba(255,255,255,0.75)",
          fontFamily: "var(--font-sans)",
        }}
      >
        <a
          href="tel:+2348170685999"
          className="flex items-center gap-1.5 hover:text-white transition-colors duration-150"
        >
          <PhoneIcon />
          +234-8170685999
        </a>
        <span style={{ color: "rgba(255,255,255,0.25)" }}>|</span>
        <a
          href="mailto:enquiries@gloryeduserve.com"
          className="flex items-center gap-1.5 hover:text-white transition-colors duration-150"
        >
          <MailIcon />
          enquiries@gloryeduserve.com
        </a>
      </div>

      {/* ── Main navbar ── */}
      <header
        role="banner"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          transition:
            "background 250ms ease, box-shadow 250ms ease, border-color 250ms ease",
          background: scrolled
            ? "rgba(253, 252, 251, 0.92)"
            : "rgba(253, 252, 251, 1)",
          backdropFilter: scrolled ? "blur(16px) saturate(180%)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(16px) saturate(180%)" : "none",
          borderBottom: scrolled
            ? "1px solid var(--border)"
            : "1px solid transparent",
          boxShadow: scrolled ? "0 4px 24px rgba(26,10,15,0.06)" : "none",
        }}
      >
        <nav
          className="container-page flex items-center justify-between"
          style={{ height: "72px" }}
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 flex-shrink-0"
            aria-label="Glory Educational Services — Home"
          >
            <div style={{ position: "relative", width: 44, height: 44 }}>
              <Image
                src="/logo.png"
                alt="Glory Educational Services Logo"
                fill
                sizes="44px"
                style={{ objectFit: "contain" }}
                priority
              />
            </div>
            <div className="hidden sm:flex flex-col leading-none">
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "1rem",
                  color: "var(--brand-dark)",
                  letterSpacing: "-0.01em",
                  lineHeight: 1.2,
                }}
              >
                Glory
              </span>
              <span
                style={{
                  fontFamily: "var(--font-sans)",
                  fontWeight: 400,
                  fontSize: "0.65rem",
                  color: "var(--text-muted)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  lineHeight: 1.4,
                }}
              >
                Educational Services
              </span>
            </div>
          </Link>

          {/* Desktop nav links */}
          <ul
            className="hidden lg:flex items-center"
            style={{ gap: "0.25rem", listStyle: "none" }}
            onMouseLeave={() => setActiveLink(null)}
          >
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onMouseEnter={() => setActiveLink(link.href)}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    padding: "0.5rem 1rem",
                    borderRadius: "0.5rem",
                    fontFamily: "var(--font-sans)",
                    fontWeight: 500,
                    fontSize: "0.875rem",
                    letterSpacing: "0.01em",
                    color:
                      activeLink === link.href
                        ? "var(--brand)"
                        : "var(--text-secondary)",
                    background:
                      activeLink === link.href
                        ? "rgba(139,26,74,0.06)"
                        : "transparent",
                    transition: "color 150ms ease, background 150ms ease",
                    textDecoration: "none",
                    position: "relative",
                  }}
                >
                  {link.label}
                  {/* Active underline dot */}
                  {activeLink === link.href && (
                    <motion.span
                      layoutId="nav-dot"
                      style={{
                        position: "absolute",
                        bottom: "6px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "4px",
                        height: "4px",
                        borderRadius: "50%",
                        background: "var(--brand)",
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            {/* 28 years badge */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.375rem 0.875rem",
                borderRadius: "9999px",
                border: "1px solid var(--border)",
                background: "var(--bg-subtle)",
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
                  fontSize: "0.7rem",
                  fontWeight: 500,
                  color: "var(--text-muted)",
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                }}
              >
                yrs experience
              </span>
            </div>

            <Link
              href="#register"
              className="btn-primary"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.625rem 1.375rem",
                borderRadius: "0.625rem",
                fontSize: "0.875rem",
                textDecoration: "none",
              }}
            >
              Register for Webinar
              <ArrowIcon />
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            className="lg:hidden flex flex-col items-center justify-center"
            style={{
              width: 44,
              height: 44,
              borderRadius: "0.5rem",
              border: "1px solid var(--border)",
              background: "transparent",
              cursor: "pointer",
              gap: "5px",
              padding: "10px",
              transition: "background 150ms ease",
            }}
          >
            <BurgerLine
              rotated={
                mobileOpen ? "rotate(45deg) translate(5px, 5px)" : "none"
              }
            />
            <BurgerLine opacity={mobileOpen ? 0 : 1} />
            <BurgerLine
              rotated={
                mobileOpen ? "rotate(-45deg) translate(5px, -5px)" : "none"
              }
            />
          </button>
        </nav>
      </header>

      {/* ── Mobile menu ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            style={{
              position: "fixed",
              top: "72px",
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 49,
              background: "var(--bg-base)",
              overflowY: "auto",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Contact strip */}
            <div
              style={{
                background: "var(--brand-dark)",
                padding: "0.75rem 1.5rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              <a
                href="tel:+2348170685999"
                className="flex items-center gap-2"
                style={{
                  color: "rgba(255,255,255,0.8)",
                  fontSize: "0.8rem",
                  fontFamily: "var(--font-sans)",
                  textDecoration: "none",
                }}
              >
                <PhoneIcon /> +234-8170685999
              </a>
              <a
                href="mailto:enquiries@gloryeduserve.com"
                className="flex items-center gap-2"
                style={{
                  color: "rgba(255,255,255,0.8)",
                  fontSize: "0.8rem",
                  fontFamily: "var(--font-sans)",
                  textDecoration: "none",
                }}
              >
                <MailIcon /> enquiries@gloryeduserve.com
              </a>
            </div>

            {/* Nav links */}
            <ul
              style={{
                listStyle: "none",
                padding: "1.5rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.25rem",
                flex: 1,
              }}
            >
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.2 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "1rem 1.25rem",
                      borderRadius: "0.75rem",
                      fontFamily: "var(--font-sans)",
                      fontWeight: 500,
                      fontSize: "1.0625rem",
                      color: "var(--text-primary)",
                      textDecoration: "none",
                      borderBottom: "1px solid var(--border)",
                      transition: "background 150ms ease, color 150ms ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "rgba(139,26,74,0.05)";
                      e.currentTarget.style.color = "var(--brand)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.color = "var(--text-primary)";
                    }}
                  >
                    {link.label}
                    <ChevronIcon />
                  </Link>
                </motion.li>
              ))}
            </ul>

            {/* Mobile CTA */}
            <div
              style={{
                padding: "1.5rem",
                borderTop: "1px solid var(--border)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  marginBottom: "1rem",
                  justifyContent: "center",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    fontSize: "1.125rem",
                    color: "var(--brand-gold)",
                  }}
                >
                  28 years
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.8rem",
                    color: "var(--text-muted)",
                  }}
                >
                  of trusted experience
                </span>
              </div>
              <Link
                href="#register"
                onClick={() => setMobileOpen(false)}
                className="btn-primary"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                  padding: "0.875rem 1.5rem",
                  borderRadius: "0.75rem",
                  fontSize: "0.9375rem",
                  textDecoration: "none",
                  width: "100%",
                }}
              >
                Register for Webinar
                <ArrowIcon />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* ── Micro SVG icons ── */
function PhoneIcon() {
  return (
    <svg
      width="12"
      height="12"
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
      width="12"
      height="12"
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

function ArrowIcon() {
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
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ color: "var(--text-muted)" }}
      aria-hidden="true"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function BurgerLine({ rotated, opacity = 1 }) {
  return (
    <span
      style={{
        display: "block",
        width: "20px",
        height: "1.5px",
        background: "var(--text-primary)",
        borderRadius: "2px",
        transform: rotated || "none",
        opacity,
        transition: "transform 200ms ease, opacity 200ms ease",
        transformOrigin: "center",
      }}
    />
  );
}
