import React from 'react'
import { Helmet } from 'react-helmet'
import HeroSection from './HeroSection'
import Professionals from './Professionals'

const Index = () => {

  return (
    <>
    <Helmet>
    <title>Find Professionals</title>
    </Helmet>
    <HeroSection/>
    <Professionals/>
    </>
  )
}

export default Index