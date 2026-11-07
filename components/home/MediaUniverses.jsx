import React from "react";
import Image from "next/image";

const cards = [
  { title: "KÉLÉLÉ TV & Médias", text: "Des contenus qui inspirent.", img: "/images/charte/media-tv.jpg" },
  { title: "KÉLÉLÉ Awards", text: "Récompensons l'excellence.", img: "/images/charte/media-awards.jpg" },
  { title: "KÉLÉLÉ Academy", text: "Se former pour aller plus loin.", img: "/images/charte/media-academy.jpg" },
];

// Univers éditoriaux : prévus en phase ultérieure (PRD P2), donc « Bientôt » plutôt qu'un lien vide.
export default function MediaUniverses() {
  return (
    <section className="kelele-media">
      <div className="tf-container">
        <div className="kelele-media-grid">
          {cards.map((c) => (
            <article className="kelele-media-card" key={c.title}>
              <div className="kelele-media-img">
                <Image src={c.img} alt={c.title} width={600} height={400} />
              </div>
              <div className="kelele-media-body">
                <h4>{c.title}</h4>
                <p>{c.text}</p>
                <span className="kelele-media-soon">Bientôt disponible</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
