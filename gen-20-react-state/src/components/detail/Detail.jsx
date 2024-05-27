import {
  Info,
  MinusCircle,
  PlusCircle,
  ShareNetwork,
} from "@phosphor-icons/react";
import React from "react";
import { useState } from "react";
import Service from "./Service";
import CardShop from "../shop/CardShop";
import { products } from "../data/objectList";

export default function Detail() {
  // console.log(id);
  function getQueryParams() {
    const url = window.location.href;
    const array = url.split("/");
    return array[array.length - 1];
  }

  function productById() {
    const arrayId = products().map((a) => a.id == getQueryParams());
    // const arrayId = products().map((a) => a.id);
    const filter = arrayId.indexOf(true);
    return products()[filter];
  }

  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const submitClick = (event) => {
    console.log(inputs);
  };
  console.log();
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
  const [preview, isPreview] = useState(productById().src);
  // const randomNum = Math.floor(Math.random() * (5 - 1)) + 1;
  return (
    <>
      <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-6 lg:mx-32 mx-4 justify-between py-12">
        <div className="max-lg:order-2">
          <button className="bg-orange-200 p-1 font-bold sm:text-base text-sm px-2">
            {productById().category}
          </button>
          <h1 className="font-bold sm:text-4xl mb-2 mt-2 text-3xl">
            {/* {productById().map((p) => 
            {p.id}
            )} */}
            {productById().name}
          </h1>
          <h2 className="font-medium text-gray-600 ">{productById().desc}</h2>
          <h2 className="mt-4 mb-3 text-3xl font-bold font-sans">
            &euro;{productById().price}
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
                  className="flex h-14 bg-color-primary border-yellow-400 border-2 w-36 rounded-full items-center justify-between pl-16 font-bold text-xl"
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
            <button className="absolute bg-orange-400 text-white p-1 pr-2 pl-2 top-2 left-2">
              New
            </button>
            <button className="size-8 border-2 border-gray-300 rounded-tl-lg rounded-br-lg p-1 absolute right-2 top-2 hover:bg-slate-100">
              <ShareNetwork className="size-full" weight="fill" />
            </button>
            {/* <div className="text-center ">
        <div className="flex inline gap-2 justify-center ">
          <div className="">
            <div className="text-base md:text-lg">
              Bitterness
            </div>
        <div>
          <span className="flex flex-row-reverse bg-slate-400">
            <svg className="text-gray-600 cursor-pointer peer peer-hover:text-yellow-400 hover:text-yellow-400 duration-100 " width="fill" height="fill" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
            </svg>
            <svg className="text-yellow-400 cursor-pointer peer peer-hover:text-yellow-400 hover:text-yellow-400 duration-100 " width="fill" height="fill" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
            </svg>
            <svg className="text-yellow-400 cursor-pointer peer peer-hover:text-yellow-400 hover:text-yellow-400 duration-100 " width="fill" height="fill" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
            </svg>
            <svg className="text-yellow-400 cursor-pointer peer peer-hover:text-yellow-400 hover:text-yellow-400 duration-100 " width="fill" height="fill" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
            </svg>
            <svg className="text-yellow-400 cursor-pointer peer peer-hover:text-yellow-400 hover:text-yellow-400 duration-100 " width="fill" height="fill" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
            </svg>
          </span>  
        </div>
      </div>
      <div>
        <div className="text-base md:text-lg">
          Acidity
        </div>
        <div>
          <span className="flex flex-row-reverse bg-slate-400">
            <svg className="text-gray-600 cursor-pointer peer peer-hover:text-yellow-400 hover:text-yellow-400 duration-100 " width="fill" height="fill" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
            </svg>
            <svg className="text-gray-600 cursor-pointer peer peer-hover:text-yellow-400 hover:text-yellow-400 duration-100 " width="fill" height="fill" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
            </svg>
            <svg className="text-gray-600 cursor-pointer peer peer-hover:text-yellow-400 hover:text-yellow-400 duration-100 " width="fill" height="fill" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
            </svg>
            <svg className="text-gray-600 cursor-pointer peer peer-hover:text-yellow-400 hover:text-yellow-400 duration-100 " width="fill" height="fill" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
            </svg>
            <svg className="text-yellow-400 cursor-pointer peer peer-hover:text-yellow-400 hover:text-yellow-400 duration-100 " width="fill" height="fill" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
            </svg>
          </span>  
        </div>
      </div>
      <div>
        <div className="text-base md:text-lg">
          Roasting
        </div>
        <div>
          <span className="flex flex-row-reverse bg-slate-400">
            <svg className="text-gray-600 cursor-pointer peer peer-hover:text-yellow-400 hover:text-yellow-400 duration-100 " width="fill" height="fill" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
            </svg>
            <svg className="text-gray-600 cursor-pointer peer peer-hover:text-yellow-400 hover:text-yellow-400 duration-100 " width="fill" height="fill" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
            </svg>
            <svg className="text-gray-600 cursor-pointer peer peer-hover:text-yellow-400 hover:text-yellow-400 duration-100 " width="fill" height="fill" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
            </svg>
            <svg className="text-yellow-400 cursor-pointer peer peer-hover:text-yellow-400 hover:text-yellow-400 duration-100 " width="fill" height="fill" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
            </svg>
            <svg className="text-yellow-400 cursor-pointer peer peer-hover:text-yellow-400 hover:text-yellow-400 duration-100 " width="fill" height="fill" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
            </svg>
          </span>  
        </div>
      </div>
      <div>
        <div className="text-base md:text-lg">
          Body
        </div>
        <div>
          <span className="flex flex-row-reverse bg-slate-400">
            <svg className="text-gray-600 cursor-pointer peer peer-hover:text-yellow-400 hover:text-yellow-400 duration-100 " width="fill" height="fill" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
            </svg>
            <svg className="text-yellow-400 cursor-pointer peer peer-hover:text-yellow-400 hover:text-yellow-400 duration-100 " width="fill" height="fill" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
            </svg>
            <svg className="text-yellow-400 cursor-pointer peer peer-hover:text-yellow-400 hover:text-yellow-400 duration-100 " width="fill" height="fill" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
            </svg>
            <svg className="text-yellow-400 cursor-pointer peer peer-hover:text-yellow-400 hover:text-yellow-400 duration-100 " width="fill" height="fill" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
            </svg>
            <svg className="text-yellow-400 cursor-pointer peer peer-hover:text-yellow-400 hover:text-yellow-400 duration-100 " width="fill" height="fill" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
            </svg>
          </span>  
        </div>
      </div>
  </div>
</div> */}
            <div className="pt-1">
              {/* <h3 className="text-3xl font-bold pb-4">Brewing Guide</h3> */}
              <div className="grid grid-cols-3 gap-1">
                <div className="">
                  <img
                    src="../src/assets/bags/bag.jpg"
                    alt=""
                    className="hover:cursor-pointer"
                    onMouseEnter={() => isPreview("../src/assets/bags/bag.jpg")}
                  />
                  <h5 className="text-center">bag 1</h5>
                </div>
                <div className="">
                  <img
                    src="../src/assets/bags/bag2.webp"
                    alt=""
                    className="hover:cursor-pointer"
                    onMouseEnter={() =>
                      isPreview("../src/assets/bags/bag2.webp")
                    }
                  />
                  <h5 className="text-center">bag 2</h5>
                </div>
                <div className="">
                  <img
                    src="../src/assets/bags/bag3.webp"
                    alt=""
                    className="hover:cursor-pointer"
                    onMouseEnter={() =>
                      isPreview("../src/assets/bags/bag3.webp")
                    }
                  />
                  <h5 className="text-center">bag 3</h5>
                </div>
                {/* <div className="border-2 relative">
                  <img src="assets/pngegg (1).png" alt="" />
                  <h5 className="text-center">Chemex</h5>
                </div> */}
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
        <CardShop type={products().slice(1, 4)} />
      </div>
    </>
  );
}
