import Image from "next/image";
import BoardingPassForm from "./BoardingPassForm";
import Reveal from "./Reveal";

export default function ContactSection() {
  return (
    <Reveal id="contact" className="section contact">
      <div className="container contact-inner">
        <h2 className="contact-heading wipe">
          <span className="sr-only">Start Your Journey Today</span>
          <Image src="/svg/heading-journey.svg" alt="" width={740} height={53} unoptimized />
        </h2>
        <BoardingPassForm idPrefix="page" className="ticket-animated" />
      </div>
    </Reveal>
  );
}
