"use client";
import React, { useEffect, useState } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import { useRouter } from "next/navigation";

const HeroBanner2 = () => {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  const [isActive, setIsActive] = useState("tour");

  const images = [
    "/assets/Images/Bali/1.jpg",
    "/assets/Images/Maldives/11.jpg",
    "/assets/Images/Colombia/2.jpg",
    "/assets/Images/Japan/2.jpg",
    "/assets/Images/Zanzibar/2.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 6500); // 10 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const router = useRouter();
  const [fromCity, setFromCity] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const query = new URLSearchParams();

    if (fromCity) query.set("from", fromCity);
    if (date) query.set("date", date);

    const qs = query.toString(); // e.g. "from=Beograd&date=2025-10-20"
    router.push(`/destination${qs ? "?" + qs : ""}`);
  };

  return (
    <section className="hero-section-2">
      <div className="relative w-full h-[100vh] overflow-hidden">
        {/* Slider wrapper */}
        <div
          className="flex transition-transform duration-1000 ease-in-out h-full"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {images.map((src, idx) => (
            <div
              key={idx}
              className="w-full h-full flex-shrink-0 bg-center bg-cover"
              style={{ backgroundImage: `url(${src})` }}
            >
              {/* Dark overlay */}
              <div className="w-full h-full bg-black/40 flex items-center text-gray-300/90">
                <div className="container custom-container-3">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="hero-content">
                        <div className="sub-title wow fadeInUp">
                          Doživite nezaboravno zadovoljstvo sa nama
                        </div>
                        <h1
                          className="wow fadeInUp text-white"
                          data-wow-delay=".3s"
                        >
                          Otkrijte svoje sledeće <br />
                          pažljivo odabrano putovanje
                        </h1>
                        <p className="wow fadeInUp" data-wow-delay=".5s">
                          There are many variations of passages of available,
                          but the majority have suffered alteration in <br />{" "}
                          some form, by injected humour words which do not look
                          even slightly believable.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroBanner2;
