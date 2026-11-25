"use client";

import Image from "next/image";
import { useEffect, useState, type CSSProperties } from "react";
import {
  DESKTOP_ASPECT,
  MOBILE_ASPECT,
  desktopGreys,
  desktopHeading,
  desktopTiles,
  mobileGreys,
  mobileSlots,
  type GreyCard,
} from "@/lib/destinations";
import { prefersReducedMotion, useInView } from "@/lib/useInView";

/** Phone tiles swap one slot at a time, in this order, every ROTATE_MS. */
const ROTATE_ORDER = [0, 5, 2, 7, 4, 1, 6, 3];
const ROTATE_MS = 1500;

type Vars = CSSProperties & Record<`--${string}`, string>;

/** Step at which slot `si` first switches to country `ci` (rotation runs in ROTATE_ORDER). */
function firstShownAt(si: number, ci: number) {
  return (ci - 1) * ROTATE_ORDER.length + ROTATE_ORDER.indexOf(si) + 1;
}

/** Load a country's photo one step before its first appearance, then keep it. */
function shouldLoad(si: number, ci: number, ticks: number) {
  return ticks >= 0 && ticks >= firstShownAt(si, ci) - 1;
}

function boxStyle(b: { left: number; top: number; width: number; height: number }): CSSProperties {
  return { left: `${b.left}%`, top: `${b.top}%`, width: `${b.width}%`, height: `${b.height}%` };
}

function animVars(t: { dx?: number; dy?: number; r?: number; delay?: number; bob?: number }): Vars {
  return {
    "--dx": `${t.dx ?? 0}%`,
    "--dy": `${t.dy ?? 0}%`,
    "--r": `${t.r ?? 0}deg`,
    "--d": `${t.delay ?? 700}ms`,
    "--b": `${t.bob ?? 0}px`,
  };
}

function Grey({ g }: { g: GreyCard }) {
  return <div className="dest-grey" aria-hidden="true" style={{ ...boxStyle(g), ...animVars(g) }} />;
}

export default function Destinations() {
  const { ref, inView } = useInView<HTMLElement>();
  const [active, setActive] = useState<number[]>(() => mobileSlots.map(() => 0));
  // How many rotation steps have run (-1 = rotation not started). A slot's next
  // country is only downloaded one step (1.5s) before it fades in.
  const [ticks, setTicks] = useState(-1);

  // Phone only: cycle countries through the 8 slots once the section is visible.
  useEffect(() => {
    if (!inView || prefersReducedMotion()) return;
    const mq = window.matchMedia("(max-width: 760px)");
    let timer = 0;
    let step = 0;
    const start = () => {
      window.clearInterval(timer);
      if (!mq.matches) return;
      setTicks((t) => Math.max(t, 0));
      timer = window.setInterval(() => {
        setTicks(step + 1);
        const slot = ROTATE_ORDER[step % ROTATE_ORDER.length];
        step += 1;
        setActive((prev) => {
          const next = prev.slice();
          next[slot] = (next[slot] + 1) % mobileSlots[slot].countries.length;
          return next;
        });
      }, ROTATE_MS);
    };
    start();
    mq.addEventListener("change", start);
    return () => {
      window.clearInterval(timer);
      mq.removeEventListener("change", start);
    };
  }, [inView]);

  return (
    <section ref={ref} id="countries" className={`section destinations${inView ? " is-in" : ""}`}>
      <div className="container">
        {/* Laptop / desktop: the staggered artwork from the design */}
        <div className="dest-desktop" style={{ aspectRatio: DESKTOP_ASPECT }}>
          <h2 className="dest-heading wipe" style={{ left: `${desktopHeading.left}%`, top: `${desktopHeading.top}%`, width: `${desktopHeading.width}%` }}>
            <span className="sr-only">Pick Your Perfect Destination</span>
            <Image src="/svg/heading-destinations.svg" alt="" width={505} height={113} unoptimized />
          </h2>
          {desktopTiles.map((t) => (
            <div key={t.name} className="dest-tile" style={{ ...boxStyle(t), ...animVars(t) }}>
              <Image src={t.image} alt={`Study in ${t.name}`} fill sizes="128px" />
            </div>
          ))}
          {desktopGreys.map((g, i) => (
            <Grey key={i} g={g} />
          ))}
        </div>

        {/* Phone: compact staggered artwork whose countries keep changing */}
        <div className="dest-mobile">
          <h2 className="dest-heading-m wipe">
            <span className="sr-only">Pick Your Perfect Destination</span>
            <Image src="/svg/heading-destinations.svg" alt="" width={505} height={113} unoptimized />
          </h2>
          <div className="dest-mobile-art" style={{ aspectRatio: MOBILE_ASPECT }}>
            {mobileSlots.map((slot, si) => (
              <div key={si} className="dest-tile" style={{ ...boxStyle(slot), ...animVars(slot) }}>
                {slot.countries.map((c, ci) =>
                  ci === 0 || shouldLoad(si, ci, ticks) ? (
                    <Image key={c.name} src={c.image} alt={`Study in ${c.name}`} fill sizes="24vw" className={`dest-swap${active[si] === ci ? " on" : ""}`} />
                  ) : null,
                )}
              </div>
            ))}
            {mobileGreys.map((g, i) => (
              <Grey key={i} g={g} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
