import React from 'react'
import Header from './Components/Header'
import Navbar from './Components/Navbar'
import Leftside from './Components/Leftside'
import Rightside from './Components/Rightside'
import Latest from './Components/Latest'

const Home = () => {
  return (
    <div className='font-poppins space-y-5'>
      <Header/>
      <Latest/>
      <Navbar/>
      <div className='place-items-center grid lg:grid-cols-4 grid-cols-1 gap-4'>
        <div><Leftside/></div>
        <div className='lg:col-span-2'><h1 className='text-4xl'>middle</h1></div>
        <div><Rightside/></div>
      </div>
    </div>
  )
}

export default Home