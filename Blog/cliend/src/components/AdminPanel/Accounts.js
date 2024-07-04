import { ImUsers } from 'react-icons/im';
import { FaUserShield } from 'react-icons/fa';
import { BiBlock } from 'react-icons/bi';
import { MdAutoDelete } from 'react-icons/md';

import { UserList } from './Userlist';

function Accounts() {
    return (<section className="pt-24 mx-auto w-5/6">
        <div className="toppart flex justify-between px-3">
            <div className="text font-main text-3xl">
                All users
            </div>
            <div className="contrllers flex">
                <button className='w-[30px] h-[30px] ml-1 bg-white rounded-full flex justify-center items-center'>
                    <FaUserShield className='text-[#273c75]' />
                </button>
                <button className='w-[30px] h-[30px] ml-1 bg-white rounded-full flex justify-center items-center'>
                    <ImUsers className='text-[#273c75]' />
                </button>
            </div>
        </div>
        <div className="contentPart flex flex-wrap">
            {
                UserList.map((data, index) => {
                    return <div className='w-4/12 p-2'>
                        <div className="mainBX relative w-full bg-white p-2 rounded font-main shadow-md cursor-pointer">
                            <div className="number absolute right-5 top-[50%] translate-y-[-50%] italic text-3xl text-[#7f8fa6]">
                                {index+1}
                            </div>
                            <div className="profilePhoto w-[60px] h-[60px] rounded-full border">
                                <img src={data.profile} alt="" className='w-full rounded-full' />
                            </div>
                            <div className="name">
                                {data.name } <span className='italic text-[#273c75]'>[{data.role}]</span>
                            </div>
                            <div className="email">
                                {
                                    data.email
                                }
                            </div>
                            <div className="email">
                                {
                                    data.phone
                                }
                            </div>
                            <div className="contrllerPart flex justify-end">
                                <div className="w-[30px] h-[30px]  bg-[#dcdde1] m-1 rounded-full flex justify-center items-center hover:bg-[#7f8fa6]">
<BiBlock className='text-[#353b48]'/>
                                </div>
<div className="w-[30px] h-[30px]  bg-[#dcdde1] m-1 rounded-full flex justify-center items-center hover:bg-[#7f8fa6]">
<MdAutoDelete className='text-[#353b48]'/>
    </div>                            </div>
                        </div>
                    </div>
                })
            }
        </div>
    </section>);
}

export default Accounts;