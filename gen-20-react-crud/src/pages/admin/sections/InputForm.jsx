import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string, number } from "yup";
import axios from "axios";
import { mutate } from "swr";

export default function InputForm() {
  const categories = ["Filter roast", "Espresso roast", "Medium roast"];
  const schema = object({
    name: string().required(" harus diisi"),
    desc: string().required(" harus diisi"),
    category: string().oneOf(categories).required(" harus diisi"),
    price: number().typeError("Harga harus angka").required(" harus diisi"),
    // condition: string().default(null),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [src, setSrc] = useState([]);
  const [progressBar, setProgressBar] = useState(0);

  const handleImage = (e) => {
    const formData = new FormData();
    const arraySrc = Array.from(e.target.files);
    // console.log(arraySrc);
    let src = [];
    for (const img of arraySrc) {
      // console.log(img);
      formData.append("file", img);
      formData.append("upload_preset", "ml_default");
      axios
        .post(
          "https://api.cloudinary.com/v1_1/degizzbun/image/upload",
          formData,
          {
            onUploadProgress: (e) => {
              setProgressBar(Math.round((100 * e.loaded) / e.total));
            },
          }
        )
        .then((res) => {
          src.push(res.data.secure_url);
          mutate();
        });
    }
    setSrc(src);
    // const payloadUpdate = {
    //   name: data.name,
    //   desc: data.desc,
    //   category: data.category,
    //   price: data.price,
    //   src: [response.data.secure_url],
    // };
    // console.log(src);
  };

  useEffect(() => {
    setProgressBar(0);
  }, [src]);
  console.log(src);

  const onSubmit = (data) => {
    let condition;
    {
      data.condition == "New" ? (condition = data.condition) : null;
    }
    const payloadUpdate = {
      name: data.name,
      desc: data.desc,
      category: data.category,
      price: data.price,
      src: src,
      condition,
    };
    axios
      .post(`http://localhost:3000/products`, payloadUpdate)
      .then(({ data }) => {
        console.log(`Processing`, data);
      })
      .catch((err) => {
        console.log(`Error : `, err);
      })
      .finally(() => {
        console.log("Success");
      });
  };
  return (
    <div className="lg:px-64 py-32 px-24">
      <h1 className="text-3xl font-bold py-6">Form Input</h1>
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
            <textarea
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
                {...register("condition")}
                id="condition"
                type="checkbox"
                value="New"
              />
              New
            </label>
          </div>
          <div className="flex flex-col bg-color-primary shadow-md rounded-lg">
            <label className="p-3 font-semibold">Image files</label>
            <label className="px-3 flex gap-2 pb-3">
              <input
                className="bg-transparent p-3"
                {...register("src")}
                id="src"
                type="file"
                multiple="multiple"
                onChange={handleImage}
              />
            </label>
            <div className="flex justify-center bg-white vh-100">
              <div
                className="w-full bg-white mt-5 p-4"
                aria-valuenow={progressBar}
                aria-valuemin="0"
                aria-valuemax="100"
              >
                {progressBar} {progressBar == 100 && "Upload done"}
              </div>
            </div>
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
