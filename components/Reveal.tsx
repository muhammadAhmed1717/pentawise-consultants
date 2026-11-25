"use client";

import type { ReactNode } from "react";
import { revealClass, useInView } from "@/lib/useInView";

type Props = {
  id?: string;
  className?: string;
  ariaLabel?: string;
  children: ReactNode;
};

/** A <section> that gets `is-near` just before, and `is-in` once, it scrolls into view. */
export default function Reveal({ id, className = "", ariaLabel, children }: Props) {
  const { ref, inView, near } = useInView<HTMLElement>();
  return (
    <section ref={ref} id={id} aria-label={ariaLabel} className={revealClass(className, near, inView)}>
      {children}
    </section>
  );
}
