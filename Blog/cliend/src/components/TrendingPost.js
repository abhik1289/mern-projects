import TopPart from "./TopPart";

function Trening() {
    return ( <div className="trendingPost flex flex-wrap">
    <div className="images w-full md:w-7/12">
        <img src="https://cdn.pixabay.com/photo/2012/03/04/01/01/father-22194_960_720.jpg" className="w-full" alt="" />
    </div>
    <div className=" rightBx pl-5 w-full md:w-5/12">
       <TopPart
       type="Technology"
       date="Jun 24,2022"
       />
        <div className="blogTitle font-main text-3xl">
            Sri Lanka Crisis: PM Ranil Wickremesinghe Agrees To Resign, To Make Way For All-Party Govt Amid Nationwide Protests
        </div>
        <div className="blogText font-secondary">
            After months of economic decline and public unrest that culminated in anti-government protesters storming the presidential palace and office on Saturday, party leaders in Sri Lanka reportedly demanded that President Gotabaya Rajapaksa and Wickremesinghe resign at a meeting presided over by the Parliament Speaker.
        </div>
        <div className="writter flex my-3">
            <div className="profilePic w-[50px] h-[50px] rounded-full overflow-hidden">
                <img src="https://randomuser.me/api/portraits/men/20.jpg" className="w-full" alt="" />
            </div>
            <div className="writterInfo ml-2">
                <div className="name font-main">
                    Abhik Patra
                </div>
                <div className="writterPost font-secondary">
                    Admin
                </div>
            </div>

        </div>
    </div>
</div>);
}

export default Trening;