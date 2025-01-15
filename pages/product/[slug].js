import { urlFor } from "@/lib/client";
import React from "react";

const ProductDetails = () => {
  return (
    <div className="product-detail-container">
      <div>
        <div className="image-container">
          <img src="" />
        </div>
      </div>
    </div>
  );
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" & slug.current == '${slug}][0]`;
  const productsQuery  = '*[_type == "product"]'

  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);


  return {
    props: { product, products },
  };
};

export default ProductDetails;
