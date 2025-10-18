"use client";
import React, { useEffect } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import Image from "next/image";

const Choose2 = () => {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <section
      className="choose-us-section section-padding bg-cover fix"
      data-background="/assets/img/choose-us-bg-2.jpg"
    >
      <div className="container">
        <div className="choose-us-wrapper">
          <div className="row g-4 align-items-center">
            <div className="col-xl-7 col-lg-6">
              <div className="choose-us-content">
                <div className="section-title">
                  <span className="sub-title wow fadeInUp">
                    Zašto izabrati nas
                  </span>
                  <h2 className="wow fadeInUp wow" data-wow-delay=".3s">
                    Najlakši put do tvoje destinacije iz snova
                  </h2>
                </div>
                <p className="wow fadeInUp wow" data-wow-delay=".3s">
                  Naš cilj je da tvoje putovanje učinimo jednostavnim, sigurnim
                  i bez stresa. Od prve rezervacije do povratka kući — sve je u
                  našim rukama.
                </p>
                <div className="choose-us-area">
                  <div className="line-shape">
                    <Image
                      src="/assets/img/line-shape2.png"
                      alt="img"
                      width={2}
                      height={279}
                    />
                  </div>
                  <div
                    className="choose-us-items wow fadeInUp wow"
                    data-wow-delay=".3s"
                  >
                    <h3 className="number">01</h3>
                    <div className="content">
                      <h4>Brza i laka rezervacija</h4>
                      <p>
                        Samo par klikova te deli od tvoje destinacije.
                        Rezervacija online je jednostavna i dostupna u svakom
                        trenutku.
                      </p>
                    </div>
                  </div>
                  <div
                    className="choose-us-items wow fadeInUp wow"
                    data-wow-delay=".5s"
                  >
                    <h3 className="number">02</h3>
                    <div className="content">
                      <h4>Sigurno plaćanje i viza bez brige</h4>
                      <p>
                        Plaćanje vršiš online, brzo i bezbedno. Vizu i svu
                        potrebnu dokumentaciju rešava naša agencija — ti se samo
                        pakuješ.
                      </p>
                    </div>
                  </div>
                  <div
                    className="choose-us-items wow fadeInUp wow"
                    data-wow-delay=".7s"
                  >
                    <h3 className="number">03</h3>
                    <div className="content">
                      <h4>Organizovan prevoz od-do</h4>
                      <p>
                        Transport od tvog doma do aerodroma i nazad je uvek
                        organizovan. Putuj opušteno — mi mislimo na sve.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-5 col-lg-6 wow fadeInUp wow"
              data-wow-delay=".3s"
            >
              <div className="choose-us-thumb">
                <Image
                  src="/assets/img/choose-us-bg.png"
                  className="wow img-custom-anim-left"
                  alt="img"
                  width={828}
                  height={620}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Choose2;
