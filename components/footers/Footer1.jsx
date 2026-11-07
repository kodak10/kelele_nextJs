import React from "react";
import Image from "next/image";
import Link from "next/link";
import { footerLinks, socialLinks } from "@/data/footerLinks";

// Pied de page d'après la maquette : logo, navigation, réseaux, signature.
export default function Footer1({ parentClass = "footer" }) {
  return (
    <footer id="footer" className={`${parentClass} kelele-footer`}>
      <div className="tf-container">
        <div className="kelele-footer-main">
          <Link href="/" className="kelele-footer-logo">
            <Image alt="KÉLÉLÉ" src="/images/logo/logo.png" width={83} height={56} />
          </Link>
          <nav className="kelele-footer-nav" aria-label="Pied de page">
            {footerLinks.map((l) => (
              <Link key={l.name} href={l.href}>
                {l.name}
              </Link>
            ))}
          </nav>
          <ul className="kelele-footer-social">
            {socialLinks.map((s) => (
              <li key={s.label}>
                <a href={s.href} aria-label={s.label}>
                  <i className={s.icon} />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="kelele-footer-bottom">
          <p>©&nbsp;2026&nbsp;KÉLÉLÉ. Tous droits réservés.</p>
          <p className="kelele-signature">One Ecosystem. Every Experience.</p>
        </div>
      </div>
    </footer>
  );
}
