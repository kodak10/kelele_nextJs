"use client";
import { useEffect, useState } from "react";
import { categories as seed } from "@/data/menu";

// Catégories de prestataires : gérées par l'admin (stockage local en démo), partagées
// avec le header, la recherche d'accueil et les formulaires de service.
export const CATEGORIES_KEY = "kelele:categories";

export function useCategories() {
  const [list, setList] = useState(seed);
  useEffect(() => {
    const read = () => {
      try {
        const raw = localStorage.getItem(CATEGORIES_KEY);
        if (raw) setList(JSON.parse(raw));
      } catch (e) {}
    };
    read();
    window.addEventListener("storage", read);
    window.addEventListener("kelele:categories-changed", read);
    return () => {
      window.removeEventListener("storage", read);
      window.removeEventListener("kelele:categories-changed", read);
    };
  }, []);
  const save = (next) => {
    setList(next);
    try {
      localStorage.setItem(CATEGORIES_KEY, JSON.stringify(next));
      window.dispatchEvent(new Event("kelele:categories-changed"));
    } catch (e) {}
  };
  return [list, save];
}
