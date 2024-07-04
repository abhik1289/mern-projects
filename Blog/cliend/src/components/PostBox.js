import TopPart from "./TopPart";
function PostBox(props) {
    const {title,text,image,type,date,role,profileImage,writterName} = props;
    return (    <div className="posts flex flex-wrap my-3">
    <div className="images w-full md:w-5/12">
        <img src={image} className="w-full" alt="" />
    </div>
    <div className=" rightBx pl-5 w-full md:w-7/12">
       <TopPart
       type={type}
       date={date}
       />
        <div className="blogTitle font-main text-3xl">
         {title}
        </div>
        <div className="blogText font-secondary">
           {text}
        </div>
        <div className="writter flex my-3">
            <div className="profilePic w-[50px] h-[50px] rounded-full overflow-hidden">
                <img src={profileImage} className="w-full" alt="" />
            </div>
            <div className="writterInfo ml-2">
                <div className="name font-main">
                   {writterName}
                </div>
                <div className="writterPost font-secondary">
                    {role}
                </div>
            </div>

        </div>
    </div>
</div>);
}

export default PostBox;