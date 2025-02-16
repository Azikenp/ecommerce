import {  HeroBanner, Product } from "@/components";
import FooterBanner from '../components/FooterBanner';
import { client } from "@/lib/client";
import React from "react";

const Home = ({ products, bannerData }) => {
  // console.log(products, bannerData);

  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />

      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Get Speakers of many variations</p>
      </div>

      <div className="products-container">
        {products.map((product, i) => (
          <Product key={i} product={product} />
        ))}
      </div>

      <FooterBanner footerBanner= {bannerData && bannerData[0]} />
    </>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData },
  };
};

export default Home;
