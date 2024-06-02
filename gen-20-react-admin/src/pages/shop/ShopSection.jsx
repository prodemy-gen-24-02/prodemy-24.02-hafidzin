import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import ShopArticle from "../../components/shop/ShopArticle";
import Footer from "../../components/Footer";
import axios from "axios";
import useSWR from "swr";
import { Divide } from "@phosphor-icons/react";
import Loading from "../../Loading";

export default function ShopSection() {
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

  const fetchProduct = (url) =>
    axios.get(url).then((response) => response.data);

  const { data, isLoading } = useSWR(
    "http://localhost:3000/products",
    fetchProduct
  );
  const products = data;
  console.log(products);
  // console.log(products);
  return (
    <>
      <Navbar />
      {/* <Header /> */}
      {isLoading ? (
        <Loading />
      ) : (
        <ShopArticle section="Speciality coffee" slice={products} />
      )}
      <Footer />
    </>
  );
}
