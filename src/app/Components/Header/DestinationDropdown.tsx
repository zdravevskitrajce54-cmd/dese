"use client";

import { useState } from "react";
import Link from "next/link";

const destinations = {
  Afrika: [
    "Čad",
    "Egipat",
    "Etiopija",
    "Južnoafrička republika",
    "Kenija",
    "Madagaskar",
    "Maroko",
    "Mauricijus",
    "Namibija",
    "Ruanda",
    "Sejšeli",
    "Tanzanija",
    "Tunis",
    "Uganda",
    "Zambija",
    "Zanzibar",
    "Zimbabve",
  ],
  Azija: [
    "Azerbajdžan",
    "Bali",
    "Dubai",
    "Indija",
    "Indonezija",
    "Iran",
    "Japan",
    "Jordan",
    "Južna Koreja",
    "Kina",
    "Liban",
    "Maldivi",
    "Malezija",
    "Mjanmar",
    "Nepal",
    "Pakistan",
    "Singapur",
    "Sokotra",
    "Šri Lanka",
    "Tajland",
    "Tadžikistan",
    "Tibet",
    "Turkmenistan",
    "UAE",
    "Uzbekistan",
    "Filipini",
    "Kambodža",
    "Vijetnam",
  ],
  Evropa: [
    "Austrija",
    "Albanija",
    "Belgija",
    "Bosna i Hercegovina",
    "Belorusija",
    "Bugarska",
    "Velika Britanija",
    "Grčka",
    "Gruzija",
    "Danska",
    "Estonija",
    "Farska ostrva",
    "Irska",
    "Island",
    "Italija",
    "Jermenija",
    "Letonija",
    "Litvanija",
    "Lihtenštajn",
    "Luksemburg",
    "Mađarska",
    "Malta",
    "Moldavija",
    "Nemačka",
    "Norveška",
    "Poljska",
    "Portugalija",
    "Rumunija",
    "Rusija",
    "San Marino",
    "Severna Makedonija",
    "Slovačka",
    "Slovenija",
    "Srbija",
    "Turska",
    "Ukrajina",
    "Finska",
    "Francuska",
    "Holandija",
    "Hrvatska",
    "Crna Gora",
    "Češka",
    "Švedska",
    "Španija",
    "Švajcarska",
  ],
  "Južna Amerika": [
    "Argentina",
    "Bolivija",
    "Brazil",
    "Venecuela",
    "Ekvador",
    "Kolumbija",
    "Patagonija",
    "Peru",
    "Čile",
    "Nikaragva",
    "Honduras",
    "El Salvador",
  ],
  "Karibi i Centralna Amerika": [
    "Dominikanska Republika",
    "Kostarika",
    "Kuba",
    "Meksiko",
    "Panama",
    "Barbados",
  ],
};

export default function DestinationsMenu() {
  const [activeContinent, setActiveContinent] = useState("Afrika");

  return (
    <div className="absolute left-0 top-full mt-2 w-lg bg-white border rounded-lg">
      <div className="flex">
        {/* Sidebar with continents */}
        <ul className="w-1/4 bg-green-600 text-white font-medium flex flex-col">
          {Object.keys(destinations).map((continent) => (
            <li key={continent}>
              <button>{continent}</button>
            </li>
          ))}
        </ul>

        {/* Right side with countries */}
        {/* <div className="w-3/4 p-6">
          <h3 className="text-lg font-bold mb-3">{activeContinent}</h3>
          <ul className="grid grid-cols-2 gap-y-2">
            {destinations[activeContinent].map((country) => (
              <li key={country}>
                <Link
                  href={`/destinacije/${activeContinent
                    .toLowerCase()
                    .replace(/\s+/g, "-")}/${country
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                  className="text-gray-700 hover:text-green-600"
                >
                  {country}
                </Link>
              </li>
            ))}
          </ul>
        </div> */}
      </div>
    </div>
  );
}
