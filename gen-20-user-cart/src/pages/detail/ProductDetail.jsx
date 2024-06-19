import React from "react";
import Navbar from "../../components/Navbar";
import Detail from "../../components/detail/Detail";
import Footer from "../../components/Footer";
import useSWR from "swr";
import axios from "axios";
import Loading from "../../Loading";

export default function ProductDetail() {
  const fetchProduct = (url) =>
    axios.get(url).then((response) => response.data);

  const { data, isLoading, mutate } = useSWR(
    "http://localhost:3000/products",
    fetchProduct
  );

  if (isLoading) return <Loading />;

  const products = data;
  // const productById = products.find((p) => p.id == parseInt(2));
  // console.log(productById);
  // console.log(products);
  return (
    <>
      <Navbar />
      {isLoading ? <Loading /> : <Detail products={products} />}
      <Footer />
    </>
  );
}
