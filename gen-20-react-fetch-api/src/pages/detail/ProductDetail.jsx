import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Detail from "../../components/detail/Detail";
import Footer from "../../components/Footer";
import axios from "axios";
import useSWR from "swr";

export default function ProductDetail() {
  // const fetchProduct = (url) =>
  //   axios.get(url).then((response) => response.data);

  // const products = useSWR("http://localhost:3000/products", fetchProduct);
  // console.log(products.data);
  // const [products, setProduct] = useState([]);
  // const fetchProducts = async () => {
  //   try {
  //     const response = await axios.get("http://localhost:3000/products");
  //     setProduct(response.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchProducts();
  // }, []);

  // console.log(products);
  return (
    <>
      <Navbar />
      <Detail />
      <Footer />
    </>
  );
}
