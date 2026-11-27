import Image from "next/image";
import { LOGO_HEIGHT, LOGO_WIDTH, universities } from "@/lib/universities";

/** Seconds each logo takes to scroll past, so the speed stays the same however many logos there are. */
const SECONDS_PER_LOGO = 1;

/** Endless logo marquee (pure CSS). The list is rendered twice for a seamless loop. */
export default function Universities() {
  const loop = [...universities, ...universities];
  return (
    <section id="universities" className="universities" aria-label="Partner universities">
      <div className="marquee" style={{ animationDuration: `${universities.length * SECONDS_PER_LOGO}s` }}>
        {loop.map((u, i) => (
          <Image
            key={`${u.image}-${i}`}
            src={u.image}
            alt={i < universities.length ? u.name : ""}
            aria-hidden={i >= universities.length || undefined}
            width={LOGO_WIDTH}
            height={LOGO_HEIGHT}
            sizes="180px"
            className="marquee-logo"
          />
        ))}
      </div>
    </section>
  );
}
