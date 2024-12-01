import React from "react";
import { useSelector } from "react-redux";
import { selectFilteredProducts } from "../features/products/selectors";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";

const Catalog = () => {
  const products = useSelector(selectFilteredProducts);

  return (
    <div className="container mx-auto p-4">
      <SearchBar />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Catalog;
