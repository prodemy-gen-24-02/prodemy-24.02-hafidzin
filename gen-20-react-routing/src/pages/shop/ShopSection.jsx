import React from "react";
import Navbar from "../../components/Navbar";
import ShopArticle from "../../components/shop/ShopArticle";
import Footer from "../../components/Footer";
import { products } from "../../components/data/objectList";

export default function ShopSection() {
  return (
    <>
      <Navbar />
      {/* <Header /> */}
      <ShopArticle section="Speciality coffee" slice={products} />
      <Footer />
    </>
  );
}
