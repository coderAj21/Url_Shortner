import React, { useState } from 'react';
import Header from './components/Header';
import LeftBar from './components/LeftBar';
import Main from './components/Main';
import MyBar from './components/MyBar';
import Login from './components/Login';

const App = () => {
  const [myBar,setMyBar]=useState(true);
  const[isUser,setIsUser]=useState(false);
  const[user,setUser]=useState("");
  return (
    <div>
      {
        isUser?
        (<div className='bg-slate-200 w-full relative'>
          <Header isUser={isUser} setIsUser={setIsUser} user={user}/>
          <div className='w-[15%] fixed z-10 mt-[3.2%]  h-1 bg-black'></div>
          <div className=' relative flex flex-row pt-[3%]'> 
            <LeftBar user={user} setMyBar={setMyBar} myBar={myBar}/>
            {
              myBar?
              (<MyBar user={user} setUser={setUser}/>)
              :
              (<Main user={user} setUser={setUser}/>)
            }
          </div>
        </div>
        )
        :
        (<Login isUser={isUser} setIsUser={setIsUser} setUser={setUser}/>)
      }
    </div>
  )
};
export default App;