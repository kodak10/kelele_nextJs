"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const benefits = [
  { icon: "flaticon-user", text: "Profil professionnel et catalogue de services" },
  { icon: "flaticon-document", text: "Gestion des demandes et devis" },
  { icon: "flaticon-dollar", text: "Paiements sécurisés et contrats" },
  { icon: "flaticon-location", text: "Visibilité auprès de nouveaux clients" },
  { icon: "flaticon-calendar", text: "Calendrier et suivi des réservations" },
  { icon: "flaticon-medal", text: "Avis et réputation après prestation" },
];

function PhoneMockup() {
  const icons = ["flaticon-heart", "flaticon-calendar", "flaticon-play-1", "flaticon-user"];
  return (
    <div className="kelele-phone" aria-hidden="true">
      <div className="kelele-phone-screen">
        <div className="kelele-phone-logo">
          <Image src="/images/logo/logo.png" alt="" width={46} height={31} />
        </div>
        <div className="kelele-phone-search">Rechercher…</div>
        <div className="kelele-phone-icons">
          {icons.map((i) => (
            <span key={i}>
              <i className={i} />
            </span>
          ))}
        </div>
        <p className="kelele-phone-title">Nos prestataires</p>
        <div className="kelele-phone-cards">
          <Image src="/images/prestataires/05-decoration-florale.jpg" alt="" width={120} height={90} />
          <Image src="/images/prestataires/03-traiteur-buffet.jpg" alt="" width={120} height={90} />
        </div>
      </div>
    </div>
  );
}

// « Pour les professionnels » : bloc sombre + carte « L'application » (comme la maquette).
export default function BecomeProvider() {
  const [done, setDone] = useState(false);
  const notify = (e) => {
    e.preventDefault();
    const email = new FormData(e.currentTarget).get("email");
    try {
      const prev = JSON.parse(localStorage.getItem("kelele:waitlist")) || [];
      localStorage.setItem("kelele:waitlist", JSON.stringify([...prev, { email, date: new Date().toISOString() }]));
    } catch (err) {}
    setDone(true);
    e.currentTarget.reset();
  };

  return (
    <section className="kelele-pro">
      <div className="kelele-pro-photo">
        <Image
          src="/images/charte/pro-portrait.jpg"
          alt="Prestataire KÉLÉLÉ"
          width={1000}
          height={1500}
          sizes="(max-width: 992px) 100vw, 45vw"
        />
      </div>
      <div className="tf-container">
        <div className="kelele-pro-grid">
          <div className="kelele-pro-content">
            <span className="kelele-tag">Pour les professionnels</span>
            <h2 className="fw-7">Votre savoir-faire mérite une scène plus grande.</h2>
            <p>
              Rejoignez KÉLÉLÉ et développez votre activité grâce à une plateforme
              puissante, une visibilité internationale et des outils professionnels.
            </p>
            <Link href="/devenir-prestataire" className="tf-btn">
              Rejoindre KÉLÉLÉ
              <i className="icon-arrow-top-right" />
            </Link>
            <ul className="kelele-benefits">
              {benefits.map((b) => (
                <li key={b.text}>
                  <span className="kelele-benefit-icon">
                    <i className={b.icon} />
                  </span>
                  {b.text}
                </li>
              ))}
            </ul>
          </div>

          <aside className="kelele-app-card">
            <div className="kelele-app-text">
              <h3>L&apos;application KÉLÉLÉ</h3>
              <p className="kelele-app-sub">Votre événement, dans votre poche.</p>
              <p className="kelele-app-soon">L&apos;application arrive bientôt.</p>
              {done ? (
                <p className="kelele-app-ok">Merci ! Nous vous préviendrons dès sa sortie.</p>
              ) : (
                <form onSubmit={notify} className="kelele-app-form">
                  <input type="email" name="email" required placeholder="Votre e-mail" aria-label="E-mail" />
                  <button type="submit">Me prévenir</button>
                </form>
              )}
            </div>
            <PhoneMockup />
          </aside>
        </div>
      </div>
    </section>
  );
}
