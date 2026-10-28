"use client";
import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useContextElement } from "@/context/Context";
import AddToCart from "@/components/common/AddToCart";
import { useCategories } from "@/components/common/useCategories";
import {
  providers,
  providerHref,
  providerCities,
} from "@/data/kelele";


export default function ProviderGrid() {
  const { toggleWishlist, isAddedtoWishlist } = useContextElement();
  const params = useSearchParams();
  const [cats] = useCategories();
  const categoryNames = cats.map((c) => c.title);
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("");
  const [city, setCity] = useState("");
  const [sort, setSort] = useState("default");

  // Pré-remplit la recherche depuis l'URL (?q=...&category=...)
  useEffect(() => {
    setKeyword(params.get("q") || "");
    setCategory(params.get("category") || "");
  }, [params]);

  const results = useMemo(() => {
    const q = keyword.trim().toLowerCase();
    let list = providers.filter((p) => {
      if (category && !p.filterCategories.includes(category)) return false;
      if (city && p.city !== city) return false;
      if (q) {
        const hay = (p.title + " " + p.city + " " + p.filterCategories.join(" ")).toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
    if (sort === "az") list = [...list].sort((a, b) => a.title.localeCompare(b.title));
    if (sort === "za") list = [...list].sort((a, b) => b.title.localeCompare(a.title));
    return list;
  }, [keyword, category, city, sort]);

  const reset = () => {
    setKeyword("");
    setCategory("");
    setCity("");
  };

  return (
    <div className="main-content pt-0">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="tf-spacing-1">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex items-center flex-wrap gap-10 mb-30"
              >
                <input
                  type="text"
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                  placeholder="Un DJ, un traiteur, un décorateur…"
                  style={{ flex: "1 1 260px", padding: "12px 16px", border: "1px solid #e5e5e5", borderRadius: 12 }}
                />
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  style={{ padding: "12px 16px", border: "1px solid #e5e5e5", borderRadius: 12 }}
                >
                  <option value="">Toutes catégories</option>
                  {categoryNames.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
                <select
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  style={{ padding: "12px 16px", border: "1px solid #e5e5e5", borderRadius: 12 }}
                >
                  <option value="">Toutes les villes</option>
                  {providerCities.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  style={{ padding: "12px 16px", border: "1px solid #e5e5e5", borderRadius: 12 }}
                >
                  <option value="default">Tri par défaut</option>
                  <option value="az">Titre (A-Z)</option>
                  <option value="za">Titre (Z-A)</option>
                </select>
                <button type="button" className="tf-btn" onClick={reset}>
                  Réinitialiser
                </button>
              </form>

              <p className="mb-30">
                {results.length
                  ? `${results.length} prestataire${results.length > 1 ? "s" : ""} trouvé${results.length > 1 ? "s" : ""}`
                  : "Aucun prestataire trouvé. Essayez un autre filtre."}
              </p>

              <div className="grid-list-items-5">
                {results.map((elm) => (
                  <div key={elm.id} className="course-item hover-img fl-item h190 kelele-course">
                    <div className="features image-wrap">
                      <Image
                        className="lazyload"
                        alt={elm.title}
                        src={elm.imgSrc}
                        width={520}
                        height={380}
                      />
                      {elm.tag && (
                        <div className="box-tags">
                          <a href="#" className="item best-seller">
                            {elm.tag}
                          </a>
                        </div>
                      )}
                      <div
                        className={`box-wishlist tf-action-btns ${
                          isAddedtoWishlist(elm.id) ? "active" : ""
                        } `}
                        onClick={() => toggleWishlist(elm.id)}
                      >
                        <i className="flaticon-heart" />
                      </div>
                    </div>
                    <div className="content">
                      <div className="meta">
                        <div className="meta-item">
                          <i className="flaticon-location" />
                          <p>{elm.city}</p>
                        </div>
                        <div className="meta-item">
                          <i className="flaticon-clock" />
                          <p>Devis gratuit</p>
                        </div>
                      </div>
                      <h6 className="fw-5 line-clamp-2">
                        <Link href={providerHref(elm)}>{elm.title}</Link>
                      </h6>
                      <div className="ratings pb-30">
                        <i className="icon-check" />
                        <div className="total">Prestataire certifié (KYC)</div>
                      </div>
                      <div className="author">
                        {elm.filterCategories.join(", ")}
                      </div>
                      <div className="bottom">
                        <div className="h6 price fw-5">Sur devis</div>
                        <AddToCart provider={elm} />
                        <Link href={providerHref(elm)} className="tf-btn-arrow">
                          <span className="fw-5 fs-15">Demander un devis</span>
                          <i className="icon-arrow-top-right" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
