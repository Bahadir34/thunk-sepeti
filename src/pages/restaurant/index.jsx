import React from "react";
import RestaurantDetail from "./restaurant-detail";
import RestaurantProduct from "./restaurant-product";

const Restaurant = () => {
  return (
    <div>
      <div className="shadow">
        <div className="container">
          <RestaurantDetail />
        </div>
      </div>
      <div>
        <div className="container ">
          <RestaurantProduct />
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
