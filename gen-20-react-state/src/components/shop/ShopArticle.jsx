import React, { useState } from "react";
import { CaretRight, ListBullets } from "@phosphor-icons/react";
import Criteria from "./Criteria";
import MenuList from "./MenuList";
import CardShop from "./CardShop";
import { products } from "../data/objectList";

export default function ShopArticle({ section, slice }) {
  const [show, setShow] = useState(false);

  return (
    <div name="Catalogue" className="mx-32 my-16">
      {window.location.pathname == "/shop" ? (
        <h1 className="mt-16 mb-28 text-6xl font-bold text-center">Shop</h1>
      ) : null}

      <div className="flex justify-between items-center">
        {window.location.pathname == "/shop" ? (
          <>
            <h2 className="flex text-5xl font-bold mb-4 items-baseline gap-6">
              {section}
            </h2>
            <a href="" className="flex items-center text-2xl font-semibold">
              See all <CaretRight weight="bold" />
            </a>
          </>
        ) : (
          <h2 className="flex text-5xl font-bold mb-4 items-baseline gap-6">
            {section}{" "}
            <button onClick={() => setShow((prev) => !prev)}>
              <ListBullets size={36} weight="bold" />
            </button>
          </h2>
        )}
        {/* <span className='text-3xl underline '>
                <a href="" className='flex items-center'>Shop all <CaretRight size={32} color="#110404" weight="bold" /> </a>
            </span> */}
      </div>
      {show && <MenuList />}
      {window.location.pathname == "/shop" ? null : (
        <div>
          <Criteria />
        </div>
      )}
      <div className="grid-cols-3 grid gap-4 pt-5">
        <CardShop type={slice} section={section} />
      </div>
    </div>
  );
}
