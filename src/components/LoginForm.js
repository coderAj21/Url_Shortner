import axios from 'axios';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

const LoginForm = ({setIsUser,registered,setRegistered,setUser}) => {
  // const navigate=useNavigate();
  const [loginData,setloginData]=useState({
    email:"",password:"",error:""
  })
  function changeHanlder(event){
    setloginData(()=>(
      {
        ...loginData,
        [event.target.name]:event.target.value
      }
    ))
  }

  async function clickHandler(event){
    event.preventDefault();
    console.log(loginData);
    try{
      const result=await axios.post(`${process.env.REACT_APP_BACKEND_URL}/login`,loginData);
      if(result.data.success){
        toast.success("Login Successfully..");
        const userData=await axios.get(`${process.env.REACT_APP_BACKEND_URL}/getUser/${loginData.email}`);
        console.log(userData.data.user);
        setUser(userData?.data?.user)
        setIsUser(true);
      }
    }catch(error){
      console.log(error.response.data.message);
      toast.error(error.response.data.message);

    }
  }

  return (
    <div className='w-1/3 mx-auto my-2'>
        <form className='w-full flex flex-col gap-2 my-10' onSubmit={clickHandler}>
            <h1 className='text-3xl font-semibold text-blue-500' >Log In</h1>
            <label className='text-xl' htmlFor='name'>Email :</label>
                <input
                required
                className='p-1 px-2 text-lg font-semibold border-2 border-blue-500 rounded' 
                id='email'
                type='email' 
                name='email'
                onChange={changeHanlder}
                ></input>
            <label className='text-xl' htmlFor='name'>Password :</label>
                <input
                required
                className='p-1 px-2 text-lg font-semibold border-2 border-blue-500 rounded' 
                id='password'
                type='password' 
                name='password'
                onChange={changeHanlder}
                ></input>
            <p className='text-red-600 text-lg font-semibold'>{loginData.error}</p>
            <button
            className='bg-blue-500 text-white font-semibold p-2 text-xl rounded my-5 hover:bg-blue-400 transition duration-200 ease-in' 
            type='submit'
            >Sign in</button>
            {
              registered && <p className='text-lg font-semibold' >Not Registered?
               <span className='hover:underline cursor-pointer transition duration-200 ease-in' onClick={()=>(setRegistered(!registered))}> Create Account</span>
               </p>
            }
        </form>
    </div>
  )
}

export default LoginForm;
