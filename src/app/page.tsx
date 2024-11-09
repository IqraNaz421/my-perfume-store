
import Hero from '@/components/Hero'
import './globals.css';


import Card from '@/components/Card'
import About from '@/components/About'
import Story from '@/components/Story'
import React from 'react'


const page = () => { 
  return (
    <div> 
      <Hero/>
      <Card/>
      <About/>
      <Story/>
      
      
    </div>
  )
}

export default page
