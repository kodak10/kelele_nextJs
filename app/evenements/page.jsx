import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import EventList from "@/components/events/EventList";

import React from "react";
import Link from "next/link";
export const metadata = {
  title:
    "Événements || KELELE",
  description:
    "Événements et billetterie KELELE : réservez vos billets avec QR code.",
};
export default function page() {
  return (
    <>
      <div id="wrapper">
        {/* <div className="tf-top-bar flex items-center justify-center">
          <p>Lancement sur les marchés pilotes : Abidjan et Lagos.</p>
        </div> */}
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
                    <li>KELELE</li>
                    <li>
                      <i className="icon-arrow-right" />
                    </li>
                    <li>Événements</li>
                  </ul>
                  <h2 className="font-cardo fw-7">Événements</h2>
                  <h6>
                    Découvrez les événements et réservez vos billets avec QR code.
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="main-content pt-0">
          <EventList />
        </div>
        <Footer1 parentClass="footer has-border-top" />
      </div>
    </>
  );
}
