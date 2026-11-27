// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import heroSliders from "../../../json/heroSlider.json";
export default function Hero() {
  return (
    <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
      {heroSliders.map((heroSlider) => (
        <SwiperSlide key={heroSlider.id}>
          <div className=" relative">
            <div className="absolute inset-0 w-full flex justify-center">
              <div className="max-w-360 w-full text-left flex items-center p-5">
                <div className=" ">
                  <h2 className=" text-lg max-w-100 md:text-4xl md:max-w-130 lg:max-w-190 lg:text-6xl text-main font-bold lg:leading-15">
                    {heroSlider.title}
                  </h2>
                  <p className="max-w-130 my-5 lg:leading-8 text-main max-md:hidden">
                    {heroSlider.description}
                  </p>
                  <div className="flex gap-5 items-center">
                    <button className="btn rounded-full bg-main text-white">
                      Shop Now
                    </button>
                    <span className="text-green-800 text-lg lg:text-4xl font-bold">
                      $24.99
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <img src={heroSlider.img} alt={heroSlider.title} />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
