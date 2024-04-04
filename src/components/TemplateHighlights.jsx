import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from  "swiper/modules";

import "./styles.css";
import img from "../assets/banners/hero1.jpg";

const imageUrls = [img, img, img, img, img, img, img, img, img];

const TemplateHighlights = () => {
  return (
    <section className="container my-20">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"3"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
        spaceBetween={-100}
        loop={true}
      >
        {imageUrls.map((url, index) => (
          <SwiperSlide key={index}>
            <div className="swiper-slide duration-500">
              <img src={url} alt={`Slide ${index + 1}`} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TemplateHighlights;
