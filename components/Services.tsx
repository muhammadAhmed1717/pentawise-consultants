import Image from "next/image";
import { services, site } from "@/lib/content";
import Reveal from "./Reveal";

export default function Services() {
  return (
    <Reveal id="services" className="section services">
      <div className="container services-inner">
        <h2 className="services-heading wipe">
          <span className="sr-only">Our Services</span>
          <Image src="/svg/heading-services.svg" alt="" width={374} height={43} unoptimized />
        </h2>

        <div className="services-grid">
          {services.map((s, i) => (
            <article key={s.title} className="service rv" style={{ transitionDelay: `${(i % 3) * 120 + Math.floor(i / 3) * 160}ms` }}>
              <div className="service-head">
                <Image src={s.icon} alt="" width={44} height={44} unoptimized className="service-icon" />
                <h3 className="service-title">{s.title}</h3>
              </div>
              {site.liveServiceText ? (
                <p className="service-text">{s.text}</p>
              ) : (
                <>
                  <p className="sr-only">{s.text}</p>
                  <Image src={s.textSvg.src} alt="" width={Math.round(s.textSvg.width)} height={Math.round(s.textSvg.height)} unoptimized className="service-svg only-desktop" style={{ width: `calc(${s.textSvg.width} / 370 * 100%)` }} />
                  <Image src={s.textSvgCentered.src} alt="" width={Math.round(s.textSvgCentered.width)} height={Math.round(s.textSvgCentered.height)} unoptimized className="service-svg only-mobile" style={{ width: `calc(${s.textSvgCentered.width} / 370 * 84%)` }} />
                </>
              )}
            </article>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
