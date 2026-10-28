"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { providers, providerHrefById } from "@/data/kelele";
import { useCategories } from "@/components/common/useCategories";

const ICONS = {
  "DJ & Animation": "flaticon-play-1",
  "Traiteurs & Pâtisserie": "flaticon-online-training",
  "Décoration & Scénographie": "flaticon-medal",
  "Photo & Vidéo": "flaticon-play",
};

// Paires (image + carte d'information) d'un même prestataire, placées en diagonale.
const pairs = [
  ...[1, 3, 5, 6].map((id) => providers.find((p) => p.id === id)),
].map((p) => ({
  id: p.id,
  img: p.imgSrc,
  category: p.filterCategories[0],
  city: p.city,
  icon: ICONS[p.filterCategories[0]] || "flaticon-user",
}));
const IMG_H = 340;
const BOX_H = 221;

function VerticalTile({ children, height, bg, onSwiper }) {
  return (
    <Swiper
      direction="vertical"
      loop
      speed={900}
      allowTouchMove={false}
      onSwiper={onSwiper}
      className="swiper-container swiper-container-vertical"
      style={{ height, width: "100%", borderRadius: 12, background: bg, overflow: "hidden" }}
    >
      {children}
    </Swiper>
  );
}

function ImageTile({ items, onSwiper }) {
  return (
    <VerticalTile height={IMG_H} bg="#eee" onSwiper={onSwiper}>
      {items.map((it, i) => (
        <SwiperSlide key={i} style={{ height: IMG_H }}>
          <Link href={providerHrefById(it.id)} aria-label={it.category}>
            <img
              src={it.img}
              alt={it.category}
              loading="eager"
              style={{ width: "100%", height: IMG_H, objectFit: "cover", display: "block" }}
            />
          </Link>
        </SwiperSlide>
      ))}
    </VerticalTile>
  );
}

function StatTile({ items, bg, iconBg, onSwiper }) {
  return (
    <VerticalTile height={BOX_H} bg={bg} onSwiper={onSwiper}>
      {items.map((st, i) => (
        <SwiperSlide key={i} style={{ height: BOX_H }}>
          <Link
            href={providerHrefById(st.id)}
            style={{
              color: "inherit",
              textDecoration: "none",
              height: BOX_H,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 6,
            }}
          >
            <div
              style={{
                width: 60,
                height: 60,
                borderRadius: "50%",
                background: iconBg,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 28,
              }}
            >
              <i className={st.icon} />
            </div>
            <h5 className="fw-7 mb-0 text-center" style={{ padding: "0 12px" }}>{st.category}</h5>
            <p className="fz-15 mb-0">{st.city}</p>
            <span className="fz-15 fw-5">Voir la fiche →</span>
          </Link>
        </SwiperSlide>
      ))}
    </VerticalTile>
  );
}

export default function Hero2Search() {
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("");
  const router = useRouter();
  const [categories] = useCategories();
  // 0: image gauche, 1: carte droite-haut (paire 1) | 2: carte gauche-bas, 3: image droite (paire 2)
  const swipers = useRef([]);
  useEffect(() => {
    let step = 0;
    const timer = setInterval(() => {
      step += 1;
      const n = pairs.length;
      // la paire du slot 1 passe au slot 2, celle d'avant arrive dans le slot 1
      const p1 = (((-step) % n) + n) % n;
      const p2 = (((1 - step) % n) + n) % n;
      [0, 1].forEach((k) => swipers.current[k]?.slideToLoop(p1));
      [2, 3].forEach((k) => swipers.current[k]?.slideToLoop(p2));
    }, 10000);
    return () => clearInterval(timer);
  }, []);
  const reg = (k) => (sw) => {
    swipers.current[k] = sw;
    sw.slideToLoop(k < 2 ? 0 : 1, 0);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (keyword.trim()) params.set("q", keyword.trim());
    if (category) params.set("category", category);
    router.push("/prestataires?" + params.toString());
  };

  return (
    <div className="page-title-home2">
      <div className="tf-container">
        <div className="row items-center">
          <div className="col-lg-6">
            <div className="content">
              <div
                className="widget box-sub-tag wow fadeInUp"
                data-wow-delay="0s"
              >
                <div className="sub-tag-icon">
                  <i className="icon-flash" />
                </div>
                <div className="sub-tag-title">
                  <p>La super-application de l'événementiel africain</p>
                </div>
              </div>
              <h1 className="fw-7 wow fadeInUp" data-wow-delay="0.2s">
                Tous vos événements, une seule application
              </h1>
              <h6 className="wow fadeInUp" data-wow-delay="0.3s">
                Trouvez des prestataires vérifiés, demandez des devis, payez en Mobile Money et gérez vos billets QR code, depuis Abidjan, Lagos ou la diaspora.
              </h6>
              <form
                onSubmit={handleSearch}
                className="wow fadeInUp flex items-center gap-10"
                data-wow-delay="0.4s"
                style={{
                  background: "#fff",
                  borderRadius: 16,
                  padding: 12,
                  maxWidth: 680, flexWrap: "nowrap",
                  boxShadow: "0 10px 30px rgba(0,0,0,.15)",
                }}
              >
                <input
                  type="text"
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                  placeholder="Un DJ, un traiteur, un décorateur…"
                  style={{ flex: "1 1 0", minWidth: 0, border: 0, outline: 0, padding: "10px 12px" }}
                />
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  style={{ flex: "0 1 170px", minWidth: 0, maxWidth: "35%", border: 0, borderLeft: "1px solid #e5e5e5", outline: 0, padding: "10px 12px", background: "transparent" }}
                >
                  <option value="">Toutes catégories</option>
                  {categories.map((c) => (
                    <option key={c.id} value={c.title}>
                      {c.title}
                    </option>
                  ))}
                </select>
                <button type="submit" className="tf-btn" style={{ flexShrink: 0, whiteSpace: "nowrap", padding: "14px 20px" }}>
                  Rechercher
                  <i className="icon-search" />
                </button>
              </form>
            </div>
          </div>
          <div className="col-lg-6">
            <div
              style={{
                display: "flex",
                gap: 10,
                maxWidth: 600,
                marginLeft: "auto",
              }}
            >
              <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 9 }}>
                <ImageTile items={pairs} onSwiper={reg(0)} />
                <StatTile items={pairs} bg="#e9dece" iconBg="#f8eee1" onSwiper={reg(2)} />
              </div>
              <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 9 }}>
                <StatTile items={pairs} bg="var(--bg-3)" iconBg="#e4d5f6" onSwiper={reg(1)} />
                <ImageTile items={pairs} onSwiper={reg(3)} />
              </div>
            </div>
          </div>
        </div>
        <div style={{ paddingBottom: 59 }} />
      </div>
    </div>
  );
}
