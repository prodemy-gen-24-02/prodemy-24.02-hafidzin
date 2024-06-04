import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/shop/Shop";
import ShopSection from "./pages/shop/ShopSection";
import ProductDetail from "./pages/detail/ProductDetail";
import Dashboard from "./pages/admin/Dashboard";
import InputForm from "./pages/admin/sections/InputForm";
import EditFormPage from "./pages/admin/sections/EditFormPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/admin" element={<Navigate to="/admin/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/shop/speciality_coffee" element={<ShopSection />} />
      <Route path="/productdetail/:id" element={<ProductDetail />} />
      <Route path="/admin/home" element={<Dashboard />} />
      <Route path="/admin/form" element={<InputForm />} />
      <Route path="/admin/form/edit/:id" element={<EditFormPage />} />
    </Routes>
  );
}
