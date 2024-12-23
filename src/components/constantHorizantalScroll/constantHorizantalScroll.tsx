import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // Import the Scrollbar module

const ConstantHorizantalScroll = () => {
  const logos = [
    "https://holdonplease.fr/media/pages/home/5448519d2c-1709288661/hold-on-please-avrils-thomas-weil-01c.jpg",
    "https://holdonplease.fr/media/pages/home/bc5d6e076a-1709288664/hold-on-please-vertical-thomas-weil-07b.jpg",
    "https://holdonplease.fr/media/pages/home/0466ad6ead-1709288664/hold-on-please-hop-thomas-weil-03.jpg",
    "https://holdonplease.fr/media/pages/home/0c8bf02655-1709288664/hold-on-please-taittinger-thomas-weil-13.mp4",
    "https://holdonplease.fr/media/pages/home/87a6fb3f5f-1709288664/hold-on-please-taco-mesa-thomas-weil-12.jpg",
    "https://holdonplease.fr/media/pages/home/1ebbb64b7d-1709288662/hold-on-please-prada-beauty-thomas-weil-01b.jpg",
    "https://holdonplease.fr/media/pages/home/97b3001fd0-1709288664/hold-on-please-rks-thomas-weil-01.jpg",
    "https://holdonplease.fr/media/pages/home/a847aba833-1709288663/hold-on-please-still-life-thomas-weil-18.jpg",
    "https://holdonplease.fr/media/pages/home/1b54c5a118-1709288663/hold-on-please-delvaux-thomas-weil-07.jpg",
    "https://holdonplease.fr/media/pages/home/62244c456e-1709288664/hold-on-please-goblet-thomas-weil-06.jpg",
  ];

  return (
    <div
      className="slider-wrapper"
      style={{
        height: "1000px",
        width: "100vw",
        maxWidth: "100vw",
        overflow: "hidden", // Prevent content overflow outside the container
        display: "flex",
        marginTop: "30px",
        alignItems: "center",
      }}
    >
      <Swiper
        modules={[Autoplay]} // Add the Scrollbar module
        scrollbar={{ draggable: true }} // Enable a draggable scrollbar
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className=""
        loop={true} // Infinite loop
        autoplay={{
          delay: 0, // Start immediately
          disableOnInteraction: false, // Keep autoplay on interaction
        }}
        style={{ height: "100%" }}
        speed={5000} // Speed of the transition between images
      >
        {logos.map((media, index) => (
          <SwiperSlide key={index} className="">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              {/* <img
                className="w-full object-cover" style={{width : '100%' , height : '100%'}}
                src={img}
                alt={`Slide ${index + 1}`}
              /> */}

              {media.endsWith(".mp4") ? (
                <video
                  className="w-full object-cover"
                  style={{ width: "100%", height: "100%" }}
                  src={media}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              ) : (
                <img
                  className="w-full object-cover"
                  style={{ width: "100%", height: "100%" }}
                  src={media}
                  alt={`Slide ${index + 1}`}
                />
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ConstantHorizantalScroll;
