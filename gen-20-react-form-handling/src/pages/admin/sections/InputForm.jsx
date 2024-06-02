import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string, number } from "yup";

export default function InputForm() {
  const categories = ["Filter roast", "Espresso roast"];

  const schema = object({
    name: string().required(" harus diisi"),
    desc: string().required(" harus diisi"),
    category: string().oneOf(categories).required(" harus diisi"),
    price: number().required(" harus diisi"),
    condition: string().default(null),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    // const payload = {};
  };

  return (
    <div className="px-64 py-32">
      <h1 className="text-xl font-bold py-2">Form Input</h1>
      <div className="">
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-2">
          <div
            className={
              errors.name?.message
                ? "flex flex-col bg-color-primary shadow-md rounded-lg border-[1px] border-red-600"
                : "flex flex-col bg-color-primary shadow-md rounded-lg"
            }
          >
            <label className="p-3 font-semibold">
              Product name
              <span className="text-red-500">{errors.name?.message}</span>
            </label>
            <input
              className="bg-transparent p-3"
              placeholder="product name"
              {...register("name")}
              id="name"
            />
          </div>
          <div
            className={
              errors.desc?.message
                ? "flex flex-col bg-color-primary shadow-md rounded-lg border-[1px] border-red-600"
                : "flex flex-col bg-color-primary shadow-md rounded-lg"
            }
          >
            <label className="p-3 font-semibold">
              Description
              <span className="text-red-500">{errors.desc?.message}</span>
            </label>
            <input
              className="bg-transparent p-3"
              placeholder="description"
              {...register("desc")}
              id="desc"
            />
          </div>
          <div
            className={
              errors.category?.message
                ? "flex flex-col bg-color-primary shadow-md rounded-lg border-[1px] border-red-600"
                : "flex flex-col bg-color-primary shadow-md rounded-lg"
            }
          >
            <label className="p-3 font-semibold">
              Category
              <span className="text-red-500"> {errors.category?.message}</span>
            </label>
            <select
              className="bg-transparent p-3"
              placeholder="Asal Kota"
              {...register("category")}
              id="category"
            >
              <option value="">Choose coffe category</option>
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
          <div
            className={
              errors.price?.message
                ? "flex flex-col bg-color-primary shadow-md rounded-lg border-[1px] border-red-600"
                : "flex flex-col bg-color-primary shadow-md rounded-lg"
            }
          >
            <label className="p-3 font-semibold">
              Price
              <span className="text-red-500"> {errors.price?.message}</span>
            </label>
            <input
              type="number"
              className="bg-transparent p-3"
              placeholder="Asal Kota"
              {...register("price")}
              id="price"
            />
          </div>
          <div className="flex flex-col bg-color-primary shadow-md rounded-lg">
            <label className="p-3 font-semibold">Condition</label>
            <label className="px-3 flex gap-2 pb-3">
              <input
                className="bg-transparent p-3"
                placeholder="Asal Kota"
                {...register("condition")}
                id="condtion"
                type="checkbox"
                value="New"
              />
              New
            </label>
          </div>
          <button
            className="bg-green-800 text-white rounded-lg p-3 font-bold "
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
