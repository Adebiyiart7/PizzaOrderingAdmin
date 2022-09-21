import React from "react";
import image from "../../assets/images/pizza_img5.png";

const Prodcuct = () => {
  return (
    <div className="inner">
      <div className="left">
        <img src={image} alt="Display" />
      </div>
      <div className="right">
        <h3 className="name">Biggy Pizza</h3>
        <p className="description">Lorem ipsum dolor sit amet consectetur.</p>
        <div className="footer">
          <h3 className="price">$80.00</h3>
          <button className="button">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default Prodcuct;
