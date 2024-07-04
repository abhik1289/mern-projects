import { useState,useRef } from "react";
import ControllerButton from "../../UI/ControllerButton";
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { BsChatLeftText,BsArrowsAngleExpand } from 'react-icons/bs';
import { PiPhoneCall } from 'react-icons/pi';
import useClickOutside from "../../../helper/useOnClickOutside";

export default function ChatItem() {
    const [showProfilePic, setShowProfilePic] = useState(false);
    const showUserProfile = useRef(null);
    useClickOutside(showProfilePic,()=>setShowProfilePic(false));
    return (
        <div className='chat_item_wrapper flex px-4 py-5 gap-3 cursor-pointer relative w-full h-[95px]'>
            <div className="profile_pic">
                <div className="img w-[50px] h-[50px] bg-black rounded-full overflow-hidden" onClick={()=>setShowProfilePic(!showProfilePic)}>
                    <img src={"https://randomuser.me/api/portraits/men/22.jpg"} alt="profile_pic" />
                </div>
              { showProfilePic && <div className="profile_photo_showcase fixed w-full h-screen top-0 left-0 bg-bgTransparent z-50 flex justify-center items-center">
                    <div ref={showUserProfile} className="main_wrapper w-[250px] h-[250px] bg-bgOver rounded-md overflow-hidden">
                        <div className="image h-[210px]">
                            <img src={"https://randomuser.me/api/portraits/men/22.jpg"} alt="profile_pic" className="w-full h-full" />
                        </div>
                        <div className="bottom_area w-full h-[40px] bg-bgMain flex justify-between items-center px-8">
                            <ControllerButton
                                rounded
                                bgNone
                                icon={<AiOutlineInfoCircle />}
                            />
                            <ControllerButton
                                rounded
                                bgNone
                                icon={<BsChatLeftText />}
                            />
                            <ControllerButton
                                rounded
                                bgNone
                                icon={<PiPhoneCall />}
                            />
                            <ControllerButton
                                rounded
                                bgNone
                                icon={<BsArrowsAngleExpand />}
                            />
                        </div>
                    </div>
                </div>}
            </div>
            <div className="right_area w-full">
                <div className="name_and_time_area flex items-center justify-between">
                    <div className="name font-primary text-primary text-xl">
                        Abhik Patra
                    </div>
                    <div className="time pr-5 text-secondary text-[12px]">
                        <span>Yesterday</span>
                    </div>
                </div>
                <div className="text font-secondary">
                    Find support from others who are working,Find
                </div>
            </div>
        </div>
    )
}
