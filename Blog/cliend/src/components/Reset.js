import {Link} from 'react-router-dom';
import {Helmet} from "react-helmet";

function Reset() {
    return (<section className="w-screen h-screen bg-slate-300 flex justify-center items-center">
          <Helmet>
                <meta charSet="utf-8" />
                <title>Reset Password</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
        <div className="mainBx w-[400px] min-h-[100px] bg-white py-5 px-3 rounded-md">
            <div className="header">
                <div className="title font-main text-[23px]">
                    Reset password
                </div>
                <div className="text font-secondary">
                    Enter the email associated with your account and we we will send an email with instruction to rest your password
                </div>
            </div>
            <div className="formBox my-3">
            <label className='block font-secondary font-semibold'>Email</label>
                <input type="text" className="outline-none w-full border border-slate-300 rounded-md shadow-md px-2 py-1 focus:border-blue-400 font-main"/>
            </div>
            <Link to={`/verify/email=${'ab@gmail.com'}`}>
            <button className='w-full text-center py-2 text-white rounded-md font-secondary bg-blue-500 mb-3'>Send Email</button>
          </Link>

        </div>
    </section>);
}

export default Reset;