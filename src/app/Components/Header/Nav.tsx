"use client";
import Link from "next/link";
import DropDown from "./DropDown";
import { Key, useState, useEffect } from "react";

import destinations from "../Destination/data/destination"; // e.g. { Srbija: { Evropa: [...], Azija: [...] }, Hrvatska: {...} }

export default function Nav({ setMobileToggle }) {
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
    <ul className="cs_nav_list fw-medium">
      <li className="menu-item-has-children">
        <Link href="/destination" className="block py-2">
          Destinacije
        </Link>

        <DropDown>
          <ul>
            <div className="flex overflow-hidden">
              {/* Column 1 - Flight From */}
              <div className="w-48 h-64 border-r border-gray-300 text-gray-900 overflow-y-auto">
                {flightOrigins.map((origin) => (
                  <div
                    key={origin}
                    className={`px-4 py-2 text-sm cursor-pointer transition-all ${
                      activeOrigin === origin
                        ? "bg-[#1ca8cb]/30 font-semibold"
                        : "hover:bg-[#1ca8cb]/20"
                    }`}
                    onClick={() => {
                      setActiveOrigin(origin);
                      const firstContinent = Object.keys(
                        destinations[origin]
                      )[0];
                      setActiveContinent(firstContinent);
                    }}
                  >
                    ✈️ {origin}
                  </div>
                ))}
              </div>

              {/* Column 2 - Continent */}
              <div className="w-48 h-64 border-r border-gray-300 text-gray-900 overflow-y-auto">
                {continents.map((continent) => (
                  <div
                    key={continent}
                    className={`px-4 py-2 text-sm cursor-pointer transition-all ${
                      activeContinent === continent
                        ? "bg-[#1ca8cb]/30 font-semibold"
                        : "hover:bg-[#1ca8cb]/20"
                    }`}
                    onClick={() => setActiveContinent(continent)}
                  >
                    🌍 {continent}
                  </div>
                ))}
              </div>

              {/* Column 3 - Destination */}
              <div className="w-[500px] h-64 text-gray-900 grid grid-cols-3 gap-0.5 text-sm overflow-y-auto">
                {destinations[activeOrigin][activeContinent].map(
                  (dest, i: Key) => (
                    <Link
                      key={i}
                      href={`/destination/${dest.tag
                        .toLowerCase()
                        .replace(/\s+/g, "-")}?origin=${encodeURIComponent(
                        dest.from
                      )}`}
                      className="block px-3 py-1 hover:text-green-600 hover:bg-[#1ca8cb]/20 rounded transition-all"
                      onClick={() => setMobileToggle(false)}
                    >
                      {dest.name}
                      <div className="text-xs text-gray-500 italic">
                        from {dest.from}
                      </div>
                    </Link>
                  )
                )}
              </div>
            </div>
          </ul>
        </DropDown>
      </li>

      <li>
        <Link href="/discounts" onClick={() => setMobileToggle(false)}>
          Popusti
        </Link>
      </li>

      <li>
        <Link href="/new-year" onClick={() => setMobileToggle(false)}>
          Nova Godina
        </Link>
      </li>

      <li>
        <Link href="/about" onClick={() => setMobileToggle(false)}>
          O Nama
        </Link>
      </li>

      <li>
        <Link href="/contact" onClick={() => setMobileToggle(false)}>
          Kontakt
        </Link>
      </li>
    </ul>
  );
}
