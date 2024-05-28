import {
  Info,
  MinusCircle,
  PlusCircle,
  ShareNetwork,
} from "@phosphor-icons/react";
import React, { useEffect } from "react";
import { useState } from "react";
import Service from "./Service";
import CardShop from "../shop/CardShop";
import { products } from "../data/objectList";
import { useParams } from "react-router-dom";

export default function Detail() {
  const { id } = useParams();
  const data = products.find((p) => p.id === parseInt(id));
  console.log(data.src);

  useEffect(() => {
    isPreview(`${data.src[0]}`);
  }, [data]);

  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const submitClick = (event) => {
    // console.log();
  };

  const [count, isCount] = useState(1);
  // console.log(count);

  const plusButton = () => {
    if (count > 99) {
      alert("Nilai melebihi batas ");
    } else {
      isCount((a) => parseInt(a) + 1);
    }
  };

  const minusButton = () => {
    if (inputs.qty < 2) {
      alert("Nilai harus lebih dari 0");
    } else {
      inputs.qty - 1;
    }
  };

  const [info, isInfo] = useState(false);
  const [preview, isPreview] = useState(data.src[0]);

  // console.log(preview);
  return (
    <>
      <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-6 lg:mx-32 mx-4 justify-between py-12">
        <div className="max-lg:order-2">
          <button className="bg-orange-200 p-1 font-bold sm:text-base text-sm px-2">
            {data.category}
          </button>
          <h1 className="font-bold sm:text-4xl mb-2 mt-2 text-3xl">
            {data.name}
          </h1>
          <h2 className="font-medium text-gray-600 ">{data.desc}</h2>
          <h2 className="mt-4 mb-3 text-3xl font-bold font-sans">
            &euro;{data.price}
          </h2>
          <form className="flex gap-2 flex-col" onSubmit={submitClick}>
            <div className="flex flex-row items-center gap-2 mb-2 z-10">
              <input
                className="block w-4 h-4 bg-slate-400"
                type="checkbox"
                id="type"
                name="type"
                value={inputs.type || ""}
                onChange={handleChange}
              />
              <label className="">Ground grains</label>
              <button className="size-6" type="button">
                <Info
                  color="#fe7d35"
                  className="size-full"
                  onMouseEnter={() => isInfo((prev) => !prev)}
                  onMouseLeave={() => isInfo(false)}
                />
                <div
                  className={
                    info
                      ? "bg-white z-10 text-left w-96 p-6 shadow-md text-lg font-medium"
                      : "hidden"
                  }
                >
                  Traditionally, we sell coffee beans. If you want to grind it,
                  please indicate this when ordering.
                </div>
              </button>
            </div>
            <div className="flex flex-row items-center gap-3">
              <div className="relative">
                <input
                  type="number"
                  id="qty"
                  name="qty"
                  value={count}
                  onChange={(c) => isCount(c.currentTarget.value)}
                  // value={inputs.qty}
                  // onChange={handleChange}
                  // onChange={(e) => setInputs(e.target.value)}
                  className="flex h-14 bg-color-primary border-yellow-400 border-2 w-36 rounded-full items-center justify-between text-center pl-4 font-bold text-xl"
                />

                <button
                  className="absolute top-1 size-12"
                  id="minus"
                  onClick={minusButton}
                  type="button"
                >
                  <MinusCircle className="size-full" weight="fill" />
                </button>
                <button
                  className="absolute top-1 right-0 size-12"
                  id="plus"
                  onClick={plusButton}
                  type="button"
                >
                  <PlusCircle className="size-full" weight="fill" />
                </button>
              </div>

              <div className="flex flex-row">
                <button
                  className="bg-black text-white rounded-full w-36 h-12 font-bold text-lg hover:bg-green-600 hover:text-white"
                  onClick={submitClick()}
                  type="button"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </form>
          <div className="mt-8 flex flex-col gap-2">
            <h3 className="font-bold sm:text-3xl text-2xl">Description</h3>
            <h4 className="sm:text-xl text-lg">Process: washed</h4>
            <h4 className="sm:text-xl text-lg">
              Arabica varietal: Castillo, Caturra, Colombia
            </h4>
            <h4 className="sm:text-xl text-lg">Altitude: 1700 - 2000 meters</h4>
            <h4 className="sm:text-xl text-lg">Region: Antioquia</h4>
            <h4 className="sm:text-xl text-lg">Farm: La Claudina</h4>
            <h4 className="sm:text-xl text-lg">Size: Whole beans, 250gr</h4>
          </div>
        </div>
        <div>
          <div className="relative">
            <img
              id="preview-image"
              src={preview}
              alt=""
              className="object-cover min-w-full min-h-full"
            />
            {data.condition == "New" && (
              <button className="absolute bg-orange-400 text-white p-1 pr-2 pl-2 top-2 left-2">
                New
              </button>
            )}
            <button className="size-8 border-2 border-gray-300 rounded-tl-lg rounded-br-lg p-1 absolute right-2 top-2 hover:bg-slate-100">
              <ShareNetwork className="size-full" weight="fill" />
            </button>
            <div className="pt-1">
              <div className="grid grid-cols-3 gap-1">
                {data.src.map((img) => {
                  return (
                    <div>
                      <img
                        src={img}
                        alt={data.name}
                        className={`hover:cursor-pointer`}
                        onMouseEnter={() => isPreview(`${img}`)}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Service />
      <h2 className="flex text-5xl font-bold pb-8 items-baseline gap-6 mx-32 pt-12">
        Related Products
      </h2>
      <div className="mx-32 grid grid-cols-3 gap-2 pb-32">
        <CardShop type={products.slice(2, 5)} />
      </div>
    </>
  );
}
