import React from "react";
import Link from "next/link";

const reasons = [
  { icon: "flaticon-document", title: "Recevez des demandes de devis", text: "Créez votre fiche et recevez les demandes de clients, d'organisateurs et de la diaspora." },
  { icon: "flaticon-mobile-phone", title: "Encaissez en Mobile Money", text: "Wave, Orange Money, MTN MoMo, M-Pesa ou carte bancaire, via notre partenaire de paiement Pawapay." },
  { icon: "flaticon-check", title: "Profil certifié (KYC)", text: "Vos documents sont stockés de façon chiffrée et validés par KELELE pour inspirer confiance." },
  { icon: "flaticon-medal", title: "Avis et réputation", text: "Les avis sont publiés après chaque prestation honorée et valorisent votre travail." },
];

const steps = [
  { n: "1", title: "Créez votre compte", text: "Inscription par e-mail ou par téléphone (code OTP par SMS)." },
  { n: "2", title: "Complétez votre profil", text: "Catégories de services, zone géographique, tarifs indicatifs et disponibilités." },
  { n: "3", title: "Faites vérifier votre identité", text: "Envoyez vos documents KYC, contrôlés manuellement par l'équipe KELELE." },
  { n: "4", title: "Recevez des réservations", text: "Répondez aux devis via la messagerie, confirmez et soyez payé en sécurité." },
];

export default function KBecomeProvider() {
  return (
    <>
      <section className="tf-spacing-5">
        <div className="tf-container">
          <div className="heading-section text-center">
            <h2 className="fw-7 wow fadeInUp">Pourquoi rejoindre KELELE</h2>
            <p className="wow fadeInUp">
              Une marketplace sécurisée pour les prestataires de
              l&apos;événementiel africain.
            </p>
          </div>
          <div className="row">
            {reasons.map((r, i) => (
              <div className="col-md-6 col-lg-3" key={i}>
                <div className="text-center" style={{ padding: "20px 10px" }}>
                  <div style={{ fontSize: 40, marginBottom: 12 }}>
                    <i className={r.icon} />
                  </div>
                  <h5 className="fw-5 mb-10">{r.title}</h5>
                  <p className="fs-15">{r.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="tf-spacing-5 pt-0">
        <div className="tf-container">
          <div className="heading-section text-center">
            <h2 className="fw-7">Comment ça marche</h2>
          </div>
          <div className="row">
            {steps.map((s) => (
              <div className="col-md-6 col-lg-3" key={s.n}>
                <div style={{ padding: "20px 10px" }}>
                  <h2 className="fw-7 tf-secondary-color">{s.n}</h2>
                  <h5 className="fw-5 mb-10">{s.title}</h5>
                  <p className="fs-15">{s.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-30">
            <Link href="/inscription" className="tf-btn">
              Créer ma fiche prestataire
              <i className="icon-arrow-top-right" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
