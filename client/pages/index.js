import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
    </Head>

    <div className='hero'>
      <h1 className='title'>Welcome to React Riots</h1>
      <p className='description'>
        To get started, edit <code>pages/index.js</code> and save to reload.
      </p>
      <h2>You Can Sleep more later </h2>
    </div>

    <style jsx>{`
      .hero {
        text-align: center;
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
      }
      .title,
      .description {
        text-align: center;
      }
    `}</style>
  </div>
)

export default Home
