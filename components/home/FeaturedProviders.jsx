"use client";
import { featuredProviders, providers } from "@/data/kelele";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import ProviderCard from "@/components/providers/ProviderCard";

const featured = featuredProviders
  .map((f) => providers.find((p) => p.id === f.providerId))
  .filter(Boolean);

export default function FeaturedProviders() {
  const options = {
    spaceBetween: 25,
    observer: true,
    observeParents: true,
    breakpoints: {
      0: {
        slidesPerView: 1.1,
        spaceBetween: 15,
      },
      700: {
        slidesPerView: 2.2,
      },
      1000: {
        slidesPerView: 3,
      },
      1440: {
        slidesPerView: 4,
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
                  Des professionnels de l&apos;événementiel, certifiés par KELELE
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
              {featured.map((provider) => (
                <SwiperSlide className="swiper-slide" key={provider.id}>
                  <ProviderCard provider={provider} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
