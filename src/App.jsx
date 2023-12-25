import React from 'react'
import Random from "./component/Random"
import Tag from "./component/Tag"

const App = () => {
  return (
    <div className="w-full h-full flex flex-col background relative items-center" >
      <h1 className="bg-white rounded-lg px-10 py-2 w-11/12 text-center mt-[40px] text-4xl font-bold">RANDOM GIFS</h1>
      <div className="flex flex-col w-full items-center gap-y-10 mt-[30px]">
        <Random/>
        <Tag/>
      </div>
    </div>
  )
}

export default App
