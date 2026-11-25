"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Adds a one-time "in view" flag used to trigger CSS entrance animations.
 * A single lightweight IntersectionObserver per section — no animation library.
 */
export function useInView<T extends Element>(threshold = 0.12) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  // `near` turns true ~800px before the section scrolls in: used to start
  // downloading its background image just in time (keeps the first load light).
  const [near, setNear] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setNear(true);
      setInView(true);
      return;
    }
    const visible = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setInView(true);
          visible.disconnect();
        }
      },
      { threshold },
    );
    const ahead = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setNear(true);
          ahead.disconnect();
        }
      },
      { rootMargin: "800px 0px" },
    );
    visible.observe(el);
    ahead.observe(el);
    return () => {
      visible.disconnect();
      ahead.disconnect();
    };
  }, [threshold]);

  return { ref, inView, near };
}

/** Class names for a revealed section: `is-near` (load assets) and `is-in` (play entrance). */
export function revealClass(base: string, near: boolean, inView: boolean) {
  return `${base}${near ? " is-near" : ""}${inView ? " is-in" : ""}`;
}

/** True when the visitor has asked the OS to reduce motion. */
export function prefersReducedMotion() {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
