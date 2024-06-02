import React from "react";

export default function Navbar() {
  return (
    <div className="absolute left-0 top-0 z-50 flex h-screen w-72 flex-col bg-black lg:static lg:translate-x-0 -translate-x-full">
      <ul className="text-white text-center">
        <li className="py-4 hover:bg-gray-800">Products</li>
      </ul>
    </div>
  );
}
