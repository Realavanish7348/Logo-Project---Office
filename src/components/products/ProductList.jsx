"use client";
import React, { useState, useEffect } from "react";
import "@/components/products-ui/ProductList.css";
import ProductItems from "./ProductItems";
import ProductFilter from "./ProductFilter";
import Loading from "@/components/ui/Loading";

function ProductList({ isFilter, setIsFilter, items, setItems }) {
  const [selected, setSelected] = useState({}); // selcted option current by checkboxes
  const [selectAllState, setSelectAllState] = useState({}); // selected filter section state true/false
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getProducts() {
      const URL = "https://fakestoreapi.com/products";
      try {
        setLoading(true);
        const response = await fetch(URL);

        if (!response.ok) {
          throw new Error("Failed to Fetch Products");
        }
        const data = await response.json();
        setItems(Array.isArray(data) ? data : []);
      } catch (err) {
        console.log("err:", err);
      } finally {
        setLoading(false);
      }
    }
    getProducts();
  }, []);
  // console.log("Product list::", items);

  return (
    <section
      className={`product_list_section ${isFilter ? "noflex_update" : ""}`}
    >
      <div className="product-filter">
        <ProductFilter
          isFilter={isFilter}
          setIsFilter={setIsFilter}
          selected={selected}
          setSelected={setSelected}
          selectAllState={selectAllState}
          setSelectAllState={setSelectAllState}
        />
      </div>
      <div className="product-list">
        {!loading ? (
          items
            .filter((product) => {
              const selectedCategories = selected["idealFor"] || [];
              // If no checkboxes selected, show all products
              if (selectedCategories.length === 0) return true;
              // Otherwise, show only matching categories
              return selectedCategories.includes(product.category);
            })
            .map((product) => (
              <ProductItems
                key={product.id}
                product={product}
                isFilter={isFilter}
              />
            ))
        ) : (
          <Loading />
        )}
      </div>
    </section>
  );
}

export default ProductList;
