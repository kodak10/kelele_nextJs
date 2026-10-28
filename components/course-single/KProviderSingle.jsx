"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { providers, providerHref } from "@/data/kelele";
import AddToCart from "@/components/common/AddToCart";

const offers = [
  "Fiche prestataire vérifiée (KYC)",
  "Demande de devis gratuite",
  "Messagerie interne avec le prestataire",
  "Tarifs indicatifs et disponibilités",
  "Réservation confirmée dans l'application",
  "Avis publiés après la prestation",
];

const infos = [
  "Les tarifs sont donnés sur devis, selon la date, le lieu et la taille de l'événement.",
  "Le paiement s'effectue dans l'application via Mobile Money (Wave, Orange Money, MTN MoMo, M-Pesa) ou carte bancaire, par l'intermédiaire de Pawapay.",
  "KELELE ne stocke aucune donnée de carte bancaire.",
];

const steps = [
  { title: "1. Recherchez et comparez", text: "Filtrez les prestataires par catégorie, ville et disponibilité, puis consultez leurs fiches." },
  { title: "2. Demandez un devis", text: "Décrivez votre événement et échangez avec le prestataire via la messagerie interne." },
  { title: "3. Payez en toute sécurité", text: "Réglez en Mobile Money ou par carte. La transaction est validée par le partenaire de paiement." },
  { title: "4. Réservation et avis", text: "Votre réservation est confirmée. Après la prestation, laissez un avis sur le prestataire." },
];

const benefits = [
  { icon: "flaticon-check", text: "Prestataire vérifié (KYC)" },
  { icon: "flaticon-document", text: "Devis gratuit et sans engagement" },
  { icon: "flaticon-mobile-phone", text: "Paiement Mobile Money ou carte" },
  { icon: "flaticon-play-1", text: "Messagerie interne" },
  { icon: "flaticon-medal", text: "Avis après prestation" },
];

