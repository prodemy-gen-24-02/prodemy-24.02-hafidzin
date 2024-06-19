import React, { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { fetchCart, minusQty, plusQty } from "../../store/reducers/cartSlice";
import CartTable from "./CartTable";
import Swal from "sweetalert2";
import Service from "../detail/Service";

export default function CartList({ dataCart }) {
  const dispatch = useDispatch();

  const methods = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const subTotal = () => {
    let sum = 0;
    dataCart.map((d) => (sum += d.qty * d.price));
    return sum;
  };

  const [tax, setTax] = useState((subTotal() * 5) / 100);
  const [totalPayment, setTotalPayment] = useState(tax + subTotal());

  useEffect(() => {
    setTax((subTotal() * 5) / 100);
    methods.setValue("total", totalPayment);
  }, [dataCart]);

  useEffect(() => {
    setTotalPayment(tax + subTotal());
    methods.setValue("tax", tax);
  }, [dataCart]);

  const onClickMinusQty = (id) => {
    dispatch(minusQty(id));
    dispatch(fetchCart());
  };
  const onClickPlusQty = (id) => {
    dispatch(plusQty(id));
    dispatch(fetchCart());
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
        dispatch(fetchCart());
      }
    });
  };
  return (
    <>
      <div className="mx-32 mt-16 gap-4 mb-32">
        <h1 className="text-center text-4xl font-bold mb-16">My Cart</h1>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <div className="grid grid-cols-3 gap-8">
              <div className="flex flex-col gap-2 col-span-2">
                <p className="text-xl font-bold mb-4">
                  You have {dataCart.length} items
                </p>
                {dataCart?.map((d, index) => (
                  <CartTable cartData={d} index={index} />
                ))}
              </div>
              <div className="bg-color-secondary">
                <div className="grid mx-4 my-3 gap-5">
                  <h2 className="text-xl font-bold flex justify-between">
                    Subtotal: <span> &euro;{subTotal()}</span>
                  </h2>
                  <div>
                    <h3 className="text-lg font-bold">Coupon code</h3>
                    <input type="text" />
                  </div>
                  <div className="text-lg font-bold">
                    <h3 className="my-2">
                      Shipping:{" "}
                      {methods.formState.errors.shipping && (
                        <span className="text-red-600">Choose shipping</span>
                      )}
                    </h3>

                    <div className="grid grid-row gap-1 bg-white rounded-lg p-3">
                      <label className="flex gap-3">
                        <input
                          type="radio"
                          id=""
                          value="Free"
                          {...methods.register("shipping", { required: true })}
                        />
                        Free shipping
                      </label>
                      <label className="flex gap-3">
                        <input
                          type="radio"
                          id=""
                          value="Local"
                          {...methods.register("shipping")}
                        />
                        Local pickup
                      </label>
                    </div>
                  </div>
                  <h4 className="text-lg font-bold flex justify-between">
                    Sales tax 5% <span>&euro;{(subTotal() * 5) / 100}</span>
                    <input
                      type="hidden"
                      value={tax}
                      onChange={(e) => setTax(parseFloat(e.target.value))}
                      {...methods.register("tax")}
                    />
                  </h4>
                  <p className="text-xl font-bold flex justify-between">
                    Total Payment :{" "}
                    {methods.watch()?.shipping &&
                    !methods.formState.errors.shipping ? (
                      <span>
                        {/* &euro;{parseInt(methods.watch()?.tax) + subTotal()} */}
                        {totalPayment}
                      </span>
                    ) : (
                      <span>...</span>
                    )}
                    <input
                      type="number"
                      value={totalPayment}
                      onChange={(e) =>
                        setTotalPayment(parseFloat(e.target.value))
                      }
                      {...methods.register("total")}
                    />
                  </p>

                  <button
                    className="bg-color-accent rounded-full w-full h-8 my-2 text-white font-medium"
                    type="submit"
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </form>
        </FormProvider>
      </div>
      <Service />
    </>
  );
}
