"use client";

import Image from "next/image";
import { useState } from "react";
import { nav } from "@/lib/content";
import { useConsultation } from "./ConsultationContext";
import { MenuIcon } from "./Icons";

export default function Header() {
  const { open } = useConsultation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header container">
      <a href="#top" className="brand" aria-label="Pentawise Consultants home">
        <Image src="/images/brand/pentawise-logo.webp" alt="Pentawise Consultants" width={320} height={320} priority sizes="156px" className="brand-logo" />
      </a>

      <nav className="main-nav" aria-label="Main">
        {nav.map((item, i) => (
          <a key={item.href} href={item.href} className={i === 0 ? "active" : undefined}>
            {item.label}
          </a>
        ))}
      </nav>

      <div className="header-actions">
        <button
          type="button"
          className="cta"
          aria-haspopup="dialog"
          onClick={() => {
            setMenuOpen(false);
            open();
          }}
        >
          <span className="cta-long">
            <small>Book a free</small>
            <strong>Expert Consultation</strong>
          </span>
          <span className="cta-short">Free Consultation</span>
        </button>
        <button type="button" className="menu-btn" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} aria-controls="mobile-menu" onClick={() => setMenuOpen((v) => !v)}>
          <MenuIcon />
        </button>
      </div>

      {menuOpen && (
        <nav id="mobile-menu" className="mobile-menu" aria-label="Mobile">
          {nav.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
