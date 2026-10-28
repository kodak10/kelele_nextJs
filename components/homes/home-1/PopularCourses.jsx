"use client";
import {
  providers as courses,
  providerTabs,
  providerHref,
} from "@/data/kelele";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useContextElement } from "@/context/Context";
import AddToCart from "@/components/common/AddToCart";
const categories = providerTabs;
export default function PopularCourses() {
  const { toggleWishlist, isAddedtoWishlist } = useContextElement();
  const [allProducts, setallProducts] = useState(courses);
  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const [filtered, setFiltered] = useState(allProducts);
  useEffect(() => {
    setFiltered(
      allProducts.filter((elm) =>
        elm.filterCategories.includes(currentCategory)
      )
    );
  }, [currentCategory, allProducts]);

  return (
    <section className="section-popular-course tf-spacing-6 pt-0">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="tabs-with-filter style-small">
              <div className="heading-section">
                <h2
                  className="letter-spacing-1 wow fadeInUp"
                  data-wow-delay="0s"
                >
                  Prestataires populaires
                </h2>
                <div className="flex items-center justify-between flex-wrap gap-10">
                  <div className="sub fs-15 wow fadeInUp" data-wow-delay="0.2s">
                    Des professionnels vérifiés, près de chez vous
                  </div>
                  <ul
                    className="widget-menu-tab overflow-x-auto wow fadeInUp no-tab"
                    data-wow-delay="0.3s"
                  >
                    {categories.map((category, index) => (
                      <li
                        key={index}
                        onClick={() => setCurrentCategory(category)}
                        className={`item-title ${
                          currentCategory === category ? "active" : ""
                        }`}
                      >
                        {category}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div
                className="widget-content-tab wow fadeInUp"
                data-wow-delay="0.4s"
              >
                <div className="widget-content-inner active">
                  <div className="grid-layout-4 gap40">
                    {filtered.map((elm, i) => (
                      <div key={i} className="course-item hover-img title-small">
                    <div className="features image-wrap">
                      <Image
                        className="lazyload"
                        data-src={elm.imgSrc}
                        alt={elm.title}
                        src={elm.imgSrc}
                        width={520}
                        height={380}
                      />
                      {elm.tag && (
                        <div className="box-tags">
                          <a href="#" className="item best-seller">
                            {elm.tag}
                          </a>
                        </div>
                      )}
                      <div
                        className={`box-wishlist tf-action-btns ${
                          isAddedtoWishlist(elm.id) ? "active" : ""
                        } `}
                        onClick={() => toggleWishlist(elm.id)}
                      >
                        <i className="flaticon-heart" />
                      </div>
                    </div>
                    <div className="content">
                      <div className="meta">
                        <div className="meta-item">
                          <i className="flaticon-location" />
                          <p>{elm.city}</p>
                        </div>
                        <div className="meta-item">
                          <i className="flaticon-clock" />
                          <p>Devis gratuit</p>
                        </div>
                      </div>
                      <h6 className="fw-5 line-clamp-2">
                        <Link href={providerHref(elm)}>
                          {elm.title}
                        </Link>
                      </h6>
                      <div className="ratings pb-30">
                        <i className="icon-check" />
                        <div className="total">Prestataire vérifié (KYC)</div>
                      </div>
                      <div className="author">Paiement sécurisé via Mobile Money</div>
                      <div className="bottom">
                        <div className="h6 price fw-5">Sur devis</div>
                        <AddToCart provider={elm} />
                        <Link
                          href={providerHref(elm)}
                          className="tf-btn-arrow"
                        >
                          <span className="fw-5 fs-15">Demander un devis</span>
                          <i className="icon-arrow-top-right" />
                        </Link>
                      </div>
                    </div>
                  </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
