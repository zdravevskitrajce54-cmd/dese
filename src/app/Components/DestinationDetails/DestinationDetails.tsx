"use client";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import { Destination } from "../../../types/destination"; // adjust path if you separate interfaces

export interface DestinationDetailsProps {
  destination: Destination | null;
}

const DestinationDetails = ({ destination }: DestinationDetailsProps) => {
  const [openDay, setOpenDay] = useState<number | null>(null);

  if (!destination) {
    return <p>No destination selected</p>;
  }

  console.log("destination:", destination);
  return (
    <section className="destination-details-section fix section-padding">
      <div className="container">
        <div className="destination-details-wrapper">
          <div className="row g-4">
            {/* MAIN CONTENT */}
            <div className="col-lg-8">
              <div className="destination-details-items">
                {/* {/* Hero image */}
                <div className="details-image mb-4">
                  <img
                    src={destination.bigImg}
                    alt={destination.name}
                    width={856}
                    height={550}
                  />
                </div>
                {/* About */}
                <div className="details-content">
                  <h2>{destination.slogan}</h2>
                  <p className="mt-3 whitespace-pre-line">
                    {destination.about}
                  </p>
                </div>
                {/* Plan & Program */}
                {destination.planProgram?.length > 0 && (
                  <div className="plan-program mt-5">
                    <h3 className="text-lg font-semibold mb-3">
                      Plan & Programu
                    </h3>
                    <ul className="list-unstyled">
                      {destination.planProgram.map((day) => {
                        return (
                          <li key={day.day} className="mb-3 border-b pb-2">
                            <button
                              onClick={() =>
                                setOpenDay(openDay === day.day ? null : day.day)
                              }
                              className="w-full text-left flex justify-between items-center"
                            >
                              <strong>
                                Dan {day.day}: {day.title}
                              </strong>
                              <span className="ml-2 text-sm text-gray-500">
                                {openDay === day.day ? "▲" : "▼"}
                              </span>
                            </button>

                            {openDay === day.day && (
                              <p className="mt-2 text-gray-700 whitespace-pre-line">
                                {day.details}
                              </p>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
                {/* Departures & Prices */}
                {destination.departures?.length > 0 && (
                  <div className="departures mt-5">
                    <h3>Polazci i cene</h3>
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Polazak</th>
                          <th>Povratak</th>
                          <th>Dana</th>
                          <th>Cena</th>
                          <th>Link</th>
                        </tr>
                      </thead>
                      <tbody>
                        {destination.departures.map((dep, idx) => (
                          <tr key={idx}>
                            <td>{dep.polazak}</td>
                            <td>{dep.povratak}</td>
                            <td>{dep.dana}</td>
                            <td>{dep.price}</td>
                            <td>
                              <a className="btn btn-primary" href="{dep.link}">
                                Rezervisi
                              </a>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
                {/* Included */}
                {destination.included?.length > 0 && (
                  <div className="included mt-5">
                    <h3>Sta je ukluceno</h3>
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Info</th>
                          <th>Title</th>
                          <th>Icon</th>
                        </tr>
                      </thead>
                      <tbody>
                        {destination.included.map((inc, idx) => (
                          <tr key={idx}>
                            <td>{inc.info}</td>
                            <td>{inc.title}</td>
                            <td>{inc.icon}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
                {/* Media */}
                {(destination.media?.images?.length > 0 ||
                  destination.media?.videos?.length > 0) && (
                  <div className="media mt-5">
                    <h3>Videos & Pictures</h3>
                    <div className="row g-3">
                      {destination.media.images.map((img, idx) => (
                        <div className="col-md-6" key={idx}>
                          <img
                            src={img}
                            alt={`${destination.name} photo ${idx + 1}`}
                            width={416}
                            height={300}
                          />
                        </div>
                      ))}
                    </div>
                    {/* {destination.media.videos.map((video, idx) => (
                      <div className="video mt-3" key={idx}>
                        <iframe
                          width="100%"
                          height="400"
                          src={video}
                          title={`${destination.name} video ${idx + 1}`}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                    ))} */}
                  </div>
                )}
                {/* Useful Info */}
                {destination.usefulInfo && (
                  <div className="useful-info mt-5">
                    <h3>Useful Information</h3>
                    <p>{destination.usefulInfo}</p>
                  </div>
                )}
                {/* Similar Trips */}
                {destination.similarTrips?.length > 0 && (
                  <div className="similar-trips mt-5">
                    <h3>Similar Trips</h3>
                    <ul>
                      {destination.similarTrips.map((trip, idx) => (
                        <li key={idx}>
                          <Link
                            href={`/destination/${trip
                              .toLowerCase()
                              .replace(/\s+/g, "-")}`}
                          >
                            {trip}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* SIDEBAR */}
            <div className="col-lg-4">
              <div className="main-sideber">
                {/* Search */}
                <div className="single-sidebar-widget">
                  <div className="wid-title">
                    <h4>Search Here</h4>
                  </div>
                  <div className="search-widget">
                    <form action="#">
                      <input type="text" placeholder="Search here" />
                      <button type="submit">
                        <i className="bi bi-search"></i>
                      </button>
                    </form>
                  </div>
                </div>

                {/* Booking Contact */}
                <div className="single-sidebar-widget">
                  <div className="wid-title">
                    <h4>Contact for Booking</h4>
                  </div>
                  <div className="desti-booking-form">
                    <form action="#" id="contact-form" method="POST">
                      <div className="form-clt mb-3">
                        <input type="text" placeholder="Your Name" />
                      </div>
                      <div className="form-clt mb-3">
                        <input type="text" placeholder="Your Email" />
                      </div>
                      <div className="form-clt mb-3">
                        <textarea placeholder="Type Comment Here"></textarea>
                      </div>
                      <button type="submit" className="theme-btn text-center">
                        Send Now <i className="bi bi-arrow-right"></i>
                      </button>
                    </form>
                  </div>
                </div>

                {/* You can keep "Recent Tours" widget if you want */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DestinationDetails;
