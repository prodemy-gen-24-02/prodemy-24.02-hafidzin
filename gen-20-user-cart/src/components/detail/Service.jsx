import React from "react";
import { Handbag, CreditCard, ShieldCheck, Star } from "@phosphor-icons/react";

export default function Service() {
  return (
    <div className="lg:mx-32 lg:my-8 mx-4 my-8 bg-color-secondary flex gap-8 justify-between max-[660px]:hidden py-6 px-16">
      <div className="flex-row text-center">
        <div className="flex justify-center">
          <Handbag size={24} weight="fill" />
        </div>
        <h4 className="font-bold">Free shipping</h4>
        <p>On all orders above &euro;20</p>
      </div>
      <div className="flex-row text-center">
        <div className="flex justify-center">
          <CreditCard size={24} weight="fill" />
        </div>
        <h4 className="font-bold">Different payment methods</h4>
        <p>Credit cards, Multibanco, Cash</p>
      </div>
      <div className="flex-row text-center">
        <div className="flex justify-center">
          <ShieldCheck size={24} weight="fill" />
        </div>
        <h4 className="font-bold">100% Secure Checkout</h4>
        <p>Safety is our top priority</p>
      </div>
      <div className="flex-row text-center">
        <div className="flex justify-center">
          <Star size={24} weight="fill" />
        </div>
        <h4 className="font-bold">Premium coffee</h4>
        <p>Direct & fair trade, organic products</p>
      </div>
    </div>
  );
}
