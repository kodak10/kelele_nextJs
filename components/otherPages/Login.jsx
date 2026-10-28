"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { quickAccess } from "@/data/kelele-dashboard";

const roleIcons = {
  client: "flaticon-user",
  prestataire: "flaticon-play-1",
  organisateur: "flaticon-calendar",
  admin: "flaticon-setting-1",
};

export default function Login() {
  return (
    <div className="main-content page-login">
      <section className="section-page-login login-wrap tf-spacing-4">
        <div className="tf-container">
          <div className="row">
            <div className="col-lg-6">
              <div className="img-left wow fadeInLeft" data-wow-delay="0s">
                <Image
                  className="ls-is-cached lazyloaded"
                  alt=""
                  src="/images/page-title/page-title-home2-1.jpg"
                  width={591}
                  height={680}
                />
                <div className="blockquite wow fadeInLeft" data-wow-delay="0.1s">
                  <p>
                    Retrouvez vos devis, réservations, billets et paiements au
                    même endroit.
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
                  Connexion à votre compte
                </h2>
                <div className="register">
                  <p className="fw-5 fs-15 wow fadeInUp" data-wow-delay="0s">
                    Pas encore de compte ?
                  </p>
                  <Link href="/inscription" className="fw-5 fs-15 wow fadeInUp" data-wow-delay="0s">
                    Créer un compte
                  </Link>
                </div>

                <div className="wow fadeInUp" data-wow-delay="0s" style={{ marginBottom: 24 }}>
                  <p className="fw-5 fs-15 mb-10">Accès rapide</p>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
                      gap: 10,
                    }}
                  >
                    {quickAccess.map((q) => (
                      <Link
                        key={q.role}
                        href={q.href}
                        className="tf-btn style-secondary"
                        style={{ justifyContent: "center", whiteSpace: "nowrap" }}
                      >
                        <i className={roleIcons[q.role]} /> {q.label}
                      </Link>
                    ))}
                  </div>
                  <p className="fs-14 mt-10" style={{ opacity: 0.7 }}>
                    Accès de démonstration aux espaces, sans authentification.
                  </p>
                </div>

                <form onSubmit={(e) => e.preventDefault()} className="form-login">
                  <div className="cols">
                    <fieldset className="tf-field field-username wow fadeInUp" data-wow-delay="0s">
                      <input className="tf-input style-1" id="field1" type="text" placeholder="" name="identifier" tabIndex={2} aria-required="true" required />
                      <label className="tf-field-label fs-15" htmlFor="field1">E-mail ou téléphone</label>
                    </fieldset>
                  </div>
                  <div className="cols">
                    <fieldset className="tf-field field-pass wow fadeInUp" data-wow-delay="0s">
                      <input className="tf-input style-1" id="field2" type="password" placeholder="" name="password" tabIndex={2} aria-required="true" required />
                      <label className="tf-field-label fs-15" htmlFor="field2">Mot de passe</label>
                    </fieldset>
                  </div>
                  <div className="flex items-center justify-between flex-wrap gap-10 mb-20">
                    <div className="checkbox-item">
                      <label>
                        <p className="fs-15">Se souvenir de moi</p>
                        <input type="checkbox" />
                        <span className="btn-checkbox" />
                      </label>
                    </div>
                    <a href="#" className="fs-15 fw-5">Mot de passe oublié ?</a>
                  </div>
                  <button className="button-submit tf-btn w-100 wow fadeInUp" data-wow-delay="0s" type="submit">
                    Se connecter
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
