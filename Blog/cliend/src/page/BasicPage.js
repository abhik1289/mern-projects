import AdminHeader from "../components/AdminPanel/AdminHeader";
import SetTitle from "../components/SetTitle";
import { Formik, Field, Form } from 'formik';
import { useRef, useState } from "react";
import * as yup from 'yup';
import { AiOutlineCloudUpload } from 'react-icons/ai';


function BasicPage() {
    const fileRef = useRef(null);
    const [src, SetSrc] = useState();
    return (<section>
        <SetTitle
            adminTitle
        />
        <AdminHeader />
        <div className="mainBx pt-20 w-5/6 mx-auto">
            <div className="heading font-main text-2xl capitalize font-semibold my-2">
                basic   customization
            </div>
            <div className="parts flex">
                <div className="part1 p-2  w-6/12">
                    <div className="box border border-slate-300 py-3 px-2 shadow-lg">
                        <Formik
                            initialValues={{
                                title: "",
                                devlopBy: ""
                            }}
                        >
                            <Form>
                                <div className="inputBx">
                                    <label className="block capitalize font-main">
                                        title
                                    </label>
                                    <Field className="w-10/12 border px-2 py-2 border-slate-500 rounded-md outline-none focus:border-blue-400" type="text" name="title" id="" />
                                </div>
                                <div className="inputBx my-2">
                                    <label className="block capitalize font-main">
                                        Devlopment By
                                    </label>
                                    <Field className="w-10/12 border px-2 py-2 border-slate-500 rounded-md outline-none focus:border-blue-400" type="text" name="devlopBy" id="" />
                                </div>
                                <div className="inputBx">
                                    <label className="block font-main capitalize">
                                        choose favicon
                                    </label>
                                    <input ref={fileRef}
                                        onChange={
                                            (even) => {
                                                let file = even.target.files[0];
                                                let ImgUrl = URL.createObjectURL(file);
                                                SetSrc(ImgUrl);
                                            }
                                        }
                                        type="file" name="" id="" hidden />
                                    <div className="mainBx flex">
                                        <button onClick={() => fileRef.current.click()} className="flex items-center font-secondary bg-blue-800 text-white rounded-xl mt-3 py-2 px-3"><AiOutlineCloudUpload className="mr-2" />Select File
                                        </button>
                                        <div className="previewBX my-2 mx-3">
                                            <img className="w-[60px]" src={src} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" className="capitalize font-secondary my-4 mx-2 bg-blue-600 px-4 py-1 text-white">save data</button>
                            </Form>
                        </Formik>
                    </div>
                </div>

                <div className="part2 p-2 w-6/12">
                    <div className="mainBX px-2 py-3 border border-slate-300">
                        <div className="title font-main capitalize my-3">
                            socal media
                        </div>
                        <div className="fileds">
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>);
}

export default BasicPage;