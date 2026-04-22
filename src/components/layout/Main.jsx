"use client";
import React, { useState } from "react";
import "@/components/ui/Main.css";
import Hero from "@/components/layout/Hero";
import ProductTools from "../products/ProductTools";
import ProductList from "../products/ProductList";

function Main() {
  const [isFilter, setIsFilter] = useState(false);
  const [items, setItems] = useState([]);
  return (
    <>
      <Hero />
      <ProductTools
        isFilter={isFilter}
        setIsFilter={setIsFilter}
        items={items}
      />
      <ProductList isFilter={isFilter} items={items} setItems={setItems} />
    </>
  );
}

export default Main;
