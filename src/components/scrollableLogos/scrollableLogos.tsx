import React from "react";
import {  Navigation, Scrollbar } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// interface scrollableLogo {
//   slides: any[];
// }

const Prev = `<svg
xmlns='http://www.w3.org/2000/svg'
width='35'
height='35'
viewBox='0 0 35 35'
fill='none'
>
<path
  d='M17.5 -1.5299e-06C7.83502 -2.37484e-06 2.37484e-06 7.83502 1.5299e-06 17.5C6.84959e-07 27.165 7.83502 35 17.5 35C27.165 35 35 27.165 35 17.5C35 7.83502 27.165 -6.84959e-07 17.5 -1.5299e-06Z'
/>
<path
  d='M14.1699 17.48L22.21 25.5699L21.5299 26.25L12.7999 17.48L21.5299 8.75L22.21 9.42993L14.1699 17.47L14.1699 17.48Z'
  fill='black'
/>
</svg>`;

const Next = `<svg xmlns='http://www.w3.org/2000/svg' width='35' height='35' viewBox='0 0 35 35' fill='none'>
<path d='M17.5 35C27.165 35 35 27.165 35 17.5C35 7.83502 27.165 0 17.5 0C7.83502 0 0 7.83502 0 17.5C0 27.165 7.83502 35 17.5 35Z'
/>
<path d='M20.8301 17.52L12.79 9.43005L13.4701 8.75L22.2001 17.52L13.4701 26.25L12.79 25.5701L20.8301 17.53V17.52Z'
  fill='black'
/>
</svg>`;

const PrevDisable = `<svg xmlns='http://www.w3.org/2000/svg' width='35' height='36' viewBox='0 0 35 36' fill='none'>
<path d='M17.5 35.8689C27.165 35.8689 35 28.0339 35 18.3689C35 8.70391 27.165 0.868896 17.5 0.868896C7.83502 0.868896 0 8.70391 0 18.3689C0 28.0339 7.83502 35.8689 17.5 35.8689Z'
/>
<path d='M22.21 26.4389L21.53 27.1189L12.8 18.3889L21.53 9.6189L22.21 10.2989L14.17 18.3889L22.21 26.4289V26.4389Z'
  fill='black'
/>
</svg>`;
const NextDisable = `<svg xmlns='http://www.w3.org/2000/svg' width='35' height='36' viewBox='0 0 35 36' fill='none'>
<path d='M17.5 0.870116C7.83502 0.870115 2.37484e-06 8.70513 1.5299e-06 18.3701C6.84959e-07 28.0351 7.83502 35.8701 17.5 35.8701C27.165 35.8701 35 28.0351 35 18.3701C35 8.70514 27.165 0.870117 17.5 0.870116Z'
/>
<path d='M12.79 10.3001L13.47 9.62012L22.2 18.3501L13.47 27.1201L12.79 26.4401L20.83 18.3501L12.79 10.3101L12.79 10.3001Z'
  fill='black'
/>
</svg>`;

