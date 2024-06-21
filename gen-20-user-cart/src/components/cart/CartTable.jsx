import { MinusCircle, PlusCircle, Trash, X } from "@phosphor-icons/react";
import React from "react";
import { useForm, useFormContext } from "react-hook-form";
import { useDispatch } from "react-redux";
import {
  deleteFromCart,
  fetchCart,
  minusQty,
  plusQty,
} from "../../store/reducers/cartSlice";
import Swal from "sweetalert2";

export default function CartTable({ cartData, index }) {
  const { register, setValue, getValues } = useFormContext();
  // console.log(cartData);
  const dispatch = useDispatch();

  const onClickMinusQty = (id) => {
    dispatch(minusQty(id));
    setTimeout(() => dispatch(fetchCart()), 300);
  };
  const onClickPlusQty = (id) => {
    dispatch(plusQty(id));
    setTimeout(() => dispatch(fetchCart()), 300);
  };
  const onClickDelete = (id) => {
    Swal.fire({
      title: "Hapus produk?",
      text: "Produk akan terhapus dari keranjang!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Hapus!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Produk dihapus dari keranjang.",
          icon: "success",
        });
        dispatch(deleteFromCart(id));
        setTimeout(() => dispatch(fetchCart()), 300);
      }
    });
  };
  return (
    <>
      <div className="flex shadow-md items-center justify-between ">
        <div className="flex items-center gap-2 font-bold">
          <img src={cartData.img} alt="" className="size-28" />
          <p>{cartData.name}</p>
        </div>
        <div className="flex items-center gap-6 mr-2">
          <span className="font-medium ">&euro;{cartData.price}</span>
          <div className="relative">
            <input
              type="number"
              id="qty"
              value={cartData.qty}
              {...register(`qty${index}`)}
              className="flex h-14 bg-color-primary border-yellow-400 border-2 w-36 rounded-full items-center justify-between text-center pl-4 font-bold text-xl"
            />
            {cartData.qty < 2 ? (
              <button
                className="absolute top-2 size-11 left-0"
                id="minus"
                onClick={() => onClickDelete(cartData.id)}
                type="button"
              >
                <Trash className="size-full" weight="fill" />
              </button>
            ) : (
              <button
                className="absolute top-1 size-12 left-0"
                id="minus"
                onClick={() => (
                  onClickMinusQty(cartData.id, index),
                  setTimeout(setValue(`qty${index}`, cartData.qty), 200)
                )}
                type="button"
              >
                <MinusCircle className="size-full" weight="fill" />
              </button>
            )}

            <button
              className="absolute top-1 right-0 size-12"
              id="plus"
              onClick={() => (
                onClickPlusQty(cartData.id, index),
                setTimeout(setValue(`qty${index}`, cartData.qty), 200)
              )}
              type="button"
            >
              <PlusCircle className="size-full" weight="fill" />
            </button>
          </div>
          <span className="font-bold">
            &euro;{cartData.qty * cartData.price}
          </span>
          <button onClick={() => onClickDelete(cartData.id)}>
            <X size={26} />
          </button>
        </div>
      </div>

      {/* <tr className="font-medium" key={index}>
        <td className="border-[1px] border-black text-center py-1 flex items-center gap-2">
          <img src={cartData.img} className="max-w-24" alt="" />
          <p>{cartData.name}</p>
        </td>
        <td className="border-[1px] border-black text-center py-1">
          <div className="flex items-center gap-3 justify-center">
            <div className="relative">}
              <input
                type="number"
                id="qty"
                value={cartData.qty}
                {...register(`qty${index}`)}
                className="flex h-14 bg-color-primary border-yellow-400 border-2 w-36 rounded-full items-center justify-between text-center pl-4 font-bold text-xl"
              />
              {cartData.qty < 2 ? (
                <button
                  className="absolute top-2 size-11 left-0"
                  id="minus"
                  onClick={() => onClickDelete(cartData.id)}
                  type="button"
                >
                  <Trash className="size-full" weight="fill" />
                </button>
              ) : (
                <button
                  className="absolute top-1 size-12 left-0"
                  id="minus"
                  onClick={() => onClickMinusQty(cartData.id)}
                  type="button"
                >
                  <MinusCircle className="size-full" weight="fill" />
                </button>
              )}

              <button
                className="absolute top-1 right-0 size-12"
                id="plus"
                onClick={() => onClickPlusQty(cartData.id)}
                type="button"
              >
                <PlusCircle className="size-full" weight="fill" />
              </button>
            </div>
          </div>
        </td>
        <td className="border-[1px] border-black text-center py-1">
          &euro;{cartData.qty * cartData.price}
        </td>
        <td className="border-[1px] border-black text-center py-1">
          <button onClick={() => onClickDelete(cartData.id)}>delete</button>
        </td>
      </tr> */}
    </>
  );
}
