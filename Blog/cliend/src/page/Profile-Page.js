import Header from "../components/Header";
import { FaUserEdit } from 'react-icons/fa';
import SetTitle from "../components/SetTitle";

function Profile() {
    const favourite = ["food","tech"];
    return (<section>
       <SetTitle/>
        <Header />
        <div className="pt-32">
            <div className="mainBox w-[500px] p-4 mx-auto bg-white border rounded-lg shadow-md">
                <div className="basicInfo ">
                  <div className="headerPart flex justify-between">
                  <div className="title font-main text-xl text-slate-400">
                        Basic Information
                    </div>
                    <div className="icon cursor-pointer w-[30px] h-[30px] bg-slate-400 rounded-full flex justify-center items-center">
                        <FaUserEdit className="text-slate-700"/>
                    </div>
                  </div>
                  <div className="box flex justify-between mt-4">
                        <div className="name uppercase font-main">profile photo</div>
                        <div className="font-secondary"><div className="profile w-[40px] h-[40px] border border-slate-500 rounded-full relative cursor-pointer">
                <img src="https://scontent.frdp1-1.fna.fbcdn.net/v/t39.30808-6/290265301_554695509649267_5397452597926539807_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=WOvmYHLpY7wAX-9LVzc&_nc_ht=scontent.frdp1-1.fna&oh=00_AT_AR1XgD3u3_NWzG9FncVr4oD5psVpsyOF_tqwiVe1v8Q&oe=62C0BAA6" className='w-full rounded-full' alt="" />
            </div></div>
                    </div>
                    <div className="box flex justify-between mt-4">
                        <div className="name uppercase font-main">name</div>
                        <div className="font-secondary">Abhik Patra</div>
                    </div>
                    <div className="box flex justify-between mt-4">
                        <div className="name uppercase font-main">date of birth</div>
                        <div className="font-secondary">30/05/2005</div>
                    </div>
                    <div className="box flex justify-between mt-4">
                        <div className="name uppercase font-main">mobile</div>
                        <div className="font-secondary">9874563210</div>
                    </div>
                    <div className="box flex justify-between mt-4">
                        <div className="name uppercase font-main">opening time</div>
                        <div className="font-secondary">12/06/22</div>
                    </div>
                    <div className="box flex justify-between mt-4">
                        <div className="name uppercase font-main">last edit</div>
                        <div className="font-secondary">20/07/22</div>
                    </div>
                  <div className="others">
                  <div className="category font-main mt-4">Category</div>
                  <div className="displayCategory flex my-2">
                  {
                    favourite.map((e)=>{
                        return <p className="px-2 py-1 font-secondary capitalize bg-slate-400 rounded-full mr-2">{e}</p>
                    })
                  }
                  </div>
                  </div>
                </div>
            </div>
            <div className="mainBox w-[500px] p-4 mx-auto bg-white border rounded-lg shadow-md mt-2">
                <div className="basicInfo ">
                <div className="headerPart flex justify-between">
                  <div className="title font-main text-xl text-slate-400">
                        Password & Email
                    </div>
                    <div className="icon cursor-pointer w-[30px] h-[30px] bg-slate-400 rounded-full flex justify-center items-center">
                        <FaUserEdit className="text-slate-700"/>
                    </div>
                  </div>
                    <div className="box flex justify-between mt-4">
                        <div className="name uppercase font-main">email</div>
                        <div className="font-secondary">ab@gmail.com</div>
                    </div>
                    <div className="box flex justify-between mt-4">
                        <div className="name uppercase font-main">password</div>
                        <div className="font-secondary">*******789</div>
                    </div>
                   
                </div>
            </div>
        </div>
    </section>);
}

export default Profile;