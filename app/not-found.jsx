import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Image from "next/image";

import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Page introuvable || KELELE",
  description: "La page demandée est introuvable.",
};
export default function page() {
  return (
    <>
      <div id="wrapper">

        <Header1 />

        <div className="main-content page-404">
          {/* section 404 */}
          <section className="page-404-wrap">
            <div className="tf-container">
              <div className="row">
                <div className="col-lg-8">
                  <div className="thumds">
                    <Image
                      className="ls-is-cached lazyloaded"
                      data-src="/images/section/404.png"
                      alt=""
                      src="/images/section/404.png"
                      width={1536}
                      height={1236}
                    />
                  </div>
                </div>
                <div className="col-lg-4 flex items-center">
                  <div className="errors-404-content">
                    <h3>Oups ! Vous semblez perdu.</h3>
                    <p>
                      La page que vous cherchez n'existe pas ou a été déplacée. Retournez à l'accueil ou utilisez la recherche.
                    </p>
                    <Link className="tf-btn" href={`/`}>
                      Retour à l'accueil <i className="icon-arrow-top-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* /section 404 */}
        </div>

        <Footer1 />
      </div>
    </>
  );
}
