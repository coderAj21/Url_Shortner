import React from 'react';
import photo from "../images/pexels-mohamed-abdelghaffar-771742.jpg";

const Header = ({isUser,setIsUser,user}) => {
  return (
    <div className=''>
        <div className='w-full h-[7%] fixed z-10 flex flex-row items-center justify-between bg-white shadow py-2'>
        <div className='text-3xl font-bold px-10'>Dashboard</div>
        <div className='flex flex-row items-center gap-5 mx-5'>
            <img className='w-[40px] aspect-square rounded-full object-cover' src={photo} alt='Profile Pic'></img>
            <div className='flex flex-row items-center gap-2 text-lg'>
                <p>{user.name}</p>
                <button onClick={()=>(setIsUser(!isUser))} className='bg-blue-500 text-white font-semibold p-1 py-1 text-sm
                     rounded hover:bg-blue-700 transition duration-200 ease-in'>
                  {
                    isUser?
                    (<span>Log Out</span>)
                    :
                    (<span>Log In</span>)

                  }
                </button>
            </div>
        </div>
        </div>
    </div>
  )
};

export default Header;