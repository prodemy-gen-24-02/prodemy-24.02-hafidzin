import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Catalogue from "../components/home/Catalogue";
import Equipment from "../components/home/Equipment";
import Footer from "../components/Footer";
import Main from "../components/home/Main";

export default function Home() {
  return (
    <>
      <Navbar />
      {/* <Header /> */}
      <Main />
      <Catalogue type="Catalogue" />
      <Equipment />
      <Footer />
    </>
  );
}
