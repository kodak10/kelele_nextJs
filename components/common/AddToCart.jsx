"use client";
import React from "react";
import Link from "next/link";
import { useContextElement } from "@/context/Context";

// Bouton « Ajouter au panier » pour une prestation (fiche prestataire).
// variant="icon" : bouton rond pour les cartes ; variant="full" : bouton large (fiche).
export default function AddToCart({ provider, variant = "icon" }) {
  const { addServiceToCart, isServiceInCart, removeServiceFromCart } = useContextElement();
  const inCart = isServiceInCart(provider.id);

  if (variant === "full") {
    return inCart ? (
      <Link className="tf-btn buy-now" href="/panier">
        Voir mon panier
        <i className="icon-arrow-top-right" />
      </Link>
    ) : (
      <button type="button" className="tf-btn buy-now" onClick={() => addServiceToCart(provider)}>
        Ajouter au panier
        <i className="icon-shopcart" />
      </button>
    );
  }

  const title = inCart ? "Retirer du panier" : "Ajouter au panier";
  return (
    <button
      type="button"
      title={title}
      aria-label={title}
      onClick={() => (inCart ? removeServiceFromCart(provider.id) : addServiceToCart(provider))}
      style={{
        width: 38,
        height: 38,
        borderRadius: 10,
        border: 0,
        cursor: "pointer",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        background: inCart ? "var(--Primary, #131836)" : "#f1f1f4",
        color: inCart ? "#fff" : "#131836",
        flexShrink: 0,
      }}
    >
      <i className={inCart ? "flaticon-check" : "icon-shopcart"} />
    </button>
  );
}
