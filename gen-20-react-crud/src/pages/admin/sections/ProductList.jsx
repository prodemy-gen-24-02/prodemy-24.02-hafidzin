import axios from "axios";
import React from "react";
import useSWR, { mutate } from "swr";
import Loading from "../../../Loading";
import { Link } from "react-router-dom";

export default function ProductList() {
  const fetchProduct = (url) =>
    axios.get(url).then((response) => response.data);

  const { data, isLoading, mutate } = useSWR(
    "http://localhost:3000/products",
    fetchProduct
  );
  const products = data;

  const onClickDelete = (id) => {
    axios.delete(`http://localhost:3000/products/${id}`).then(() => mutate());
  };
  return (
    <div className="relative flex flex-1 flex-col mx-7">
      <h1 className="py-8 font-bold text-2xl flex justify-between">
        Products List
        <Link to={{ pathname: "/admin/form" }}>
          <button className="text-xl bg-blue-600 text-white w-20 rounded-md">
            Add
          </button>
        </Link>
      </h1>
      <div className="">
        <table className="w-full bg-white">
          <tr>
            <th className="text-center bg-gray-200 py-2">ID</th>
            <th className="text-center bg-gray-200 py-2">Name</th>
            <th className="text-center bg-gray-200 py-2">Desc</th>
            <th className="text-center bg-gray-200 py-2">Category</th>
            <th className="text-center bg-gray-200 py-2">Price</th>
            <th className="text-center bg-gray-200 py-2">Action</th>
          </tr>
          {isLoading ? (
            <Loading />
          ) : (
            products?.map((p) => (
              <tr key={p.id} className="border-2">
                <td className="py-2 px-2 text-center">{p.id}</td>
                <td className="py-2 px-2">
                  <Link to={{ pathname: `/productdetail/${p.id}` }}>
                    {p.name}
                  </Link>
                </td>
                <td className="py-2 px-2">{p.desc}</td>
                <td className="py-2 px-2">{p.category}</td>
                <td className="py-2 px-2">${p.price}</td>
                <td className="items-center text-center">
                  <button
                    className="bg-red-500 text-white w-16 rounded-md mx-1"
                    onClick={() => onClickDelete(p.id)}
                  >
                    Delete
                  </button>
                  <Link
                    to={{
                      pathname: `/admin/form/edit/${p.id}`,
                    }}
                  >
                    <button className="bg-green-500 text-white w-16 rounded-md mx-1">
                      Edit
                    </button>
                  </Link>
                </td>
              </tr>
            ))
          )}
        </table>
      </div>
    </div>
  );
}
