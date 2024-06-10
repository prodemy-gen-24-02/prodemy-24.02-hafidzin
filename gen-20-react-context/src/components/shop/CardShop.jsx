import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { CartContext } from "../../context/CartProvider";

export default function CardShop({ type }) {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const { setCartData } = useContext(CartContext);

  const onSubmit = (data) => {
    console.log(data);
    setCartData((prevData) => [...prevData, data]);
    // navigate("/cart/list");
  };

  // console.log(type);
  return (
    <>
      {type.map((p) => (
        <div className="text-lg relative shadow-md" key={p.id}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Link to={`/productdetail/${p.id}`}>
              <img src={p.src[0]} alt="" />
              <div className="px-2 from-color-secondary to-color-primary bg-gradient-to-t">
                <h3 className="font-bold text-2xl pb-1 pt-4">{p.name}</h3>
                <p className="text-base line-clamp-2">{p.desc}</p>
              </div>
            </Link>

            <p className="absolute top-2 left-2 bg-color-secondary text-sm p-2 font-semibold">
              {p.category}
            </p>
            {p.condition && (
              <p className="absolute top-2 right-2 bg-color-accent text-sm p-2  text-white ">
                {p.condition}
              </p>
            )}
            <div className="flex items-center justify-between py-2 font-bold text-2xl mx-2 ">
              €{p.price}
              <input
                type="hidden"
                defaultValue={p.name}
                {...register("name")}
                // onChange={(e) => e.target.value}
                id="name"
              />
              <button
                className="bg-color-primary py-2 rounded-full w-28 font-semibold border-[1px] border-color-dark mt-2 hover:bg-color-dark hover:text-white text-sm"
                // onClick={handleSubmit(onSubmit)}
              >
                Add to cart
              </button>
            </div>
          </form>
        </div>
      ))}
    </>
  );
}
