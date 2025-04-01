import React from 'react'
import '../css/Home.css'

import Perfumes from '../../Components/jsx/Perfumes'
import Banner from '../../Components/jsx/Banner'
export default function Home() {
  return (
    <div className='div-home'>
      <Banner />
      <Perfumes />
    </div>
  )
}
