"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Slider from "react-slick";

const Destination2 = () => {
  const destinationContent = [
    {
      img: "/assets/img/destination/new/01.jpg",
      name: "Egipat",
      location: "Tanzania",
      title: "$399",
      link: "www.whop.com",
    },
    {
      img: "/assets/img/destination/new/02.jpg",
      name: "cad",
      location: "Tajland",
      title: "Hotel 1",
    },
    {
      img: "/assets/img/destination/new/03.jpg",
      location: "Dubai",
      title: "Vec od 499€",
    },
    {
      img: "/assets/img/destination/new/04.jpg",
      location: "Singapur & Bali",
      title: "Hotel 1",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1399,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="new-destination-section fix section-padding">
      <div className="container">
        <div className="section-title-area">
          <div className="section-title">
            <span className="sub-title wow fadeInUp">Naše destinacije</span>
            <h2 className="wow fadeInUp wow" data-wow-delay=".5s">
              Naša najbolja lokacija za vas
            </h2>
          </div>
          <Link href="/destination" className="theme-btn">
            Vidi više <i className="bi bi-arrow-right"></i>
          </Link>
        </div>
        <div className="new-destination-wrapper">
          <div className="swiper new-destination-slider">
            <div className="swiper-wrapper cs_slider_gap_301">
              <Slider {...settings}>
                {destinationContent.map((item, i) => (
                  <div key={i} className="swiper-slide">
                    <div className="new-destination-items">
                      <div className="thumb">
                        <Image
                          src={item.img}
                          alt="img"
                          width={424}
                          height={505}
                        />
                        <div className="content">
                          <div className="title-text">
                            <h3>
                              <Link href={`/destination/${item.name}`}>
                                {item.location}
                              </Link>
                            </h3>
                            <p>{item.title}</p>
                          </div>
                          <Link
                            href={`/destination/${item.name}`}
                            className="icon"
                          >
                            <i className="bi bi-arrow-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Destination2;
