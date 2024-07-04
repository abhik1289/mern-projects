import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import PostList from '../components/PostList';
import TopPart from "../components/TopPart";
import PostTypeTitle from './PostTypeTitle';
function RecentPost() {
    return (<div className="othersPost my-6">
    <div className="recentBx">
      <PostTypeTitle
      title="Recent Post"
      buttonText="View All"
      showButton={true}
      url="/"
      />
      <div className="posts">
        <Swiper
          spaceBetween={10}
          slidesPerView={2}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          pagination={{ clickable: true }}
        >
          {PostList.map((item) => {
            return (<SwiperSlide>
              <div key={item.id} className="py-3 mainPostBox cursor-pointer">
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
            </SwiperSlide>) })}
        </Swiper>
        
      </div>
    </div>
  </div>);
}

export default RecentPost;