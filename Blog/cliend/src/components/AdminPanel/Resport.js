import { BiBlock } from 'react-icons/bi';
import { BsFillHandThumbsUpFill } from 'react-icons/bs';
import { AiOutlineCloseSquare } from 'react-icons/ai';
function Report() {
    return (<section className="pt-20 w-5/6 mx-auto">
        <div className="heading font-main text-2xl capitalize font-semibold my-2">
            Report page
        </div>
        <div className="maincontentBx flex flex-wrap">
            <div className="w-4/12 p-3">
                <div className="mainBx font-main border shadow-md p-4 rounded border-slate-300">
                    <div className="reportTitle text-2xl">
                        Copyright Message
                    </div>
                    <div className="name">
                        Abhik Patra
                    </div>
                    <div className="reportDate">
                        24/06/22||12.10
                    </div>
                    <div className="reportedBy text-[14px] italic text-[#dcdde1">
                        Reported by David Makan
                    </div>
                    <div className="contrllerPart flex justify-end">
                        <div className="w-[30px] h-[30px]  bg-[#dcdde1] m-1 rounded-full flex justify-center items-center hover:bg-[#7f8fa6]">
                            <BiBlock className='text-[#353b48]' />
                        </div>
                        <div className="w-[30px] h-[30px]  bg-[#dcdde1] m-1 rounded-full flex justify-center items-center hover:bg-[#7f8fa6]">
                            <AiOutlineCloseSquare className='text-[#353b48]' />
                        </div>     
                        <div className="w-[30px] h-[30px]  bg-[#dcdde1] m-1 rounded-full flex justify-center items-center hover:bg-[#7f8fa6]">
                            <BsFillHandThumbsUpFill className='text-[#353b48]' />
                        </div> 
                                               </div>
                </div>
            </div>
        </div>
    </section>);
}

export default Report;