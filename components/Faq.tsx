"use client";

import Image from "next/image";
import { useState } from "react";
import { faqs } from "@/lib/content";
import { revealClass, useInView } from "@/lib/useInView";
import { useConsultation } from "./ConsultationContext";
import { MinusIcon, PlusIcon } from "./Icons";

export default function Faq() {
  const { ref, inView, near } = useInView<HTMLElement>();
  const { open } = useConsultation();
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section ref={ref} className={revealClass("faq", near, inView)} aria-labelledby="faq-title">
      <div className="container faq-inner">
        <div className="faq-intro">
          <h2 id="faq-title" className="faq-heading wipe">
            <span className="sr-only">Your Questions, Our Answers</span>
            <Image src="/svg/heading-faq.svg" alt="" width={564} height={140} unoptimized className="only-desktop" />
            <Image src="/svg/heading-faq-centered.svg" alt="" width={564} height={140} unoptimized className="only-mobile" />
          </h2>
          <p className="faq-lead rv" style={{ transitionDelay: "200ms" }}>
            Everything you need to know before you begin your study abroad journey.
          </p>
          <div className="faq-help rv" style={{ transitionDelay: "320ms" }}>
            <div>
              <strong>Still have questions?</strong>
              <span>Talk to our experts for free.</span>
            </div>
            <button type="button" onClick={open} aria-haspopup="dialog">
              Book a Call
            </button>
          </div>
        </div>

        <div className="faq-list">
          {faqs.map((f, i) => {
            const isOpen = openIndex === i;
            const n = String(i + 1).padStart(2, "0");
            return (
              <div key={f.q} className={`faq-item rv${isOpen ? " open" : ""}`} style={{ transitionDelay: `${i * 90}ms` }}>
                <h3 className="faq-q-wrap">
                  <button type="button" className="faq-q" aria-expanded={isOpen} aria-controls={`faq-a-${i}`} id={`faq-q-${i}`} onClick={() => setOpenIndex(isOpen ? -1 : i)}>
                    <span className="faq-num">{n}</span>
                    <span className="faq-text">{f.q}</span>
                    <span className="faq-toggle">{isOpen ? <MinusIcon /> : <PlusIcon />}</span>
                  </button>
                </h3>
                <div id={`faq-a-${i}`} role="region" aria-labelledby={`faq-q-${i}`} className="faq-a" hidden={!isOpen}>
                  <p>{f.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
