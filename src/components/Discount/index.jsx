import React from 'react'
import dwarf from '../../media/dwarf.png'
import s from './index.module.css'

export default function Discount() {
  return (
    <section className={s.discount_section} id='discount'>
     <div className={s.discount_sub_section}> 
        <div>
            <img src= { dwarf } alt="dwarf" className={s.discount_img} />
        </div>

        <div className={s.discount} >
            <h1> Discount 5 % </h1>
            <p> off your first order </p>
            <br />
            <br />
            <form >
            <input type='text' name='phone' placeholder='+49' className={s.discount_form}/> <br />
            <br />
            <button  className={s.discount_button}> Get a discount </button>
            </form>
        </div>
      
      </div>
    </section>
  )
}

