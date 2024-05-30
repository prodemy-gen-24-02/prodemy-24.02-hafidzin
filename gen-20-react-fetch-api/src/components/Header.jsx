import { WindowsLogo } from "@phosphor-icons/react";
import React from "react";

export default function Header() {
  // console.log(window.location.pathname);
  return (
    <div className="bg-color-secondary">
      <header className=" border-b-gray-300 border-b-[1px] font-medium">
        <ul className="flex justify-center text-gray-500 text-lg">
          <a href="/shop/speciality_coffee">
            <li
              className={
                window.location.pathname == "/shop/speciality_coffee"
                  ? "bg-color-primary p-3 border-b-color-accent border-b-2"
                  : " hover:bg-color-primary p-3 hover:border-b-color-accent border-b-2"
              }
            >
              Speciality coffee
            </li>
          </a>
          <li className="hover:bg-color-primary p-3 `` hover:border-b-color-accent border-b-2">
            Brewing accessories
          </li>
          <li className="hover:bg-color-primary p-3 hover:border-b-color-accent border-b-2">
            Equipment
          </li>
        </ul>
      </header>
    </div>
  );
}
