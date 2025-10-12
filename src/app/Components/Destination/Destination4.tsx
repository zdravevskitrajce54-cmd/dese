import Link from "next/link";
import React from "react";
import destinations from "../Destination/data/destination"; // adjust path if needed

const Destination4 = () => {
  return (
    <section className="popular-destination-section section-padding pb-0">
      <div className="car-shape float-bob-x">
        <img
          src="/assets/img/destination/car.png"
          alt="img"
          width={134}
          height={124}
        />
      </div>
      <div className="container">
        {Object.entries(destinations).map(([continent, places]) => (
          <div key={continent} className="mb-10">
            <h3 className="text-2xl font-semibold mb-4">{continent}</h3>
            <div className="row g-4">
              {places.map((place, i) => (
                <div
                  key={i}
                  className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay=".2s"
                >
                  <div className="destination-card-items mt-0">
                    <div className="destination-image">
                      <img
                        src={place.img}
                        alt={place.name}
                        width={304}
                        height={254}
                      />
                      <div className="heart-icon">
                        <i className="bi bi-heart"></i>
                      </div>
                    </div>
                    <div className="destination-content">
                      <ul className="meta">
                        <li>
                          <i className="bi bi-geo-alt"></i>
                          {place.name}
                        </li>
                      </ul>
                      <h5>
                        <Link
                          href={`/destination/${place.tag
                            .toLowerCase()
                            .replace(/\s+/g, "-")}`}
                        >
                          Upoznaj {place.name}
                        </Link>
                      </h5>
                      <div className="price">
                        <Link
                          href={`/destination/${place.tag
                            .toLowerCase()
                            .replace(/\s+/g, "-")}`}
                          className="theme-btn style-2"
                        >
                          Vidi vise<i className="bi bi-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Destination4;
