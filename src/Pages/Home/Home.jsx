import React from 'react'
import Header from './Components/Header'
import Navbar from './Components/Navbar'
import Leftside from './Components/Leftside'
import Rightside from './Components/Rightside'
import Latest from './Components/Latest'
import { CiShare2, CiBookmark  } from "react-icons/ci";
import { FaRegEye } from "react-icons/fa";
import Rating from '@mui/material/Rating';
import {Link, useLoaderData} from 'react-router-dom'

const SingleNews = ({news}) => {
  return (
    <div className='font-poppins border rounded-lg space-y-4'>
      <div className='flex justify-between items-center p-4 bg-[#F3F3F3] rounded-t-lg'>
        <div className='flex gap-5'>
          <img src={news.author.img} alt="" className='size-10 rounded-full'/>
          <div>
            <h3 className='font-semibold text-dark-600 text-base'>{news.author.name}</h3>
            <p className='text-dark-400 font-normal text-sm'>{news.author.published_date}</p>
          </div>
        </div>
        <div className='flex gap-5 *:size-6'>
          <CiBookmark/>
          <CiShare2/>
        </div>
      </div>
      {/* news section */}
      <div className='space-y-4 p-4'>
        <h1 className='text-xl text-dark-600 font-bold'>{news.title}</h1>
        <img src={news.image_url} alt="" className='rounded-3xl w-full'/>
        <p className='max-h-80 overflow-ellipsis overflow-hidden'>{news.details.length > 200 ?<>{news.details.slice(0,200)} <Link className='text-orange-400' to={`/news/${news._id}`}> See more...</Link></> : news.details}</p>
        <hr className='border'/>
        <div className='flex justify-between'>
          <div className='flex items-center gap-2'>
            <Rating name="read-only" value={Math.round(news.rating.number)} readOnly />
            <span className='text-base font-semibold text-dark-400'>{news.rating.number}</span>
          </div>
          <div className='flex items-center gap-2'>
            <FaRegEye/>
            <span className='text-base font-semibold text-dark-400'>{news.total_view || 0}</span>
          </div>
        </div>
      </div>
      
    </div>
  )
}


const Home = () => {

  const newsData = useLoaderData();
  console.log(newsData);

  return (
    <div className='font-poppins space-y-5'>
      <Header/>
      <Latest/>
      <Navbar/>
      <div className='grid lg:grid-cols-4 grid-cols-1 gap-4'>
        <div><Leftside/></div>
        <div className='lg:col-span-2 space-y-4'>
          <h1 className='text-xl text-dark-500 font-semibold text-left'>Dragon News Home</h1>
          <div className='h-screen space-y-4 overflow-y-scroll'>
            {newsData.map(news => <SingleNews key={news._id} news = {news}/>)}    
          </div>
        </div>
        <div><Rightside/></div>
      </div>
    </div>
  )
}

export default Home