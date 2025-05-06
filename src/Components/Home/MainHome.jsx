import React from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
import FlashSales from './FlashSales'
import Browsectg from './Browsectg'
import Sellingproduct from './Sellingproduct'
import Categories from './Categories'
import ExploreProducts from './ExploreProducts'
import NewArrival from './NewArrival'
import Service from './Service'
import Footer from './Footer'
import ItemManager from '../ItemManager'

export default function MainHome() {
  return (
    <>
      <Banner/>
      {/* <ItemManager/> */}
      <FlashSales/>
      <Browsectg/>
      <Sellingproduct/>
      <Categories/>
      <ExploreProducts/>
      <NewArrival/>
      <Service/>

    </>
  )
}
