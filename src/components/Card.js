import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({element,index,removeUrl}) => {
  return (
    <div className='bg-white my-2 w-[70%] px-4'>
        <p className='text-lg font-semibold'>{index+1}</p>
        <Link to={element.original_url} target='_blank'>
            <p className='text-lg font-semibold'>Long URL : <span className='text-blue-500 underline'>{element.original_url}</span></p>
        </Link>
        <Link to={element.original_url} target='_blank'>
            <p className='text-lg font-semibold'>Short URL : <span className='text-blue-500 underline'>{element.short_url}</span></p>
        </Link>
        <button onClick={()=>(removeUrl(index))} className='bg-red-500 text-white p-1 px-4 mb-2 font-semibold text-base rounded
                                  hover:bg-black transition duration-200 ease-in'
        >Delete</button>
    </div>
  )
}

export default Card;