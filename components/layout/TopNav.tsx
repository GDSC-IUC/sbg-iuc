"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useTranslation } from "../providers/LanguageProvider";
import LanguageToggle from "../ui/LanguageToggle";

export default function TopNav() {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const navLinks = [
    { label: t("nav.about"), href: "#hero" },
    { label: t("nav.programme"), href: "#programme" },
    { label: t("nav.speakers"), href: "#speakers" },
    { label: t("nav.team"), href: "#team" },
    { label: t("nav.sponsors"), href: "#sponsoring" },
  ];

  return (
    <>
      <nav
        className={`sticky top-0 z-[999] transition-all duration-300 ${
          scrolled 
            ? "bg-canvas/75 backdrop-blur-lg border-b border-hairline-soft" 
            : "bg-transparent border-b border-transparent"
        }`}
        style={{ height: "56px" }}
      >
        <div className="container-main h-full flex items-center justify-between gap-6">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2.5 shrink-0">
            <div className="relative w-8 h-8">
              <Image
                src="/logo/AWS_SBG_RGB_Program Icon_Amber.png"
                alt="AWS SBG IUC"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="leading-tight">
              <div
                className="font-mono text-white"
                style={{ fontSize: "11px", letterSpacing: "0.06em", opacity: 0.6 }}
              >
                AWS SBG IUC
              </div>
              <div
                className="font-body text-white font-bold"
                style={{ fontSize: "12px", letterSpacing: "-0.02em" }}
              >
                SCD 2026
              </div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 rounded-pill text-ink-muted hover:text-ink transition-colors duration-200"
                style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "-0.14px" }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right CTA */}
          <div className="flex items-center gap-3">
            <LanguageToggle />
            <a
              href="#register"
              className="btn-primary hidden sm:inline-flex"
              style={{ padding: "8px 16px", fontSize: "13px" }}
            >
              {t("nav.cta")}
            </a>
            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
              aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              <span
                className="block w-5 h-0.5 bg-white transition-all duration-300 origin-center"
                style={{
                  transform: menuOpen ? "translateY(8px) rotate(45deg)" : "none",
                }}
              />
              <span
                className="block w-5 h-0.5 bg-white transition-all duration-300"
                style={{ opacity: menuOpen ? 0 : 1 }}
              />
              <span
                className="block w-5 h-0.5 bg-white transition-all duration-300 origin-center"
                style={{
                  transform: menuOpen ? "translateY(-8px) rotate(-45deg)" : "none",
                }}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile nav overlay */}
      <div className={`nav-overlay ${menuOpen ? "open" : ""}`}>
        <div className="flex flex-col gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-display-md text-ink hover:text-ink-muted transition-colors py-3 border-b border-hairline-soft"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="mt-8">
            <a href="#register" className="btn-primary w-full text-center" onClick={() => setMenuOpen(false)}>
              {t("nav.ctaMobile")}
            </a>
        </div>
        <div className="mt-auto">
          <p className="text-caption text-ink-muted">
            Campus IUC Denver · Douala · 31 Octobre 2026
          </p>
        </div>
      </div>
    </>
  );
}
