import StockCard from "../StockCard";
import { products } from '../../data/products'
import s from './index.module.css'

export default function Stock() {

  return (
    <div className={s.categories} id='stock' >

      <div className={s.categories_block}>

        <h1>Discount</h1>

        <div className={s.categories_section}>
              {
              products.map(el=> <StockCard {...el} key={products.id}/>)
              }
        </div>
        
      </div>
      
    </div>
  )
}