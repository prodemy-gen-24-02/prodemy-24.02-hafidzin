import React, { useContext } from "react";
import CartList from "../../components/cart/CartList";
import { CartContext } from "../../context/CartProvider";
import Navbar from "../../components/Navbar";

export default function ShoppingCart() {
  const { cartData } = useContext(CartContext);
  return (
    <div>
      <Navbar />
      {cartData.length === 0 ? (
        <p className="font-bold text-4xl flex items-center justify-center pt-64">
          Data Kosong
        </p>
      ) : (
        <CartList />
      )}
    </div>
  );
}
