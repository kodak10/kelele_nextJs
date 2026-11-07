import React from "react";
import Link from "next/link";

const items = [
  { icon: "flaticon-check", text: "Prestataires certifiés et notés", href: "/a-propos" },
  { icon: "flaticon-lock", text: "Paiements sécurisés par un partenaire autorisé", href: "/faq" },
  { icon: "flaticon-document", text: "Contrats et devis en ligne", href: "/faq" },
  { icon: "flaticon-message-1", text: "Support et réclamations", href: "/contact" },
  { icon: "flaticon-location", text: "En Afrique et au-delà", href: "/a-propos" },
];

// Bandeau confiance : mécanismes réels, chacun renvoie vers une page explicative (PRD 6.6).
export default function TrustStrip() {
  return (
    <section className="kelele-trust">
      <div className="tf-container">
        <div className="kelele-trust-row">
          <ul className="kelele-trust-list">
            {items.map((it) => (
              <li key={it.text}>
                <Link href={it.href}>
                  <i className={it.icon} />
                  <span>{it.text}</span>
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/a-propos" className="kelele-trust-card">
            <p>
              Plus qu&apos;une plateforme,
              <br />
              une communauté.
            </p>
            <span>
              Découvrir KÉLÉLÉ <i className="icon-arrow-top-right" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
