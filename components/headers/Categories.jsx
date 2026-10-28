"use client";
import Link from "next/link";
import React from "react";
import { useCategories } from "@/components/common/useCategories";

export default function Categories() {
  const [categories] = useCategories();
  return (
    <ul>
      <li className="item title">CATÉGORIES DE PRESTATAIRES</li>
      {categories.map((elm) => {
        const base = `/prestataires?category=${encodeURIComponent(elm.title)}`;
        return elm.subItems && elm.subItems.length ? (
          <li key={elm.id} className="has-children">
            <Link className="item" href={base}>
              {elm.title}
            </Link>
            <ul className="sub-menu">
              <li className="item title">Voir les prestataires</li>
              {elm.subItems.map((sub) => (
                <li key={sub.id}>
                  <Link className="item" href={sub.href}>
                    {sub.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ) : (
          <li key={elm.id}>
            <Link className="item" href={base}>
              {elm.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
