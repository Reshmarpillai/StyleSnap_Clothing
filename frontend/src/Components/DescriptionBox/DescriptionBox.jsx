import React from "react";
import "./DescriptionBox.css";

export const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews(122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          StyleSnap is a Ecommerce websites act like online stores, letting you
          browse and purchase cloth items on your choice with secure online
          payments. It's revolutionized shopping, offering convenience and wider
          selection than ever before.
        </p>
        <p>
          Ecommerce, short for electronic commerce, is basically buying and
          selling stuff online. This can be anything from physical products
          delivered to your door to digital downloads or even services.
        </p>
      </div>
    </div>
  );
};
