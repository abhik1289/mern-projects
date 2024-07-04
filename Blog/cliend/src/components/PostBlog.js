import Header from './Header';
import SetTitle from "./SetTitle";
import { useRef, useState } from "react";
import { AiOutlineCloudUpload } from 'react-icons/ai';

function PostBlog() {
    const fileRef = useRef(null);
    const [src, SetSrc] = useState();
    return (<section>
        <SetTitle adminTitle />
        <Header showBottomMenu="hide" />
        <div className="mainBX pt-20 w-5/6 mx-auto my-3">
            <div className="header font-main text-3xl mb-3">
                Post your blog
            </div>
            
        </div>
    </section>);
}

export default PostBlog;