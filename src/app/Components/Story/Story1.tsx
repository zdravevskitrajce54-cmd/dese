"use client";
import React, { useEffect } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import Link from "next/link";
import Image from "next/image";

const Story1 = () => {
  return (
    <section className="watch-video-section section-padding   fix">
      <div className="bg-shape">
        <Image
          src="/assets/img/map-bg.png"
          alt="img"
          width={1719}
          height={1132}
        />
      </div>
      <div className="container">
        <div className="section-title text-center">
          <span className="sub-title wow fadeInUp">Pogledajte našu priču</span>
          <h2 className="wow fadeInUp wow" data-wow-delay=".3s">
            Nezaboravna putovanja
            <br />
            Izaberite svoja
          </h2>
        </div>
        <div className="video-wrapper">
          <div className="watch-button">
            <Link
              href="/contact"
              className="theme-btn wow fadeInUp wow"
              data-wow-delay=".5s"
            >
              Kontaktirajte nas<i className="bi bi-arrow-right"></i>
            </Link>
            <Link
              href="/tour/tour-details"
              className="theme-btn style-2 wow fadeInUp wow"
              data-wow-delay=".7s"
            >
              Vidi destinacije<i className="bi bi-arrow-right"></i>
            </Link>
          </div>
          <div
            className="video-image bg-cover"
            data-background="/assets/Images/Bali/1.jpg"
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Story1;
