import { useState } from 'react';
import { BiMenuAltLeft } from 'react-icons/bi';
import { IoMdNotifications } from 'react-icons/io';
import { TbLayoutDashboard } from 'react-icons/tb';
import { RiPagesLine } from 'react-icons/ri';
import { BsVectorPen } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { AiFillFileAdd } from 'react-icons/ai';
import { MdSupervisorAccount,MdOutlineReport } from 'react-icons/md';



const menu  = [
    {
        title:"dashboard",
        icon:<TbLayoutDashboard/>
    },
    {
        title:"Posts",
        icon:<RiPagesLine/>
    },
    {
        title:"Basic",
        icon:<BsVectorPen/>
    },
    {
        title:"Profile",
        icon:<CgProfile/>
    },
    {
        title:"report",
        icon:<MdOutlineReport/>
    },
    {
        title:"new post",
        icon:<AiFillFileAdd/>
    },
    {
        title:"accounts",
        icon:<MdSupervisorAccount/>
    },
];

function AdminHeader() {
const [sidebar,setSideBar] = useState(false);
const handleSideMenu= ()=>setSideBar(!sidebar);
    return (<>
    <section className="w-screen fixed top-0 left-0 py-3 shadow-lg z-30 bg-white">
        <div className="mainBx w-5/6 mx-auto flex justify-between items-center relative ">
            <div 
            onClick={handleSideMenu}
            className="leftPart w-[30px] h-[30px] hover:bg-slate-300 rounded-full flex justify-center items-center text-slate-500">
                <BiMenuAltLeft className='text-xl cursor-pointer' />
            </div>
            <div className="rightPart flex items-center">
                <div className="notification w-[30px] h-[30px] hover:bg-slate-300 rounded-full flex justify-center items-center mr-3 cursor-pointer text-slate-500">
                    <IoMdNotifications className='text-xl' />
                </div>
                <div className="profileImage w-[50px] h-[50px]">
                    <img className='w-full rounded-full' src="https://randomuser.me/api/portraits/women/44.jpg" alt="" />
                </div>
            </div>
        </div>
    </section>
    <div className={sidebar ?"silde-bar w-[200px] z-20 h-screen bg-slate-200 absolute top-0 left-0  duration-500":"silde-bar w-[200px] h-screen bg-slate-200 absolute top-0 left-0 transition duration-500 -translate-x-96"}>
<ul className='pt-20'>
    {
        menu.map((item,index)=>{
            return(<div className='flex items-center py-3 px-3 cursor-pointer hover:bg-blue-300' key={index} onClick={handleSideMenu}>
                <div className="icon">
                    {
                        item.icon
                    }
                </div>
                <li className='font-main capitalize ml-3 cursor-pointer '>{item.title}</li>
            </div>)
        })
    }
</ul>
    </div>
    </>);
}

export default AdminHeader;