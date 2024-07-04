import Header from "../components/Header";
import PostBox from "../components/PostBox";
import PostTypeTitle from "../components/PostTypeTitle";
import SetTitle from "../components/SetTitle";
const RecentPage = () => {
    return (<>
    <Header/>
    <SetTitle/>
    <section className="pt-32">
    <div className="mainBx w-5/6 mx-auto">
    <PostTypeTitle
    showButton={false}
    title="Recent Posts"
    />
    <div className="mainPostBx">
<PostBox
title=" Sri Lanka Crisis: PM Ranil Wickremesinghe Agrees To Resign, To Make Way For All-Party Govt Amid Nationwide Protests"
text="After months of economic decline and public unrest that culminated in anti-government protesters storming the presidential palace and office on Saturday, party leaders in Sri Lanka reportedly demanded that President Gotabaya Rajapaksa and Wickremesinghe resign at a meeting presided over by the Parliament Speaker."
type="Technology"
date="Jun 24,2022"
image="https://cdn.pixabay.com/photo/2012/03/04/01/01/father-22194_960_720.jpg"
profileImage="https://randomuser.me/api/portraits/men/20.jpg"
writterName="Abhik Patra"
role="Admin"
/>
    </div>
    </div>
    </section>
    </>);
}
 
export default RecentPage;