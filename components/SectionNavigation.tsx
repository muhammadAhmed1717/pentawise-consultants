"use client";

import { useEffect } from "react";

/** Scroll section links without adding a fragment to the browser URL. */
export default function SectionNavigation() {
  useEffect(() => {
    function handleSectionLink(event: MouseEvent) {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const target = event.target;
      if (!(target instanceof Element)) return;
      const link = target.closest<HTMLAnchorElement>("a[href^='#']");
      if (!link || link.target === "_blank" || link.hasAttribute("download")) return;

      const id = decodeURIComponent(link.hash.slice(1));
      const section = document.getElementById(id);
      if (!section) return;

      event.preventDefault();
      section.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
    }

    document.addEventListener("click", handleSectionLink);
    return () => document.removeEventListener("click", handleSectionLink);
  }, []);

  return null;
}
