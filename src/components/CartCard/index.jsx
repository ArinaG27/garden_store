import React from "react";
import s from "./index.module.css";
import line from "../../media/line.png";
import {
  cartIncrement,
  cartDecrement,
  deleteFromCart,
} from "../../store/reducers/cart";
import { useDispatch } from "react-redux";

export default function CartCard({
  id,
  title,
  price,
  image,
  count,
  discont_price,
}) {
  const dispatch = useDispatch();
  const increment = () => dispatch(cartIncrement(id));
  const decrement = () => dispatch(cartDecrement(id));
  const delete_from_cart = () => dispatch(deleteFromCart(id));

  const src_img = `http://localhost:3333${image}`;

  console.log(count);
  return (
    <div>
      <img src={line} alt="line" className={s.line} />
      <div className={s.cart_card}>
        <div>
          <img src={src_img} alt={title} />
        </div>

        <div>
          <p className={s.card_title}>{title}</p>

          <div className={s.triggers}>
            <button onClick={decrement}>-</button>
            <p> {count} </p>
            <button onClick={increment}>+</button>
          </div>
        </div>
        <p className={s.price}> {(price * count).toFixed(2)} $ </p>
        <div>
          <button className={s.cross} onClick={delete_from_cart}>
            x
          </button>
          <p className={s.discont_price}>
            {" "}
            {(discont_price * count).toFixed(2)} $
          </p>
        </div>
      </div>
    </div>
  );
}
