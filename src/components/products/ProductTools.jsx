"use client";
import React, { useEffect, useState, useRef } from "react";
import "@/components/products-ui/ProductTools.css";

function ProductTools({ isFilter, setIsFilter, items }) {
  const [isToggle, setIsToggle] = useState(true);

  const dropdownRef = useRef(null); // Add ref for dropdown

  useEffect(() => {
    const handleClickOutside = (event) => {
      // console.log("event.target:", event.target);
      // Close only if click is outside the dropdown element
      // console.log(dropdownRef.current.contains(event.target));
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsToggle(true); // true = closed (based on your logic)
      }
    };

    window.addEventListener("click", handleClickOutside);

    // Cleanup on unmount
    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <section className="product-toolbar">
      <div className="product-toolbar__left">
        <span className="product-count">{items.length} ITEMS</span>

        <button
          className="filter-toggle"
          type="button"
          onClick={() => setIsFilter(!isFilter)}
        >
          <span className="filter-toggle__icon">‹</span>
          <span className="filter-toggle__text">
            {isFilter ? "SHOW FILTER" : "HIDE FILTER"}
          </span>
        </button>
      </div>

      <div
        className="product-toolbar__left__filter"
        onClick={() => setIsFilter(!isFilter)}
      >
        Filter
      </div>
      <span className="product-toolbar__line">
        <svg
          width="1"
          height="40"
          viewBox="0 0 1 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="0.5" y1="25" x2="0.5" stroke="#E5E5E5" />
        </svg>
      </span>

      <div className="product-toolbar__right" ref={dropdownRef}>
        <button
          className="sort-button"
          type="button"
          onClick={() => setIsToggle(!isToggle)}
        >
          <span className="sort-button__label">RECOMMENDED</span>
          <span className="sort-button__icon">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.72125 5.99978L7.06792 10.3464C7.58125 10.8598 8.42125 10.8598 8.93458 10.3464L13.2813 5.99978"
                stroke="#292D32"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </button>
        {/* <!-- Dropdown --> */}
        <div
          className={`sort__dropdown ${isToggle ? "hidden" : ""}`}
          role="listbox"
        >
          <button className="sort__option is-active" role="option">
            <span className="sort__check">✓</span>
            RECOMMENDED
          </button>

          <button className="sort__option" role="option">
            NEWEST FIRST
          </button>

          <button className="sort__option" role="option">
            POPULAR
          </button>

          <button className="sort__option" role="option">
            PRICE : HIGH TO LOW
          </button>

          <button className="sort__option" role="option">
            PRICE : LOW TO HIGH
          </button>
        </div>
      </div>
    </section>
  );
}

export default ProductTools;
