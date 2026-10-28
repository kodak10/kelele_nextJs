"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { menuItems, socialLinks } from "@/data/footerLinks";
export default function Footer1({ parentClass = "footer" }) {
  const formRef = useRef();
  const [success, setSuccess] = useState(true);
  const [showMessage, setShowMessage] = useState(false);

  const handleShowMessage = () => {
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  };

  // Inscription à la newsletter : enregistrée dans le navigateur en attendant l'API.
  const sendMail = (e) => {
    e.preventDefault();
    const email = new FormData(formRef.current).get("email");
    try {
      const prev = JSON.parse(localStorage.getItem("kelele:newsletter")) || [];
      localStorage.setItem("kelele:newsletter", JSON.stringify([...prev, { email, date: new Date().toISOString() }]));
      setSuccess(true);
    } catch (err) {
      setSuccess(false);
    }
    handleShowMessage();
    formRef.current.reset();
  };
  return (
    <footer id="footer" className={parentClass}>
      <div className="footer-wrap">
        <div className="footer-body">
          <div className="tf-container">
            <div className="row">
              <div className="col-12">
                <div className="footer-body-wrap flex justify-between">
                  <div
                    className="footer-more-infor wow fadeInUp"
                    data-wow-delay="0s"
                  >
                    <div className="footer-logo">
                      <Link href={`/`}>
                        <Image
                          alt="KELELE"
                          src="/images/logo/logo.png"
                          width={83}
                          height={56}
                        />
                      </Link>
                    </div>
                    <ul className="address">
                      <li className="flex gap-10 items-center">
                        <div className="icon">
                          <i className="flaticon-call" />
                        </div>
                        <p>Téléphone à renseigner</p>
                      </li>
                      <li className="flex gap-10 items-center">
                        <div className="icon">
                          <i className="flaticon-mail-1" />
                        </div>
                        <p>E-mail à renseigner</p>
                      </li>
                      <li className="flex gap-10 items-center">
                        <div className="icon">
                          <i className="flaticon-location" />
                        </div>
                        <p>
                          Abidjan, Côte d'Ivoire
                          <br />
                          Lagos, Nigeria
                        </p>
                      </li>
                    </ul>
                    <ul className="tf-social-icon flex items-center gap-10">
                      {socialLinks.map((link, index) => (
                        <li key={index}>
                          <a href={link.href}>
                            <i className={link.icon} />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {menuItems.map((menu, index) => (
                    <div
                      key={index}
                      className="footer-menu-list wow fadeInUp"
                      data-wow-delay={menu.delay}
                    >
                      <h5 className="fw-5">{menu.title}</h5>
                      <ul>
                        {menu.links.map((link, linkIndex) => (
                          <li key={linkIndex}>
                            {link.href.startsWith("/") ? (
                              <Link href={link.href}>{link.name}</Link>
                            ) : (
                              <a href={link.href}>{link.name}</a>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  <div
                    className="footer-subscribe wow fadeInUp"
                    data-wow-delay="0.5s"
                  >
                    <h5 className="fw-5">Newsletter</h5>
                    <p>
                      Recevez les nouveautés KELELE : prestataires, événements et lancement à Abidjan et Lagos.
                    </p>
                    <div
                      className={`tfSubscribeMsg ${
                        showMessage ? "active" : ""
                      }`}
                    >
                      {success ? (
                        <p style={{ color: "rgb(52, 168, 83)" }}>
                          Merci, vous êtes bien inscrit(e).
                        </p>
                      ) : (
                        <p style={{ color: "red" }}>Une erreur est survenue</p>
                      )}
                    </div>
                    <form
                      className="form-subscribe style-line-bottom"
                      onSubmit={sendMail}
                      ref={formRef}
                    >
                      <fieldset className="email">
                        <input
                          type="email"
                          placeholder="Votre e-mail"
                          className="style-default"
                          name="email"
                          tabIndex={2}
                          defaultValue=""
                          aria-required="true"
                          required
                        />
                      </fieldset>
                      <div className="button-submit">
                        <button className="tf-btn-arrow" type="submit">
                          Send
                          <i className="icon-arrow-top-right" />
                        </button>
                      </div>
                    </form>
                    <h5 className="fw-5 get-app">Télécharger l'app</h5>
                    <ul className="tf-app-download">
                      <li>
                        <a href="#">
                          <div className="icon">
                            <i className="icon-apple" />
                          </div>
                          <div className="app">
                            <div>Télécharger sur</div>
                            <div>Apple Store</div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <div className="icon">
                            <i className="icon-chplay" />
                          </div>
                          <div className="app">
                            <div>Disponible sur</div>
                            <div>Google Play</div>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom wow fadeInUp" data-wow-delay="0s">
          <div className="tf-container">
            <div className="row">
              <div className="col-12">
                <div className="footer-bottom-wrap flex justify-center items-center">
                  <p>©&nbsp;2026&nbsp;KELELE. Tous droits réservés</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
