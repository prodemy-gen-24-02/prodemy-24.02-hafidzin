import React from "react";
import { CaretRight } from "@phosphor-icons/react";
// import Card from "./Card";
import { equipment } from "../data/objectList";
import EquipmentCard from "./EquipmentCard";

export default function Equipment() {
  return (
    <div className="bg-color-[#F3EDE3ff] pt-10">
      <div className="mx-32 ">
        <h2 className="flex justify-between text-5xl font-bold pb-8">
          Equipment
          <span className="text-3xl underline ">
            <a href="" className="flex items-center">
              See all <CaretRight size={32} color="#110404" weight="bold" />
            </a>
          </span>
        </h2>
        <div className="grid-cols-3 grid gap-4 mb-24">
          <EquipmentCard type={equipment} />
        </div>
      </div>
    </div>
  );
}
