import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';



const Tag = () => {
  const [tag, settag] = useState('car');

  const {gif,loading,fetchData} = useGif(tag);

  function clickHandler(){
      fetchData();
  }

  return (
    <div className='w-1/2 mb-10 bg-blue-500 rounded-lg border-2 border-black flex flex-col items-center gap-y-5 mt-[15px]'>
      <h1 className='text-2xl mt-[15px]  underline uppercase font-bold'>Random Gif</h1>
      {
        loading ? (<Spinner/>) : (<img  src={gif} width='450'/>)
      }

      <input
       className='w-10/12  bg-white text-lg py-2 mb-[3px] text-center rounded-lg' 
       onChange={(event) => settag(event.target.value)}
       value={tag}
      />
      <button className='w-10/12 bg-white text-lg py-2 mb-[20px] rounded-lg' onClick={clickHandler}>Genrate</button>
    </div>
  )
}

export default Tag;