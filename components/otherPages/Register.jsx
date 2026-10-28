"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const accountTypes = [
  { value: "client", label: "Client", text: "J'organise un événement" },
  { value: "prestataire", label: "Prestataire", text: "DJ, traiteur, décorateur…" },
  { value: "organisateur", label: "Organisateur pro", text: "Agence, event planner, entreprise" },
];

export default function Register() {
  const [type, setType] = useState("client");
  return (
    <div className="main-content page-register">
      <section className="section-page-register login-wrap tf-spacing-4">
        <div className="tf-container">
          <div className="row">
            <div className="col-lg-6">
              <div className="img-left wow fadeInLeft" data-wow-delay="0s">
                <Image
                  className="ls-is-cached lazyloaded"
                  alt=""
                  src="/images/page-title/page-title-home2-2.jpg"
                  width={592}
                  height={681}
                />
                <div className="blockquite wow fadeInLeft" data-wow-delay="0.1s">
                  <p>
                    Trouvez des prestataires vérifiés, demandez des devis et
                    payez en toute sécurité.
                  </p>
                  <p className="author">KELELE</p>
                  <p className="sub-author">
                    La super-application de l&apos;événementiel africain
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="content-right">
                <h2 className="login-title fw-7 wow fadeInUp" data-wow-delay="0s">
                  Créer un compte
                </h2>
                <div className="register">
                  <p className="fw-5 fs-15 wow fadeInUp" data-wow-delay="0s">
                    Vous avez déjà un compte ?
                  </p>
                  <Link href="/connexion" className="fw-5 fs-15 wow fadeInUp" data-wow-delay="0s">
                    Se connecter
                  </Link>
                </div>
                <form onSubmit={(e) => e.preventDefault()} className="form-login">
                  <div className="cols">
                    <div className="wow fadeInUp" data-wow-delay="0s" style={{ width: "100%" }}>
                      <p className="fw-5 fs-15 mb-10">Je suis…</p>
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
                          gap: 10,
                        }}
                      >
                        {accountTypes.map((t) => (
                          <label
                            key={t.value}
                            style={{
                              cursor: "pointer",
                              padding: "12px 14px",
                              borderRadius: 12,
                              border:
                                type === t.value
                                  ? "2px solid var(--Primary, #131836)"
                                  : "1px solid #e5e5e5",
                              display: "block",
                            }}
                          >
                            <input
                              type="radio"
                              name="accountType"
                              value={t.value}
                              checked={type === t.value}
                              onChange={() => setType(t.value)}
                              style={{ display: "none" }}
                            />
                            <span className="fw-5" style={{ display: "block" }}>
                              {t.label}
                            </span>
                            <span className="fs-14" style={{ display: "block", opacity: 0.7 }}>
                              {t.text}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="cols">
                    <fieldset className="tf-field field-username wow fadeInUp" data-wow-delay="0s">
                      <input className="tf-input style-1" id="field1" type="text" placeholder="" name="fullName" tabIndex={2} aria-required="true" required />
                      <label className="tf-field-label fs-15" htmlFor="field1">Nom complet</label>
                    </fieldset>
                  </div>
                  <div className="cols">
                    <fieldset className="tf-field field-email wow fadeInUp" data-wow-delay="0s">
                      <input className="tf-input style-1" id="field2" type="email" placeholder="" name="email" tabIndex={2} aria-required="true" required />
                      <label className="tf-field-label fs-15" htmlFor="field2">E-mail</label>
                    </fieldset>
                  </div>
                  <div className="cols">
                    <fieldset className="tf-field wow fadeInUp" data-wow-delay="0s">
                      <input className="tf-input style-1" id="field5" type="tel" placeholder="" name="phone" tabIndex={2} aria-required="true" required />
                      <label className="tf-field-label fs-15" htmlFor="field5">Téléphone (code de vérification par SMS)</label>
                    </fieldset>
                  </div>
                  <div className="cols">
                    <fieldset className="tf-field field-pass wow fadeInUp" data-wow-delay="0s">
                      <input className="tf-input style-1" id="field3" type="password" placeholder="" name="password" tabIndex={2} aria-required="true" required />
                      <label className="tf-field-label fs-15" htmlFor="field3">Mot de passe</label>
                    </fieldset>
                  </div>
                  <div className="cols">
                    <fieldset className="tf-field field-pass-again wow fadeInUp" data-wow-delay="0s">
                      <input className="tf-input style-1" id="field4" type="password" placeholder="" name="passwordConfirm" tabIndex={2} aria-required="true" required />
                      <label className="tf-field-label fs-15" htmlFor="field4">Confirmer le mot de passe</label>
                    </fieldset>
                  </div>
                  <div className="checkbox-item wow fadeInUp" data-wow-delay="0s">
                    <label>
                      <p className="fs-15">
                        J&apos;accepte les conditions d&apos;utilisation et le
                        traitement de mes données personnelles (téléphone,
                        e-mail{type === "prestataire" ? ", documents KYC" : ""}).
                      </p>
                      <input type="checkbox" required />
                      <span className="btn-checkbox" />
                    </label>
                  </div>
                  <button className="button-submit tf-btn w-100 wow fadeInUp" data-wow-delay="0s" type="submit">
                    Créer mon compte
                    <i className="icon-arrow-top-right" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
