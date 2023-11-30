import React from 'react'
import { Main } from './Main'
import { About } from '../pages/About'
import { Services } from '../pages/Services'
import { Portfolio } from './../pages/Portfolio';

export const Home = () => {
  return (
    <div>
      <Main />
      <About />
      <Services />
      <Portfolio />
    </div>
  )
}
