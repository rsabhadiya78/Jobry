import React from 'react'
import Banner from '../components/Banner'
import CalltoAction from '../components/CalltoAction'
import FeaturedJobs from '../components/FeaturedJobs'
import HappyCandidates from '../components/HappyCandidates'
import PopCategories from '../components/PopCategories'
import TopHiringCompanies from '../components/TopHiringCompanies'

const Home = () => {
  return (
    <>
      <Banner />
      <PopCategories />
      <CalltoAction />
      <FeaturedJobs />
      <HappyCandidates />
      <TopHiringCompanies />
    </>
  )
}

export default Home