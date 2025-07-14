import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const images = [
  "https://media.debeers.com/i/debeers/July-hompage-el-rings-v2/Black%20and%20white%20picture%20Adowa%20wearing%20Talisman%20yellow%20gold%20medal%20pendant?fmt=auto&fmt.webp.qlt=75&fmt.jp2.qlt=38&fmt.jpeg.qlt=70&$debeers-nd2-16-9-1920-poi$",
  "https://images.pexels.com/photos/28146841/pexels-photo-28146841.jpeg?cs=srgb&dl=pexels-pham-ngoc-anh-170983008-28146841.jpg&fm=jpg",
  "https://i.etsystatic.com/24497727/r/il/16f78e/2707662627/il_fullxfull.2707662627_ihne.jpg",
];

const Landing = () => {
  return (
    <div className="h-[90vh] w-full">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        loop={true}
        slidesPerView={1}
        className="h-full"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Landing;
