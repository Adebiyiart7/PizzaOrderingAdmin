import React from "react";

// LOCAL IMPORTS
import "./Home.css";

const Landing = () => {
  return (
    <div className="landing">
      <h1 className="text-zero">Order</h1>
      <h1 className="text-one">Fast Food</h1>
      <h3 className="text-two">We Guarantee</h3>
      <h3 className="text-three">30 Minutes Delivery!</h3>
      <h3 className="text-four">
        Call <span style={{ color: "#FFF" }}>09029242729</span>
      </h3>
    </div>
  );
};

export default Landing;
