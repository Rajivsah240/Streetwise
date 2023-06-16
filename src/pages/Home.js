import React from 'react'
import PageBanner from '../components/PageBanner'
import HomeCards from '../components/HomeCards'
import CommunitySlide from '../components/CommunitySlide'
import HomeLastSection from '../components/HomeLastSection'

const Home = () => {
  return (
    <>
    <PageBanner/>
    <HomeCards/>
    <CommunitySlide/>
    <HomeLastSection/>
    </>
  )
}

export default Home