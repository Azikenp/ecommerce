import { urlFor } from "@/lib/client";
import React from "react";

const ProductDetails = ({ products, product }) => {
  const { image, name, details, price } = products;
  return (
    <div className="product-detail-container">
      <div>
        <div className="image-container">
          <img src={urlFor(image && image[0])} />
        </div>
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type == "product] {

  }`;
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" & slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]';

  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  return {
    props: { product, products },
  };
};

export default ProductDetails;
