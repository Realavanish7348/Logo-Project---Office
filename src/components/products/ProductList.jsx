"use client";
import React, { useState, useEffect } from "react";
import "@/components/products-ui/ProductList.css";
import ProductItems from "./ProductItems";
import ProductFilter from "./ProductFilter";

function ProductList({ isFilter }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const URL = "https://fakestoreapi.com/products";
      try {
        const response = await fetch(URL);

        if (!response.ok) {
          throw new Error("Failed to Fetch Products");
        }
        const data = await response.json();
        setItems(Array.isArray ? data : []);
      } catch (err) {
        console.log("err:", err);
      }
    }
    getProducts();
  }, []);
  console.log("Product list::", items);

  return (
    <section className="product_list_section">
      <div className="product-filter">
        <ProductFilter isFilter={isFilter} />
      </div>
      <div className="product-list">
        {items.map((products) => (
          <ProductItems key={products.id} product={products} />
        ))}
      </div>
    </section>
  );
}

export default ProductList;
