"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { providerCities } from "@/data/kelele";
import { useCategories } from "@/components/common/useCategories";

// Hero d'après la maquette : photo plein cadre, titre serif, recherche en pilule, deux CTA.
export default function HeroSearch() {
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("");
  const [city, setCity] = useState(providerCities[0]);
  const [date, setDate] = useState("");
  const router = useRouter();
  const [cityOpen, setCityOpen] = useState(false);
  const cityRef = useRef(null);
  useEffect(() => {
    if (!cityOpen) return;
    const onDown = (e) => {
      if (cityRef.current && !cityRef.current.contains(e.target)) setCityOpen(false);
    };
    const onKey = (e) => e.key === "Escape" && setCityOpen(false);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [cityOpen]);
  const [categories] = useCategories();

  const handleSearch = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (keyword.trim()) params.set("q", keyword.trim());
    if (category) params.set("category", category);
    if (city) params.set("city", city);
    if (date) params.set("date", date);
    router.push("/prestataires?" + params.toString());
  };

  const stats = [
    { icon: "flaticon-user", value: categories.length, label: "catégories de prestataires" },
    { icon: "flaticon-location", value: providerCities.length, label: "villes pilotes" },
    { icon: "flaticon-check", value: "KYC", label: "prestataires certifiés" },
  ];

  return (
    <section className="kelele-hero2">
      <video
        className="kelele-hero2-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/images/charte/hero-bg.jpg"
        aria-hidden="true"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>
      <div className="tf-container">
        <div className="kelele-hero2-inner">
          <div className="kelele-hero2-content">
            <p className="kelele-eyebrow">L&apos;Afrique célèbre autrement</p>
            <h1>
              Chaque événement mérite <span className="kelele-gold">l&apos;excellence.</span>
            </h1>
            <p className="kelele-lead">
              Trouvez les bons professionnels, organisez vos événements et réservez vos
              prestations en toute confiance, en Afrique et au-delà.
            </p>

            <form onSubmit={handleSearch} className="kelele-search">
              <i className="icon-search kelele-search-icon" />
              <input
                type="text"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="Rechercher un service, un lieu, un prestataire…"
                aria-label="Rechercher"
              />
              <div className="kelele-dropdown" ref={cityRef}>
                <button
                  type="button"
                  className="kelele-search-field"
                  aria-haspopup="listbox"
                  aria-expanded={cityOpen}
                  onClick={() => setCityOpen((o) => !o)}
                >
                  <i className="flaticon-location kelele-field-icon" />
                  <span className="kelele-field-value">{city ? city.split(",")[0] : "Ville"}</span>
                  <i className={`icon-arrow-bottom kelele-field-caret${cityOpen ? " is-open" : ""}`} />
                </button>
                {cityOpen && (
                  <ul className="kelele-dropdown-list" role="listbox" aria-label="Ville">
                    {providerCities.map((c) => (
                      <li key={c} role="option" aria-selected={c === city}>
                        <button
                          type="button"
                          className={c === city ? "is-active" : ""}
                          onClick={() => {
                            setCity(c);
                            setCityOpen(false);
                          }}
                        >
                          <i className="flaticon-location" />
                          {c.split(",")[0]}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <label className="kelele-search-field">
                <i className="flaticon-calendar kelele-field-icon" />
                <span className={`kelele-field-value${date ? "" : " is-placeholder"}`}>
                  {date ? new Date(date + "T00:00:00").toLocaleDateString("fr-FR", { day: "2-digit", month: "short", year: "numeric" }) : "Date"}
                </span>
                <i className="icon-arrow-bottom kelele-field-caret" />
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  onClick={(e) => e.currentTarget.showPicker && e.currentTarget.showPicker()}
                  aria-label="Date"
                />
              </label>
              <button type="submit" className="kelele-search-btn" aria-label="Lancer la recherche">
                <i className="icon-arrow-top-right" />
              </button>
            </form>

            <div className="kelele-cta">
              <Link href="/prestataires" className="tf-btn">
                Organiser un événement
                <i className="icon-arrow-top-right" />
              </Link>
              <Link href="/devenir-prestataire" className="tf-btn style-secondary kelele-outline">
                Devenir prestataire
                <i className="icon-arrow-top-right" />
              </Link>
            </div>
          </div>

          <ul className="kelele-hero2-stats">
            {stats.map((s) => (
              <li key={s.label}>
                <span className="kelele-stat-icon">
                  <i className={s.icon} />
                </span>
                <div>
                  <strong>{s.value}</strong>
                  <span>{s.label}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
