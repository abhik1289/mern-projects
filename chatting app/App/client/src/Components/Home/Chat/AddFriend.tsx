import React from 'react'
import {AiOutlineUsergroupAdd} from 'react-icons/ai';

interface AddFriendProps{
    onTap: () => void;
}
export default function AddFriend({onTap}:AddFriendProps) {
  return (
    <div onClick={onTap} className="add_contract w-[45px] h-[45px] bg-main absolute bottom-6 rounded-full right-6 cursor-pointer hover:bg-blue-700 transition-all duration-500 flex justify-center items-center">
    <AiOutlineUsergroupAdd className='text-xl text-white'/>
  </div>
  )
}
