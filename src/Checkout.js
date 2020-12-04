import React from "react";
import { useStateValue } from "./StateProvider";
import "./css/Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img className="checkout__add" src="add.jpg" />

        {basket?.length === 0 ? (
          <div>
            <h2>You did not purchase anything go to Cash point</h2>
          </div>
        ) : (
          <div>
            <h2> Your Shopping Basket</h2>
            {basket.map((item, index) => (
              <CheckoutProduct
                key={index}
                item={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.star}
              />
            ))}
          </div>
        )}
      </div>

      {basket.length > 0 ? (
        <div className="checkout__right">
          <Subtotal />
        </div>
      ) : null}
    </div>
  );
}

export default Checkout;
