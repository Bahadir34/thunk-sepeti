import React from "react";
import { useSelector } from "react-redux";
import Loader from "../../components/loader";
import Card from "./card";
import OrderBox from "./order-box";

const Cart = () => {
  const { isLoading, error, basket } = useSelector(
    (state) => state.basketReducer
  );

  console.log("BASKET : ", basket);
  return (
    <div className="container">
      <h1 className="text-2xl font-bold mb-5">SEPET</h1>

      <div>
        <div>
          {isLoading ? (
            <Loader />
          ) : error ? (
            <Error />
          ) : basket.length === 0 ? (
            <div>Bulunamadı</div>
          ) : (
            basket.map((item) => <Card item={item} key={item.id} />)
          )}
        </div>
        <OrderBox cart={basket} />
      </div>
    </div>
  );
};

export default Cart;
