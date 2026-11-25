import Image from "next/image";
import { footerCompanyLinks, footerCountryColumns, site } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="container footer-inner">
          <div className="footer-brand">
            <Image src="/images/brand/pentawise-logo.webp" alt="Pentawise Consultants" width={320} height={320} sizes="156px" className="footer-logo" />
            <p className="footer-tagline">
              <span className="sr-only">Your Partner in Global Education</span>
              <Image src="/svg/footer-tagline.svg" alt="" width={502} height={28} unoptimized />
            </p>
          </div>

          <div className="footer-cols">
            <div className="footer-col footer-company">
              <h3>
                <Image src="/svg/footer-company.svg" alt="Company" width={118} height={25} unoptimized className="footer-h" />
              </h3>
              {footerCompanyLinks.map((l) => (
                <a key={l.href} href={l.href}>
                  {l.label}
                </a>
              ))}
            </div>

            {footerCountryColumns.map((col, i) => (
              <div key={i} className="footer-col footer-countries">
                <h3 aria-hidden={i > 0 || undefined}>
                  <Image src="/svg/footer-countries.svg" alt={i === 0 ? "Countries" : ""} width={110} height={21} unoptimized className="footer-h" />
                </h3>
                {col.map((c) => (
                  <a key={c} href="#countries">
                    {c}
                  </a>
                ))}
              </div>
            ))}

            <div className="footer-col footer-contact">
              <h3>
                <Image src="/svg/footer-contact.svg" alt="Contact Us" width={128} height={21} unoptimized className="footer-h" />
              </h3>
              <a href={site.phoneHref}>{site.phoneDisplay}</a>
              <a href={`mailto:${site.email}`} className="footer-email">
                {site.email}
              </a>
              <div className="footer-socials">
                <a href={site.socials.instagram} aria-label="Pentawise on Instagram" target="_blank" rel="noopener noreferrer">
                  <Image src="/svg/social-instagram.svg" alt="" width={35} height={35} unoptimized />
                </a>
                <a href={site.socials.linkedin} aria-label="Pentawise on LinkedIn" target="_blank" rel="noopener noreferrer">
                  <Image src="/svg/social-linkedin.svg" alt="" width={35} height={35} unoptimized />
                </a>
                <a href={site.socials.facebook} aria-label="Pentawise on Facebook" target="_blank" rel="noopener noreferrer">
                  <Image src="/svg/social-facebook.svg" alt="" width={35} height={35} unoptimized />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bar">
        <div className="container footer-bar-inner">
          <span className="footer-copy">
            © {new Date().getFullYear()} Pentawise Consultants. All&nbsp;rights&nbsp;reserved.
          </span>
          <Image src="/images/brand/powered-by-h2h8.webp" alt="Powered by H2H8 Studios" width={360} height={157} sizes="118px" className="footer-h2h8" />
        </div>
      </div>
    </footer>
  );
}
