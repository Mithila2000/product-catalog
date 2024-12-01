import React from "react";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "../features/products/productSlice";

const SearchBar = () => {
  const dispatch = useDispatch();

  return (
    <input
      type="text"
      placeholder="Search products..."
      onChange={(e) => dispatch(setSearchQuery(e.target.value))}
      className="p-2 w-full rounded-lg border dark:bg-gray-700 dark:text-white"
    />
  );
};

export default SearchBar;
