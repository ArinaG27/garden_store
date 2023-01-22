import React from 'react'
import s from './index.module.css'
import { cartIncrement, cartDecrement } from '../../store/reducers/cart'
import { useDispatch } from 'react-redux'

export default function CartCard({ id, title, price, image, count, discont_price }) {

  const dispatch = useDispatch();
  const increment = () => dispatch(cartIncrement(id));
  const decrement = () => dispatch(cartDecrement(id));

  const src_img = `http://localhost:3333${image}`

  console.log(count);
  return (
    <div className={s.cart_card}>
      <div>
        <img src={src_img} alt={title} />
      </div>
      <div>
      <p>{ title }</p>      
      <div className={s.triggers}>
        <button onClick={increment}>+</button>
        <p> { count } </p>
        <button onClick={decrement}>-</button>
      </div>
      </div>
      <div>
        <p> {price * count}</p>
        <p> {discont_price * count}</p>
      </div>
    </div>
  )
}