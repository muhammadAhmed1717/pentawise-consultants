import Image from "next/image";
import { universities } from "@/lib/universities";

/** Endless logo marquee (pure CSS). The list is rendered twice for a seamless loop. */
export default function Universities() {
  const loop = [...universities, ...universities];
  return (
    <section id="universities" className="universities" aria-label="Partner universities">
      <div className="marquee">
        {loop.map((u, i) => (
          <Image
            key={`${u.name}-${i}`}
            src={u.image}
            alt={i < universities.length ? u.name : ""}
            aria-hidden={i >= universities.length || undefined}
            width={u.width}
            height={u.height}
            sizes={`${Math.round((u.displayHeight * u.width) / u.height)}px`}
            style={{ height: u.displayHeight, width: "auto" }}
            className="marquee-logo"
          />
        ))}
      </div>
    </section>
  );
}
