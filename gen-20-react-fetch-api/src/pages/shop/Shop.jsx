import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import Equipment from "../../components/home/Equipment";
import Footer from "../../components/Footer";
import ShopArticle from "../../components/shop/ShopArticle";
import axios from "axios";
import useSWR from "swr";

export default function Shop() {
  // const fetchProduct = (url) =>
  //   axios.get(url).then((response) => response.json());

  // const products = useSWR("http://localhost:3000/products", fetchProduct);
  // console.log(products.data);

  const [products, setProduct] = useState([]);
  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:3000/products");
      setProduct(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log(products);
  return (
    <>
      <Navbar />
      {/* <Header /> */}
      {/* {products.data?.map((products) => { */}
      <ShopArticle section="Speciality coffee" slice={products.slice(0, 3)} />;
      {/* })} */}
      <Equipment />
      <Footer />
    </>
  );
}
