import React from 'react'
import ChatItem from './ChatItem'
import AddFriend from './AddFriend'
export default function ChatContainer() {
  return (
    <div className='w-full h-[78.9vh] relative'>
      <ChatItem />
      <AddFriend onTap={()=>console.log("object")}/>
    </div>
  )
}
