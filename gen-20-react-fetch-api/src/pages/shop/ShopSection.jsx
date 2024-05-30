import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import ShopArticle from "../../components/shop/ShopArticle";
import Footer from "../../components/Footer";
import axios from "axios";

export default function ShopSection() {
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

  // console.log(products);
  return (
    <>
      <Navbar />
      {/* <Header /> */}
      <ShopArticle section="Speciality coffee" slice={products} />
      <Footer />
    </>
  );
}
