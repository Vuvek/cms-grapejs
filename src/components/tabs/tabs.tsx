import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

interface IFeaturedProducts {
  id: number;
  tabName: string;
  products: {
    name: string;
    image: string;
    price: string;
  }[];
}

const FeaturedProducts: IFeaturedProducts[] = [
  {
    id: 1,
    tabName: "Summer",
    products: [
      {
        name: "Turkey",
        image:
          "https://www.thomascook.com/.imaging/mte/thomascook-theme/top-destinations/dam/uk/Carousel/Carousel/Malta.jpg/jcr:content/Malta.jpg",
        price: "£404",
      },
      {
        name: "Cyprus",
        image:
          "https://www.thomascook.com/.imaging/mte/thomascook-theme/top-destinations/dam/legacy/heros/cyprus/cyprus/cypruscarousel--1-.jpg/jcr:content/cypruscarousel%20(1).jpg",
        price: "£528",
      },
      {
        name: "Malta",
        image:
          "https://www.thomascook.com/.imaging/mte/thomascook-theme/top-destinations/dam/uk/Carousel/Carousel/Malta.jpg/jcr:content/Malta.jpg",
        price: "£441",
      },
      {
        name: "Morocco",
        image:
          "https://www.thomascook.com/.imaging/mte/thomascook-theme/top-destinations/dam/uk/Carousel/Carousel/Malta.jpg/jcr:content/Malta.jpg",
        price: "£393",
      },
      {
        name: "Dominican Rebublic",
        image:
          "https://www.thomascook.com/.imaging/mte/thomascook-theme/top-destinations/dam/uk/Carousel/Carousel/Malta.jpg/jcr:content/Malta.jpg",
        price: "£2,461",
      },
      {
        name: "Turkey",
        image:
          "https://www.thomascook.com/.imaging/mte/thomascook-theme/top-destinations/dam/uk/Carousel/Carousel/Malta.jpg/jcr:content/Malta.jpg",
        price: "£404",
      },
      {
        name: "Cyprus",
        image:
          "https://www.thomascook.com/.imaging/mte/thomascook-theme/top-destinations/dam/legacy/heros/cyprus/cyprus/cypruscarousel--1-.jpg/jcr:content/cypruscarousel%20(1).jpg",
        price: "£528",
      },
    ],
  },
  {
    id: 2,
    tabName: "Winter",
    products: [
      {
        name: "Turkey",
        image:
          "https://www.thomascook.com/.imaging/mte/thomascook-theme/top-destinations/dam/uk/Carousel/Carousel/Morocco.jpg/jcr:content/Morocco.jpg",
        price: "£404",
      },
      {
        name: "Cyprus",
        image:
          "https://www.thomascook.com/.imaging/mte/thomascook-theme/top-destinations/dam/legacy/heros/cyprus/cyprus/cypruscarousel--1-.jpg/jcr:content/cypruscarousel%20(1).jpg",
        price: "£528",
      },
      {
        name: "Malta",
        image:
          "https://www.thomascook.com/.imaging/mte/thomascook-theme/top-destinations/dam/uk/Carousel/Carousel/Malta.jpg/jcr:content/Malta.jpg",
        price: "£441",
      },
      {
        name: "Morocco",
        image:
          "https://www.thomascook.com/.imaging/mte/thomascook-theme/top-destinations/dam/uk/Carousel/Carousel/Malta.jpg/jcr:content/Malta.jpg",
        price: "£393",
      },
      {
        name: "Dominican Rebublic",
        image:
          "https://www.thomascook.com/.imaging/mte/thomascook-theme/top-destinations/dam/uk/Carousel/Carousel/Malta.jpg/jcr:content/Malta.jpg",
        price: "£2,461",
      },
    ],
  },
  {
    id: 3,
    tabName: "Luxury",
    products: [
      {
        name: "Turkey",
        image:
          "https://www.thomascook.com/.imaging/mte/thomascook-theme/top-destinations/dam/legacy/heros/cyprus/cyprus/cypruscarousel--1-.jpg/jcr:content/cypruscarousel%20(1).jpg",
        price: "£404",
      },
      {
        name: "Cyprus",
        image:
          "https://www.thomascook.com/.imaging/mte/thomascook-theme/top-destinations/dam/legacy/heros/cyprus/cyprus/cypruscarousel--1-.jpg/jcr:content/cypruscarousel%20(1).jpg",
        price: "£528",
      },
      {
        name: "Malta",
        image:
          "https://www.thomascook.com/.imaging/mte/thomascook-theme/top-destinations/dam/uk/Carousel/Carousel/Malta.jpg/jcr:content/Malta.jpg",
        price: "£441",
      },
      {
        name: "Morocco",
        image:
          "https://www.thomascook.com/.imaging/mte/thomascook-theme/top-destinations/dam/uk/Carousel/Carousel/Malta.jpg/jcr:content/Malta.jpg",
        price: "£393",
      },
      {
        name: "Dominican Rebublic",
        image:
          "https://www.thomascook.com/.imaging/mte/thomascook-theme/top-destinations/dam/uk/Carousel/Carousel/Malta.jpg/jcr:content/Malta.jpg",
        price: "£2,461",
      },
    ],
  },
  {
    id: 4,
    tabName: "City breaks",
    products: [
      {
        name: "Turkey",
        image:
          "https://www.thomascook.com/.imaging/mte/thomascook-theme/top-destinations/dam/uk/holidays/city-breaks/Amsterdam_mob.jpg/jcr:content/Amsterdam_mob.jpg",
        price: "£404",
      },
      {
        name: "Cyprus",
        image:
          "https://www.thomascook.com/.imaging/mte/thomascook-theme/top-destinations/dam/legacy/heros/cyprus/cyprus/cypruscarousel--1-.jpg/jcr:content/cypruscarousel%20(1).jpg",
        price: "£528",
      },
      {
        name: "Malta",
        image:
          "https://www.thomascook.com/.imaging/mte/thomascook-theme/top-destinations/dam/uk/Carousel/Carousel/Malta.jpg/jcr:content/Malta.jpg",
        price: "£441",
      },
      {
        name: "Morocco",
        image:
          "https://www.thomascook.com/.imaging/mte/thomascook-theme/top-destinations/dam/uk/Carousel/Carousel/Malta.jpg/jcr:content/Malta.jpg",
        price: "£393",
      },
      {
        name: "Dominican Rebublic",
        image:
          "https://www.thomascook.com/.imaging/mte/thomascook-theme/top-destinations/dam/uk/Carousel/Carousel/Malta.jpg/jcr:content/Malta.jpg",
        price: "£2,461",
      },
    ],
  },
  {
    id: 5,
    tabName: "Long haul",
    products: [
      {
        name: "Turkey",
        image:
          "https://www.thomascook.com/.imaging/mte/thomascook-theme/top-destinations/dam/legacy/heros/caribbean/aruba/Aruba_Eagle_Beach_2.jpg/jcr:content/Aruba_Eagle_Beach_2.jpg",
        price: "£404",
      },
      {
        name: "Cyprus",
        image:
          "https://www.thomascook.com/.imaging/mte/thomascook-theme/top-destinations/dam/legacy/heros/cyprus/cyprus/cypruscarousel--1-.jpg/jcr:content/cypruscarousel%20(1).jpg",
        price: "£528",
      },
      {
        name: "Malta",
        image:
          "https://www.thomascook.com/.imaging/mte/thomascook-theme/top-destinations/dam/uk/Carousel/Carousel/Malta.jpg/jcr:content/Malta.jpg",
        price: "£441",
      },
      {
        name: "Morocco",
        image:
          "https://www.thomascook.com/.imaging/mte/thomascook-theme/top-destinations/dam/uk/Carousel/Carousel/Malta.jpg/jcr:content/Malta.jpg",
        price: "£393",
      },
      {
        name: "Dominican Rebublic",
        image:
          "https://www.thomascook.com/.imaging/mte/thomascook-theme/top-destinations/dam/uk/Carousel/Carousel/Malta.jpg/jcr:content/Malta.jpg",
        price: "£2,461",
      },
    ],
  },
];

