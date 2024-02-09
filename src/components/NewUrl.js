import axios from 'axios'
import React from 'react'
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'

const NewUrl = ({encode,url,setActive,active,user,setUser}) => {
  async function urlUpdater(){
    const data={
      email:user.email,
      option:{
        original_url:url,
        short_url:encode
      },
    }
    const result=await axios.post(`${process.env.REACT_APP_BACKEND_URL}/updateUrl`,data);
    toast.success(result?.data.message);
    const userData=await axios.get(`${process.env.REACT_APP_BACKEND_URL}/getUser/${user.email}`);
    setUser(userData?.data?.user)

  }
  return (
    <div>
        <h1 className='text-4xl drop-shadow-md font-bold text-blue-800 text-center my-5'>URL Shortner</h1>
        <div className='flex flex-col gap-2 mt-6 items-start px-2 justify-center bg-white w-[80%] mx-auto shadow-lg rounded '>
            <Link to={url} target='_blank'>
                <p className='text-lg font-semibold my-4'>Long URL : <span className='text-blue-500 underline'>{url}</span></p>
            </Link>
            <Link to={url} target='_blank'>
                <p className='text-lg font-semibold'>Short URL : <span className='text-blue-500 underline'>{encode}</span></p>
            </Link>
            <div className='flex flex-row gap-2'>
              <button onClick={()=>(setActive(!active))} className='bg-blue-500 text-white my-4 py-2 px-8 rounded-md text-md font-bold
              hover:bg-blue-600 transition-all duration-200'>Shorten Another URL</button>
              <button onClick={urlUpdater} className='bg-blue-500 text-white my-4 py-2 px-8 rounded-md text-lg font-bold
              hover:bg-blue-600 transition-all duration-200'>Add URL</button>
            </div>
        </div>
    </div>
  )
}

export default NewUrl