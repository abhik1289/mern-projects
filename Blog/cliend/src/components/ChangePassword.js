import {Helmet} from "react-helmet";
import { useState } from "react";
import { AiFillEye,AiFillEyeInvisible } from 'react-icons/ai';


function ChangePassword() {
    const [pwdVissable,setpwdVissable] = useState(true);
    const handlePWdVissable = ()=>{
        setpwdVissable(!pwdVissable);
    }
    return (<section className="w-screen h-screen bg-slate-300 flex justify-center items-center">
                <Helmet>
                <meta charSet="utf-8" />
                <title>Change Password</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
    <div className="main-box w-[300px] h-[300px] bg-white shadow-md rounded p-5">
        <div className="upper-part  text-center">
            <div className="title font-main font-bold text-2xl">
                Change Your Password
            </div>
            <div className="inputBX flex justify-start flex-col text-left my-2">
            <div className="formBx">
                <label className='block font-secondary font-semibold'>Password</label>
               <div className="inputBox flex items-center relative">
               <input type={pwdVissable?"password":"text"}  className='outline-none w-full border border-slate-300 rounded-md shadow-md px-2 py-1 focus:border-blue-400 font-main' />
               <div onClick={handlePWdVissable} className="icon absolute right-2 cursor-pointer">
              {pwdVissable?<AiFillEye/>:<AiFillEyeInvisible/>}  
               </div>
               </div>
            </div>
            <div className="formBx mt-3">
                <label className='block font-secondary font-semibold'>Confirm Password</label>
               <input type={pwdVissable?"password":"text"}  className='outline-none w-full border border-slate-300 rounded-md shadow-md px-2 py-1 focus:border-blue-400 font-main' />
            </div>
            <button className='w-full text-center py-2 text-white rounded-md font-secondary bg-blue-500 my-3'>Log in</button>
            </div>
        </div>
       
    </div>
</section>);
}

export default ChangePassword;