import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "./features/products/productSlice";
import Catalog from "./pages/Catalog";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Catalog />
    </div>
  );
};

export default App;
