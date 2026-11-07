"use client";
import { menuItems as baseItems } from "@/data/menu";
import { useCategories } from "@/components/common/useCategories";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Nav() {
  const pathname = usePathname();
  const [cats] = useCategories();
  const menuItems = baseItems.map((item) =>
    item.id === "explore"
      ? {
          ...item,
          subItems: [
            { title: "Toutes les catégories", href: "/prestataires" },
            ...cats.map((c) => ({
              title: c.title,
              href: `/prestataires?category=${encodeURIComponent(c.title)}`,
            })),
          ],
        }
      : item
  );
  const isMenuActive = (menu) => {
    let isActive = false;
    if (menu.href !== "#") {
      if (pathname.split("/")[1] == menu.href?.split("/")[1]) {
        isActive = true;
      }
    }
    if (menu.subItems) {
      menu.subItems.forEach((el) => {
        if (el.href != "#") {
          if (pathname.split("/")[1] == el.href?.split("/")[1]) {
            isActive = true;
          }
        }
        if (el.subItems) {
          el.subItems.map((elm) => {
            if (elm.href != "#") {
              if (pathname.split("/")[1] == elm.href?.split("/")[1]) {
                isActive = true;
              }
            }
          });
        }
      });
    }
    return isActive;
  };
  return (
    <>
      {menuItems.map((item, index) =>
        item.id === "explore" ? (
          <li key={index} className="has-children kelele-mega-item">
            <Link
              href="/prestataires"
              className={pathname.startsWith("/prestataires") ? "parent-active activeMenu" : ""}
            >
              {item.title}
            </Link>
            <div className="kelele-mega-panel">
              <div className="kelele-mega-head">
                <strong>Catégories de prestataires</strong>
                <Link href="/prestataires">Voir tous les prestataires →</Link>
              </div>
              <div className="kelele-mega-grid">
                {cats.map((c) => (
                  <div key={c.id} className="kelele-mega-col">
                    <Link
                      className="kelele-mega-title"
                      href={`/prestataires?category=${encodeURIComponent(c.title)}`}
                    >
                      {c.title}
                    </Link>
                    {(c.subItems || []).slice(0, 4).map((sub) => (
                      <Link key={sub.id} className="kelele-mega-sub" href={sub.href}>
                        {sub.title}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </li>
        ) : !item.subItems ? (
          <li key={index}>
            <Link
              href={item.href}
              className={isMenuActive(item) ? "parent-active activeMenu" : ""}
            >
              {item.title}
            </Link>
          </li>
        ) : (
        <li
          key={index}
          className={item.isActive ? "has-children current" : "has-children"}
        >
          <a
            href="#"
            className={isMenuActive(item) ? "parent-active activeMenu" : ""}
          >
            {item.title}
          </a>
          {item.subItems && (
            <ul className={item.hasMega ? "mega-menu" : ""}>
              {item.subItems.map((subItem, subIndex) => (
                <li
                  key={subIndex}
                  className={subItem.subItems ? "has-item-children" : ""}
                >
                  {subItem.title && !subItem.href && (
                    <span
                      className={`title ${
                        isMenuActive(subItem) ? "activeMenu" : ""
                      }`}
                    >
                      {subItem.title}
                    </span>
                  )}
                  {subItem.href ? (
                    <Link
                      href={subItem.href}
                      className={`${isMenuActive(subItem) ? "activeMenu" : ""}`}
                    >
                      {subItem.title}
                    </Link>
                  ) : (
                    subItem.subItems && (
                      <ul>
                        {subItem.subItems.map((subSubItem, subSubIndex) => (
                          <li key={subSubIndex}>
                            <Link
                              href={subSubItem.href}
                              className={`${
                                isMenuActive(subSubItem) ? "activeMenu" : ""
                              }`}
                            >
                              {subSubItem.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )
                  )}
                </li>
              ))}
            </ul>
          )}
        </li>
        )
      )}
    </>
  );
}