export default function KProviderSingle({ slug }) {
  const provider = providers.find((p) => p.slug === slug) || providers[0];
  const mainCategory = provider.filterCategories[0];
  const swiperOptions = {
    spaceBetween: 28,
    observer: true,
    observeParents: true,
    breakpoints: {
      0: { slidesPerView: 1.2, spaceBetween: 15 },
      700: { slidesPerView: 2 },
      1000: { slidesPerView: 3 },
    },
  };
  return (
    <>
      <section className="section-page-title page-title style-5">
        <div className="tf-container">
          <div className="row">
            <div className="col-lg-8">
              <div className="content">
                <ul className="breadcrumbs breadcrumbs flex items-center justify-start gap-10 mb-60">
                  <li>
                    <Link href={`/`} className="flex">
                      <i className="icon-home" />
                    </Link>
                  </li>
                  <li>
                    <i className="icon-arrow-right" />
                  </li>
                  <li>
                    <Link href={`/annuaire`}>Prestataires</Link>
                  </li>
                  <li>
                    <i className="icon-arrow-right" />
                  </li>
                  <li>{mainCategory}</li>
                </ul>
                <h2 className="font-cardo fw-7">{provider.title}</h2>
                <p className="except">
                  Mariages | Anniversaires | Soirées privées | Événements
                  d'entreprise
                </p>
                <ul className="entry-meta">
                  <li>
                    <i className="flaticon-location" />
                    <p>{provider.city}</p>
                  </li>
                  <li>
                    <i className="flaticon-check" />
                    <p>Prestataire vérifié (KYC)</p>
                  </li>
                  <li>
                    <i className="flaticon-clock" />
                    <p>Devis gratuit</p>
                  </li>
                </ul>
                <div className="author-item">
                  <div className="author-item-img">
                    <Image
                      alt=""
                      src="/images/avatar/review-1.png"
                      width={101}
                      height={100}
                    />
                  </div>
                  <div className="text">
                    <span className="text-1">Par </span>
                    <a href="#">Prestataire KELELE</a>
                    <span className="text-1">dans</span>
                    <Link href={`/prestataires?category=${encodeURIComponent(mainCategory)}`}>{mainCategory}</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-page-course">
        <div className="tf-container">
          <div className="row">
            <div className="col-lg-8">
              <div className="course-single-inner">
                <div className="page-learn">
                  <h2 className="learn-head text-22 fw-5 wow fadeInUp" data-wow-delay="0s">
                    Ce que propose ce prestataire
                  </h2>
                  <div className="learn-inner ">
                    <ul className="learn-list">
                      {offers.slice(0, 3).map((t, i) => (
                        <li className="item" key={i}>
                          <i className="flaticon-check" />
                          {t}
                        </li>
                      ))}
                    </ul>
                    <ul className="learn-list">
                      {offers.slice(3).map((t, i) => (
                        <li className="item" key={i}>
                          <i className="flaticon-check" />
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="page-requirement">
                  <h2 className="text-22 fw-5 wow fadeInUp" data-wow-delay="0s">
                    Informations utiles
                  </h2>
                  <ul className="list">
                    {infos.map((t, i) => (
                      <li className="item" key={i}>
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="page-desc">
                  <h2 className="text-22 fw-5 wow fadeInUp" data-wow-delay="0s">
                    À propos de ce prestataire
                  </h2>
                  <p className="fw-4 fs-15">
                    Fiche d'exemple : la description, les tarifs indicatifs, les
                    disponibilités et les photos seront renseignés par le
                    prestataire lors de la création de son profil KELELE.
                    <br />
                    <br />
                    Chaque prestataire est vérifié par KELELE (documents KYC
                    stockés de façon chiffrée) avant de pouvoir recevoir des
                    demandes de devis et des réservations.
                  </p>
                </div>

                <div className="page-course-content">
                  <h2 className="text-22 fw-5 wow fadeInUp" data-wow-delay="0s">
                    Comment réserver sur KELELE
                  </h2>
                  <div className="tf-accordion-style-3 tf-accordion style-course-single">
                    {steps.map((st, i) => (
                      <div className="tf-accordion-item" key={i}>
                        <div className="tf-accordion-header">
                          <span
                            className={`tf-accordion-button ${i === 0 ? "" : "collapsed"}`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#collapseK${i}`}
                            aria-expanded={i === 0}
                            aria-controls={`collapseK${i}`}
                          >
                            {st.title}
                          </span>
                        </div>
                        <div
                          id={`collapseK${i}`}
                          className={`tf-accordion-collapse collapse ${i === 0 ? "show" : ""}`}
                        >
                          <div className="tf-accordion-content">
                            <p className="fs-15">{st.text}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="page-instructor">
                  <h2 className="text-22 fw-5 wow fadeInUp" data-wow-delay="0s">
                    Le prestataire
                  </h2>
                  <div className="instructors-item style-2">
                    <div className="image-wrapper">
                      <Image
                        className="lazyload"
                        alt=""
                        src="/images/instructors/instructors-01.jpg"
                        width={520}
                        height={521}
                      />
                    </div>
                    <div className="entry-content">
                      <h5 className="entry-title">
                        <a href="#">Prestataire KELELE</a>
                      </h5>
                      <p className="short-description">{mainCategory} — {provider.city}</p>
                      <ul className="entry-meta">
                        <li>
                          <i className="flaticon-check" />
                          Profil vérifié (KYC)
                        </li>
                        <li>
                          <i className="flaticon-location" />
                          {provider.city}
                        </li>
                      </ul>
                      <p className="description">
                        Présentation du prestataire à renseigner : expérience,
                        types d'événements, zone géographique couverte.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="page-my-course">
                  <div className="heading-section">
                    <h6 className="fw-5 text-22 wow fadeInUp" data-wow-delay="0s">
                      Autres prestataires
                    </h6>
                  </div>
                  <Swiper {...swiperOptions} className="swiper-container slider-courses-7">
                    {providers.filter((p) => p.id !== provider.id).slice(0, 8).map((elm) => (
                      <SwiperSlide key={elm.id}>
                        <div className="course-item hover-img title-small">
                          <div className="features image-wrap">
                            <Image
                              alt={elm.title}
                              src={elm.imgSrc}
                              width={520}
                              height={380}
                            />
                          </div>
                          <div className="content">
                            <div className="meta">
                              <div className="meta-item">
                                <i className="flaticon-location" />
                                <p>{elm.city}</p>
                              </div>
                            </div>
                            <h6 className="fw-5 line-clamp-2">
                              <Link href={providerHref(elm)}>{elm.title}</Link>
                            </h6>
                            <div className="bottom">
                              <div className="h6 price fw-5">Sur devis</div>
                              <Link
                                href={providerHref(elm)}
                                className="tf-btn-arrow"
                              >
                                <span className="fw-5 fs-15">Voir la fiche</span>
                                <i className="icon-arrow-top-right" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>

                <div className="review-wrap">
                  <h2 className="text-22 fw-5">Avis</h2>
                  <p className="fs-15">
                    Aucun avis pour le moment. Les avis sont publiés après une
                    prestation honorée.
                  </p>
                </div>

                <div className="add-review-wrap" id="devis">
                  <div className="add-review-title text-22 fw-5">Demander un devis</div>
                  <p className="fs-15">
                    Décrivez votre événement. Les champs marqués&nbsp;* sont
                    obligatoires.
                  </p>
                  <form onSubmit={(e) => e.preventDefault()} className="form-add-review">
                    <div className="cols">
                      <fieldset className="tf-field">
                        <input className="tf-input style-1" id="kq1" type="text" placeholder="" name="name" required />
                        <label className="tf-field-label fs-15" htmlFor="kq1">Nom complet *</label>
                      </fieldset>
                      <fieldset className="tf-field">
                        <input className="tf-input style-1" id="kq2" type="email" placeholder="" name="email" required />
                        <label className="tf-field-label fs-15" htmlFor="kq2">E-mail *</label>
                      </fieldset>
                    </div>
                    <div className="cols">
                      <fieldset className="tf-field">
                        <input className="tf-input style-1" id="kq3" type="tel" placeholder="" name="phone" required />
                        <label className="tf-field-label fs-15" htmlFor="kq3">Téléphone *</label>
                      </fieldset>
                      <fieldset className="tf-field">
                        <input className="tf-input style-1" id="kq4" type="text" placeholder="" name="date" />
                        <label className="tf-field-label fs-15" htmlFor="kq4">Date et lieu de l'événement</label>
                      </fieldset>
                    </div>
                    <fieldset className="tf-field">
                      <textarea className="tf-input style-1" name="message" rows={4} placeholder="" required defaultValue="" id="kq5" />
                      <label className="tf-field-label type-textarea fs-15" htmlFor="kq5">Votre message *</label>
                    </fieldset>
                    <div className="button-submit">
                      <button className="tf-btn w-100" type="submit">
                        Envoyer la demande
                        <i className="icon-arrow-top-right" />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="sidebar-course course-single-v2">
                <div className="widget-video">
                  <Image
                    className="lazyload"
                    alt={provider.title}
                    src={provider.imgSrc}
                    width={520}
                    height={380}
                  />
                </div>
                <div className="sidebar-course-content">
                  <div className="course-price">
                    <div className="price">
                      <h3 className="fw-5">Sur devis</h3>
                    </div>
                  </div>
                  <a className="tf-btn add-to-cart" href="#devis">
                    Demander un devis
                    <i className="icon-arrow-top-right" />
                  </a>
                  <AddToCart provider={provider} variant="full" />
                  <h6 className="course-text">Paiement sécurisé via Mobile Money</h6>
                  <div className="course-list">
                    <h5 className="fw-5">Avec KELELE :</h5>
                    <ul className="course-benefit-list">
                      {benefits.map((b, i) => (
                        <li className="course-benefit-item" key={i}>
                          <i className={b.icon} />
                          <p>{b.text}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="course-social">
                  <h6 className="fw-5">Partager cette fiche</h6>
                  <ul>
                    <li>
                      <a href="#">
                        <i className="flaticon-facebook-1" />
                      </a>
                    </li>
                    <li className="course-social-item">
                      <a href="#">
                        <i className="icon-twitter" />
                      </a>
                    </li>
                    <li className="course-social-item">
                      <a href="#">
                        <i className="flaticon-instagram" />
                      </a>
                    </li>
                    <li className="course-social-item">
                      <a href="#">
                        <i className="flaticon-linkedin-1" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
