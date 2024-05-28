import { Layout } from "@phosphor-icons/react";
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/shop/Shop";
import ShopSection from "./pages/shop/ShopSection";
import ProductDetail from "./pages/detail/ProductDetail";

export default function App() {
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
