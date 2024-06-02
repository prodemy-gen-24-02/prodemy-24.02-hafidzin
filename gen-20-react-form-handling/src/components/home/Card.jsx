import React from "react";
// import { products, equipment } from './catalogue'

export default function Card({ type }) {
  return (
    <>
      {type.map((p) => (
        <div className="text-lg relative shadow-md" key={p.id}>
          <img src={p.src} alt="" />
          <div className="px-2 pb-4 bg-color-primary">
            <h3 className="font-bold text-2xl">{p.name}</h3>
            <p className="text-base">{p.desc}</p>
          </div>
          <button className="bg-color-primary w-full py-2 font-bold pt-2 hover:bg-color-accent">
            See All
          </button>
        </div>
      ))}
    </>
  );
}
