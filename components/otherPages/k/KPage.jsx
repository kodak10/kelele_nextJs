import React from "react";
import Link from "next/link";
import Header1 from "@/components/headers/Header1";
import Footer1 from "@/components/footers/Footer1";

// Gabarit commun des pages publiques KELELE (en-tête + fil d'Ariane + pied de page).
export default function KPage({ title, subtitle, children }) {
  return (
    <div id="wrapper">
      <div className="tf-top-bar flex items-center justify-center">
        <p>Lancement sur les marchés pilotes : Abidjan et Lagos.</p>
      </div>
      <Header1 />
      <div className="page-title basic">
        <div className="tf-container full">
          <div className="row">
            <div className="col-12">
              <div className="content text-center">
                <ul className="breadcrumbs flex items-center justify-center gap-10">
                  <li>
                    <Link href="/" className="flex">
                      <i className="icon-home" />
                    </Link>
                  </li>
                  <li>
                    <i className="icon-arrow-right" />
                  </li>
                  <li>{title}</li>
                </ul>
                <h2 className="font-cardo fw-7">{title}</h2>
                {subtitle && <h6>{subtitle}</h6>}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main-content pt-0">{children}</div>
      <Footer1 parentClass="footer has-border-top" />
    </div>
  );
}

export function Section({ title, intro, children, narrow }) {
  return (
    <section className="tf-spacing-5 pt-0">
      <div className="tf-container" style={narrow ? { maxWidth: 900 } : undefined}>
        {title && (
          <div className="heading-section text-center">
            <h2 className="fw-7">{title}</h2>
            {intro && <p>{intro}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

export function Cards({ items }) {
  return (
    <div className="row">
      {items.map((it, i) => (
        <div className="col-md-6 col-lg-4" key={i} style={{ marginBottom: 24 }}>
          <div
            style={{
              height: "100%",
              padding: 24,
              border: "1px solid #ececec",
              borderRadius: 16,
              background: "#fff",
            }}
          >
            {it.icon && (
              <div style={{ fontSize: 32, marginBottom: 12 }}>
                <i className={it.icon} />
              </div>
            )}
            <h5 className="fw-5 mb-10">{it.title}</h5>
            <p className="fs-15">{it.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
