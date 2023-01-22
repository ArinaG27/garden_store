import React, { useEffect } from 'react'
import { load_categories } from '../../requests/categories_req'
import { useSelector, useDispatch } from 'react-redux'
import CategoryCard from '../../components/CategoryCard';
import s from './index.module.css'


export default function CategoriesPage() {

  const dispatch = useDispatch();
  const categories = useSelector(state => state.category);

  useEffect(() => {
    dispatch(load_categories)
  }, []);

  return (
      <div>
        {
          categories.length === 0
          ? <p>'Categories are loading...'</p>
          :
    <div className={s.categories_block}>
      <h1>Categories</h1>
      <div className={s.categories_section}>
        {
          categories.map(el => <CategoryCard key={el.id} {...el} />)
        }
      </div>
    </div>
        }
    </div>
  )
}