import React from 'react'
import s from './index.module.css'

export default function StockCard({ img, title, newPrice, price, discount }) {
  return (
    <div className={s.category_home}>
      <img src={ img } alt={ title } className={s.photo}/>
      <div className={s.text}>
        <p className={s.newprice}> { newPrice }</p>
        <p className={s.price}> { price }</p>
        <p className={s.discount}> { discount }</p>
      </div>
      <p className={s.title}> { title }</p>
    </div>
  )
}