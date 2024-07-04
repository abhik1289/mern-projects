import { useState } from "react";
import AdminHeader from "../components/AdminPanel/AdminHeader";
import { Formik, Field, Form } from 'formik';
import { AiFillCloseCircle } from 'react-icons/ai';
function AddUserPage() {
    const selectOptions = ["Normal user", "writter", "modarator", "admin", "super admin", "custom"];
    const accessList = ["home", "add user", "post", "see post", "accounts", "reports"];
    const [showSelcet, setshowSelcet] = useState(true);
    const handleSelect = (e) => {
        let getValue = e.target.value;
        if (getValue === "custom") {
            setshowSelcet(!showSelcet)
        }
    }
    const closeCustomOpt = () => setshowSelcet(!showSelcet);
    return (<section className="w-screen h-screen flex justify-center items-center bg-[#dcdde1]">
        <AdminHeader />
        <div className="p-5 rounded-md shadow-lg w-[500px] bg-[#f5f6fa] mx-auto">
            <div className="title">
                <h1 className="font-main text-2xl">
                    Add User
                </h1>
                <p className="font-secondary">Add a user to fill up credential information</p>
            </div>
            <div className="formBx mt-5 relative">
                <Formik>
                    <Form>
                        <div className="firstCol w-full">
                            <div className="inputBX px-4 font-secondary">
                                <label className="font-main">Name</label>
                                <Field type="text" name="" className="w-full border outline-none border-slate-500 py-2 px-3 rounded-md focus:border-blue-500" id="" />
                            </div>
                            <div className="inputBX px-4 font-secondary mt-3">
                                <label className="font-main">Email</label>
                                <Field type="text" name="" className="w-full border outline-none border-slate-500 py-2 px-3 rounded-md focus:border-blue-500" id="" />
                            </div>
                            {
                                showSelcet && <div className="inputBX px-4 font-secondary mt-3">
                                    <label className="font-main">Choose Role</label>
                                    <select onChange={handleSelect} as="select" type="text" name="" className="w-full border outline-none border-slate-500 py-2 px-3 rounded-md focus:border-blue-500" id="">
                                        {
                                            selectOptions.map((text) => {
                                                return <option className="capitalize" value={text.toLowerCase()}>
                                                    {text}
                                                </option>
                                            })
                                        }
                                    </select>
                                </div>
                            }
                            {
                                !showSelcet && <div className="inputBX px-4 font-secondary mt-3">
                                    <label className="font-main flex items-center">Active access <AiFillCloseCircle
                                        className="ml-2 cursor-pointer text-red-400 hover:text-red-600"
                                        onClick={closeCustomOpt}
                                    /> </label>

                                    <div className="mainBox list-none flex flex-wrap">
                                        {accessList.map((access) => {
                                            return <div className="box w-6/12 flex">
                                                <input type="checkbox" name="access" id="" value={access} />
                                                <li className="capitalize ml-2">{access}</li> </div>
                                        })
                                        }
                                    </div> </div>}
                            <div className="box flex justify-center mt-3">
                                <button type="button" className="bg-blue-600 hover:bg-blue-700 px-9 py-2 font-main rounded-3xl capitalize text-white">submit</button>
                            </div>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    </section>);
}

export default AddUserPage;