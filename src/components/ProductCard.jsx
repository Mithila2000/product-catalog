import React from "react";

const ProductCard = ({ product }) => (
  <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md products-grid">
    <img src={product.image} alt={product.title} className="h-32 w-full object-contain product-image" />
    <h2 className="text-lg font-semibold dark:text-white">{product.title}</h2>
    <p className="text-gray-500 dark:text-gray-400">${product.price}</p>
    <p className="text-yellow-500">{`⭐ ${product.rating.rate}`}</p>
  </div>
);

export default ProductCard;
