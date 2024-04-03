import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

const Leftside = () => {

const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('/data/categories.json')
    .then(res => res.json())
    .then(data => setCategories(data))
  },[])

  return (
    <div>
      <h1 className='mb-5 text-3xl font-semibold text-dark-600'>All catagories</h1>
      {
        categories.map(data => {
          return (
            <NavLink className='hover:bg-gray-200 hover:text-dark-500 rounded-lg p-4 w-full text-dark-300 font-medium text-xl cursor-pointer' key={data.id}>
              <h1>{data.name}</h1>
            </NavLink>
          )
        })
      }
    </div>
  )
}

export default Leftside