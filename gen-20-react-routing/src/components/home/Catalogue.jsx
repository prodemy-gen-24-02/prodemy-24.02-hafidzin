import React, { useState } from "react";
import Card from "./Card";
import { CaretRight, ListBullets } from "@phosphor-icons/react";
// import Criteria from "../shop/Criteria";
// import MenuList from "../shop/MenuList";
import { catalogue } from "../data/objectList";
import { Link } from "react-router-dom";

export default function Catalogue({ type }) {
  return (
    <div name="Catalogue" className="mx-32 my-16">
      {/* <h1 className='mt-16 mb-24 text-6xl font-bold text-center'>Shop</h1> */}
      <div className="flex justify-between items-center font-medium">
        <h2 className="flex text-5xl font-bold pb-8 items-baseline gap-6">
          {type}
        </h2>
        <span className="text-3xl underline ">
          <Link to="/shop" className="flex items-center font-bold">
            Shop all <CaretRight size={32} color="#110404" weight="bold" />{" "}
          </Link>
        </span>
      </div>
      <div className="grid-cols-4 grid gap-4">
        <Card type={catalogue} />
      </div>
    </div>
  );
}
