import React from "react";
import PageLayout, { Section } from "@/components/pages/PageLayout";
import Faq from "@/components/pages/Faq";

export const metadata = {
  title: "FAQ || KELELE",
  description: "Questions fréquentes sur KELELE : prestataires, devis, paiement, billetterie.",
};

const groups = [
  {
    title: "Général",
    items: [
      { q: "Qu'est-ce que KELELE ?", a: "KELELE est une super-application de l'écosystème événementiel africain : elle réunit clients, prestataires et organisateurs autour d'une marketplace sécurisée (recherche, devis, paiement, réservation, billetterie)." },
      { q: "Dans quelles villes KELELE est-il disponible ?", a: "Le lancement se fait sur les marchés pilotes d'Abidjan et de Lagos, avec une extension progressive vers Dakar, Accra et Douala, puis vers la diaspora." },
      { q: "Comment créer un compte ?", a: "Vous pouvez vous inscrire par e-mail ou par téléphone (avec un code de vérification par SMS), en choisissant votre profil : client, prestataire ou organisateur." },
    ],
  },
  {
    title: "Clients",
    items: [
      { q: "Comment trouver un prestataire ?", a: "Utilisez la recherche et les filtres (catégorie, ville) de l'annuaire, puis consultez la fiche du prestataire et demandez un devis." },
      { q: "Comment demander un devis ?", a: "Depuis la fiche d'un prestataire, décrivez votre événement. Vous échangez ensuite avec lui via la messagerie de l'application." },
      { q: "Puis-je organiser un événement depuis l'étranger ?", a: "Oui. KELELE permet à la diaspora de comparer des prestataires certifiés, de payer en ligne et de suivre sa réservation à distance." },
    ],
  },
  {
    title: "Prestataires",
    items: [
      { q: "Comment devenir prestataire ?", a: "Créez un compte prestataire, complétez votre profil, ajoutez vos services puis soumettez vos documents de vérification d'identité (KYC)." },
      { q: "Pourquoi une vérification KYC ?", a: "Elle garantit la confiance : votre identité est contrôlée par l'équipe KELELE. Vos documents sont stockés de façon chiffrée et accessibles uniquement par URL signée à durée limitée." },
      { q: "Quand suis-je payé ?", a: "Les fonds sont retenus par le partenaire de paiement, puis libérés après validation de la prestation." },
    ],
  },
  {
    title: "Paiement et billetterie",
    items: [
      { q: "Quels moyens de paiement sont acceptés ?", a: "Mobile Money (Wave, Orange Money, MTN MoMo, M-Pesa) et cartes bancaires Visa et Mastercard, via notre partenaire de paiement Pawapay." },
      { q: "KELELE conserve-t-il mes données de carte ?", a: "Non. Aucune donnée de carte bancaire n'est stockée par KELELE : le paiement est délégué intégralement au partenaire de paiement." },
      { q: "Comment fonctionnent les billets ?", a: "Chaque billet dispose d'un QR code unique. Il est scanné à l'entrée de l'événement en moins d'une seconde, même sans connexion." },
    ],
  },
];

export default function page() {
  return (
    <PageLayout title="FAQ" subtitle="Les réponses à vos questions les plus fréquentes">
      <Section narrow>
        <Faq groups={groups} />
      </Section>
    </PageLayout>
  );
}
