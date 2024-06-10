import React, { useContext, useEffect } from "react";
import { CartContext } from "../../context/CartProvider";
import { useForm } from "react-hook-form";

export default function CartList() {
  const { cartData, setCartData } = useContext(CartContext);

  const deleteButton = (condition) => {
    const newData = cartData.filter((data) => data != condition);
    setCartData(newData);
  };

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(cartData);
    // navigate("/cart/list");
  };

  return (
    <>
      <div className="mx-32 mt-32 gap-4">
        <table className="w-full">
          <tr>
            <th className="border-[1px] border-black py-2">Name</th>
            <th className="border-[1px] border-black py-2">Quantity</th>
            <th className="border-[1px] border-black py-2">Total price</th>
            <th className="border-[1px] border-black py-2">Action</th>
          </tr>
          {cartData?.map((d) => (
            <tr>
              <td className="border-[1px] border-black text-center py-1 flex items-center gap-2">
                <img src={d.img} className="max-w-24" alt="" />
                {d.name}
              </td>
              <td className="border-[1px] border-black text-center py-1">
                {d.qty}
              </td>
              <td className="border-[1px] border-black text-center py-1">
                &euro;{d.qty * d.price}
              </td>
              <td className="border-[1px] border-black text-center py-1">
                <button onClick={() => deleteButton(d)}>delete</button>
              </td>
            </tr>
          ))}
        </table>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* <input type="hidden" value={cartData} {...register("list")} /> */}

          <button className="bg-color-accent rounded-md w-24 h-8 mt-2">
            Checkout
          </button>
        </form>
      </div>
    </>
  );
}
