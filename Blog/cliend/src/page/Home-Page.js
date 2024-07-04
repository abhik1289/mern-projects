import MainPage from "../components/MainPage";
import PostTypeTitle from "../components/PostTypeTitle";
import RecentPost from "../components/RecentPost";
import Trening from "../components/TrendingPost";
import TopPart from "../components/TopPart";
import HorizontalList from "../components/HorizontalList";
function HomePage() {
  return (<section>
    <MainPage />
    <div className="mainBX w-5/6 mx-auto pt-32">
      <Trening />
      <RecentPost/>
      <div className="sports my-2">
        <PostTypeTitle
          title="Sports"
          buttonText="View All"
          showButton={true}
          url="/"
        />
        <div className="mainPosrtsBx flex flex-wrap">

{HorizontalList.map((item) => {
            return (
              <div key={item.id} className="py-3 w-6/12 px-2 mainPostBox cursor-pointer">
                <div className="imgBx">
                  <img src={item.image} className="w-full rounded-t" alt="" />
                </div>
                <div className="postimeInfo my-2">
                  <TopPart
                    type="Technology"
                    date="Jun 24,2022"
                  />
                </div>
                <div className="postTitle font-main text-xl">
                  {item.title}
                </div>
                <div className="postDescribtion font-secondary">
                  {item.describtion}
                </div>
              </div>
            ) })}
</div>
        </div>
      </div>
  
  </section>);
}

export default HomePage;