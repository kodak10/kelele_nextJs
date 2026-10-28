"use client";
import React, { useEffect, useRef } from "react";
import Nav from "./Nav";
import Link from "next/link";
import Image from "next/image";
import Categories from "./Categories";
import MobileNav from "./MobileNav";
import { useContextElement } from "@/context/Context";
export default function Header1() {
  const { cartServices } = useContextElement();
  return (
    <header id="header_main" className="header kelele-header">
      <div className="header-inner">
        <div className="header-inner-wrap">
          <div className="header-left flex-grow">
            <a
              className="mobile-nav-toggler mobile-button d-lg-none flex"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasMenu"
              aria-controls="offcanvasMenu"
            />
            <div id="site-logo">
              <Link href={`/`} rel="home">
                <Image
                  id="logo-header"
                  alt="KELELE"
                  src="/images/logo/logo.png"
                  width={83}
                  height={56}
                />
              </Link>
            </div>
            <div className="header-catalog">
              <a href="#" className="header-text">
                Catégories
                <i className="icon-arrow-bottom" />
              </a>
              <Categories />
            </div>
            <div className="header-search flex-grow">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const q = new FormData(e.currentTarget).get("text");
                  window.location.href = "/prestataires?q=" + encodeURIComponent(q || "");
                }}
                className="form-search"
              >
                <fieldset>
                  <input
                    className=""
                    type="text"
                    placeholder="Rechercher un prestataire, un événement…"
                    name="text"
                    tabIndex={2}
                    defaultValue=""
                    aria-required="true"
                    required
                  />
                </fieldset>
                <div className="button-submit">
                  <button className="" type="submit">
                    <i className="icon-search fs-20" />
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="header-right">
            <nav className="main-menu">
              <ul className="navigation">
                <Nav />
              </ul>
            </nav>
            <a
              className="d-lg-none flex"
              href="#canvasSearch"
              data-bs-toggle="offcanvas"
              aria-controls="offcanvasLeft"
            >
              <i className="icon-search fs-20" />
            </a>
            <Link
              href={`/panier`}
              className="header-cart flex items-center justify-center"
              aria-label="Panier"
              title="Panier"
              style={{ position: "relative" }}
            >
              <i className="icon-shopcart fs-18" />
              {cartServices.length > 0 && (
                <span
                  style={{
                    position: "absolute",
                    top: -6,
                    right: -8,
                    minWidth: 18,
                    height: 18,
                    padding: "0 5px",
                    borderRadius: 999,
                    background: "var(--Secondary, #c9a84c)",
                    color: "#fff",
                    fontSize: 11,
                    fontWeight: 600,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {cartServices.length}
                </span>
              )}
            </Link>
            <div className="header-btn flex gap-10">
              <div className="header-login">
                <Link href={`/connexion`} className="tf-button-default header-text">
                  Connexion
                </Link>
              </div>
              <div className="header-register">
                <Link
                  href={`/inscription`}
                  className="tf-button-default active header-text"
                >
                  Inscription
                </Link>
              </div>
              <div className="d-lg-none flex">
                <Link href={`/connexion`} className="fs-15">
                  Rejoindre
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MobileNav />
    </header>
  );
}
