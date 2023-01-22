import React from 'react'
import logo from '../../media/logo.png'
import shopping_bag from '../../media/shopping_bag.png'
import s from './index.module.css'
import { Link } from 'react-router-dom'


export default function Nav() {
  return (
    <header className={s.header}>
      <div className={s.logo_block}>
        <Link to='/'><img src={logo} alt="logo" /></Link>
        <Link to='/category'><div>Catalog</div></Link>
      </div>

      <nav>
        <ul className={s.nav_block}>
          <li><Link to='/category'>Categories</Link></li>
          <li> <a href="/#discount">Coupon</a></li>
          <li><a href="/#stock">Sale</a></li>
          <li><a href="#footer"> Contacts</a></li> 
          <li><Link to='/cart'><img src={shopping_bag} alt="shopping_bag" /></Link></li>
        </ul>
      </nav>
    </header>
  )
}