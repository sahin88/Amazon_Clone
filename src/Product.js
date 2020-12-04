import React, { useState } from "react";
import "./css/Product.css";
import { FaStar } from "react-icons/fa";
import { useStateValue } from "./StateProvider";
import { ADD_TO_BASKET } from "./reducer";

function Product(props) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [{}, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: ADD_TO_BASKET,
      item: {
        id: props.id,
        price: props.price,
        title: props.title,
        image: props.image,
        star: props.star,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p className="product__title">{props.title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{props.price}</strong>
        </p>
        <div className="product__rating">
          {Array(props.star)
            .fill()
            .map((_, i) => {
              const ratingValue = i + 1;
              return (
                <div key={i}>
                  <input
                    type="radio"
                    name="star"
                    value={ratingValue}
                    onClick={() => setRating(ratingValue)}
                  />
                  <label>
                    <FaStar
                      className="product__ratingStar"
                      color={
                        ratingValue <= (rating || hover) ? "#ffc107" : "#e4e5e9"
                      }
                      onMouseEnter={() => setHover(ratingValue)}
                      onMouseLeave={() => setHover(null)}
                    />
                  </label>
                </div>
              );
            })}
        </div>
      </div>
      <img className="image" src={props.image} />
      <button onClick={addToBasket}>Add to Chard</button>
      <input type="hidden" value={props.id}></input>
    </div>
  );
}

export default Product;
