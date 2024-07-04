import OtpInput from 'react-otp-input';
import { useState } from 'react';
import Button from '../Components/UI/Button';

export default function VerifyPage() {
    const [otp, setOtp] = useState('');
    const handleVerify=()=>{

    }
    return (
        <div className='main_wrapper bg-bgMain flex justify-center items-center w-screen h-screen'>
            <div className="wrapper bg-bgOver w-[350px] h-[250px] rounded-md py-4 px-3">
                <div className="header font-primary text-xl">
                    Verify your account to start chatting
                </div>
                <div className="form-box w-full h-[200px] mt-6">
                    <OtpInput
                        inputStyle={{
                            width:"40px",
                            height:"40px",
                            marginLeft:"10px",
                            borderRadius:"4px",
                            border:"1px solid #7f8fa6"
                        }}
                        value={otp}
                        onChange={setOtp}
                        numInputs={5}
                        renderInput={(props) => <input {...props} />}
                    />
                    <Button style={{
                        marginLeft:"10px",
                    }} title='Verify' onTap={handleVerify} />
                    <div className="send_again font-secondary hover:underline ml-2 mt-5 cursor-pointer hover:text-blue-600">
                    Send code again
                </div>
                </div>
                
            </div>
        </div>
    )
}
