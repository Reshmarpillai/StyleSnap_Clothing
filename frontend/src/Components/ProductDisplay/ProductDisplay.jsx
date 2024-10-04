import React, { useContext } from "react";
import "./ProductDisplay.css";
import star_fill from "../Assets/star_icon.png";
import star_dull from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";

export const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  return (
    <div className="productDisplay">
      <div className="productDisplay-left">
        <div className="productDisplay-imageList">
          <img src={product.image} alt="product_image" />
          <img src={product.image} alt="product_image" />
          <img src={product.image} alt="product_image" />
          <img src={product.image} alt="product_image" />
        </div>
        <div className="productDisplay-image">
          <img
            className="productDisplay-main-img"
            src={product.image}
            alt="product_image"
          />
        </div>
      </div>
      <div className="productDisplay-right">
        <h1>{product.name}</h1>
        <div className="productDisplay-star">
          <img src={star_fill} alt="" />
          <img src={star_fill} alt="" />
          <img src={star_fill} alt="" />
          <img src={star_dull} alt="" />
          <img src={star_dull} alt="" />
          <p>(243)</p>
        </div>
        <div className="productDisplay-prices">
          <div className="productDisplay-price-old">${product.old_price}</div>
          <div className="productDisplay-price-new">${product.new_price}</div>
        </div>
        <div className="productDisplay-Discription">
          {" "}
          <h4>Product Details</h4>
          <ul>
            <li>Sleeves Included : Yes</li>
            <li>Occasion : Festive & Party</li>
            <li>Style Code : 2PU-CCB-14690-Beige</li>
            <li>Color : Beige</li>
            <li>Secondary Color : Beige</li>
            <li>Region : Surat in Gujarat</li>
            <li> Inner Lining : Indo-Cotton</li>
          </ul>
        </div>
        <div className="productDisplay-size">
          <h4>Select Sizes</h4>
          <div className="productDisplay-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button
          onClick={() => {
            addToCart(product.id);
          }}
        >
          ADD TO CART
        </button>
        <p className="productDisplay-category">
          <span>Category : </span> Top, T-shirt
        </p>
        <p className="productDisplay-category">
          <span>Tags : </span> Mordern, Latest, Trendy Collections
        </p>
      </div>
    </div>
  );
};
