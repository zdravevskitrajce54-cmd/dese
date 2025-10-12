import Link from "next/link";
import DropDown from "./DropDown";
import DestinationsDropdown from "./DestinationDropdown";
import { Key, useState } from "react";

import destinations from "../Destination/data/destination"; // adjust path if needed

export default function Nav({ setMobileToggle }) {
  const continents = Object.keys(destinations);
  const [activeContinent, setActiveContinent] = useState(continents[0]);

  return (
    <ul className="cs_nav_list fw-medium">
      <li className="menu-item-has-children">
        <Link href="/destination" className="block py-2">
          Destinacije
        </Link>

        {/* Dropdown */}
        <DropDown>
          <ul>
            <div className="flex gap-4 overflow-hidden">
              {/* Left column - Continents */}
              <div className="w-48 h-64 border-r border-gray-300 text-gray-900 overflow-y-auto">
                {continents.map((continent) => (
                  <div key={continent}>
                    <div
                      className={`w-full text-sm text-left px-4 py-2 cursor-default transition-all
                        ${
                          activeContinent === continent
                            ? "bg-[#1ca8cb]/30 transition-all ease-in-out"
                            : "hover:bg-[#1ca8cb]/20"
                        }`}
                      onClick={() => setActiveContinent(continent)}
                    >
                      {continent}
                    </div>
                  </div>
                ))}
              </div>

              {/* Right column - Countries */}
              <div className="w-[600px] h-auto text-gray-900 grid grid-cols-4 auto-rows-min gap-0.5 text-xs overflow-y-auto">
                {destinations[activeContinent].map(
                  (country: { name: any; tag: any }, i: Key) => {
                    // Handle both string and object formats
                    const countryName =
                      typeof country === "string" ? country : country.name;

                    const countryTag =
                      typeof country === "string" ? country : country.tag;

                    return (
                      <div key={i}>
                        <Link
                          href={`/destination/${countryTag
                            .toLowerCase()
                            .replace(/\s+/g, "-")}`}
                          className="block px-2 py-1 text-sm hover:text-green-600 hover:bg-[#1ca8cb]/20 rounded"
                          onClick={() => setMobileToggle(false)}
                        >
                          {countryName}
                        </Link>
                      </div>
                    );
                  }
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

      {/* <li className="menu-item-has-children">
        <Link href="/tour" onClick={() => setMobileToggle(false)}>
          Tour
        </Link>
        <DropDown>
          <ul>
            <li>
              <Link href="/tour" onClick={() => setMobileToggle(false)}>
                Tour
              </Link>
            </li>
            <li>
              <Link
                href="/tour/tour-details"
                onClick={() => setMobileToggle(false)}
              >
                Tour Details
              </Link>
            </li>
          </ul>
        </DropDown>
      </li> */}

      <li>
        <Link href="/new-year">Nova Godina</Link>
      </li>

      {/* <li className="menu-item-has-children">
        <Link href="/blog" onClick={() => setMobileToggle(false)}>
          Blog
        </Link>
        <DropDown>
          <ul>
            <li>
              <Link href="/blog" onClick={() => setMobileToggle(false)}>
                Blog
              </Link>
            </li>
            <li>
              <Link href="/blog-sidebar" onClick={() => setMobileToggle(false)}>
                Blog With Sidebar
              </Link>
            </li>
            <li>
              <Link
                href="/blog/blog-details"
                onClick={() => setMobileToggle(false)}
              >
                Blog Details
              </Link>
            </li>
          </ul>
        </DropDown>
      </li> */}
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
