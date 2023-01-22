import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { load_products } from '../../requests/products_req';
import { sortProducts } from '../../store/reducers/products';
import { searchPrice } from '../../store/reducers/products'

import ProductCard from '../../components/ProductCard';
import s from './index.module.css'

export default function ProductsPage() {
  const { id } = useParams();
 
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);
  const categories = useSelector(state => state.category);
 

  useEffect(() => {
    dispatch(load_products(id))
  }, []);


  const category_title = categories[id-1].title

  const order = event => dispatch(sortProducts(event.target.value));

  const search_price = event => {
    event.preventDefault();
    const { min, max } = event.target;
    const min_value = min.value || 0;
    const max_value = max.value || Infinity;
    dispatch(searchPrice({ min_value, max_value }));
  }

  return (
    
    <div className={s.products_page}>
      <h2>{ category_title }</h2>
      
      <div className={s.sort_section}>
        <div>
          <span>Price:</span>
          <form onSubmit={search_price} className={s.search_form}>
            <input type='number' name='min' placeholder='from' min='0' />
            <input type='number' name='max' placeholder='to' />
            <button>search</button>
          </form>
        </div>

        <div>
          <span>Sort:</span>
          <select onInput={order} className={s.sort_select}>
            <option value='default'>default</option>
            <option value='title'>name</option>
            <option value='price'>price</option>
          </select>
        </div>
    </div>
      <div className={s.products_container}>
        {
         products
          .filter(el => !el.hide_mark)
          .map(el => <ProductCard key={el.id} {...el} />)
        }
      </div>
    </div>
  )
}