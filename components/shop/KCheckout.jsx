"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useContextElement } from "@/context/Context";

const inputStyle = { width: "100%", padding: "12px 14px", border: "1px solid #e5e5e5", borderRadius: 10, background: "#fff" };

export default function KCheckout() {
  const { cartServices, clearServiceCart } = useContextElement();
  const [sent, setSent] = useState(null);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const request = {
      id: `REQ-${Date.now()}`,
      date: new Date().toLocaleDateString("fr-FR"),
      contact: form,
      items: cartServices,
    };
    try {
      const prev = JSON.parse(localStorage.getItem("kelele:requests")) || [];
      localStorage.setItem("kelele:requests", JSON.stringify([request, ...prev]));
    } catch (err) {}
    setSent(request);
    clearServiceCart();
  };

  if (sent) {
    return (
      <div className="tf-container text-center" style={{ padding: "60px 0" }}>
        <h4 className="fw-5 mb-10">Demande envoyée</h4>
        <p className="fs-15 mb-10">
          Référence : <strong>{sent.id}</strong>
        </p>
        <p className="fs-15 mb-20">
          Les {sent.items.length} prestataire(s) concerné(s) vont étudier votre demande et vous répondre avec un devis.
        </p>
        <Link href="/espace/client/devis" className="tf-btn">
          Suivre mes devis
          <i className="icon-arrow-top-right" />
        </Link>
      </div>
    );
  }

  if (!cartServices.length) {
    return (
      <div className="tf-container text-center" style={{ padding: "60px 0" }}>
        <h4 className="fw-5 mb-10">Aucune prestation sélectionnée</h4>
        <Link href="/prestataires" className="tf-btn">
          Trouver un prestataire
          <i className="icon-arrow-top-right" />
        </Link>
      </div>
    );
  }

  return (
    <div className="tf-container" style={{ padding: "40px 0 60px" }}>
      <div className="row">
        <div className="col-lg-7" style={{ marginBottom: 24 }}>
          <form onSubmit={submit} style={{ padding: 24, border: "1px solid #ececf1", borderRadius: 16, background: "#fff" }}>
            <h5 className="fw-5 mb-20">Vos coordonnées</h5>
            <div className="row">
              <div className="col-md-6" style={{ marginBottom: 14 }}>
                <label className="fs-15 fw-5">Nom complet *</label>
                <input style={inputStyle} required value={form.name} onChange={set("name")} />
              </div>
              <div className="col-md-6" style={{ marginBottom: 14 }}>
                <label className="fs-15 fw-5">Téléphone *</label>
                <input style={inputStyle} type="tel" required value={form.phone} onChange={set("phone")} />
              </div>
              <div className="col-12" style={{ marginBottom: 14 }}>
                <label className="fs-15 fw-5">E-mail *</label>
                <input style={inputStyle} type="email" required value={form.email} onChange={set("email")} />
              </div>
              <div className="col-12" style={{ marginBottom: 20 }}>
                <label className="fs-15 fw-5">Message aux prestataires</label>
                <textarea style={inputStyle} rows={4} value={form.message} onChange={set("message")} placeholder="Décrivez votre événement : type, lieu, nombre d'invités…" />
              </div>
            </div>
            <button type="submit" className="tf-btn">
              Envoyer ma demande de devis
              <i className="icon-arrow-top-right" />
            </button>
          </form>
        </div>
        <div className="col-lg-5">
          <div style={{ padding: 24, border: "1px solid #ececf1", borderRadius: 16, background: "#fff" }}>
            <h5 className="fw-5 mb-20">Votre sélection</h5>
            {cartServices.map((it) => (
              <div key={it.id} className="mb-10 fs-15" style={{ paddingBottom: 10, borderBottom: "1px solid #f2f2f6" }}>
                <strong>{it.title}</strong>
                <br />
                <span style={{ color: "#6b6f85" }}>
                  {it.city}
                  {it.date ? ` — ${new Date(it.date).toLocaleDateString("fr-FR")}` : ""}
                </span>
              </div>
            ))}
            <Link href="/panier" className="fs-15 fw-5">
              Modifier le panier
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
