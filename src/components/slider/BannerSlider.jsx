import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef, useState } from "react";

const BannerSlider = ({ imgArray, tabs }) => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    infinite: true, // Enable infinite loop for autoplay
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Set autoplay interval to 3 seconds (adjust as needed)
    afterChange: (current) => setCurrentSlide(current),
  };

  const handleBottomImageClick = (index) => sliderRef.current.slickGoTo(index);

  return (
    <div className="flex flex-col items-center ">
      {/* Main Slider */}
      <div className="w-[1050px]  relative ">
        <Slider ref={sliderRef} {...settings}>
          {imgArray.map((item, index) => (
            <img
              className="rounded-t-lg w-48 h-64"
              alt="slide"
              key={index}
              src={item.imgUrl}
            />
          ))}
        </Slider>
      </div>

      {/* Thumbnail Section */}
      <div className=" w-full flex text-center overflow-x-hidden">
        {tabs.map((item, index) => (
          <div
            onMouseEnter={() => handleBottomImageClick(index)}
            key={index}
            className={`w-full h-full  cursor-pointer  ${
              currentSlide === index ? "border-b-2 border-red-500" : ""
            }`}
          >
            <div
              className="border border-grey "
              style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
            >
              <div className="font-semibold text-gray-800">{item.label}</div>
              <div className="text-sm text-gray-500">{item.subtext}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BannerSlider;
