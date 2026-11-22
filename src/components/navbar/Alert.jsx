// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function Alert() {
  return (
    <section className="bg-brightGreen">
      <div className="max-w-360 mx-auto p-2 relative">
        <button className="custom-prev absolute left-2 top-1/2 z-20 -translate-y-1/2 cursor-pointer disabled:opacity-20 max-md:hidden">
          <IoIosArrowBack />
        </button>
        <Swiper
          navigation={{ prevEl: ".custom-prev", nextEl: ".custom-next" }}
          modules={[Navigation]}
          className="mySwiper text-main"
        >
          <SwiperSlide>
            FREE delivery & 40% Discount for next 3 orders! Place your 1st order
            in.
          </SwiperSlide>
          <SwiperSlide>
            FREE delivery & 40% Discount for next 3 orders! Place your 1st order
            in.
          </SwiperSlide>
          <SwiperSlide>
            FREE delivery & 40% Discount for next 3 orders! Place your 1st order
            in.
          </SwiperSlide>
        </Swiper>
        <button className="custom-next absolute right-2 top-1/2 z-20 -translate-y-1/2 cursor-pointer disabled:opacity-20 max-md:hidden">
          <IoIosArrowForward />
        </button>
      </div>
    </section>
  );
}
