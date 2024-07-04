import {useParams,Link} from 'react-router-dom';
import { useState } from "react";
import OTPInput from "otp-input-react";
import {Helmet} from "react-helmet";

function Verify() {
    const param = useParams();
    const [OTP, setOTP] = useState("");


    return (<section className="w-screen h-screen bg-slate-300 flex justify-center items-center">
         <Helmet>
                <meta charSet="utf-8" />
                <title>Verify Page</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
    <div className="main-box w-[300px] h-[300px] bg-white shadow-md rounded p-5">
        <div className="upper-part  text-center">
            <div className="title font-main font-bold text-2xl">
                Confirm Otp
            </div>
            <div className="subTitle font-secondary">
                Enter this otp which is send in your email {param.email}
            </div>
        </div>
        <div className="otp-part flex flex-col justify-center mt-4">
            {/* <form disabled> */}
            <form method="post">
                <OTPInput inputClassName="border border-blue-300 outline-none focus:border-blue-500" value={OTP} onChange={setOTP} autoFocus OTPLength={5} otpType="number" disabled={false} />
                <Link to={`/changePwd/email=${'ab@gmail.com'}/id=123456`}>
                <button  className="rounded w-full py-2 font-main text-white bg-blue-600 mt-4">Confirm Otp</button>
                </Link>
            </form>
        </div>
        <div className="bootom-part font-main cursor-pointer mt-2">
            <p>Resend Otp</p>
        </div>
    </div>
</section>);
}

export default Verify;