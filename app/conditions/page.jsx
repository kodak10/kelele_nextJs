import React from "react";
import PageLayout, { Section } from "@/components/pages/PageLayout";

export const metadata = {
  title: "Conditions d'utilisation || KELELE",
  description: "Conditions générales d'utilisation de la plateforme KELELE.",
};

const sections = [
  { t: "1. Objet", p: "Les présentes conditions encadrent l'utilisation de la plateforme KELELE, marketplace de l'écosystème événementiel africain qui met en relation des clients, des prestataires et des organisateurs." },
  { t: "2. Comptes utilisateurs", p: "L'inscription est possible par e-mail ou par téléphone. L'utilisateur choisit un profil (client, prestataire, organisateur), fournit des informations exactes et protège ses identifiants." },
  { t: "3. Prestataires et vérification (KYC)", p: "Les prestataires doivent soumettre des documents d'identité et justificatifs d'activité. KELELE les vérifie manuellement avant d'autoriser la réception de demandes et de réservations. Ces documents sont stockés de façon chiffrée." },
  { t: "4. Devis et réservations", p: "Le client peut demander un devis à un prestataire, puis réserver. Une réservation passe par les statuts : demandée, confirmée, honorée ou annulée. Les engagements précis (tarifs, annulation) sont convenus entre le client et le prestataire." },
  { t: "5. Paiements", p: "Les paiements sont traités par un partenaire de paiement (Mobile Money et cartes bancaires). Les fonds peuvent être retenus puis libérés après validation de la prestation. KELELE ne stocke aucune donnée de carte bancaire." },
  { t: "6. Billetterie", p: "Chaque billet émis dispose d'un QR code unique et d'un statut de scan. Un billet scanné ne peut pas être réutilisé. Les conditions de remboursement sont fixées par l'organisateur." },
  { t: "7. Avis", p: "Les avis ne peuvent être publiés qu'après une prestation honorée et doivent rester respectueux. KELELE peut modérer ou retirer les contenus inappropriés." },
  { t: "8. Données personnelles", p: "KELELE collecte des données personnelles (e-mail, téléphone, documents KYC, localisation le cas échéant) avec le consentement explicite de l'utilisateur, conformément aux autorités de protection des données applicables (CIL en Côte d'Ivoire, NITDA au Nigeria). Les modalités détaillées seront précisées dans la politique de confidentialité." },
  { t: "9. Responsabilités", p: "KELELE agit en intermédiaire technique. Les prestataires restent responsables de la qualité de leurs services. KELELE s'efforce d'assurer la disponibilité de la plateforme, sans garantie d'absence d'interruption." },
  { t: "10. Contact", p: "Pour toute question relative à ces conditions, utilisez la page Contact." },
];

export default function page() {
  return (
    <PageLayout title="Conditions d'utilisation" subtitle="Dernière mise à jour : à renseigner">
      <Section narrow>
        <p className="fs-15 mb-30">
          Ce texte est un projet de conditions générales d&apos;utilisation
          fondé sur le périmètre fonctionnel de KELELE. Il doit être relu et
          validé par un conseil juridique avant publication.
        </p>
        {sections.map((s) => (
          <div key={s.t} style={{ marginBottom: 24 }}>
            <h4 className="fw-5 mb-10">{s.t}</h4>
            <p className="fs-15">{s.p}</p>
          </div>
        ))}
      </Section>
    </PageLayout>
  );
}
