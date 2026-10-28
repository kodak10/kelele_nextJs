"use client";
import Image from "next/image";
import { courses } from "@/data/courese";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import { useContextElement } from "@/context/Context";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function HeroSearch() {
  const { toggleWishlist, isAddedtoWishlist } = useContextElement();
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("");
  const router = useRouter();
  const handleSearch = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (keyword.trim()) params.set("q", keyword.trim());
    if (category) params.set("category", category);
    router.push("/prestataires?" + params.toString());
  };
  const swiperOptions = {
    spaceBetween: 20,
    loop: true,
    autoplay: { delay: 10000, disableOnInteraction: false },
    observer: true,
    observeParents: true,

    breakpoints: {
      0: {
        slidesPerView: 1.2,
      },
      768: {
        slidesPerView: 1.8,
      },
      992: {
        slidesPerView: 2,
      },
    },
    navigation: {
      clickable: true,
      nextEl: ".page-title-next",
      prevEl: ".page-title-prev",
    },
  };
  return (
    <>
      <div className="page-title-home7">
        <div className="tf-container">
          <div className="row items-center">
            <div className="col-lg-6">
              <div className="content-page-title" style={{ paddingTop: 100 }}>
                <div
                  className="widget box-sub-tag wow fadeInUp"
                  data-wow-delay="0s"
                >
                  <div className="sub-tag-icon">
                    <i className="icon-flash" />
                  </div>
                  <div className="sub-tag-title">
                    <p>The Leader in Online Learning</p>
                  </div>
                </div>
                <h1 className="fw-7 wow fadeInUp" data-wow-delay="0.1s">
                  Top Notch <br />
                  Education &amp; Research
                </h1>
                <h6 className="wow fadeInUp" data-wow-delay="0.15s">
                  Start, switch, or advance your career with more than 5,000
                  courses, <br />
                  Professional Certificates, and degrees from world-class
                  universities and <br />
                  companies.
                </h6>
                <form
                  onSubmit={handleSearch}
                  className="wow fadeInUp flex items-center flex-wrap gap-10"
                  data-wow-delay="0.2s"
                  style={{ background: "#fff", borderRadius: 16, padding: 12, maxWidth: 620, boxShadow: "0 10px 30px rgba(0,0,0,.15)" }}
                >
                  <input
                    type="text"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    placeholder="Que voulez-vous apprendre ?"
                    style={{ flex: "1 1 200px", border: 0, outline: 0, padding: "10px 12px" }}
                  />
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    style={{ flex: "0 1 180px", border: 0, borderLeft: "1px solid #e5e5e5", outline: 0, padding: "10px 12px", background: "transparent" }}
                  >
                    <option value="">Toutes catégories</option>
                    <option>Graphics &amp; Design</option>
                    <option>Digital Marketing</option>
                    <option>Video &amp; Animation</option>
                    <option>Lifestyle</option>
                    <option>Photography</option>
                  </select>
                  <button type="submit" className="tf-btn style-third">
                    Rechercher
                    <i className="icon-search" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="image-page-title">
          <Swiper
            {...swiperOptions}
            modules={[Navigation, Autoplay]}
            className="swiper-container slider-page-title"
          >
            {courses.slice(0, 3).map((course, i) => (
              <SwiperSlide key={i} className="swiper-slide">
                <div className="course-item style-2 has-border has-padding hover-img">
                  <div className="features image-wrap">
                    <Image
                      className="lazyload"
                      data-src="/images/courses/courses-01.jpg"
                      alt=""
                      src={course.imgSrc}
                      width={520}
                      height={380}
                    />
                    <div
                      className={`box-wishlist tf-action-btns ${
                        isAddedtoWishlist(course.id) ? "active" : ""
                      } `}
                      onClick={() => toggleWishlist(course.id)}
                    >
                      <i className="flaticon-heart" />
                    </div>
                  </div>
                  <div className="content">
                    <div className="meta">
                      <div className="meta-item">
                        <i className="flaticon-calendar" />
                        <p>{course.lessons}</p>
                      </div>
                      <div className="meta-item">
                        <i className="flaticon-user" />
                        <p>{course.students}</p>
                      </div>
                      <div className="meta-item">
                        <i className="flaticon-clock" />
                        <p>{course.duration}</p>
                      </div>
                    </div>
                    <h5 className="fw-5 line-clamp-2">
                      <Link href={`/course-single-v1/${course.id}`}>
                        {course.title}
                      </Link>
                    </h5>
                    <div className="ratings">
                      <div className="number">{course.reviews}</div>
                      <i className="icon-star-1"></i>
                      <i className="icon-star-1"></i>
                      <i className="icon-star-1"></i>
                      <i className="icon-star-1"></i>

                      <svg
                        width={12}
                        height={11}
                        viewBox="0 0 12 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.54831 7.10382L3.58894 6.85477L3.41273 6.67416L1.16841 4.37373L4.24914 3.90314L4.51288 3.86286L4.62625 3.62134L5.99989 0.694982L7.37398 3.62182L7.48735 3.86332L7.75108 3.9036L10.8318 4.37419L8.58749 6.67462L8.41128 6.85523L8.4519 7.10428L8.98079 10.3465L6.24201 8.8325L6.00014 8.69879L5.75826 8.83247L3.01941 10.3461L3.54831 7.10382ZM11.0444 4.15626L11.0442 4.15651L11.0444 4.15626Z"
                          stroke="#131836"
                        />
                      </svg>
                      <div className="total">({course.reviews})</div>
                    </div>
                    <div className="author">
                      By:
                      <a href="#" className="author">
                        {" "}
                        {course.author}
                      </a>
                    </div>
                    <div className="bottom">
                      <div className="h6 price fw-5">${course.price}</div>
                      <Link
                        href={`/course-single-v1/${course.id}`}
                        className="tf-btn-arrow"
                      >
                        <span className="fw-5 fs-15">Enroll Course</span>
                        <i className="icon-arrow-top-right" />
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Flèches hors du Swiper : elles passent ainsi devant la bande blanche du bas de la bannière */}
          <div className="swiper-bottom">
            <div className="swiper-button-prev btns-style-arrow page-title-prev" />
            <div className="swiper-button-next btns-style-arrow page-title-next" />
          </div>
        </div>
      </div>
    </>
  );
}
