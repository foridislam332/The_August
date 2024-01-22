import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const HeroBanner = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      loop={true} // Enable infinite loop
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
    >
      <SwiperSlide>
        <img
          className="h-96 w-full"
          src="https://i.ibb.co/WG1gtsz/vertical-shot-happy-korean-woman-medical-mask-holding-flight-tickets-passport-standing-wit.jpg"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="h-96 w-full"
          src="https://i.ibb.co/sPDsmz8/woman-tourist-full-length-happy-young-woman-standing-with-suitcase-with-exciting-gesturing-isolated.jpg"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="h-96 w-full"
          src="https://i.ibb.co/WG1gtsz/vertical-shot-happy-korean-woman-medical-mask-holding-flight-tickets-passport-standing-wit.jpg"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="h-96 w-full"
          src="https://i.ibb.co/sPDsmz8/woman-tourist-full-length-happy-young-woman-standing-with-suitcase-with-exciting-gesturing-isolated.jpg"
          alt=""
        />
      </SwiperSlide>

      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
    </Swiper>
  );
};

export default HeroBanner;
