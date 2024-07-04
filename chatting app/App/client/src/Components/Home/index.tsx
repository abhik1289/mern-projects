import React from 'react'
import Header from './Header'
import ChatContainer from './Chat'

export default function Home() {
  return (
    <div className='main_wrapper flex w-screen h-screen flex-wrap relative'>
      <div className="md:w-4/12 w-full h-screen ">
        <Header/>
        <ChatContainer/>
      </div>
      <div className="md:w-8/12 hidden bg-blue-600 p-5"></div>
      
    </div>
  )
}
