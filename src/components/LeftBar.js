import React from 'react';
import pic from "../images/pexels-mohamed-abdelghaffar-771742.jpg";
const LeftBar = ({user,setMyBar,myBar}) => {
  return (
    <div className='w-[15%] h-screen   fixed z-10 mt-2 bg-white flex flex-col py-2 shadow-md'>
      <div className='flex flex-row items-center justify-between'>
        <img src={pic} className='w-[40px] aspect-square rounded-full object-cover mx-4' alt=''></img>
        <p className='text-2xl px-4'>{user.name.split(" ")[0]}</p>
      </div>
      <div className='flex flex-row items-center gap-20 my-5 mx-4'>
        <p onClick={()=>(setMyBar(!myBar))} className='text-lg font-semibold cursor-pointer
                        hover:scale-95 hover:drop-shadow-xl transition-all duration-200'>My Url</p>
        <p className='text-lg font-semibold'>{user.url.length===0?0:user.url.length}</p>
      </div>
    </div>
  )
};

export default LeftBar;