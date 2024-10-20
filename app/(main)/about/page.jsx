import React from 'react'
import Hero from '../../components/About/Hero'
import Welcome from '../../components/About/Welcome'
import Meet from '../../components/About/Meet'
import Team from '../../components/About/Team'
const About = () => {
  return (
    <div className=' mt-32'>
        <Hero />
        <Welcome />
        <Meet />
        <Team />
    </div>
  )
}

export default About