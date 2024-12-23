import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {  FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

interface Colleague {
  id: number;
  name: string;
  photo: string;
  description: string;
}

const colleagues: Colleague[] = [
  {
    id: 1,
    name: "Thomas Kräftner",
    photo:
      "https://www.astundnebel.at/sites/default/files/styles/portrait/public/2021-06/Thomas-Kraeftner.jpg?itok=45N-SERl",
    description:
      "Thomas has been a colleague from the very beginning. We met at the university, moved into our first office together and worked on several web projects until now. His passion for web accessibility, security, and usability makes his work so valuable and the web a better place. Thank you Thomas, we look forward to everything that may come. 👉 ",
  },
  {
    id: 2,
    name: "Fanny Arnold",
    photo:
      "https://www.astundnebel.at/sites/default/files/styles/portrait/public/2021-05/Fanny-Arnold.jpg?itok=EroqXbWI",
    description: "We know Fanny from our time at the Design University in Graz. A few years ago,  (our fashion weather blog) has brought us together again and since then we started designing and partying together 💃 Thank you Fanny for supporting us with every professional and personal topic, for your technical expertise, your dry jokes and the wonderful cocktail and spritzer evenings.",
  },
  {
    id: 3,
    name: "Michael Lung",
    photo:
      "https://www.astundnebel.at/sites/default/files/styles/portrait/public/2021-06/Michael-Lung-bildbewegung.jpg?itok=IZRPZq9G",
    description: "Without Michael, we would not be able to create the explanatory videos for the FH Campus Wien. He transforms our static storyboards into happy animations, pimps them with sound and the speaking voices of Johannes Rhomberg and Christina Trefny and serves his professional mixture with a friendly email. Thank you Michael for your great and constant work! 💁‍♂️ ",
  },
  {
    id: 4,
    name: "Bob Williams",
    photo:
      "https://www.astundnebel.at/sites/default/files/styles/portrait/public/2021-05/josef-rettenwender-square.jpg?itok=NHFiJnZY",
    description: "Without Michael, we would not be able to create the explanatory videos for the FH Campus Wien. He transforms our static storyboards into happy animations, pimps them with sound and the speaking voices of Johannes Rhomberg and Christina Trefny and serves his professional mixture with a friendly email. Thank you Michael for your great and constant work! 💁‍♂️ ",
  },
  {
    id: 5,
    name: "Charlie Brown",
    photo:
      "https://www.astundnebel.at/sites/default/files/styles/portrait/public/2021-06/acolono-gmbh-logo--fallback.png?itok=s5k9WvY4",
    description: "Without Michael, we would not be able to create the explanatory videos for the FH Campus Wien. He transforms our static storyboards into happy animations, pimps them with sound and the speaking voices of Johannes Rhomberg and Christina Trefny and serves his professional mixture with a friendly email. Thank you Michael for your great and constant work! 💁‍♂️ ",
  },
  {
    id: 6,
    name: "Charlie Brown",
    photo:
      "https://www.astundnebel.at/sites/default/files/styles/portrait/public/2021-05/Theresa-Bauer-square.jpg?itok=n-5vvsyG",
    description: "Without Michael, we would not be able to create the explanatory videos for the FH Campus Wien. He transforms our static storyboards into happy animations, pimps them with sound and the speaking voices of Johannes Rhomberg and Christina Trefny and serves his professional mixture with a friendly email. Thank you Michael for your great and constant work! 💁‍♂️ ",
  },
  {
    id: 7,
    name: "Charlie Brown",
    photo:
      "https://www.astundnebel.at/sites/default/files/styles/portrait/public/2021-05/Theresa-Bauer-square.jpg?itok=n-5vvsyG",
    description: "Without Michael, we would not be able to create the explanatory videos for the FH Campus Wien. He transforms our static storyboards into happy animations, pimps them with sound and the speaking voices of Johannes Rhomberg and Christina Trefny and serves his professional mixture with a friendly email. Thank you Michael for your great and constant work! 💁‍♂️ ",
  },
  {
    id: 8,
    name: "Charlie Brown",
    photo:
      "https://www.astundnebel.at/sites/default/files/styles/portrait/public/2021-05/Theresa-Bauer-square.jpg?itok=n-5vvsyG",
    description: "Without Michael, we would not be able to create the explanatory videos for the FH Campus Wien. He transforms our static storyboards into happy animations, pimps them with sound and the speaking voices of Johannes Rhomberg and Christina Trefny and serves his professional mixture with a friendly email. Thank you Michael for your great and constant work! 💁‍♂️ ",
  },
  {
    id: 9,
    name: "Charlie Brown",
    photo:
      "https://www.astundnebel.at/sites/default/files/styles/portrait/public/2021-05/Theresa-Bauer-square.jpg?itok=n-5vvsyG",
    description: "Without Michael, we would not be able to create the explanatory videos for the FH Campus Wien. He transforms our static storyboards into happy animations, pimps them with sound and the speaking voices of Johannes Rhomberg and Christina Trefny and serves his professional mixture with a friendly email. Thank you Michael for your great and constant work! 💁‍♂️ ",
  },
  {
    id: 10,
    name: "Charlie Brown",
    photo:
      "https://www.astundnebel.at/sites/default/files/styles/portrait/public/2021-05/Theresa-Bauer-square.jpg?itok=n-5vvsyG",
    description: "Without Michael, we would not be able to create the explanatory videos for the FH Campus Wien. He transforms our static storyboards into happy animations, pimps them with sound and the speaking voices of Johannes Rhomberg and Christina Trefny and serves his professional mixture with a friendly email. Thank you Michael for your great and constant work! 💁‍♂️ ",
  },
  {
    id: 11,
    name: "Charlie Brown",
    photo:
      "https://www.astundnebel.at/sites/default/files/styles/portrait/public/2021-05/Theresa-Bauer-square.jpg?itok=n-5vvsyG",
    description: "Without Michael, we would not be able to create the explanatory videos for the FH Campus Wien. He transforms our static storyboards into happy animations, pimps them with sound and the speaking voices of Johannes Rhomberg and Christina Trefny and serves his professional mixture with a friendly email. Thank you Michael for your great and constant work! 💁‍♂️ ",
  },
];

const DotSlideScroll: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const swiperRef = React.useRef<any>(null);

  const handleCardClick = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.slideToLoop(index); // Move the clicked card to the center
    }
  };

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };

  return (
    <div className=" mx-auto py-8" style={{width : '100vw',overflow:'hidden'}}>
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)} // Store Swiper instance
        modules={[FreeMode]}
        spaceBetween={10}
        slidesPerView={5.2}
        centeredSlides={true}
        loop={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {colleagues.map((colleague, index) => (
          <SwiperSlide key={colleague.id} className="flex justify-center gap-5" style={{overflow:'hidden'}}> 
            <div
              style={{ height: "700px",width:'350px' }}
              onClick={() => handleCardClick(index)} // Card click handler
              className={`w-full flex flex-col items-center p-6 rounded-lg cursor-pointer transition-all duration-300 shadow-md overflow-hidden
              ${
                index === activeIndex
                  ? "bg-white scale-110 shadow-lg"
                  : "bg-[#eefced]"
              }`}
            >
              <div className="w-full h-auto flex flex-row items-center p-6 rounded-lg cursor-pointer gap-8">
                <div style={{width : '50%'}} className="flex justify-center">
                <img
                  src={colleague.photo}
                  alt={colleague.name}
                  className="w-50 h-50 rounded-full object-cover mb-4 "
                />
                </div>
                <div style={{width: '50%'}} className="flex justify-start items-start]">

                <h3 className="text-lg font-semibold mb-2">{colleague.name}</h3>
                </div>
              </div>
              <div>
              <p className="text-2xl text-gray-600">{colleague.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Pagination Dots */}
      <div className="flex justify-center gap-4 mt-8">
        {colleagues.map((colleague, index) => (
          <button
            key={colleague.id}
            onClick={() => handleDotClick(index)}
            className={`w-12 h-12 overflow-hidden border-2 transition-all ${
              activeIndex === index
                ? "border-blue-500 scale-110"
                : "border-gray-300"
            }`}
          >
            <img
              src={colleague.photo}
              alt={colleague.name}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default DotSlideScroll;
