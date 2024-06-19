import React from "react";
import Navbar from "../../components/admin/Navbar";
import ProductList from "./sections/ProductList";

export default function Dashboard() {
  return (
    <div className="flex h-screen overflow-hidden ">
      <Navbar />
      <ProductList />
    </div>
  );
}
