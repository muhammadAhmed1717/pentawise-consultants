import { site } from "@/lib/content";
import { WhatsAppIcon } from "./Icons";

export default function WhatsAppButton() {
  return (
    <a className="whatsapp" href={site.whatsappHref} target="_blank" rel="noopener noreferrer" aria-label="Chat with Pentawise on WhatsApp">
      <span className="whatsapp-tip">Chat with us on WhatsApp</span>
      <WhatsAppIcon />
    </a>
  );
}
