import React from "react";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import Equipment from "../../components/home/Equipment";
import Footer from "../../components/Footer";
import ShopArticle from "../../components/shop/ShopArticle";
import { products } from "../../components/data/objectList";

export default function Shop() {
  return (
    <>
      <Navbar />
      {/* <Header /> */}
      <ShopArticle section="Speciality coffee" slice={products.slice(0, 3)} />
      <Equipment />
      <Footer />
    </>
  );
}
