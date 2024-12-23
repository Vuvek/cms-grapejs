import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

interface IProducts {
  id: number;
  image: string;
  imgText1: string;
  imgText2: string;
}

const Products: IProducts[] = [
  {
    id: 1,

    image:
      "https://www.thomascook.com/.imaging/mte/thomascook-theme/mosaic-card/dam/uk/holidays/holidays-mosaics/ponte.jpg/jcr:content/ponte.jpg",
    imgText1: "Long haul holidays",
    imgText2: "To far-flung shores",
  },
  {
    id: 2,
    image:
      "https://www.thomascook.com/.imaging/mte/thomascook-theme/mosaic-card/dam/uk/holidays/holidays-mosaics/winterthumbnail.jpg/jcr:content/winterthumbnail.jpg",
      imgText1: "Long haul holidays",
      imgText2: "To far-flung shores",
  },
  {
    id: 3,
    image:
      "https://www.thomascook.com/.imaging/mte/thomascook-theme/mosaic-card/dam/uk/holidays/holidays-mosaics/winterthumbnail.jpg/jcr:content/winterthumbnail.jpg",
      imgText1: "Long haul holidays",
      imgText2: "To far-flung shores",
  },
  {
    id: 4,
    image:
      "https://www.thomascook.com/.imaging/mte/thomascook-theme/mosaic-card/dam/uk/holidays/holidays-mosaics/winterthumbnail.jpg/jcr:content/winterthumbnail.jpg",
      imgText1: "Long haul holidays",
      imgText2: "To far-flung shores",
  },
  {
    id: 5,
    image:
      "https://www.thomascook.com/.imaging/mte/thomascook-theme/mosaic-card/dam/uk/holidays/holidays-mosaics/adultonly2.jpg/jcr:content/adultonly2.jpg",
      imgText1: "Long haul holidays",
      imgText2: "To far-flung shores",
  },
  {
    id: 6,
    image:
      "https://www.thomascook.com/.imaging/mte/thomascook-theme/mosaic-card/dam/uk/holidays/holidays-mosaics/adultonly2.jpg/jcr:content/adultonly2.jpg",
      imgText1: "Long haul holidays",
      imgText2: "To far-flung shores",
  },
  {
    id: 7,
    image:
      "https://www.thomascook.com/.imaging/mte/thomascook-theme/mosaic-card/dam/uk/holidays/holidays-mosaics/winterthumbnail.jpg/jcr:content/winterthumbnail.jpg",
      imgText1: "Long haul holidays",
      imgText2: "To far-flung shores",
  },
];

const SimpleSlider = () => {
  const swiperRef = useRef<any>(null);

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };

  return (
    <div className="w-full relative">
      <div
        className="mt-4"
        style={{ width: "100%", maxWidth: "1300px",marginBottom:'80px' }}
      >
        <React.Fragment>
          <Swiper
            className="mySwiper pt-[10px] pb-[20px]"
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            spaceBetween={0}
            slidesPerView={4}
            loop={true}
            breakpoints={{
              0: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 3,
                slidesPerGroup: 1,
                spaceBetween: 10,
              },
              1200: {
                slidesPerView: 4,
                slidesPerGroup: 1,
                spaceBetween: 0,
              },
            }}
          >
            {Products.map((product) => (
              <SwiperSlide
                key={product.id}
                className="flex justify-center"
              >
                <div
                  className="relative m-auto rounded-2xl"
                  style={{ display: "block", height: "188px", width: "300px",background: `url(${product.image})` }}
                >
                  <a
                    href={`javascript:void(0)`}
                    className=" m-auto absolute top-0 left-0 right-0 bottom-0 p-4"
                  >
                    <div className="text-white z-50 font-bold text-2xl">{product.imgText1}</div>
                    <div className="font-bold text-white z-50">{product.imgText2}</div>
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </React.Fragment>
      </div>

      {/* Navigation buttons placed outside the Swiper */}
      <div
        onClick={handleNext}
        className=" absolute top-1/2 -left-16 transform -translate-y-1/2 bg-white rounded-full shadow-lg p-2 cursor-pointer z-10"
      >
        <svg
          style={{ transform: "rotate(180deg)", width: "30px" }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1024 1024"
          height="100%"
          width="100%"
          preserveAspectRatio="xMidYMid meet"
          focusable="false"
        >
          <path d="M778.174 482.298l-.527-.529-.014-.012L305.761 9.881c-15.847-15.847-41.555-15.847-57.402 0l-.529.527c-15.847 15.849-15.847 41.555 0 57.402l443.186 443.188L247.828 954.19c-15.847 15.843-15.847 41.549 0 57.398l.529.531c15.847 15.845 41.553 15.845 57.402 0l471.86-471.866.028-.026.527-.529c15.847-15.847 15.847-41.555 0-57.4z"></path>
        </svg>
      </div>

      <div
        onClick={handlePrev}
        className=" absolute top-1/2 -right-16 transform -translate-y-1/2 bg-white rounded-full shadow-lg p-2 cursor-pointer z-10"
      >
        <svg
          style={{ width: "30px" }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1024 1024"
          height="100%"
          width="100%"
          preserveAspectRatio="xMidYMid meet"
          focusable="false"
        >
          <path d="M778.174 482.298l-.527-.529-.014-.012L305.761 9.881c-15.847-15.847-41.555-15.847-57.402 0l-.529.527c-15.847 15.849-15.847 41.555 0 57.402l443.186 443.188L247.828 954.19c-15.847 15.843-15.847 41.549 0 57.398l.529.531c15.847 15.845 41.553 15.845 57.402 0l471.86-471.866.028-.026.527-.529c15.847-15.847 15.847-41.555 0-57.4z"></path>
        </svg>
      </div>
    </div>
  );
};

export default SimpleSlider;
