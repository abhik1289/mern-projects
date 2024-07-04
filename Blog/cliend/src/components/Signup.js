import {Link,useNavigate} from 'react-router-dom';
import { AiFillEye,AiFillEyeInvisible } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { useState } from 'react';
import {Helmet} from "react-helmet";

function Signup() {
    const navigate = useNavigate();
    const [pwdVissable,setpwdVissable] = useState(true);
    const handlePWdVissable = ()=>{
        setpwdVissable(!pwdVissable);
    }
    return (<section className="w-screen h-screen bg-slate-300 flex justify-center items-center">
          <Helmet>
                <meta charSet="utf-8" />
                <title>Signup Page</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
    <div className="mainBx w-[300px] min-h-[100px] bg-white py-5 px-3 rounded-md">
        <div className="title font-main text-[23px]">
           Sign up
        </div>
      <div className="centerDiv flex justify-center my-4">
      <div className="googleLogin cursor-pointer flex items-center border border-slate-300 rounded-full px-5 py-2">
            <div className="icon mr-2">
                <FcGoogle/>
            </div>
            <div className="title font-secondary">
                Log in with Google
            </div>
        </div>
      </div>
      <div className="mainLoginForm relative mt-1">
      <div className="formBx">
            <label className='block font-secondary font-semibold'>Name</label>
            <input type="text" className='outline-none w-full border border-slate-300 rounded-md shadow-md px-2 py-1 focus:border-blue-400 font-main' />
        </div>
        <div className="formBx mt-3">
            <label className='block font-secondary font-semibold'>Email</label>
            <input type="text" className='outline-none w-full border border-slate-300 rounded-md shadow-md px-2 py-1 focus:border-blue-400 font-main' />
        </div>
        <div className="formBx mt-3">
            <label className='block font-secondary font-semibold'>Password</label>
           <div className="inputBox flex items-center relative">
           <input type={pwdVissable?"password":"text"}  className='outline-none w-full border border-slate-300 rounded-md shadow-md px-2 py-1 focus:border-blue-400 font-main' />
           <div onClick={handlePWdVissable} className="icon absolute right-2 cursor-pointer">
          {pwdVissable?<AiFillEye/>:<AiFillEyeInvisible/>}  
           </div>
           </div>
        </div>
        <div className="confirmBx flex my-2">
            <input type="checkbox" className='' name="" id="" />
            <p className='font-secondary ml-3'>Remember me</p>
        </div>
      <Link to={`/verify/email=${'ab@gmail.com'}`}>
      <button className='w-full text-center py-2 text-white rounded-md font-secondary bg-blue-500 mb-3'>Sign up</button>
      </Link>
      </div>
      <div className="bottomPart text-center">
        <div className="bottom mt-3">
            <p className='font-main text-slate-500'>Alreay have an account?</p>
            <p className='text-blue-500 font-secondary font-[500] cursor-pointer' onClick={()=>navigate("/login")} >Log in</p>
        </div>
      </div>
    </div>
                </section>);
}

export default Signup;