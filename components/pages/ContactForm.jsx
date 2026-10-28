"use client";
import React, { useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
        e.currentTarget.reset();
      }}
      className="form-login"
    >
      <div className="cols">
        <fieldset className="tf-field">
          <input className="tf-input style-1" id="c-name" type="text" name="name" placeholder="" required />
          <label className="tf-field-label fs-15" htmlFor="c-name">Nom complet *</label>
        </fieldset>
        <fieldset className="tf-field">
          <input className="tf-input style-1" id="c-email" type="email" name="email" placeholder="" required />
          <label className="tf-field-label fs-15" htmlFor="c-email">E-mail *</label>
        </fieldset>
      </div>
      <div className="cols">
        <fieldset className="tf-field">
          <input className="tf-input style-1" id="c-phone" type="tel" name="phone" placeholder="" />
          <label className="tf-field-label fs-15" htmlFor="c-phone">Téléphone</label>
        </fieldset>
        <fieldset className="tf-field">
          <select className="tf-input style-1" id="c-subject" name="subject" defaultValue="" required>
            <option value="" disabled>Sujet *</option>
            <option>Question générale</option>
            <option>Devenir prestataire</option>
            <option>Billetterie et paiements</option>
            <option>Partenariat</option>
            <option>Support technique</option>
          </select>
        </fieldset>
      </div>
      <fieldset className="tf-field">
        <textarea className="tf-input style-1" id="c-msg" name="message" rows={5} placeholder="" required defaultValue="" />
        <label className="tf-field-label type-textarea fs-15" htmlFor="c-msg">Votre message *</label>
      </fieldset>
      <button className="tf-btn" type="submit">
        Envoyer le message
        <i className="icon-arrow-top-right" />
      </button>
      {sent && (
        <p className="fs-15 mt-20">
          Merci, votre message a bien été pris en compte (démonstration : aucun envoi réel pour le moment).
        </p>
      )}
    </form>
  );
}
