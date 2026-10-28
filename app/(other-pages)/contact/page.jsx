import React from "react";
import KPage, { Section } from "@/components/otherPages/k/KPage";
import KContactForm from "@/components/otherPages/k/KContactForm";

export const metadata = {
  title: "Contact || KELELE",
  description: "Contactez l'équipe KELELE : Abidjan et Lagos.",
};

const offices = [
  { city: "Abidjan", country: "Côte d'Ivoire" },
  { city: "Lagos", country: "Nigeria" },
];

export default function page() {
  return (
    <KPage title="Contact" subtitle="Une question ? Écrivez-nous, nous vous répondons rapidement.">
      <Section>
        <div className="row">
          <div className="col-lg-7" style={{ marginBottom: 30 }}>
            <h4 className="fw-5 mb-20">Envoyez-nous un message</h4>
            <KContactForm />
          </div>
          <div className="col-lg-5">
            <h4 className="fw-5 mb-20">Nos marchés pilotes</h4>
            {offices.map((o) => (
              <div
                key={o.city}
                style={{ padding: 20, border: "1px solid #ececec", borderRadius: 16, marginBottom: 16 }}
              >
                <h5 className="fw-5">
                  <i className="flaticon-location" /> {o.city}
                </h5>
                <p className="fs-15">{o.country}</p>
              </div>
            ))}
            <div style={{ padding: 20, border: "1px solid #ececec", borderRadius: 16 }}>
              <h5 className="fw-5 mb-10">Coordonnées</h5>
              <p className="fs-15">
                <i className="flaticon-mail-1" /> E-mail : à renseigner
              </p>
              <p className="fs-15">
                <i className="flaticon-call" /> Téléphone : à renseigner
              </p>
            </div>
          </div>
        </div>
      </Section>
    </KPage>
  );
}
