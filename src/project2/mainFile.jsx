import React from 'react'
import Nav from './Nav'
import FeatRecipies from './Hero/FeatRecipies'
import Categories from './Categories'
import LearnMore from './LearnMore'
import Instagram from './Instagram'
import MoreRecipes from './MoreRecipes'
import SubscribeCard from './SubscribeCard'
import Footer from './Footer'
import Recipes from './Recepies/Recipes'

const MainFile = () => {
  return (
    <>
     <Nav/>
     <FeatRecipies/>
     <Categories/>
     <Recipes/>
     <LearnMore/>
     <Instagram/>
     <MoreRecipes/>
     <SubscribeCard/>
     <Footer/>
    </>
  )
}

export default MainFile