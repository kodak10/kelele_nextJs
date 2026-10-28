import KProviderGrid from "@/components/course-list/KProviderGrid";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Link from "next/link";
import React, { Suspense } from "react";

export const metadata = {
  title: "Prestataires || KELELE",
  description:
    "Trouvez des prestataires événementiels vérifiés : DJ, traiteurs, décorateurs, photographes, salles.",
};
export default function page() {
  return (
    <>
      <div id="wrapper">
        <div className="tf-top-bar flex items-center justify-center">
          <p>Lancement sur les marchés pilotes : Abidjan et Lagos.</p>
        </div>

        <Header1 />
        <div className="page-title style-3 has-tags-bg-sky">
          <div className="tf-container">
            <div className="row">
              <div className="col-12">
                <div className="content">
                  <ul className="breadcrumbs flex items-center justify-start gap-10 mb-60">
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
                  <h2 className="font-cardo fw-7">Trouvez le bon prestataire</h2>
                  <p>
                    DJ, traiteurs, décorateurs, photographes, salles : comparez
                    des professionnels vérifiés et demandez un devis.
                  </p>
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
