"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation"; //
import { Autoplay } from "swiper/modules";

const Slides = () => {
  // const swiperRef = useRef<any>(null);

  const slidesData = [
    {
      image:
        "https://amber-theme-demo.myshopify.com/cdn/shop/files/1950_a62b97f7-8760-4ba9-b163-c0007dd15899.jpg?v=1685371369&width=2000",
      name: "Flower Earrings",
      price: "55,95",
    },
    {
      image:
        "https://amber-theme-demo.myshopify.com/cdn/shop/files/1026.jpg?v=1685370979&width=2000",
      name: "Sea Glamour",
      price: "58,95",
    },
    {
      image:
        "https://amber-theme-demo.myshopify.com/cdn/shop/files/1943.jpg?v=1685095015&width=2000",
      name: "Fashionista Favorite",
      price: "99,95",
    },
    {
      image:
        "https://amber-theme-demo.myshopify.com/cdn/shop/files/1715.jpg?v=1683635886&width=2000",
      name: "Chic and Clear",
      price: "48,95",
    },
    {
      image:
        "https://amber-theme-demo.myshopify.com/cdn/shop/files/1372.jpg?v=1683448091&width=2000",
      name: "Modern Gaze",
      price: "119,95",
    },
  ];

  return (
    <div className="my-5 mx-5 w-full">
      <div className="flex items-center justify-evenly max-w-7xl w-full">
        {/* <PrevBtn onClick={() => swiperRef.current?.slidePrev()} /> */}
        <div className="flex w-full">
          <Swiper
            className="w-full h-full"
            slidesPerView={4}
            slidesPerGroup={1}
            loop={true}
            modules={[Autoplay]} // Include Autoplay module
            autoplay={{
              delay: 10000, // Slide every 3 seconds
              disableOnInteraction: false, // Continue autoplay even after user interaction
            }}
          >
            {slidesData.map((data, index) => {
              return (
                <div
                  key={index}
                  className="h-full w-[100%]"
                >
                  <SwiperSlide>
                    <img
                      src={data.image}
                      className="border rounded-xl object-cover"
                      alt={data.name}
                      height={851}
                      width={889}
                    />
                    <div
                      key={index}
                      className="relative h-full w-[500px] group px-2"
                    >
                      <button className="absolute w-10/12 bottom-14 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-black px-4 py-2 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black hover:text-white">
                        View Details
                      </button>
                      <div className="text-center font-semibold pt-4">
                        <h1>{data.name}</h1>
                        <h1>${data.price}</h1>
                      </div>
                    </div>
                  </SwiperSlide>
                </div>
              );
            })}
          </Swiper>
        </div>

        {/* <NextBtn onClick={() => swiperRef.current?.slideNext()} /> */}
      </div>
    </div>
  );
};

export default Slides;
