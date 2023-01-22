import React, { useEffect } from 'react'
import { load_categories } from '../../requests/categories_req'
import { useSelector, useDispatch } from 'react-redux'
import CategoryCard from '../../components/CategoryCard';
import { Link } from 'react-router-dom'
import s from './index.module.css'

export default function Categories() {

  const dispatch = useDispatch();
  const categories = useSelector(state => state.category);

  useEffect(() => {
    dispatch(load_categories)
  }, []);

  return (
  <section className={s.categories} >
    <div className={s.categories_block}>
      <h1>Categories</h1>
      <Link to='/category'><p className={s.all_categories}>All categories</p></Link>

      <div className={s.categories_section}>
        {
          categories.map((el, index) => index >=0 && index <=3 ? <CategoryCard key={el.id} {...el} /> : '')
        }
       </div>
      </div>
    </section>
  )
}

