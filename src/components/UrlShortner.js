import React from 'react'


const UrlShortner = ({url,setUrl,setEncode,setActive}) => {
    
  function urlHandler(event){
        event.preventDefault();
        const ans=encodeUrl(url);
        setEncode(ans);
        setActive(true);
    }
    // convert the url to tiny url
    function encodeUrl(str){
        const hm=new Map();
        let hash=getHash();
        while (hm.has(hash)){
            hash=getHash();
        }
        hm.set(hash,str);
        return "https:tinyurl.com/"+hash;        
    }
    // hash method convert it into another url
    function getHash(){
        const str="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#%&?/";
        let ans="";
        for (let i=0;i<6;i++){
            let n=Math.floor(Math.random()*str.length);
            ans=ans+str.charAt(n);
        }
        return ans;
    }
  return (
    <div>
      <h1 className='text-4xl drop-shadow-md font-bold text-blue-800 text-center my-5'>URL Shortner</h1>
      <div className='flex flex-col gap-2 items-center justify-center bg-white w-[60%] mx-auto shadow-lg rounded '>
        <p className='text-4xl font-semibold p-2 px-6'>Paste the URL to be shortned</p>
        <form className='flex items-center gap-2 py-4 w-[80%]' onSubmit={urlHandler}>
          <input onChange={(event)=>(setUrl(event.target.value))} className='border rounded border-blue-500 py-3 w-full' type='text' id='url'></input>
          <button className='bg-blue-500 text-white py-1 px-8 rounded-md text-sm font-bold hover:bg-blue-600 transition-all duration-200'>Paste Url</button>
        </form>
        <p className='text-lg '>URL Shortner is a free tool to shorten URLs and generate short links</p>
        <p className='text-lg'>URL shortener allows to create a shortened link making it easy to share</p>
      </div>
    </div>    
  )
}

export default UrlShortner;