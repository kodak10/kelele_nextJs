import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import KTestimonials from "@/components/homes/home-1/KTestimonials";
import KBecomeProvider from "@/components/otherPages/become-teacher/KBecomeProvider";
import React from "react";
import Link from "next/link";
export const metadata = {
  title: "Devenir prestataire || KELELE",
  description:
    "Rejoignez KELELE : recevez des demandes de devis, soyez payé en Mobile Money et développez votre activité événementielle.",
};
export default function page() {
  return (
    <>
      <div id="wrapper">
        <div className="tf-top-bar flex items-center justify-center">
          <p>Lancement sur les marchés pilotes : Abidjan et Lagos.</p>
        </div>
        <Header1 />
        <div className="page-title basic page-become-teacher">
          <div className="tf-container full">
            <div className="row">
              <div className="col-12">
                <div className="content text-center">
                  <ul className="breadcrumbs flex items-center justify-center gap-10">
                    <li>
                      <Link href={`/`} className="flex">
                        <i className="icon-home" />
                      </Link>
                    </li>
                    <li>
                      <i className="icon-arrow-right" />
                    </li>
                    <li>Prestataires</li>
                    <li>
                      <i className="icon-arrow-right" />
                    </li>
                    <li>Devenir prestataire</li>
                  </ul>
                  <h2 className="font-cardo fw-7">Devenir prestataire</h2>
                  <h6>
                    DJ, traiteur, décorateur, photographe, organisateur :
                    développez votre activité avec KELELE
                  </h6>
                  <div className="d-flex justify-center">
                    <Link href="/inscription" className="tf-btn">
                      Commencer
                      <i className="icon-arrow-top-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="main-content pt-0">
          <KBecomeProvider />
          <KTestimonials />
        </div>
        <Footer1 parentClass="footer has-border-top" />
      </div>
    </>
  );
}
