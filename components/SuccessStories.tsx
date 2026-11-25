import Image from "next/image";
import { stories } from "@/lib/content";
import Reveal from "./Reveal";

/** Continuous, seamless loop (pure CSS). The cards are rendered twice. */
export default function SuccessStories() {
  const loop = [...stories, ...stories];
  return (
    <Reveal id="stories" className="section stories">
      <div className="stories-inner">
        <h2 className="stories-heading wipe">
          <span className="sr-only">Success Stories</span>
          <Image src="/svg/heading-stories.svg" alt="" width={475} height={43} unoptimized />
        </h2>
        <div className="stories-body rv">
          <div className="stories-viewport">
            <div className="stories-track">
              {loop.map((s, i) => (
                <Image
                  key={i}
                  src={s.image}
                  alt={i < stories.length ? s.alt : ""}
                  aria-hidden={i >= stories.length || undefined}
                  width={600}
                  height={750}
                  sizes="(max-width: 760px) 236px, 300px"
                  className="story-card"
                />
              ))}
            </div>
          </div>
          <div className="stories-dots" aria-hidden="true">
            {stories.map((_, i) => (
              <span key={i} className="stories-dot" style={{ animationDelay: `${i * 7.2}s` }} />
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
}
