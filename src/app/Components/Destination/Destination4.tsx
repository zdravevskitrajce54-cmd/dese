"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import destinations from "../Destination/data/destination"; // adjust path

const Destination4 = () => {
  const flightOrigins = Object.keys(destinations); // Srbija, Hrvatska, etc.

  const [activeOrigin, setActiveOrigin] = useState(flightOrigins[0]);
  const [activeContinent, setActiveContinent] = useState(
    Object.keys(destinations[flightOrigins[0]])[0]
  );

  // Update continent list when origin changes
  useEffect(() => {
    const newContinents = Object.keys(destinations[activeOrigin]);
    if (!newContinents.includes(activeContinent)) {
      setActiveContinent(newContinents[0]);
    }
  }, [activeOrigin]);

  const continents = Object.keys(destinations[activeOrigin]);
  const activeDestinations =
    destinations?.[activeOrigin]?.[activeContinent] || [];

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
        {/* ORIGIN TABS */}
        <div className="flex gap-4 mb-6">
          {flightOrigins.map((origin) => (
            <button
              key={origin}
              onClick={() => setActiveOrigin(origin)}
              className={`px-4 py-2 rounded ${
                origin === activeOrigin
                  ? "bg-blue-600 text-black"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              {origin}
            </button>
          ))}
        </div>

        {/* CONTINENT TABS */}
        <div className="flex gap-4 mb-10">
          {continents.map((continent) => (
            <button
              key={continent}
              onClick={() => setActiveContinent(continent)}
              className={`px-3 py-1 rounded ${
                continent === activeContinent
                  ? "bg-green-600 text-black"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              {continent}
            </button>
          ))}
        </div>

        {/* DESTINATION CARDS */}
        <div className="row g-4">
          {activeDestinations.map((place, i) => (
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
                  <ul className="meta flex gap-4 justify-around">
                    <li>
                      <i className="bi bi-geo-alt"></i>
                      {place.name}
                    </li>
                    <li>
                      <i className="bi bi-geo-alt"></i>
                      {place.from}
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

          {activeDestinations.length === 0 && (
            <p className="text-gray-500">Nema destinacija za prikaz.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Destination4;
