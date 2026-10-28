"use client";
import React from "react";

export default function Newsletter() {
  return (
    <section className="section-form-newsletter kelele-newsletter">
      <div className="tf-container">
        <div className="row">
          <div className="col-lg-12">
            <div className="form-newsletter">
              <div className="icon wow fadeInUp" data-wow-delay="0.1s">
                <i className="icon-newsletter" />
              </div>
              <h2
                className="fw-7 letter-spacing-1 wow fadeInUp"
                data-wow-delay="0.2s"
              >
                Restez informé du lancement
              </h2>
              <p className="fs-15 wow fadeInUp" data-wow-delay="0.3s">
                Recevez les nouveautés KELELE : ouverture à Abidjan et Lagos, nouveaux prestataires et événements.
              </p>
              <form
                className="form-subscribe wow fadeInUp"
                data-wow-delay="0.4s"
                onSubmit={(e) => e.preventDefault()}
              >
                <fieldset className="name">
                  <input
                    type="email"
                    placeholder="Votre adresse e-mail"
                    className="style-2"
                    name="name"
                    tabIndex={2}
                    defaultValue=""
                    aria-required="true"
                    required
                  />
                </fieldset>
                <div className="button-submit">
                  <button className="tf-btn" type="submit">
                    <i className="flaticon-send" />
                    S'abonner
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
