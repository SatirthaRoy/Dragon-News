import React from 'react'
import {useParams, useLoaderData, useNavigate} from 'react-router-dom'
import Header from '../Home/Components/Header';
import Rightside from '../Home/Components/Rightside';
import Navbar from '../Home/Components/Navbar';

const News = () => {
  const navigate = useNavigate();
  const {id} = useParams();

  const news = useLoaderData().find(sNews => sNews._id === id);
  console.log(news);
  return (
    <div className='lg: w-11/12 mx-auto'>
      <Header/>
      <Navbar/>
      <div className='grid lg:grid-cols-4 gap-4'>
        <div className='col-span-3'>
          <h1 className='text-xl text-dark-600 font-semibold mb-5'>Dragon News</h1>
          <div className='border rounded-2xl p-4 space-y-8'>
            <img src={news.image_url} alt="" className='w-full'/>
            <h1 className='text-2xl font-bold text-dark-600'>{news.title}</h1>
            <p className='text-base text-dark-400 font-medium'>{news.details}</p>
            <button className='p-5 bg-pink-500 text-white font-semibold text-base' onClick={() => navigate('/')}>All news in this category</button>
          </div>
        </div>
        <Rightside/>
      </div>
    </div>
  )
}

export default News