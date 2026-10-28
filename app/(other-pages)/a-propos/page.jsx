import React from "react";
import Link from "next/link";
import KPage, { Section, Cards } from "@/components/otherPages/k/KPage";

export const metadata = {
  title: "À propos || KELELE",
  description:
    "KELELE, la super-application de l'écosystème événementiel africain : prestataires vérifiés, paiement sécurisé, billetterie QR code.",
};

const pains = [
  { icon: "flaticon-user", title: "Pas de marketplace unifiée", text: "Les prestataires (DJ, traiteurs, décorateurs, photographes…) n'ont pas de place de marché commune pour se faire connaître." },
  { icon: "flaticon-dollar", title: "Des paiements peu sûrs", text: "La majorité des paiements se font encore en espèces, sans garantie pour le client comme pour le prestataire." },
  { icon: "flaticon-location", title: "Organiser à distance", text: "La diaspora a du mal à organiser un événement depuis l'étranger avec des prestataires de confiance." },
  { icon: "flaticon-medal", title: "Pas de standards reconnus", text: "Le secteur manque de standards professionnels reconnus : vérification, avis, engagements." },
];

const segments = [
  { icon: "flaticon-user", title: "Clients particuliers", text: "Mariages, anniversaires, cérémonies : comparez, demandez des devis et réservez." },
  { icon: "flaticon-play-1", title: "Prestataires", text: "DJ, traiteurs, décorateurs, photographes… Créez votre fiche, recevez des demandes et soyez payé en sécurité." },
  { icon: "flaticon-calendar", title: "Organisateurs professionnels", text: "Event planners, agences et entreprises (MICE) : gérez vos événements, votre billetterie et vos prestataires." },
];

const features = [
  { icon: "flaticon-check", title: "Prestataires vérifiés", text: "Vérification d'identité (KYC) par l'équipe KELELE, documents stockés de façon chiffrée." },
  { icon: "flaticon-document", title: "Devis et messagerie", text: "Demandez des devis et échangez avec les prestataires sans quitter l'application." },
  { icon: "flaticon-mobile-phone", title: "Paiement Mobile Money et carte", text: "Wave, Orange Money, MTN MoMo, M-Pesa et cartes Visa/Mastercard via notre partenaire de paiement." },
  { icon: "flaticon-bag", title: "Billetterie QR code", text: "Billets avec QR code unique et contrôle d'accès par scan, même hors-ligne." },
  { icon: "flaticon-heart", title: "Avis après prestation", text: "Les avis sont publiés après une prestation honorée, pour des notes fiables." },
  { icon: "flaticon-setting-1", title: "Back-office dédié", text: "Gestion des utilisateurs, validation KYC et modération par l'équipe." },
];

export default function page() {
  return (
    <KPage
      title="À propos"
      subtitle="La super-application de l'écosystème événementiel africain"
    >
      <Section title="Notre mission" narrow>
        <p className="fs-15 text-center">
          KELELE ambitionne de devenir la première super-application
          événementielle d&apos;Afrique de l&apos;Ouest : connecter clients,
          prestataires et diaspora autour d&apos;une marketplace sécurisée, avec
          un lancement sur les marchés pilotes d&apos;Abidjan et de Lagos, puis
          une extension progressive vers Dakar, Accra et Douala.
        </p>
      </Section>

      <Section title="Les problèmes que nous résolvons">
        <Cards items={pains} />
      </Section>

      <Section title="Pour qui ?">
        <Cards items={segments} />
      </Section>

      <Section title="Ce que propose KELELE">
        <Cards items={features} />
        <div className="flex justify-center mt-30">
          <Link href="/inscription" className="tf-btn">
            Rejoindre KELELE
            <i className="icon-arrow-top-right" />
          </Link>
        </div>
      </Section>
    </KPage>
  );
}
