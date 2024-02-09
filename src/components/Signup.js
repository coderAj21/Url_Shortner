import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

const Signup = ({setIsUser,registered,setRegistered,setUser}) => {
    const [formData,setFormData]=useState({
        name:"",email:"",password:"",confirmPassword:"",url:[]
    })
    function handlerChange(event){
        setFormData({
            ...formData,
            [event.target.name]:event.target.value
        });
    }
    const sumbitHandler=async (event)=>{
        event.preventDefault();
        try{
            const result=await axios.post(`${process.env.REACT_APP_BACKEND_URL}/signup`,formData);
            if(result.data.success){
                toast.success(result.data.message);
                setUser(formData);
                setIsUser(true);
            }   
        }catch(error){
            console.log(error.response.data.message);
            toast.error(error.response.data.message);
        }
    }
  return (
    <div className='w-1/3 mx-auto my-2'>
        <form className='w-full flex flex-col gap-2 my-10' onSubmit={sumbitHandler}>
            <h1 className='text-3xl font-semibold text-blue-500'>Sign In</h1>
            <label className='text-xl' htmlFor='name'>Name :</label>
            <input
            required
            className='p-1 px-2 text-lg font-semibold border-2 border-blue-500 rounded' 
            id='name'
            type='text' 
            name='name'
            onChange={handlerChange}
            ></input>

            <label className='text-xl' htmlFor='firstName'>Email :</label>
            <input
            required
            className='p-1 px-2 text-lg font-semibold border-2 border-blue-500 rounded' 
            id='email'
            type='email' 
            name='email'
            onChange={handlerChange}
            ></input>
            <label className='text-xl' htmlFor='firstName'>Password :</label>
            <input
            required
            className='p-1 px-2 text-lg font-semibold border-2 border-blue-500 rounded' 
            id='password'
            type='password' 
            name='password'
            onChange={handlerChange}
            ></input>
            <label className='text-xl' htmlFor='firstName'> Confirm Password :</label>
            <input
            required
            className='p-1 px-2 text-lg font-semibold border-2 border-blue-500 rounded' 
            id='confirm Password'
            type='password' 
            name='confirmPassword'
            onChange={handlerChange}
            ></input>
            <button
            className='bg-blue-500 text-white font-semibold p-2 text-xl rounded my-5 hover:bg-blue-400 transition duration-200 ease-in' 
            type='submit'>Sign In</button>
            {
              !registered && <p className='text-lg font-semibold'>Already Registered?
               <span className='hover:underline cursor-pointer transition duration-200 ease-in'onClick={()=>(setRegistered(!registered))} > Sign In</span>
               </p>
            }
        </form>
    </div>
  )
}

export default Signup;
