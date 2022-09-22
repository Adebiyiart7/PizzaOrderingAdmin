import React from "react";

/// LOCAL IMPORTS
import image from "../../assets/images/img-06.jpg";

const Product = ({ product }) => {
  return (
    <div className="inner">
      <div className="left">
        <img src={image} alt="Display" />
      </div>
      <div className="right">
        <h3 className="name">{product.name}</h3>
        <p className="description">
          {window.innerWidth <= 425
            ? product.description.length <= 40
              ? product.description
              : `${product.description.slice(0, 40)}...`
            : product.description}
        </p>
        <div className="footer">
          <h3 className="price">${product.price}</h3>
          <button className="button">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
