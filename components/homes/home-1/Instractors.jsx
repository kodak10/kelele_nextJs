"use client";
import {
  featuredProviders as instructors,
  providerHrefById,
} from "@/data/kelele";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
export default function Instractors() {
  const options = {
    spaceBetween: 25,
    observer: true,
    observeParents: true,
    breakpoints: {
      425: {
        slidesPerView: 1.5,
        spaceBetween: 15,
      },
      700: {
        slidesPerView: 2.3,
      },
      1000: {
        slidesPerView: 3,
      },
      1440: {
        slidesPerView: 5,
      },
    },
  };
  return (
    <section className="section-instructor tf-spacing-3 pt-0">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section">
              <h2 className="fw-7 font-cardo wow fadeInUp" data-wow-delay="0s">
                Rencontrez nos prestataires vedettes
              </h2>
              <div className="flex items-center justify-between flex-wrap gap-10">
                <div className="sub fs-15 wow fadeInUp" data-wow-delay="0.1s">
                  Des professionnels de l'événementiel, vérifiés par KELELE
                </div>
                <Link
                  href={`/prestataires`}
                  className="tf-btn-arrow wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  Voir tous les prestataires <i className="icon-arrow-top-right" />
                </Link>
              </div>
            </div>
            <Swiper
              className="swiper-container slider-courses-5 wow fadeInUp"
              data-wow-delay="0.3s"
              {...options}
              modules={[Navigation, Pagination]}
            >
              {instructors.map((instructor, index) => (
                <SwiperSlide className="swiper-slide" key={index}>
                  <div className="instructors-item hover-img style-column">
                    <div className="image-wrap">
                      <Image
                        className="lazyload"
                        data-src={instructor.imgSrc}
                        alt={instructor.alt}
                        src={instructor.imgSrc}
                        width={520}
                        height={521}
                      />
                    </div>
                    <div className="entry-content">
                      <ul className="entry-meta">
                        <li>
                          <i className="flaticon-user" />
                          {instructor.city}
                        </li>
                        <li>
                          <i className="flaticon-play" />
                          Vérifié (KYC)
                        </li>
                      </ul>
                      <h6 className="entry-title">
                        <Link href={providerHrefById(instructor.providerId)}>
                          {instructor.name}
                        </Link>
                      </h6>
                      <p className="short-description">
                        {instructor.description}
                      </p>
                      <div className="ratings">
                        <a
                          href={providerHrefById(instructor.providerId)}
                          className="tf-btn-arrow"
                        >
                          Demander un devis
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
