import React from "react";
import Image from "next/image";
export default function EventSingle({}) {
  return (
    <div className="tf-container">
      <div className="row">
        <div className="col-lg-8">
          <div className="event-single-inner">
            <div className="event-decs">
              <h2 className="text-22 fw-5 wow fadeInUp" data-wow-delay="0s">
                Description de l'événement
              </h2>
              <p className="text-1 fs-15">
                Description à renseigner par l'organisateur : programme, lieu, public attendu et informations pratiques.
              </p>
              <p className="text-2 fs-15">
                Chaque billet émis dispose d'un QR code unique et d'un statut de scan, pour un contrôle d'accès fiable.
              </p>
            </div>
            <div className="event-content">
              <h2 className="text-22 fw-5 wow fadeInUp" data-wow-delay="0s">
                Informations pratiques
              </h2>
              <ul>
                <li className="fs-15">
                  Présentez votre billet (QR code) à l'entrée : le scan est possible même hors-ligne.
                </li>
                <li className="fs-15">
                  Le paiement s'effectue en Mobile Money (Wave, Orange Money, MTN MoMo, M-Pesa) ou par carte bancaire.
                </li>
                <li className="fs-15">
                  Les billets sont disponibles dans l'application KELELE.
                </li>
              </ul>
            </div>
            <div className="event-speaker">
              <h2
                className="text-22 font-outfit fw-5 wow fadeInUp"
                data-wow-delay="0s"
              >
                Prestataires de l'événement
              </h2>
              <div className="speaker">
                <div className="swiper-container slider-courses-4 swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events">
                  <div
                    className="swiper-wrapper"
                    id="swiper-wrapper-9ebc38c84274317c"
                    aria-live="polite"
                    style={{ transform: "translate3d(0px, 0px, 0px)" }}
                  >
                    <div
                      className="speaker-swiper swiper-slide swiper-slide-active"
                      role="group"
                      aria-label="1 / 7"
                    >
                      <div
                        className="speaker-item wow fadeInUp"
                        data-wow-delay="0s"
                      >
                        <div className="speaker-img">
                          <Image
                            className="ls-is-cached lazyloaded"
                            data-src="/images/instructors/instructors-01.jpg"
                            alt=""
                            src="/images/instructors/instructors-01.jpg"
                            width={520}
                            height={521}
                          />
                        </div>
                        <div className="author">
                          <a href="/annuaire" className="h6 fw-5">
                            DJ & Sonorisation
                          </a>
                          <p>Prestataire vérifié</p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="speaker-swiper swiper-slide swiper-slide-active"
                      role="group"
                      aria-label="2 / 7"
                    >
                      <div
                        className="speaker-item wow fadeInUp"
                        data-wow-delay="0.1s"
                      >
                        <div className="speaker-img">
                          <Image
                            className="ls-is-cached lazyloaded"
                            data-src="/images/instructors/instructors-02.jpg"
                            alt=""
                            src="/images/instructors/instructors-02.jpg"
                            width={520}
                            height={521}
                          />
                        </div>
                        <div className="author">
                          <a href="/annuaire" className="h6 fw-5">
                            Traiteur événementiel
                          </a>
                          <p>Prestataire vérifié</p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="speaker-swiper swiper-slide swiper-slide-active"
                      role="group"
                      aria-label="3 / 7"
                    >
                      <div
                        className="speaker-item wow fadeInUp"
                        data-wow-delay="0.2s"
                      >
                        <div className="speaker-img">
                          <Image
                            className="ls-is-cached lazyloaded"
                            data-src="/images/instructors/instructors-03.jpg"
                            alt=""
                            src="/images/instructors/instructors-03.jpg"
                            width={520}
                            height={521}
                          />
                        </div>
                        <div className="author">
                          <a href="/annuaire" className="h6 fw-5">
                            Décorateur
                          </a>
                          <p>Prestataire vérifié</p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="speaker-swiper swiper-slide swiper-slide-active"
                      role="group"
                      aria-label="4 / 7"
                    >
                      <div
                        className="speaker-item wow fadeInUp"
                        data-wow-delay="0.3s"
                      >
                        <div className="speaker-img">
                          <Image
                            className="ls-is-cached lazyloaded"
                            data-src="/images/instructors/instructors-04.jpg"
                            alt=""
                            src="/images/instructors/instructors-04.jpg"
                            width={520}
                            height={521}
                          />
                        </div>
                        <div className="author">
                          <a href="/annuaire" className="h6 fw-5">
                            Photographe
                          </a>
                          <p>Prestataire vérifié</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="event-review-wrap review-wrap">
              <h2 className="text-22 fw-5">Avis</h2>
              <p className="fs-15">Aucun avis pour le moment.</p>
            </div>
            <div className="event-add-review add-review-wrap">
              <p className="fs-15">Vous avez une question ? Contactez l&apos;organisateur via la messagerie KELELE après avoir réservé.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="sidebar-event">
            <div className="event-img">
              <Image
                className="ls-is-cached lazyloaded"
                data-src="/images/events/event-7.jpg"
                alt=""
                src="/images/events/event-7.jpg"
                width={658}
                height={480}
              />
            </div>
            <div className="sidebar-event-content">
              <h5 className="fw-5">Informations</h5>
              <ul>
                <li>
                  <div className="icon-left">
                    <i className="flaticon-dollar"> </i>
                    <p>Billet :</p>
                  </div>
                  <p className="cost">Selon l'événement</p>
                </li>
                <li>
                  <div className="icon-left">
                    <i className="flaticon-user"> </i>
                    <p>Places :</p>
                  </div>
                  <p>À définir</p>
                </li>
                <li>
                  <div className="icon-left">
                    <i className="flaticon-unlock"> </i>
                    <p>Réservées :</p>
                  </div>
                  <p>—</p>
                </li>
              </ul>
              <a href="/connexion" className="tf-btn">
                Réserver un billet <i className="icon-arrow-top-right" />
              </a>
              <div className="event-social">
                <h6 className="fw-5">Partager</h6>
                <ul className="social-list">
                  <li className="social-list">
                    <a href="#">
                      {" "}
                      <i className="flaticon-facebook-1" />
                    </a>
                  </li>
                  <li className="social-list">
                    <a href="#">
                      <i className="icon-twitter" />
                    </a>
                  </li>
                  <li className="social-list">
                    <a href="#">
                      <i className="flaticon-instagram" />
                    </a>
                  </li>
                  <li className="social-list">
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
    </div>
  );
}
