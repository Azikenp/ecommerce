import { FooterBanner, HeroBanner , Product } from "@/components";
import React from "react";

const Home = () => {
  return (
    <>
      <HeroBanner />

      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Get Speakers of many variations</p>
      </div>

      <div className="products-container">
        {["Product1", "Product2"].map((product) => product)}
      </div>

      <FooterBanner />
    </>
  );
};

export default Home;
