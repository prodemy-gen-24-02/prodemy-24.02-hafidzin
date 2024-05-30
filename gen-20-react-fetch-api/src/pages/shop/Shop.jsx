import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Equipment from "../../components/home/Equipment";
import Footer from "../../components/Footer";
import ShopArticle from "../../components/shop/ShopArticle";
import axios from "axios";
import useSWR from "swr";
import Loading from "../../Loading";

export default function Shop() {
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
      {isLoading ? (
        <Loading />
      ) : (
        <ShopArticle section="Speciality coffee" slice={products.slice(0, 3)} />
      )}
      ;
      <Equipment />
      <Footer />
    </>
  );
}
