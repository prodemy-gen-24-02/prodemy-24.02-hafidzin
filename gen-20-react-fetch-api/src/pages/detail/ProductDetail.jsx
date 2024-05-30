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

  const { data, isLoading } = useSWR(
    "http://localhost:3000/products",
    fetchProduct
  );
  const products = data;
  console.log(products);
  return (
    <>
      <Navbar />
      {isLoading ? <Loading /> : <Detail products={data} />}
      <Footer />
    </>
  );
}
