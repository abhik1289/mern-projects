import { BsSearch } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { AiFillSetting } from 'react-icons/ai';
import { RiUserFollowFill } from 'react-icons/ri';
import { SiYoutubestudio } from 'react-icons/si';
import {Link} from 'react-router-dom';



import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
function Header(props) {
    return (<section className="w-screen fixed top-0 left-0 z-30 bg-white">
        <div className="toPart flex w-5/6 mx-auto justify-between items-center py-4 border-b">
            <div className="logo font-logo md:text-4xl text-[#fd79a8]">
              <Link to="/">
              Blog App
              </Link>
            </div>
            <div className="w-6/12">
                <div className="inputBx relative flex flex-col justify-center">
                    <div className="icon absolute right-3">
                        <BsSearch />
                    </div>
                    <input type="text" className="outline-none border w-full py-1 px-2 focus:border-blue-500 rounded-sm border-slate-400" />
                </div>
            </div>
            <Popup trigger={<div className="profile w-[40px] h-[40px] border border-slate-500 rounded-full relative cursor-pointer">
                <img src="https://scontent.frdp1-1.fna.fbcdn.net/v/t39.30808-6/290265301_554695509649267_5397452597926539807_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=WOvmYHLpY7wAX-9LVzc&_nc_ht=scontent.frdp1-1.fna&oh=00_AT_AR1XgD3u3_NWzG9FncVr4oD5psVpsyOF_tqwiVe1v8Q&oe=62C0BAA6" className='w-full rounded-full' alt="" />
            </div>} position="bottom center" >
                <ul className='font-main'>
                    <li className='flex items-center py-1 cursor-pointer hover:translate-x-[1px] duration-700 transition-all'>
                        <CgProfile className='mr-2' />
                        Profile</li>
                    <li className='flex items-center py-1 cursor-pointer hover:translate-x-[1px] duration-700 transition-all'>
                        <AiFillSetting className='mr-2' />
                        Setting</li>
                    <li className='flex items-center py-1 cursor-pointer hover:translate-x-[1px] duration-700 transition-all'>
                        <RiUserFollowFill className='mr-2' />
                        Follow</li>
                    <li className='flex items-center py-1 cursor-pointer hover:translate-x-[1px] duration-700 transition-all'>
                        <SiYoutubestudio className='mr-2' />
                        Studio</li>
                </ul>
            </Popup>

        </div>
        {
           props.showBottomMenu!=="hide"?<div className="menuPart border-b">
           <ul className='list-none flex w-5/6 mx-auto justify-between font-main py-3'>
               <li className='cursor-pointer'>Home</li>
               <li className='cursor-pointer'>Recent</li>
               <li className='cursor-pointer'>Technology</li>
               <li className='cursor-pointer'>Sports</li>
               <li className='cursor-pointer'>Others</li>
           </ul>
       </div>:""
        }
       
    </section>);
}

export default Header;