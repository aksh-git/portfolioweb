import React from 'react'
import Head from 'next/head'

function resume() {
  return (
    <>
    <Head>
      <title>Resume - Akash Yadav | Portfolio</title>
      <meta name="description" content="Hey there!! i'm Akash Yadav, A passionate fullstack developer from India. check out my profile here.." />
      <meta name="keywords" content="portfolio, full, stack, web, developer, akash yadav"/>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className='container'>
      <div className='hbadge'>
        <span className='hbh'>Resume</span>
        <span className='hbt'></span>
      </div>
    </div>
    </>
  )
}

export default resume