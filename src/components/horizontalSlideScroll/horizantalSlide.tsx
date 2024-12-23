import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules"; // Import the Scrollbar module
import "swiper/css";
import "swiper/css/scrollbar";

const HorizontalSliderWithScroll = () => {
  const logos = [
    "https://acresecurity.com/hs-fs/hubfs/Website/Pages/Homepage/Card%20-%20Solutions.png?width=800&height=1000&name=Card%20-%20Solutions.png",
    "https://acresecurity.com/hs-fs/hubfs/Website/Pages/Homepage/Card%20-%20Solutions-1.png?width=800&height=1000&name=Card%20-%20Solutions-1.png",
    "https://acresecurity.com/hs-fs/hubfs/Website/Pages/Homepage/Card%20-%20Solutions-2.png?width=800&height=1000&name=Card%20-%20Solutions-2.png",
    "https://acresecurity.com/hs-fs/hubfs/Website/Pages/Homepage/Card%20-%20Solutions-3.jpeg?width=800&height=1000&name=Card%20-%20Solutions-3.jpeg",
  ];

  return (
    <div
      className="slider-wrapper"
      style={{
        height: "600px",
        width: "1500px",
        margin: "0 20px",
        overflow: "visible", // Prevent content overflow outside the container
      }}
    >
      <Swiper
        modules={[Scrollbar]} // Add the Scrollbar module
        scrollbar={{ draggable: true }} // Enable a draggable scrollbar
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="mySwiper"
        style={{
          paddingBottom: "30px",
          overflow: "visible", // Leave space for the scrollbar
        }}
      >
        {logos.map((img, index) => (
          <SwiperSlide key={index} className="group slide-card">
            <div
              className="relative flex flex-col mx-auto"
              style={{
                maxWidth: "100%", // Set slide width to 100% of container
              }}
            >
              <img
                className="w-full h-full object-cover"
                src={img}
                alt={`Slide ${index + 1}`}
              />
              
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HorizontalSliderWithScroll;

// import React, {  useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Mousewheel, Scrollbar } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/scrollbar";

// const VerticalSlider = () => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const images = [
//     "https://acresecurity.com/hs-fs/hubfs/Website/Pages/Homepage/Card%20-%20Solutions.png?width=800&height=1000&name=Card%20-%20Solutions.png",
//     "https://acresecurity.com/hs-fs/hubfs/Website/Pages/Homepage/Card%20-%20Solutions-1.png?width=800&height=1000&name=Card%20-%20Solutions-1.png",
//     "https://acresecurity.com/hs-fs/hubfs/Website/Pages/Homepage/Card%20-%20Solutions-2.png?width=800&height=1000&name=Card%20-%20Solutions-2.png",
//   ];

//   const texts = [
//     {
//       title: "Section 1",
//       description: "This is the first section text. It relates to the first image in the slider.",
//     },
//     {
//       title: "Section 2",
//       description: "This is the second section text. It relates to the second image in the slider.",
//     },
//     {
//       title: "Section 3",
//       description: "This is the third section text. It relates to the third image in the slider.",
//     },
//   ];

//   return (
//     <div
//       style={{
//         display: "flex",
//         height: "100vh",
//         width: "100%",
//         overflow: "hidden",
//       }}
//     >
//       {/* Left Side - Swiper Vertical Slider */}
//       <div style={{ flex: 1, height: "100%", position: "relative" }}>
//         <Swiper
//           direction={"vertical"}
//           modules={[Mousewheel, Scrollbar]}
//           mousewheel={true}
//           scrollbar={{ draggable: true }}
//           slidesPerView={1}
//           speed={700} // Adjust for smoother transitions
//           onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
//           style={{ height: "100%" }}
//         >
//           {images.map((image, index) => (
//             <SwiperSlide key={index}>
//               <div
//                 style={{
//                   height: "100%",
//                   display: "flex",
//                   justifyContent: "center",
//                   alignItems: "center",
//                 }}
//               >
//                 <img
//                   src={image}
//                   alt={`Slide ${index + 1}`}
//                   style={{
//                     width: "80%",
//                     height: "80%",
//                     objectFit: "cover",
//                     borderRadius: "8px",
//                   }}
//                 />
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>

//       {/* Right Side - Static Text Sections */}
//       <div
//         style={{
//           flex: 0.5,
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "center",
//           padding: "20px",
//           backgroundColor: "#f9f9f9",
//           borderLeft: "1px solid #ddd",
//         }}
//       >
//         {texts.map((text, index) => (
//           <div
//             key={index}
//             style={{
//               opacity: activeIndex === index ? 1 : 0.4,
//               transition: "opacity 0.5s ease-in-out",
//               marginBottom: "20px",
//             }}
//           >
//             <h2 style={{ fontSize: "1.5rem", color: "#333", marginBottom: "10px" }}>
//               {text.title}
//             </h2>
//             <p style={{ fontSize: "1rem", color: "#555", lineHeight: "1.6" }}>
//               {text.description}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default VerticalSlider;
