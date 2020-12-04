import React from "react";
import { FaStar } from "react-icons/fa";
import "./css/CheckoutProduct.css";
import { useStateValue } from "./StateProvider";
import { REMOVE_FROM_BASKET } from "./reducer";

function CheckoutProduct(props) {
  const [{}, dispatch] = useStateValue();
  const removeItem = () => {
    console.log("props.id", props.item);
    dispatch({
      type: REMOVE_FROM_BASKET,
      id: props.item,
    });
  };
  return (
    <div className="checkoutproduct">
      <img className="checkoutproduct__image" src={props.image} />
      <div className="checkoutproduct__info">
        <p className="checkoutproduct__title">{props.title}</p>
        <p className="checkoutproduct__price">
          <small>$</small>
          <strong>{props.price}</strong>
        </p>
        <div className="checkoutproduct__rating">
          {Array(props.star)
            .fill()
            .map((_, i) => (
              <p key={i}>
                <FaStar color="#cd9042" />
              </p>
            ))}
        </div>
        <button onClick={removeItem}>Remove from list</button>
        <input type="hidden" value={props.id}></input>
      </div>
    </div>
  );
}

export default CheckoutProduct;
