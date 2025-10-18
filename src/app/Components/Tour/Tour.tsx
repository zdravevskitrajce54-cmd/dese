import Image from "next/image";
import Link from "next/link";
import React from "react";

import destinations from "./destinationContent"; // adjust path if needed

const Tour = () => {
  const novaGodina = destinations.NG; // array of new year trips

  return (
    <section className="tour-section section-padding fix">
      <div className="container custom-container">
        <div className="tour-destination-wrapper">
          <div className="row g-4">
            <h3>
              Nemaš planove za Novu 2026? <br /> Exodus Travel ima odgovor.
            </h3>
            <p>
              Zamisli doček na belim plažama Zanzibara, u tišini Maldiva ili u
              ritmu kubanske salse. Ako više voliš gradsku vrevu, čeka te Tokio,
              Bangkok ili Havana. A za ljubitelje egzotike – Indokina, Šri Lanka
              i Meksiko nude jedinstveno iskustvo između avanture i odmora. Nova
              godina ne mora biti ista – izaberi destinaciju koja će te
              inspirisati i u 2026. zakorači potpuno drugačije.
              <br />
              👉 Exodus Travel – tvoj put u nezaboravnu Novu godinu.
            </p>
            <div className="col-xl-8">
              <div className="row g-4">
                {novaGodina.map((item, i) => (
                  <div
                    key={i}
                    className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                    data-wow-delay=".3s"
                  >
                    <div className="destination-card-items mt-0">
                      <div className="destination-image">
                        <Image
                          src={item.img}
                          alt={item.name}
                          width={287}
                          height={240}
                        />
                      </div>
                      <div className="destination-content">
                        <ul className="meta">
                          <li>
                            <i className="bi bi-geo-alt"></i>
                            {item.slogan}
                          </li>
                        </ul>
                        <h5>
                          <Link href="/tour/tour-details">{item.name}</Link>
                        </h5>
                        <ul className="info">
                          <li>
                            <i className="bi bi-clock"></i>
                            {item.departures[0].dana} dana
                          </li>
                        </ul>
                        <div className="price">
                          <h6>{item.departures[0].price}</h6>
                          <Link
                            href={`/new-year/${item.tag
                              .toLowerCase()
                              .replace(/\s+/g, "-")}`}
                            className="theme-btn style-2"
                          >
                            detalje <i className="bi bi-arrow-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-xl-4">
              <div className="main-sidebar mt-0">
                <div className="single-sidebar-widget">
                  <div className="wid-title">
                    <h3>Destination Category</h3>
                  </div>
                  <div className="categories-list">
                    <label className="checkbox-single d-flex justify-content-between align-items-center">
                      <span className="d-flex gap-xl-3 gap-2 align-items-center">
                        <span className="checkbox-area d-center">
                          <input type="checkbox" />
                          <span className="checkmark d-center"></span>
                        </span>
                        <span className="text-color">Canada</span>
                      </span>
                      <span className="text-color">04</span>
                    </label>
                    <label className="checkbox-single d-flex justify-content-between align-items-center">
                      <span className="d-flex gap-xl-3 gap-2 align-items-center">
                        <span className="checkbox-area d-center">
                          <input type="checkbox" />
                          <span className="checkmark d-center"></span>
                        </span>
                        <span className="text-color">Europe</span>
                      </span>
                      <span className="text-color">03</span>
                    </label>
                    <label className="checkbox-single d-flex justify-content-between align-items-center">
                      <span className="d-flex gap-xl-3 gap-2 align-items-center">
                        <span className="checkbox-area d-center">
                          <input type="checkbox" />
                          <span className="checkmark d-center"></span>
                        </span>
                        <span className="text-color">France</span>
                      </span>
                      <span className="text-color">05</span>
                    </label>
                    <label className="checkbox-single d-flex justify-content-between align-items-center">
                      <span className="d-flex gap-xl-3 gap-2 align-items-center">
                        <span className="checkbox-area d-center">
                          <input type="checkbox" />
                          <span className="checkmark d-center"></span>
                        </span>
                        <span className="text-color">Indonesia</span>
                      </span>
                      <span className="text-color">06</span>
                    </label>
                    <label className="checkbox-single d-flex justify-content-between align-items-center">
                      <span className="d-flex gap-xl-3 gap-2 align-items-center">
                        <span className="checkbox-area d-center">
                          <input type="checkbox" />
                          <span className="checkmark d-center"></span>
                        </span>
                        <span className="text-color">Nepal</span>
                      </span>
                      <span className="text-color">05</span>
                    </label>
                    <label className="checkbox-single d-flex justify-content-between align-items-center">
                      <span className="d-flex gap-xl-3 gap-2 align-items-center">
                        <span className="checkbox-area d-center">
                          <input type="checkbox" />
                          <span className="checkmark d-center"></span>
                        </span>
                        <span className="text-color">Maldives</span>
                      </span>
                      <span className="text-color">04</span>
                    </label>
                  </div>
                </div>

                <div className="single-sidebar-widget">
                  <div className="wid-title">
                    <h3>Activities</h3>
                  </div>
                  <div className="categories-list">
                    <label className="checkbox-single d-flex justify-content-between align-items-center">
                      <span className="d-flex gap-xl-3 gap-2 align-items-center">
                        <span className="checkbox-area d-center">
                          <input type="checkbox" readOnly />
                          <span className="checkmark d-center"></span>
                        </span>
                        <span className="text-color">Canada</span>
                      </span>
                      <span className="text-color">04</span>
                    </label>
                    <label className="checkbox-single d-flex justify-content-between align-items-center">
                      <span className="d-flex gap-xl-3 gap-2 align-items-center">
                        <span className="checkbox-area d-center">
                          <input type="checkbox" />
                          <span className="checkmark d-center"></span>
                        </span>
                        <span className="text-color">Europe</span>
                      </span>
                      <span className="text-color">03</span>
                    </label>
                    <label className="checkbox-single d-flex justify-content-between align-items-center">
                      <span className="d-flex gap-xl-3 gap-2 align-items-center">
                        <span className="checkbox-area d-center">
                          <input type="checkbox" />
                          <span className="checkmark d-center"></span>
                        </span>
                        <span className="text-color">France</span>
                      </span>
                      <span className="text-color">05</span>
                    </label>
                    <label className="checkbox-single d-flex justify-content-between align-items-center">
                      <span className="d-flex gap-xl-3 gap-2 align-items-center">
                        <span className="checkbox-area d-center">
                          <input type="checkbox" />
                          <span className="checkmark d-center"></span>
                        </span>
                        <span className="text-color">Indonesia</span>
                      </span>
                      <span className="text-color">06</span>
                    </label>
                    <label className="checkbox-single d-flex justify-content-between align-items-center">
                      <span className="d-flex gap-xl-3 gap-2 align-items-center">
                        <span className="checkbox-area d-center">
                          <input type="checkbox" />
                          <span className="checkmark d-center"></span>
                        </span>
                        <span className="text-color">Nepal</span>
                      </span>
                      <span className="text-color">05</span>
                    </label>
                    <label className="checkbox-single d-flex justify-content-between align-items-center">
                      <span className="d-flex gap-xl-3 gap-2 align-items-center">
                        <span className="checkbox-area d-center">
                          <input type="checkbox" />
                          <span className="checkmark d-center"></span>
                        </span>
                        <span className="text-color">Maldives</span>
                      </span>
                      <span className="text-color">04</span>
                    </label>
                  </div>
                </div>
                <div className="single-sidebar-widget">
                  <div className="wid-title style-2">
                    <h3>Tour Types</h3>
                    <i className="fa-solid fa-chevron-down"></i>
                  </div>
                  <div className="categories-list">
                    <label className="checkbox-single d-flex justify-content-between align-items-center">
                      <span className="d-flex gap-xl-3 gap-2 align-items-center">
                        <span className="checkbox-area d-center">
                          <input type="checkbox" />
                          <span className="checkmark d-center"></span>
                        </span>
                        <span className="text-color">Premium</span>
                      </span>
                      <span className="text-color">04</span>
                    </label>
                    <label className="checkbox-single d-flex justify-content-between align-items-center">
                      <span className="d-flex gap-xl-3 gap-2 align-items-center">
                        <span className="checkbox-area d-center">
                          <input type="checkbox" />
                          <span className="checkmark d-center"></span>
                        </span>
                        <span className="text-color">Luxury</span>
                      </span>
                      <span className="text-color">03</span>
                    </label>
                    <label className="checkbox-single d-flex justify-content-between align-items-center">
                      <span className="d-flex gap-xl-3 gap-2 align-items-center">
                        <span className="checkbox-area d-center">
                          <input type="checkbox" />
                          <span className="checkmark d-center"></span>
                        </span>
                        <span className="text-color">Standard</span>
                      </span>
                      <span className="text-color">05</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tour;
