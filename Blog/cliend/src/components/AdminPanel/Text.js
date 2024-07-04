<div className="box">
                <div className="titleBX my-3">
                    <label className="font-secondary">Your blog title</label>
                    <input type="text" className="outline-none border w-full border-slate-400 px-2 py-1 rounded focus:border-blue-500" />
                </div>
                <div className="titleBX my-3">
                    <label className="font-secondary">Your blog Describtion</label>
                    <input type="text" className="outline-none border w-full border-slate-400 px-2 py-1 rounded focus:border-blue-500" />
                </div>
                <div className="inputBx">
                    <label className="block font-main capitalize">
                        choose Image
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
                    <div className="mainBx">
                        <button onClick={() => fileRef.current.click()} className="flex items-center font-secondary bg-blue-800 text-white rounded-xl mt-1 py-2 px-3"><AiOutlineCloudUpload className="mr-2" />Select File
                        </button>
                        <div className="previewBX my-2 mx-3 w-6/12">
                            <img className="w-full" src={src} alt="" />
                        </div>
                    </div>
                </div>
            </div>