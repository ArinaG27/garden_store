import React from 'react'
import s from './index.module.css'
import { Link } from 'react-router-dom'

export default function CategoryCard({ title, image, id }) {

  const src_img = `http://localhost:3333${image}`
  const link = `/category/${id}`

  return (
    <Link to={ link }>
      <div>
        <div className={s.category_card}>
          <img src= {src_img} alt={title} />
        </div>
          <p className={s.category_title}>{ title }</p>
      </div>
    </Link>
  )
}