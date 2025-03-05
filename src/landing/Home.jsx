import React from "react";
import Navbar from "../components/navbar/main-navbar/Navbar";
import Body from "../components/body/Body";
import ProductList from "../components/products/ProductList";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Body />
      <ProductList />
    </div>
  );
};

export default Home;
