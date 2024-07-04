import React from 'react'
import { FcAssistant } from 'react-icons/fc';
import ControllerButton from '../../UI/ControllerButton';
import {PiCameraBold} from 'react-icons/pi';
import { BsChatLeftDots,BsFillMoonStarsFill } from 'react-icons/bs';
import {MdOutlineMoreVert} from 'react-icons/md'
export default function Header() {
  return (
    <div className='head_wrapper sticky p-5 bg-bgOver'>
      <div className="first_area flex justify-between items-center gap-2 ">
        <div className="logo flex items-center">
        <div className="icon">
          <FcAssistant className='text-4xl' />
        </div>
        <div className="text font-logo font-semibold text-primary">
          Talkie
        </div>
        </div>
        <div className="icon w-[30px] h-[30px] flex justify-center items-center cursor-pointer hover:bg-white transition-all duration-300 rounded-full">
          <MdOutlineMoreVert/>
        </div>
      </div>
      <div className="second_area mt-3 flex justify-between items-center">
        <div className="profile_photo">
          <div className="img w-[40px] h-[40px] bg-black rounded-full overflow-hidden">
            <img src={"https://randomuser.me/api/portraits/men/22.jpg"} alt="profile_pic"  />
          </div>
        </div>
        <div className="controllers_area flex">
          <ControllerButton 
          rounded 
          icon={<BsChatLeftDots />}
           />
          <ControllerButton rounded icon={<PiCameraBold />} />
          <ControllerButton rounded icon={<BsFillMoonStarsFill />} />
        </div>
      </div>
    </div>
  )
}
