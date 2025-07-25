import React from "react";
import product from "./product";

const Image = () => (
  <img
    src={product.image}
    alt={product.name}
    className="product-image"
    style={{ width: "100%", borderRadius: "10px" }}
  />
);

export default Image;
