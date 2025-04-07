import React from 'react'
import '../css/Home.css'

import Inicio from '../../Components/jsx/Inicio'
import Banner from '../../Components/jsx/Banner'
export default function Home() {
  return (
    <div className='div-home'>
      <Banner />
      <Inicio />
    </div>
  )
}
