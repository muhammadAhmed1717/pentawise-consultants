"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { hero, stats } from "@/lib/content";
import { prefersReducedMotion } from "@/lib/useInView";
import Header from "./Header";

const COUNT_DELAY = 1000;
const COUNT_DURATION = 1800;

export default function Hero() {
  // Progress of the count-up (1 = final values, which is also what the server renders).
  const [progress, setProgress] = useState(1);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    let raf = 0;
    setProgress(0);
    const start = window.setTimeout(() => {
      const t0 = performance.now();
      const tick = (now: number) => {
        const p = Math.min(1, (now - t0) / COUNT_DURATION);
        setProgress(p);
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }, COUNT_DELAY);

    return () => {
      window.clearTimeout(start);
      cancelAnimationFrame(raf);
    };
  }, []);

  const eased = 1 - Math.pow(1 - progress, 3);

  return (
    <section id="top" className="hero">
      {/* decorative layers */}
      <div className="hero-orb hero-orb-a" aria-hidden="true" />
      <div className="hero-orb hero-orb-b" aria-hidden="true" />
      <HeroPlanes />

      <Header />

      <div className="container hero-inner">
        <div className="trust-pill anim-in">
          <span className="trust-avatars">
            <Image src="/images/brand/student-1.webp" alt="" width={96} height={96} sizes="36px" />
            <Image src="/images/brand/student-2.webp" alt="" width={96} height={96} sizes="36px" />
            <span className="trust-badge">1k+</span>
          </span>
          <span>{hero.trustedBy}</span>
        </div>

        <h1 className="hero-title">
          <span className="sr-only">{hero.title}</span>
          <Image src="/svg/heading-hero.svg" alt="" width={721} height={164} priority unoptimized />
          <span className="hero-sheen" aria-hidden="true" />
        </h1>

        <p className="hero-intro anim-in">{hero.intro}</p>

        <div className="stats anim-in">
          {stats.map((s, i) => (
            <div key={s.label} className="stat" style={{ animationDelay: `${950 + i * 120}ms` }}>
              <span className="stat-num">
                {Math.round(s.value * eased).toLocaleString("en-US")}
                {s.suffix}
              </span>
              <span className="stat-bar" style={{ animationDelay: `${1500 + i * 120}ms` }} />
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Paper planes flying along dashed trails (SVG SMIL — no JavaScript). */
function HeroPlanes() {
  return (
    <>
      <svg className="hero-planes hero-planes-desktop" aria-hidden="true" viewBox="0 0 1440 760" preserveAspectRatio="xMidYMin slice">
        <defs>
          <linearGradient id="planeGradA" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#46268a" />
            <stop offset="1" stopColor="#1374b4" />
          </linearGradient>
        </defs>
        <path id="planePathA" className="plane-trail" d="M-40 640 C 150 610 110 460 170 360 C 230 260 110 190 240 140 C 330 105 420 150 500 96" stroke="#8b6fd6" strokeOpacity="0.35" />
        <path id="planePathB" className="plane-trail" d="M1480 660 C 1290 620 1340 470 1270 380 C 1200 290 1330 210 1210 150 C 1140 115 1060 160 990 120" stroke="#3d8fd0" strokeOpacity="0.3" />
        <g>
          <path d="M10 0 L-9 -8 L-4 0 L-9 8 Z" fill="url(#planeGradA)" />
          <animateMotion dur="9s" repeatCount="indefinite" rotate="auto" begin="1.6s">
            <mpath href="#planePathA" />
          </animateMotion>
        </g>
        <g>
          <path d="M10 0 L-9 -8 L-4 0 L-9 8 Z" fill="url(#planeGradA)" />
          <animateMotion dur="11s" repeatCount="indefinite" rotate="auto" begin="4s">
            <mpath href="#planePathB" />
          </animateMotion>
        </g>
      </svg>
      <svg className="hero-planes hero-planes-mobile" aria-hidden="true" viewBox="0 0 390 720" preserveAspectRatio="xMidYMin meet">
        <defs>
          <linearGradient id="planeGradB" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#46268a" />
            <stop offset="1" stopColor="#1374b4" />
          </linearGradient>
        </defs>
        <path id="planePathC" className="plane-trail" d="M-20 560 C 34 520 6 430 24 360 C 38 300 4 250 40 200 C 62 170 92 172 110 140" stroke="#8b6fd6" strokeOpacity="0.55" />
        <path id="planePathD" className="plane-trail" d="M410 600 C 356 566 384 476 364 404 C 348 344 386 300 350 250 C 330 222 300 222 284 196" stroke="#3d8fd0" strokeOpacity="0.5" />
        <g>
          <path d="M11 0 L-9 -8 L-4 0 L-9 8 Z" fill="url(#planeGradB)" />
          <animateMotion dur="8s" repeatCount="indefinite" rotate="auto" begin="1.6s">
            <mpath href="#planePathC" />
          </animateMotion>
        </g>
        <g>
          <path d="M11 0 L-9 -8 L-4 0 L-9 8 Z" fill="url(#planeGradB)" />
          <animateMotion dur="10s" repeatCount="indefinite" rotate="auto" begin="3.6s">
            <mpath href="#planePathD" />
          </animateMotion>
        </g>
      </svg>
    </>
  );
}
