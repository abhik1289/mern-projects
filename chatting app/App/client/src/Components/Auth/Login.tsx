import { useState } from "react";
import { Form, FormikProps, Formik } from 'formik';
import Button from "../UI/Button";
import { BiUserPlus } from 'react-icons/bi';
import { IoChevronBackOutline } from 'react-icons/io5';
import * as Yup from 'yup';
import TextInput from "../UI/TextInput";
import SignUp from './SignUp';

const loginInfos = {
    email: "", password: ""
}
interface Values {
    email: string;
    password: string;
}
export default function Login() {
    const [data, setData] = useState(loginInfos);
    const [showText, setShowText] = useState(false);
    const [showLoginPage, setShowLoginPage] = useState(true)
    const { email, password } = data;

    const handleTextChange = (e: React.ChangeEvent<any>) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    }

    const inputValidation = Yup.object({
        email: Yup.string().email("Email must be a valid email").required("Email must be required"),
        password: Yup.string().min(6, "Password must be at least 6 characters").max(15, "Password must be at most 15 characters").required("Password must be required"),
    });
    return (
        <div className='main_wrapper w-screen h-screen bg-bgMain  flex justify-center items-center'>
            
            <div className={`wrapper w-[380px] ${showLoginPage?"h-[360px]":"h-[540px]"} transition-all duration-300 rounded-lg relative overflow-hidden p-5 bg-bgOver`}>
            <div onClick={()=>setShowLoginPage(!showLoginPage)} className="signUpBox absolute w-[50px] h-[50px] bg-main rounded-full flex justify-center items-center text-white top-[-10px] right-[-10px] cursor-pointer">
                {showLoginPage ?<BiUserPlus  className="text-2xl"/>:<IoChevronBackOutline className="text-2xl"/>}
            </div>
                <div className="headline font-primary text-xl my-2 select-none">
                   { showLoginPage?"Connect with friends and family, anytime, anywhere":"Make new friends, join groups, and build communities."}
                </div>
               { showLoginPage ?<div className="login-form-wrapper mt-6">
                    <div>

                        <Formik
                            enableReinitialize
                            initialValues={{ email, password }}
                            validationSchema={inputValidation}
                            onSubmit={(values, actions) => {
                                console.log(values, actions);
                            }}
                        >
                            {(props: FormikProps<Values>) => (<Form>
                                <TextInput
                                    type="text"
                                    placeholder="Enter your email"
                                    name="email"
                                    labelText="Email"
                                    onChange={handleTextChange}
                                />
                                <TextInput
                                    type={showText ? "text" : "password"}
                                    placeholder=""
                                    name="password"
                                    labelText="Password"
                                    passwordFiled={true}
                                    setShowText={setShowText}
                                    onChange={handleTextChange}
                                />
                                <Button
                                    title="Log in"
                                />
                            </Form>)}
                        </Formik>
                    </div>
                </div>:<SignUp/>}
            </div>
        </div>
    )
}
