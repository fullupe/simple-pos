import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Head from 'next/head'

function LayOut({children}) {
  return (
    <div>
        <Head>
        <title>simple pos</title>
      </Head>
      <header>
        <Navbar/>
      </header>
      <main className=" w-full m-auto">
       {children}
      </main>

      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default LayOut
