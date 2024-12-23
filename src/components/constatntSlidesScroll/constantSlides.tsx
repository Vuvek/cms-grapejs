import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export const VerticalUpSlider = () => {
  const settings = {
    vertical: true, // Enable vertical sliding
    slidesToShow: 5, // Number of logos to show at once
    slidesToScroll: 1,
    infinite: true, // Infinite loop
    autoplay: true, // Enable autoplay
    autoplaySpeed: -1, // Speed between transitions (2 seconds)
    speed: 4000, // Speed of the slide transition (1 second)
    cssEase: "ease-in-out", // Smoother easing function
    arrows: false, // No arrows needed for this slider
    centerMode: true, // Keep center alignment for smooth transition
    centerPadding: "0", // Keep no extra padding
    focusOnSelect: true, // Focus on the selected image
  };

  const logos = [
    "https://acresecurity.com/hs-fs/hubfs/Coca%20Cola.png?width=360&height=360&name=Coca%20Cola.png",
    "https://acresecurity.com/hs-fs/hubfs/Client%20Logos/Coop.png?width=218&height=231&name=Coop.png",
    "https://acresecurity.com/hs-fs/hubfs/Goodyear%20Tire%20and%20Rubber.png?width=360&height=360&name=Goodyear%20Tire%20and%20Rubber.png",
    "https://acresecurity.com/hs-fs/hubfs/Heathrow.png?width=360&height=360&name=Heathrow.png",
    "https://acresecurity.com/hs-fs/hubfs/Client%20Logos/ICA%20Sweden.png?width=318&height=159&name=ICA%20Sweden.png",
    "https://acresecurity.com/hs-fs/hubfs/LinkedIn_logo_initials.png?width=360&height=360&name=LinkedIn_logo_initials.png",
  ];

  return (
    <div
      style={{
        height: "600px",
        width: "200px",
        margin: "0 20px",
        overflow: "hidden",
      }}
    >
      <Slider
        {...settings}
        className="logo-item h-full bg-[rgb(248 248 249)] py-3.5 px-3.5 lg:py-7 lg:px-8 rounded-2xl overflow-hidden flex flex-col items-center justify-center"
      >
        {logos.map((logo, index) => (
          <div key={index} className="mt-2">
            <div className="bg-gray-100 rounded-xl py-7 px-8 flex items-center justify-center">
              <img
                src={logo}
                alt={`Logo ${index + 1}`}
                style={{
                  maxWidth: "100px",
                  maxHeight: "100px",
                  objectFit: "contain",
                }}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export const VerticalDownSlider = () => {
  const settings = {
    vertical: true, // Enable vertical sliding
    slidesToShow: 5, // Number of logos to show at once
    slidesToScroll: 1,
    infinite: true, // Infinite loop
    autoplay: true, // Enable autoplay
    autoplaySpeed: -1, // Speed between transitions (2 seconds)
    speed: 4000, // Speed of the slide transition (1 second)
    cssEase: "ease-in-out", // Smoother easing function
    arrows: false, // No arrows needed for this slider
    centerMode: true, // Keep center alignment for smooth transition
    centerPadding: "0", // Keep no extra padding
    focusOnSelect: true, // Focus on the selected image
    rtl: true, // Right to Left to make it scroll downward
  };

  const logos = [
    "https://acresecurity.com/hs-fs/hubfs/Coca%20Cola.png?width=360&height=360&name=Coca%20Cola.png",
    "https://acresecurity.com/hs-fs/hubfs/Client%20Logos/Coop.png?width=218&height=231&name=Coop.png",
    "https://acresecurity.com/hs-fs/hubfs/Goodyear%20Tire%20and%20Rubber.png?width=360&height=360&name=Goodyear%20Tire%20and%20Rubber.png",
    "https://acresecurity.com/hs-fs/hubfs/Heathrow.png?width=360&height=360&name=Heathrow.png",
    "https://acresecurity.com/hs-fs/hubfs/Client%20Logos/ICA%20Sweden.png?width=318&height=159&name=ICA%20Sweden.png",
    "https://acresecurity.com/hs-fs/hubfs/LinkedIn_logo_initials.png?width=360&height=360&name=LinkedIn_logo_initials.png",
  ];

  return (
    <div
      style={{
        height: "600px",
        width: "200px",
        margin: "0 20px",
        overflow: "hidden",
      }}
    >
      <Slider
        {...settings}
        className="logo-item h-full bg-[rgb(248 248 249)] py-3.5 px-3.5 lg:py-7 lg:px-8 rounded-2xl overflow-hidden flex flex-col items-center justify-center"
      >
        {logos.map((logo, index) => (
          <div key={index} className="mt-2">
            <div className="bg-gray-100 rounded-xl py-7 px-8 flex items-center justify-center">
              <img
                src={logo}
                alt={`Logo ${index + 1}`}
                style={{
                  maxWidth: "100px",
                  maxHeight: "100px",
                  objectFit: "contain",
                }}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const ConstantSlides = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex">
        {/* Vertical Up Slider */}
        <div className=" overflow-hidden">
          <VerticalUpSlider />
        </div>

        {/* Vertical Down Slider */}
        <div className=" overflow-hidden">
          <VerticalDownSlider />
        </div>
      </div>
    </div>
  );
};

export default ConstantSlides;
