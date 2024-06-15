import React from "react";
// import { products, equipment } from './catalogue'

export default function EquimpentCard({ type }) {
  return (
    <>
      {type.map((p) => (
        <div className="text-lg relative" key={p.id}>
          <img src={p.src} alt="" />
          <div className="bg-white text-center pb-4">
            <h3 className="font-bold text-2xl">{p.name}</h3>
            <p className="text-base">{p.desc}</p>
          </div>
        </div>
      ))}
    </>
  );
}