const TabSection = () => {
  const swiperRef = useRef<any>(null);
  const [activeTab, setActiveTab] = useState("Summer"); 

  const handleNext = () => {
    swiperRef.current?.slideNext(); 
  };

  const handlePrev = () => {
    swiperRef.current?.slidePrev(); 
  };

  return (
    <div className="w-full relative">
      {/* Tab Buttons */}
      <div className="flex">
        {FeaturedProducts.map((tab) => (
          <button
            key={tab.tabName}
            className={`mr-8 border-b-4 text-lg ${
              activeTab === tab.tabName
                ? "text-black border-red-500 font-bold"
                : " border-transparent font-normal"
            } transition duration-300 ease-in-out `}
            onClick={() => setActiveTab(tab.tabName)}
          >
            {tab.tabName}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div
        className="mt-4"
        style={{ width: "100%", maxWidth: "1300px", paddingBottom: "32px" }}
      >
        <React.Fragment>
          <Swiper
            className="mySwiper pt-[10px] pb-[20px]"
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            spaceBetween={20}
            slidesPerView={5}
            loop={true}
            breakpoints={{
              0: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                slidesPerGroup: 1,
                spaceBetween: 20,
              },
              1200: {
                slidesPerView: 5,
                slidesPerGroup: 1,
                spaceBetween: 20,
              },
            }}
          >
            {FeaturedProducts.find(
              (tab) => tab.tabName === activeTab
            )?.products.map((product) => (
              <SwiperSlide
                key={product.name}
                className="flex justify-center gap-5"
              >
                <div className="w-full">
                  <div
                    className={`border border-gray-200 bg-white border-solid relative h-auto rounded-2xl`}
                  >
                    <div className="relative">
                      <a
                        href={`${encodeURIComponent(product?.name)}.html`}
                        className="hrefurl w-auto m-auto "
                        style={{ display: "block" }}
                      >
                        <img
                          src={product?.image}
                          alt={product?.name}
                          title={product?.name}
                          className="m-auto rounded-2xl"
                          height={50}
                          style={{ height: "370px" }}
                          width={250}
                          key={product?.name}
                        />
                      </a>
                    </div>
                    <div
                      className="w-full"
                      style={{
                        padding: "16px 8px 16px 8px",
                        background: "#fff",
                        position: "absolute",
                        bottom: "0",
                        borderRadius: "0 24px 16px 16px",
                      }}
                    >
                      <p className="text-2xl font-bold leading-8">Malta</p>
                      <section className="" style={{ marginBottom: "8px" }}>
                        <div className="flex p-[7px]">
                          <svg
                            style={{
                              width: "15px",
                              height: "15px",
                              marginRight: "2px",
                            }}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                          >
                            <path
                              d="M16 5.813L10.469 5 8 0 5.531 5 0 5.813l4 3.875-.938 5.5L8 12.594l4.938 2.594-.938-5.5z"
                              fill="rgb(215, 65, 19)"
                            />
                          </svg>
                          <svg
                            style={{
                              width: "15px",
                              height: "15px",
                              marginRight: "2px",
                            }}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                          >
                            <path
                              d="M16 5.813L10.469 5 8 0 5.531 5 0 5.813l4 3.875-.938 5.5L8 12.594l4.938 2.594-.938-5.5z"
                              fill="rgb(215, 65, 19)"
                            />
                          </svg>
                          <svg
                            style={{
                              width: "15px",
                              height: "15px",
                              marginRight: "2px",
                            }}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                          >
                            <path
                              d="M16 5.813L10.469 5 8 0 5.531 5 0 5.813l4 3.875-.938 5.5L8 12.594l4.938 2.594-.938-5.5z"
                              fill="rgb(215, 65, 19)"
                            />
                          </svg>
                        </div>
                      </section>
                      <div className="flex justify-between">
                        <div>
                          <p className="featured-deal-body__option">
                            {" "}
                            All Inclusive
                          </p>
                          <p className="featured-deal-body__duration">
                            7 nights
                          </p>
                        </div>
                        <p className="">
                          from
                          <span className="text-2xl font-bold">£424</span>
                          <span className="" style={{ verticalAlign: "super" }}>
                            pp
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
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

export default TabSection;
