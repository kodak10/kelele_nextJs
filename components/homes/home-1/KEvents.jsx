import React from "react";
import Link from "next/link";
import { keleleEvents as events2, eventHrefById } from "@/data/kelele";
export default function KEvents() {
  return (
    <section className="section-event tf-spacing-11 kelele-events" style={{ background: "#faf8f3" }}>
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section">
              <h2
                className="fw-7 letter-spacing-1 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                Événements à venir
              </h2>
              <div className="flex items-center justify-between flex-wrap gap-10">
                <div className="sub fs-15 wow fadeInUp" data-wow-delay="0.2s">
                  Billetterie sécurisée avec QR code unique
                </div>
                <a
                  href="/evenements"
                  className="tf-btn-arrow wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  Voir tous les événements
                  <i className="icon-arrow-top-right" />
                </a>
              </div>
            </div>
            <div className="wrap-item">
              {events2.map((event, index) => (
                <div
                  key={index}
                  className="events-item wow fadeInUp"
                  data-wow-delay={event.delay}
                >
                  <div className="event-item-content">
                    <div className="event-item-sub">
                      <div className="item-sub-address">
                        <i className="flaticon-location" />
                        <p>{event.location}</p>
                      </div>
                      <div className="item-sub-time">
                        <i className="flaticon-clock" />
                        <p>{event.time}</p>
                      </div>
                    </div>
                    <div className="event-item-title fw-5 fs-18">
                      <Link href={eventHrefById(event.id)}>
                        {event.title}
                      </Link>
                    </div>
                    <Link className="tf-btn" href={eventHrefById(event.id)}>
                      Obtenir un billet
                      <i className="icon-arrow-top-right" />
                    </Link>
                  </div>
                  <div className="event-item-date">
                    <h2 className="fw-7">{event.date}</h2>
                    <h6 className="fw-5">{event.month}</h6>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
