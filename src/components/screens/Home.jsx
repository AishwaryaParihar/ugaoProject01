import React from 'react'
import Hero from './homeComponents/Hero'
import Offers from './homeComponents/Offers'
import Bestseller from './homeComponents/Bestseller'
import Shopthelook from './homeComponents/Shopthelook.jsx'

function Home() {
  return (
    <div>
      <Hero/>
      {/* <Offers></Offers> */}
      <Bestseller></Bestseller>
      <Shopthelook></Shopthelook>
      <h1 className="text-5xl font-bold underline text-blue-400">
      Hello world!
    </h1>
    </div>
  )
}

export default Home
