import React, { useState } from 'react'
import LoginForm from './LoginForm';
import Signup from './Signup';

const Login = ({setIsUser,setUser}) => {
    const [registered,setRegistered]=useState(true);
  return (
    <div>
        {
            registered?
            (<LoginForm setIsUser={setIsUser} registered={registered} setRegistered={setRegistered} setUser={setUser} />)
            :
            (<Signup setIsUser={setIsUser} registered={registered} setRegistered={setRegistered} setUser={setUser} />)
        }
    </div>
  )
}

export default Login;