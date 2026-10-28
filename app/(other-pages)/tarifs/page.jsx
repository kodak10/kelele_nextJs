import React from "react";
import Link from "next/link";
import KPage, { Section } from "@/components/otherPages/k/KPage";

export const metadata = {
  title: "Tarifs || KELELE",
  description: "Tarification KELELE pour les clients, les prestataires et les organisateurs.",
};

// Les montants et commissions ne figurent pas dans le cahier des charges : ils restent « à définir ».
const plans = [
  {
    name: "Client",
    price: "À définir",
    items: ["Recherche et filtres de prestataires", "Demandes de devis et messagerie", "Paiement sécurisé Mobile Money ou carte", "Billets avec QR code", "Avis après prestation"],
    cta: { label: "Créer un compte client", href: "/inscription" },
  },
  {
    name: "Prestataire",
    price: "À définir",
    featured: true,
    items: ["Fiche prestataire et services", "Profil vérifié (KYC)", "Réception des demandes de devis", "Gestion des réservations", "Encaissement via le partenaire de paiement"],
    cta: { label: "Devenir prestataire", href: "/devenir-prestataire" },
  },
  {
    name: "Organisateur pro",
    price: "À définir",
    items: ["Création et gestion d'événements", "Billetterie avec QR code", "Scan et contrôle d'accès", "Réservation de prestataires", "Suivi des paiements"],
    cta: { label: "Créer un compte organisateur", href: "/inscription" },
  },
];

export default function page() {
  return (
    <KPage title="Tarifs" subtitle="Une tarification claire pour chaque profil">
      <Section>
        <div className="row">
          {plans.map((p) => (
            <div className="col-lg-4" key={p.name} style={{ marginBottom: 24 }}>
              <div
                style={{
                  height: "100%",
                  padding: 28,
                  borderRadius: 16,
                  border: p.featured ? "2px solid var(--Primary, #131836)" : "1px solid #ececec",
                  background: "#fff",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <h4 className="fw-6 mb-10">{p.name}</h4>
                <h3 className="fw-7 mb-20">{p.price}</h3>
                <ul style={{ flex: 1, marginBottom: 20 }}>
                  {p.items.map((it) => (
                    <li key={it} className="fs-15 mb-10">
                      <i className="flaticon-check" /> {it}
                    </li>
                  ))}
                </ul>
                <Link href={p.cta.href} className="tf-btn">
                  {p.cta.label}
                  <i className="icon-arrow-top-right" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        <p className="fs-15 text-center mt-20">
          Les tarifs et commissions seront communiqués avant le lancement. Les
          paiements sont traités par notre partenaire de paiement ; des frais de
          transaction peuvent s&apos;appliquer selon le moyen de paiement.
        </p>
      </Section>
    </KPage>
  );
}
