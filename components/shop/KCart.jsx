"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useContextElement } from "@/context/Context";

export default function KCart() {
  const { cartServices, removeServiceFromCart, updateServiceInCart, clearServiceCart } = useContextElement();
  const priced = cartServices.filter((x) => x.price);
  const total = priced.reduce((sum, x) => sum + Number(x.price), 0);

  if (!cartServices.length) {
    return (
      <div className="tf-container text-center" style={{ padding: "60px 0" }}>
        <h4 className="fw-5 mb-10">Votre panier est vide</h4>
        <p className="fs-15 mb-20">Ajoutez des prestations depuis l&apos;annuaire pour demander des devis groupés.</p>
        <Link href="/prestataires" className="tf-btn">
          Trouver un prestataire
          <i className="icon-arrow-top-right" />
        </Link>
      </div>
    );
  }

  return (
    <div className="tf-container" style={{ padding: "40px 0 60px" }}>
      <div className="row">
        <div className="col-lg-8" style={{ marginBottom: 24 }}>
          <div className="flex items-center justify-between mb-20">
            <h5 className="fw-5">
              {cartServices.length} prestation{cartServices.length > 1 ? "s" : ""}
            </h5>
            <button type="button" className="fs-15 fw-5" onClick={clearServiceCart} style={{ background: "none", border: 0, cursor: "pointer", textDecoration: "underline" }}>
              Vider le panier
            </button>
          </div>
          {cartServices.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                gap: 16,
                padding: 16,
                marginBottom: 14,
                border: "1px solid #ececf1",
                borderRadius: 16,
                background: "#fff",
                flexWrap: "wrap",
              }}
            >
              <Image
                src={item.imgSrc}
                alt={item.title}
                width={140}
                height={100}
                style={{ width: 140, height: 100, objectFit: "cover", borderRadius: 12 }}
              />
              <div style={{ flex: "1 1 260px", minWidth: 0 }}>
                <h6 className="fw-5 mb-10">
                  <Link href={item.slug ? `/prestataires/${item.slug}` : "/prestataires"}>{item.title}</Link>
                </h6>
                <p className="fs-14 mb-10" style={{ color: "#6b6f85" }}>
                  {item.category} — {item.city}
                </p>
                <div className="flex gap-10 flex-wrap">
                  <input
                    type="date"
                    value={item.date}
                    onChange={(e) => updateServiceInCart(item.id, { date: e.target.value })}
                    aria-label="Date de l'événement"
                    style={{ padding: "8px 10px", border: "1px solid #e5e5e5", borderRadius: 8 }}
                  />
                  <input
                    type="text"
                    value={item.note}
                    onChange={(e) => updateServiceInCart(item.id, { note: e.target.value })}
                    placeholder="Précision (invités, horaires…)"
                    style={{ flex: "1 1 180px", padding: "8px 10px", border: "1px solid #e5e5e5", borderRadius: 8 }}
                  />
                </div>
              </div>
              <div style={{ textAlign: "right", display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "flex-end" }}>
                <span className="fw-5">{item.price ? `${Number(item.price).toLocaleString("fr-FR")} FCFA` : "Sur devis"}</span>
                <button
                  type="button"
                  title="Retirer du panier"
                  aria-label="Retirer du panier"
                  onClick={() => removeServiceFromCart(item.id)}
                  style={{ width: 36, height: 36, borderRadius: 10, border: 0, background: "#fdeaea", color: "#c0392b", cursor: "pointer" }}
                >
                  <i className="flaticon-close-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="col-lg-4">
          <div style={{ padding: 24, border: "1px solid #ececf1", borderRadius: 16, background: "#fff", position: "sticky", top: 100 }}>
            <h5 className="fw-5 mb-20">Récapitulatif</h5>
            <div className="flex justify-between mb-10 fs-15">
              <span>Prestations</span>
              <span>{cartServices.length}</span>
            </div>
            <div className="flex justify-between mb-10 fs-15">
              <span>Sur devis</span>
              <span>{cartServices.length - priced.length}</span>
            </div>
            {priced.length > 0 && (
              <div className="flex justify-between mb-10 fs-15">
                <span>Tarifs indicatifs</span>
                <span>{total.toLocaleString("fr-FR")} FCFA</span>
              </div>
            )}
            <p className="fs-14 mb-20" style={{ color: "#6b6f85" }}>
              Les montants définitifs figurent dans les devis des prestataires. Le paiement sécurisé se fait après acceptation du devis.
            </p>
            <Link href="/demande-devis" className="tf-btn w-100">
              Demander les devis
              <i className="icon-arrow-top-right" />
            </Link>
            <Link href="/prestataires" className="fs-15 fw-5" style={{ display: "block", textAlign: "center", marginTop: 14 }}>
              Continuer mes recherches
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
