import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef, useState } from "react";

const BannerSlider = ({ imgArray, tabs }) => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    afterChange: (current) => setCurrentSlide(current),
  
  };

  const handleBottomImageClick = (index) => sliderRef.current.slickGoTo(index);

  return (
    <div className="flex flex-col items-center w-full mt-4">
      {/* Main Slider */}
      <div className="w-full  sm:w-[600px] md:w-[900px] lg:w-[1050px] relative">
        <Slider ref={sliderRef} {...settings}>
          {imgArray.map((item, index) => (
            <img
              className="rounded-t-lg w-full h-auto"
              alt="slide"
              key={index}
              src={item.imgUrl}
            />
          ))}
        </Slider>
      </div>

      {/* Thumbnail Section */}
      <div className="w-full flex text-center overflow-x-hidden">
        {tabs.map((item, index) => (
          <div
            onMouseEnter={() => handleBottomImageClick(index)}
            key={index}
            className={`w-full cursor-pointer ${
              currentSlide === index ? "border-b-2 border-red-500" : ""
            }`}
          >
            <div
              className="border border-grey overflow-hidden"
              style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
            >
              <div className=" text-xs md:font-semibold lg:text-gray-800  text-wrap">{item.label}</div>
              <div className="text-xs lg:text-sm text-gray-500 overflow-hidden">{item.subtext}</div>
            </div>
          </div>
        ))}
      </div>

      

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4 py-4">
  <img
    src="https://cdn.moglix.com/cms/utility/1724330059100-wLte8NVmC7JRgjtZC6Ikttgq.jpg"
    alt="Promo 1"
    className="w-full h-28 sm:h-36 md:h-28  lg:w-96 object-cover rounded-lg"
  />
  <img
    src="https://cdn.moglix.com/cms/utility/1724330060225-BvIr34SA0l5Uyt7T6Gdda1Jw.jpg"
    alt="Promo 2"
    className="w-full h-28 sm:h-36 md:h-28 md:w-full lg:w-96  object-cover rounded-lg"
  />
  <img
    src="https://cdn.moglix.com/cms/utility/1724330060225-BvIr34SA0l5Uyt7T6Gdda1Jw.jpg"
    alt="Promo 3"
    className="w-full h-28 sm:h-36 md:h-28   lg:w-96 object-cover rounded-lg"
  />
</div> 
    </div>
  );
};

export default BannerSlider;





// import { useEffect, useState } from "react";

// const BannerSlider2 = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
// const cardData = {

//   imgData: [
//     { imgUrl: "https://cdn.moglix.com/cms/utility/1729576611017-TzKF8qN80dsUYmO8Mhi24CeC.png" },
//     { imgUrl: "https://cdn.moglix.com/cms/flyout/Image_2024-11-06_10:34:14.830_platinumNBC_desktop.jpg" },
//     { imgUrl: "https://cdn.moglix.com/cms/flyout/Images_2024-09-19_16-46-58_L0-NDD_Desktop%201.jpg" },
//         { imgUrl: "https://cdn.moglix.com/cms/flyout/Image_2024-11-06_10:34:14.830_platinumNBC_desktop.jpg" },
//     { imgUrl: "https://cdn.moglix.com/cms/flyout/Images_2024-09-19_16-46-58_L0-NDD_Desktop%201.jpg" },
//   ],

//  tabs :[
//   { label: 'Delivery Within', subtext: '24 HOURS' },
//   { label: 'ELECTROWER', subtext: 'Up to 30% OFF' },
//   { label: 'LONGWAY', subtext: 'Up to 60% OFF' },
//   { label: 'SKF AUTOMOTIVE', subtext: 'Up to 45% OFF' },
//   { label: 'NBC', subtext: 'Up to 50% OFF' },
// ]
  
// };
//   // Automatic slide change every 5 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % cardData.imgData.length);
//     }, 5000); // Change slide every 5 seconds
//     return () => clearInterval(interval);
//   }, []);

//   const showSlide = (index) => {
//     setCurrentIndex(index);
//   };

//   return (
//     <div className="relative overflow-hidden w-full max-w-md mx-auto">
//       {/* Banner Section */}
//       <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
//         {cardData.imgData.map((img, index) => (
//           <div key={index} className="min-w-full">
//             {/* Adjust image width for large screens */}
//             <img src={img.imgUrl} alt={`Slide ${index + 1}`} className="w-full h-auto lg:w-full rounded-lg" />
//           </div>
//         ))}
//       </div>

//       {/* Thumbnail Section */}
//       <div className="flex flex-wrap gap-4 justify-center mt-4 text-center px-3 py-1">
//         {cardData.tabs.map((tab, index) => (
//           <button
//             key={index}
//             onMouseEnter={() => showSlide(index)}
//             className={`cursor-pointer w-full sm:w-32 md:w-40 lg:w-48 ${currentIndex === index ? 'border-b-2 bg-[#96B8EE]' : 'bg-white text-black'}`} // Set fixed width for each tab
//           >
//             <div className="flex flex-col items-center">
//               <div className="text-black text-xs">{tab.label}</div>
//               <div className="text-sm text-grey">{tab.subtext}</div>
//             </div>
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default  BannerSlider2