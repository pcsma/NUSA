import React from 'react'
import Intro from '../components/Intro'
import FeaturedProjects from '../components/FeaturedProjects'

const Home = () => {
  return (
    <>
      <div id="next-section">
      <Intro />
      </div>
      <section id='featured-projects'>
        <FeaturedProjects />
      </section>
    </>
  )
}

export default Home;
