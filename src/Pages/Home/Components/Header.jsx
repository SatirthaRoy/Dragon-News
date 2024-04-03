import React from 'react'
import moment from 'moment';

const Header = () => {
  const dateStr = moment().format("dddd, MMMM D, YYYY");
  const day = dateStr.split(' ')[0];
  const otherThanDay = dateStr.split(' ').slice(1).join(' ');

  return (
    <div className='text-center'>
      <h1 className='font-old text-6xl mt-2 text-dark-500'>The Dragon News</h1>
      <p className='text-lg text-dark-400 font-poppins font-normal'>Journalism Without Fear or Favour</p>
      <p className='text-xl text-dark-400 font-poppins font-medium'><span className='text-dark-600'>{day} </span>{otherThanDay}</p>
    </div>
  )
}

export default Header