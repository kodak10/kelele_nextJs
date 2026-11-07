"use client";
import React, { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import ProviderCard from "@/components/providers/ProviderCard";
import { useCategories } from "@/components/common/useCategories";
import {
  providers,
  providerCities,
} from "@/data/kelele";


export default function ProviderGrid() {
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
    setCity(params.get("city") || "");
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
                  <ProviderCard key={elm.id} provider={elm} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
