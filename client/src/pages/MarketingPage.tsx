import React from 'react'
import Heading from '../components/heading'
import Heros from '../components/Heros'
import Footer from '../components/Footer'
import Layout from '../components/Layout'
const MarketingPage = () => {
  return (
    <Layout>
    <div className="min-h-full flex flex-col ">
      <div className="flex flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1 px-6 pb-10 ">
        <Heading />
        <Heros />
      </div>
      <Footer />
    </div>
    </Layout>
  )
}

export default MarketingPage
