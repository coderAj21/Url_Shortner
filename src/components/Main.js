import React, { useState } from 'react';
import UrlShortner from './UrlShortner';
import NewUrl from './NewUrl';
const Main = ({user,setUser}) => {
  const [active,setActive]=useState(false);
  const [url,setUrl]=useState("");
  const [encode,setEncode]=useState("");
  return (
    <div className='bg-slate-200 w-[85%] h-screen pl-[15%] flex flex-col'>
      {
        active?
        (<NewUrl url={url} encode={encode} active={active} setActive={setActive} user={user} setUser={setUser}/>)
        :
        (<UrlShortner url={url} setUrl={setUrl} setEncode={setEncode} setActive={setActive}/>)
      }
    </div>
  )
};

export default Main;