import React from 'react'
import s from './index.module.css'
import { Link } from 'react-router-dom'
import { addToCart } from '../../store/reducers/cart'
import { useDispatch } from 'react-redux'

export default function ProductCard({ title, image, id, discont_price, price }) {

  const src_img = `http://localhost:3333${image}`
  const product_url = `/product/${id}`

  const discount = `${Math.round(100-discont_price*100/price)}`

  const dispatch = useDispatch();

  const add_to_cart = () => dispatch(addToCart({id, title, image, price, discont_price }))
  
  
  return (
    <div className={s.product_card}>
      
      <div className={s.product}>

        <Link to={product_url}>
        <img src={ src_img } alt={ title } className={s.photo}/>
       </Link>

        <div className={s.text}>
          <p className={s.newprice}> { discont_price } $</p>
          <p className={s.price}> { price } &</p>
          <p className={s.discount}> {discount}%</p>
        </div>

        <Link to={product_url}>
        <p className={s.title}> { title }</p>
        </Link>
    </div>
      
      <button onClick={add_to_cart} className={s.button}>Add to cart</button>

  </div>
  )
}