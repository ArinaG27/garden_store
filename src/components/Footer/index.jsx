import React from 'react'
import s from './index.module.css'
import instogram from '../../media/instogram.png'
import whatsapp from '../../media/whatsapp.png'


export default function Footer() {
  return (
    <footer className={s.footer_section}>
      <div className={ s.footer_block}>
        <div id='footer'>
            <p className={s.kontakts}>Contacts</p>
            <p className={s.tel}>+1 999 999 99 99</p> <br /> 
            <div className={s.instogram}>
              <img src={instogram} alt="instogram_img"/>
              <img src={whatsapp} alt="whatsapp_img"/>
              <p>Instagram</p> 
              <p>WhatsApp</p>
            </div>
        </div>
        <div>
            <p className={s.adresse} >Address</p>
            <p className={s.town}>151 Lawrence Street <br /> Brooklyn NY 11201</p> <br />
            <p className={s.working}>Working hours</p>
            <p className={s.around}> 24 hrs</p>
        </div>
      </div>
      
    </footer>
  )
}