import React from "react";
import "@/components/products-ui/ProductItems.css";

function ProductItems({ product, isFilter }) {
  // console.log("product:", product);
  const { id, description, title, image, price } = product;
  return (
    <div className={`product-item ${isFilter ? "product_width_update" : ""}`}>
      <div className="product_item_container">
        <div className="product-image_box">
          <img src={image} alt={title} className="product-image" />
          <span className="product-price">${price}</span>
        </div>
        <div className="product-details">
          <div className="title_heart">
            <h2 className="product-title line-clamp-1">{title}</h2>
            <svg
              // width="24"
              // height="24"
              className="heart-icon"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.62 20.8116C12.28 20.9316 11.72 20.9316 11.38 20.8116C8.48 19.8216 2 15.6916 2 8.69156C2 5.60156 4.49 3.10156 7.56 3.10156C9.38 3.10156 10.99 3.98156 12 5.34156C13.01 3.98156 14.63 3.10156 16.44 3.10156C19.51 3.10156 22 5.60156 22 8.69156C22 15.6916 15.52 19.8216 12.62 20.8116Z"
                stroke="#292D32"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <p className="product-description line-clamp-3">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductItems;
