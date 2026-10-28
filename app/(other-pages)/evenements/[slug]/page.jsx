import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import EventSingle from "@/components/otherPages/EventSingle";

import React from "react";
import Link from "next/link";
import { keleleEventsAll as allevents } from "@/data/kelele";
export const metadata = {
  title:
    "Détail de l'événement || KELELE",
  description: "Détail d'un événement et billetterie KELELE.",
};
export function generateStaticParams() {
  return allevents.map((e) => ({ slug: e.slug }));
}

export default function page({ params }) {
  const event =
    allevents.filter((elm) => elm.slug === params.slug)[0] || allevents[0];
  return (
    <>
      <div id="wrapper">
        {/* <div className="tf-top-bar flex items-center justify-center">
          <p>Lancement sur les marchés pilotes : Abidjan et Lagos.</p>
        </div> */}
        <Header1 />
        <div className="event-single-page-title page-title style-5">
          <div className="tf-container">
            <div className="row">
              <div className="col-lg-8">
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
                    <li>Événements</li>
                    <li>
                      <i className="icon-arrow-right" />
                    </li>
                    <li>Détail</li>
                  </ul>
                  <h2 className="font-cardo fw-7">{event.title}</h2>
                  <p className="except">
                    Réservez votre billet : chaque billet dispose d'un QR code unique, certifié à l'entrée en moins d'une seconde.
                  </p>
                  <ul className="entry-meta mb-30">
                    <li>
                      <i className="flaticon-location fs-16" />
                      <p className="fs-15">{event.location}</p>
                    </li>
                    <li>
                      <i className="flaticon-calendar fs-16" />
                      <p className="fs-15">{event.date.day} {event.date.month}</p>
                    </li>
                    <li>
                      <i className="flaticon-clock fs-16" />
                      <p className="fs-15">{event.time}</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section-page-event-single">
          <EventSingle event={event} />
        </div>
        <Footer1 parentClass="footer has-border-top" />
      </div>
    </>
  );
}
