import { keleleCategories as categories2 } from "@/data/kelele";
import React from "react";
import Link from "next/link";
import Image from "next/image";
export default function KCategories({ showHeading = true }) {
  return (
    <section className="tf-spacing-5 section-categories pt-0">
      <div className="tf-container">
        {showHeading && (
          <div className="heading-section text-center">
            <h2 className="fw-7 wow fadeInUp" data-wow-delay="0.1s">
              Catégories de prestataires
            </h2>
            <p className="wow fadeInUp" data-wow-delay="0.2s">
              DJ, traiteurs, décorateurs, photographes, salles et bien plus
            </p>
          </div>
        )}
        <div className="categories-items">
          <div className="row">
            {categories2.map((category, index) => (
              <div className="col-sm-6 col-lg-3" key={index}>
                <div
                  className="categories-item categories-item-default wow fadeInUp"
                  data-wow-delay={category.delay}
                >
                  <div className="categories-item-image">
                    <Image
                      className="lazyload"
                      src={category.imgSrc}
                      alt={category.category}
                      style={{ width: "fit-content" }}
                      width={180}
                      height={180}
                    />
                  </div>
                  <div className="categories-item-content">
                    <Link
                      href={`/prestataires?category=${encodeURIComponent(category.category)}`}
                      className="text"
                    >
                      {category.category}
                    </Link>
                    <div className="categories-item-btn">
                      <Link
                        href={`/prestataires?category=${encodeURIComponent(category.category)}`}
                        className="flex items-center gap-10"
                      >
                        <span>Voir les prestataires</span>
                        <i className="icon-arrow-top-right" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="categories-btn flex justify-center">
          <Link
            href={`/prestataires`}
            className="tf-btn-arrow wow fadeInUp"
            data-wow-delay="0.4s"
          >
            Toutes les catégories
            <i className="icon-arrow-top-right" />
          </Link>
        </div>
      </div>
    </section>
  );
}
