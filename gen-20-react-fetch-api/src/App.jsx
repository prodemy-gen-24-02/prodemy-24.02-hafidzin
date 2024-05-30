import { Layout } from "@phosphor-icons/react";
import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/shop/Shop";
import ShopSection from "./pages/shop/ShopSection";
import ProductDetail from "./pages/detail/ProductDetail";
import { useState } from "react";
import axios from "axios";
import useSWR from "swr";

export default function App() {
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
    // <Layout>
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/shop/speciality_coffee" element={<ShopSection />} />
      <Route path="/productdetail/:id" element={<ProductDetail />} />
    </Routes>
    // </Layout>
  );
}
