import React, { useContext, useEffect } from "react";
import { CartContext } from "../../context/CartProvider";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  checkoutBooking,
  decreaseQty,
  deleteBooking,
} from "../../store/actions/checkoutAction";
import { id } from "ethers";
import { MinusCircle, PlusCircle, Trash } from "@phosphor-icons/react";

export default function CartList() {
  // const { cartData, setCartData } = useContext(CartContext);
  const dispatch = useDispatch();

  const { dataCheckout } = useSelector((state) => state.checkout);

  console.log(dataCheckout);

  const deleteButton = (condition) => {
    const newData = dataCheckout.filter((data) => data != condition);
    dispatch(checkoutBooking(newData));
  };

  const minusButton = (data) => {
    if (data.qty < 2) {
      dispatch(checkoutBooking(dataCheckout.filter((dc) => dc != data)));
    } else {
      const min = { qty: parseInt(data.qty) - 1 };
      dispatch(checkoutBooking([{ ...data, ...min }]));
    }
  };
  const plusButton = (data) => {
    if (data.qty > 9) {
      alert("Melebihi batas!");
    } else {
      const min = { qty: parseInt(data.qty) + 1 };
      dispatch(checkoutBooking([{ ...data, ...min }]));
    }
  };

  useEffect(() => {});
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(dataCheckout);
    // navigate("/cart/list");
  };

  // const totalPrice = () => {};

  // const handleDelete = (productId) => {
  //   dispatch(deleteBooking(productId));
  // };
  return (
    <>
      <div className="mx-32 mt-32 gap-4">
        <table className="w-full text-lg">
          <tr>
            <th className="border-[1px] border-black py-2">Name</th>
            <th className="border-[1px] border-black py-2">Quantity</th>
            <th className="border-[1px] border-black py-2">Total price</th>
            <th className="border-[1px] border-black py-2">Action</th>
          </tr>
          {dataCheckout?.map((d) => (
            <tr className="font-medium">
              <td className="border-[1px] border-black text-center py-1 flex items-center gap-2">
                <img src={d.img} className="max-w-24" alt="" />
                <p>{d.name}</p>
              </td>
              <td className="border-[1px] border-black text-center py-1">
                <div className="flex items-center gap-3 justify-center">
                  <div className="relative">
                    <input
                      type="number"
                      id="qty"
                      value={d.qty}
                      {...register("qty")}
                      // onChange={(c) => isCount(c.currentTarget.value)}
                      // value={inputs.qty}
                      // onChange={handleChange}
                      // onChange={(e) => setInputs(e.target.value)}
                      className="flex h-14 bg-color-primary border-yellow-400 border-2 w-36 rounded-full items-center justify-between text-center pl-4 font-bold text-xl"
                    />
                    {d.qty < 2 ? (
                      <button
                        className="absolute top-2 size-11 left-0"
                        id="minus"
                        onClick={() => deleteButton(d)}
                        type="button"
                      >
                        <Trash className="size-full" weight="fill" />
                      </button>
                    ) : (
                      <button
                        className="absolute top-1 size-12 left-0"
                        id="minus"
                        onClick={() => minusButton(d)}
                        type="button"
                      >
                        <MinusCircle className="size-full" weight="fill" />
                      </button>
                    )}

                    <button
                      className="absolute top-1 right-0 size-12"
                      id="plus"
                      onClick={() => plusButton(d)}
                      type="button"
                    >
                      <PlusCircle className="size-full" weight="fill" />
                    </button>
                  </div>
                </div>
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

          {/* <p>Total Payment: {totalPrice()}</p> */}

          <button className="bg-color-accent rounded-md w-24 h-8 mt-2">
            Checkout
          </button>
        </form>
      </div>
    </>
  );
}
