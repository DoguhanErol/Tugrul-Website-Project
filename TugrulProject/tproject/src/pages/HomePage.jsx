import React from 'react'
import FlowbiteCarousel from '../components/HomePageComponents/FlowbiteCarousel'
import WelcomeText from '../components/HomePageComponents/WelcomeText'
import AssuranceIcons from '../components/HomePageComponents/AssuranceIcons'
import ImagesNavigation from '../components/HomePageComponents/ImagesNavigation'

export default function HomePage() {
  return (
    <>
    <FlowbiteCarousel />
    <WelcomeText />
    <AssuranceIcons />
    <ImagesNavigation />
    </>
  )
}
