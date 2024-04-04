import React from 'react'
import {useParams, useLoaderData} from 'react-router-dom'
import Header from '../Home/Components/Header';
import Rightside from '../Home/Components/Rightside';

const News = () => {
  const {id} = useParams();

  const news = useLoaderData().find(sNews => sNews._id === id);
  console.log(news);
  return (
    <div className='lg: w-11/12 mx-auto'>
      newsssss {id}
      <Header/>
      <div className='grid lg:grid-cols-4'>
        <div className='col-span-3'>
          <h1 className='text-xl text-dark-600 font-semibold'>Dragon News</h1>
        </div>
        <Rightside/>
      </div>
    </div>
  )
}

export default News