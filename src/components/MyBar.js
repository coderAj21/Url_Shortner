import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';
import toast from 'react-hot-toast';

const MyBar = ({user,setUser}) => {
  const [urlData,setUrlData]=useState([]);
  async function fetchApi(){
    const userData=await axios.get(`http://localhost:4000/api/v1/getUser/${user.email}`);
    setUrlData(userData.data.user.url);
    console.log(urlData)
  }
  async function removeUrl(id){
    try{
      const data=urlData.filter((element,index)=>(index!==id));
      const info={
        email:user.email,
        option:urlData[id],
      }
      const result=await axios.put("http://localhost:4000/api/v1/deleteUrl",info);
      
      if (result.data.success){
        toast.success(result.data.message);
      }
      const userData=await axios.get(`http://localhost:4000/api/v1/getUser/${user.email}`);
      setUser(userData?.data?.user);
      setUrlData(data);

    }catch(error){
      console.log(error.response.data.message);
      toast.error(error.response.data.message);
    }
    
  }
  useEffect(()=>{
    fetchApi();
  },[])
  return (
    <div className='bg-slate-200 w-[85%] h-screen pl-[15%] flex flex-col'>
     <h1 className='text-4xl drop-shadow-md font-bold text-blue-800 text-center my-5'>My URL</h1>
      <div className='flex flex-col items-start justify-center w-full mx-[5%]  '>
        {
          urlData.map((element,index)=>{
            return( <Card element={element} index={index} removeUrl={removeUrl} />)
          })
        }
      </div>
    </div>
  )
}

export default MyBar