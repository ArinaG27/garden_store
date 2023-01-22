import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartCard from '../../components/CartCard';
import s from './index.module.css'
import { clearCart } from '../../store/reducers/cart';

export default function CartPage() {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  console.log(cart);

  return (
    <div>
      <p> Card </p>
      <p>Homepage/ Card  </p>
      <p> вернуться в магазин </p>
    <div className={s.card_section}>
    {
        cart.length === 0 
        ? <div className={s.empty}>The cart is empty</div>
        : <div className={s.cart_container}>
              {
                cart.map(el => <CartCard key={el.id} {...el} />)
              }
          </div>
      }

      <div>      
        <div className={s.button_block}>
        <p>
          <span>Total:</span>
          {
            cart.reduce((prev, {price, count}) => prev + price * count , 0)
          }
        </p>

      </div>
        <form >
            <input type='text' name='phone' placeholder=' ваш номер телефона' className={s.discount_form}/> <br />
            <br />
            <button  className={s.discount_button}> Заказать </button>
        </form>
      </div>
       
    </div>
    <div><button onClick={() => dispatch(clearCart())}>Clear the cart</button></div>
    </div>
  )
}