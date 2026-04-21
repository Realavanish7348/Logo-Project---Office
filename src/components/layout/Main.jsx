"use client";
import React, { useState } from "react";
import "@/components/ui/Main.css";
import Hero from "@/components/layout/Hero";
import ProductTools from "../products/ProductTools";
import ProductList from "../products/ProductList";

function Main() {
  const [isFilter, setIsFilter] = useState(true);
  return (
    <>
      <Hero />
      <ProductTools isFilter={isFilter} setIsFilter={setIsFilter} />
      <ProductList isFilter={isFilter} />
    </>
  );
}

export default Main;
