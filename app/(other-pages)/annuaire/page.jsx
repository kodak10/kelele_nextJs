import KProviderGrid from "@/components/course-list/KProviderGrid";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import React, { Suspense } from "react";
import Link from "next/link";
export const metadata = {
  title: "Annuaire des prestataires || KELELE",
  description: "Annuaire des prestataires événementiels vérifiés KELELE.",
};
export default function page() {
  return (
    <>
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
                      <Link href={`/`} className="flex">
                        <i className="icon-home" />
                      </Link>
                    </li>
                    <li>
                      <i className="icon-arrow-right" />
                    </li>
                    <li>Prestataires</li>
                  </ul>
                  <h2 className="font-cardo fw-7">Annuaire des prestataires</h2>
                  <h6>Des professionnels vérifiés pour tous vos événements.</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Suspense fallback={null}>
          <KProviderGrid />
        </Suspense>
        <Footer1 parentClass="footer has-border-top" />
      </div>
    </>
  );
}
