"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useContextElement } from "@/context/Context";
import { providerHref } from "@/data/kelele";
import AddToCart from "@/components/common/AddToCart";
import CertifiedBadge from "@/components/common/CertifiedBadge";

// Carte prestataire unique (accueil, annuaire, fiches) : photo + badge certifié + favoris,
// ville et devis gratuit, titre, paiement, puis « Sur devis · panier · Demander un devis ».
export default function ProviderCard({ provider }) {
  const { toggleWishlist, isAddedtoWishlist } = useContextElement();
  const href = providerHref(provider);
  return (
    <div className="course-item hover-img title-small kelele-course">
      <div className="features image-wrap">
        <Image
          className="lazyload"
          alt={provider.title}
          src={provider.imgSrc}
          width={520}
          height={380}
        />
        <div className="box-tags">
          <CertifiedBadge size={34} />
        </div>
        <div
          className={`box-wishlist tf-action-btns ${
            isAddedtoWishlist(provider.id) ? "active" : ""
          } `}
          onClick={() => toggleWishlist(provider.id)}
        >
          <i className="flaticon-heart" />
        </div>
      </div>
      <div className="content">
        <div className="meta">
          <div className="meta-item">
            <i className="flaticon-location" />
            <p>{provider.city}</p>
          </div>
          <div className="meta-item">
            <i className="flaticon-clock" />
            <p>Devis gratuit</p>
          </div>
        </div>
        <h6 className="fw-5 line-clamp-2">
          <Link href={href}>{provider.title}</Link>
        </h6>
        <div className="author">Paiement sécurisé via Mobile Money</div>
        <div className="bottom">
          <div className="h6 price fw-5">Sur devis</div>
          <AddToCart provider={provider} />
          <Link href={href} className="tf-btn-arrow">
            <span className="fw-5 fs-15">Demander un devis</span>
            <i className="icon-arrow-top-right" />
          </Link>
        </div>
      </div>
    </div>
  );
}
