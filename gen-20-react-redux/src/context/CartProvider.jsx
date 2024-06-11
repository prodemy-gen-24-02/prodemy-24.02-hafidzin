import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();
export function CartProvider({ children }) {
  const [cartData, setCartData] = useState([]);

  const cartList = {
    cartData,
    setCartData,
  };

  // console.log(cartData);

  return (
    <CartContext.Provider value={cartList}>{children}</CartContext.Provider>
  );
}
