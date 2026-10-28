import React from "react";
import Image from "next/image";
export default function BecomeProvider() {
  return (
    <section
      className="section-become-instructor kelele-become tf-spacing-3 pt-0 wow fadeInUp"
      data-wow-delay="0.2s"
    >
      <div className="tf-container">
        <div className="row">
          <div className="col-lg-12">
            <div className="main-section">
              <div className="content-inner">
                <h2 className="font-cardo fw-7">Devenez prestataire KELELE</h2>
                <p className="fs-15">
                  DJ, traiteurs, décorateurs, photographes, organisateurs : créez votre fiche, recevez des demandes de devis et encaissez vos paiements en toute sécurité.
                </p>
                <ul className="wrap-list-text-check1">
                  <li>
                    <i className="icon-check" />
                    Recevez des demandes de devis
                  </li>
                  <li>
                    <i className="icon-check" />
                    Soyez payé via Mobile Money
                  </li>
                  <li>
                    <i className="icon-check" />
                    Profil certifié (KYC) et avis clients
                  </li>
                </ul>
              </div>
              <div className="content-user">
                <div className=" box-agent style2">
                  <ul className="agent-img-list">
                    <li className="agent-img-item">
                      <Image
                        className="lazyload"
                        data-src="/images/prestataires/01-dj-sonorisation.jpg"
                        alt=""
                        src="/images/prestataires/01-dj-sonorisation.jpg"
                        width={84}
                        height={84}
                        style={{ objectFit: "cover", width: "100%", height: "100%", borderRadius: "50%" }}
                      />
                    </li>
                    <li className="agent-img-item">
                      <Image
                        className="lazyload"
                        data-src="/images/prestataires/03-traiteur-buffet.jpg"
                        alt=""
                        src="/images/prestataires/03-traiteur-buffet.jpg"
                        width={84}
                        height={84}
                        style={{ objectFit: "cover", width: "100%", height: "100%", borderRadius: "50%" }}
                      />
                    </li>
                    <li className="agent-img-item">
                      <Image
                        className="lazyload"
                        data-src="/images/prestataires/06-photographe-mariage.jpg"
                        alt=""
                        src="/images/prestataires/06-photographe-mariage.jpg"
                        width={84}
                        height={84}
                        style={{ objectFit: "cover", width: "100%", height: "100%", borderRadius: "50%" }}
                      />
                    </li>
                    <li className="agent-img-item">
                      <p>1M+</p>
                    </li>
                  </ul>
                  <a href="/devenir-prestataire" className="tf-btn">
                    Devenir prestataire
                    <i className="icon-arrow-top-right" />
                  </a>
                </div>
              </div>
              <div className="content-img">
                <Image
                  className="lazyload item-1"
                  alt="Prestataire KELELE"
                  src="/images/prestataires/05-decoration-florale.jpg"
                  width={354}
                  height={401}
                  style={{
                    width: 354,
                    height: 401,
                    maxWidth: "100%",
                    objectFit: "cover",
                    borderRadius: "16px 16px 0 0",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
