import React from 'react'
import Categories from '../../components/Categories';
import Discount from '../../components/Discount';
import Banner from '../../components/Banner';
import Stock from '../../components/Stock';

export default function HomePage() {
  return (
    <div> 
        <Banner />
        <Categories />
        <Discount />
        <Stock />
      </div>
  )
}