const SrollableLogos = () => {

  const slides = [
    {
      image:
        "https://pkheadlessstorage.blob.core.windows.net/storagemedia/1/store/5/images/agiledefensejun7.png",
      alt: "Default Alt Text",
      link: "https://www.example.com",
    },
    {
      image:
        "https://storagemedia.corporategear.com/storagemedia/1/store/5/images/amazonjun7.png",
      alt: "Default Alt Text",
      link: "https://www.example.com",
    },
    {
      image:
        "https://storagemedia.corporategear.com/storagemedia/1/store/5/images/workdayjun7.png",
      alt: "Default Alt Text",
      link: "https://www.example.com",
    },
    {
      image:
        "https://storagemedia.corporategear.com/storagemedia/1/store/5/images/thdjun7.png",
      alt: "Default Alt Text",
      link: "https://www.example.com",
    },
    {
      image:
        "https://storagemedia.corporategear.com/storagemedia/1/store/5/images/smartwaterjun7.png",
      alt: "Default Alt Text",
      link: "https://www.example.com",
    },
    {
      image:
        "https://storagemedia.corporategear.com/storagemedia/1/store/5/images/smartwaterjun7.png",
      alt: "Default Alt Text",
      link: "https://www.example.com",
    },
    {
      image:
        "https://storagemedia.corporategear.com/storagemedia/1/store/5/images/simplisafejun7.png",
      alt: "Default Alt Text",
      link: "https://www.example.com",
    },
    {
      image:
        "https://storagemedia.corporategear.com/storagemedia/1/store/5/images/showtimejun7.png",
      alt: "Default Alt Text",
      link: "https://www.example.com",
    },
    {
      image:
        "https://redefinecommerce.blob.core.windows.net/lanomedia/1/store/5/images/logo-1.png",
      alt: "Default Alt Text",
      link: "https://www.example.com",
    },
    {
      image:
        "https://storagemedia.corporategear.com/storagemedia/1/store/5/images/greygoosejun7.png",
      alt: "Default Alt Text",
      link: "https://www.example.com",
    },
    {
      image:
        "https://storagemedia.corporategear.com/storagemedia/1/store/5/images/espnjun7.png",
      alt: "Default Alt Text",
      link: "https://www.example.com",
    },
    {
      image:
        "https://storagemedia.corporategear.com/storagemedia/1/store/5/images/amazonjun7.png",
      alt: "Default Alt Text",
      link: "https://www.example.com",
    },
    {
      image:
        "https://storagemedia.corporategear.com/storagemedia/1/store/5/images/workdayjun7.png",
      alt: "Default Alt Text",
      link: "https://www.example.com",
    },
    {
      image:
        "https://storagemedia.corporategear.com/storagemedia/1/store/5/images/thdjun7.png",
      alt: "Default Alt Text",
      link: "https://www.example.com",
    },
    {
      image:
        "https://storagemedia.corporategear.com/storagemedia/1/store/5/images/smartwaterjun7.png",
      alt: "Default Alt Text",
      link: "https://www.example.com",
    },
    {
      image:
        "https://storagemedia.corporategear.com/storagemedia/1/store/5/images/smartwaterjun7.png",
      alt: "Default Alt Text",
      link: "https://www.example.com",
    },
    {
      image:
        "https://storagemedia.corporategear.com/storagemedia/1/store/5/images/simplisafejun7.png",
      alt: "Default Alt Text",
      link: "https://www.example.com",
    },
    {
      image:
        "https://storagemedia.corporategear.com/storagemedia/1/store/5/images/showtimejun7.png",
      alt: "Default Alt Text",
      link: "https://www.example.com",
    },
    {
      image:
        "https://redefinecommerce.blob.core.windows.net/lanomedia/1/store/5/images/logo-1.png",
      alt: "Default Alt Text",
      link: "https://www.example.com",
    },
    {
      image:
        "https://storagemedia.corporategear.com/storagemedia/1/store/5/images/greygoosejun7.png",
      alt: "Default Alt Text",
      link: "https://www.example.com",
    },
    {
      image:
        "https://storagemedia.corporategear.com/storagemedia/1/store/5/images/espnjun7.png",
      alt: "Default Alt Text",
      link: "https://www.example.com",
    },
  ];
 

  return (
    <>
      <div className="mx-auto mb-8 justify-center items-center text-center logo-slider" style={{width:'1350px'}}>
        <div className="">
          <div className="relative">
            <button
              dangerouslySetInnerHTML={{ __html: PrevDisable }}
              className="hidden lg:block swiper-arrows swiper-prev absolute right-12 bottom-full w-9 h-9 flex items-center justify-center rounded-full swiper-button-disabled"
            ></button>
            <button 
              dangerouslySetInnerHTML={{ __html: Next }}
              className="hidden lg:block swiper-arrows swiper-next absolute right-0 bottom-full w-9 h-9 flex items-center justify-center rounded-full"
            ></button>

            <Swiper
             
              modules={[Scrollbar, Navigation]}
              className="mySwiper overflow-hidden swiper-initialized swiper-horizontal pt-3 pb-6"
              navigation={{
                nextEl: ".swiper-next",
                prevEl: ".swiper-prev",
              }}
              onSlideChange={(swiper:any) => {
                if (
                  swiper.navigation.nextEl[0].classList
                    .toString()
                    .includes("disable")
                ) {
                  swiper.navigation.nextEl[0].innerHTML = NextDisable;
                } else {
                  swiper.navigation.nextEl[0].innerHTML = Next;
                }
                if (
                  swiper.navigation.prevEl[0].classList
                    .toString()
                    .includes("disable")
                ) {
                  swiper.navigation.prevEl[0].innerHTML = PrevDisable;
                } else {
                  swiper.navigation.prevEl[0].innerHTML = Prev;
                }
              }}
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
                  slidesPerView: 7,
                  slidesPerGroup: 7,
                  spaceBetween: 20,
                },
              }}
              scrollbar={{
                el: ".swiper-scrollbar",
              }}
            >
              {slides.map((data, index) => {
                const imgTag = (
                  <img
                    className='img-fluid rounded-0 mx-auto h-full'
                    alt={data?.alt}
                    title={data?.image}
                    src={data?.image}
                    style={{
                      borderRadius: '10px',
                      background: 'rgb(255, 255, 255)',
                    }}
                  />
                );
                return (
                  <SwiperSlide key={index}>
                          {data.link ? (
                            <a href={data?.link}>{imgTag}</a>
                          ) : (
                            imgTag
                          )}
                        </SwiperSlide>
                );
              })}
              <span
                className="swiper-notification"
                aria-live="assertive"
                aria-atomic="true"
              ></span>
            </Swiper>

            <div
              className="swiper-scrollbar h-2.5 bg-transparent swiper-scrollbar-horizontal"
              style={{
                height: "0.625rem",
              }}
            ></div>
          </div>
        </div>
      </div>

     
    </>
  );
};

export default SrollableLogos;
