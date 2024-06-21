import React, { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import CartTable from "./CartTable";
import Service from "../detail/Service";

export default function CartList({ dataCart }) {
  const dispatch = useDispatch();

  const methods = useForm();

  const onSubmit = (data) => {
    console.log("submit", data);
  };

  const subTotal = dataCart
    .map((item) => item.price * item.qty)
    .reduce((prevValue, currValue) => prevValue + currValue, 0);

  const totalPayment = subTotal + (subTotal * 5) / 100;

  useEffect(() => {
    methods.setValue("total", parseFloat(totalPayment));
  }, [totalPayment]);
  console.log(methods.getValues());

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
                    Subtotal: <span> &euro;{subTotal}</span>
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
                    Sales tax 5% <span>&euro;{(subTotal * 5) / 100}</span>
                    {/* <input
                      type="hidden"
                      value={tax}
                      onChange={(e) => setTax(parseFloat(e.target.value))}
                      {...methods.register("tax")}
                    /> */}
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
                      value={methods.getValues().total}
                      // onChange={(e) =>
                      //   methods.setValue("total", parseFloat(totalPayment))
                      // }
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
