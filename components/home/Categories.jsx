import React from "react";
import Link from "next/link";
import Image from "next/image";
import { universes } from "@/data/kelele";

// « Explorez nos univers » : cartes avec photo, titre et lien vers la catégorie.
export default function Categories() {
  return (
    <section className="kelele-universes">
      <div className="tf-container">
        <div className="kelele-universes-head">
          <div>
            <h2 className="fw-7">Explorez nos univers</h2>
            <p>Des solutions complètes pour tous vos événements et expériences.</p>
          </div>
          <Link href="/prestataires" className="kelele-link-arrow">
            Voir toutes les catégories <i className="icon-arrow-top-right" />
          </Link>
        </div>
        <div className="kelele-universes-grid">
          {universes.map((u) => (
            <Link href={u.href} className="kelele-universe-card" key={u.title}>
              <div className="kelele-universe-img">
                <Image src={u.img} alt={u.title} width={480} height={360} />
              </div>
              <div className="kelele-universe-body">
                <div>
                  <h6 className="fw-6">{u.title}</h6>
                  <span>Voir les prestataires</span>
                </div>
                <span className="kelele-round-btn" aria-hidden="true">
                  <i className="icon-arrow-top-right" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
