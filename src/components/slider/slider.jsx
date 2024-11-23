import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { CiHeart } from "react-icons/ci";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../features/Slice/CartSlice";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import { getProducts } from "../../features/actions/product/productAction";

export default function SimpleSlider() {
  const [isActive, setIsActive] = useState(true);
const product= useSelector((state)=>state.product)
console.log("product",product)
  // Step 2: Effect hook to update state based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        // Screen width 768px and above
        
        setIsActive(true);
        console.log("act")
        
      } else {
        setIsActive(false); // For smaller screens, set it to false
      }
    };

    // Add event listener to resize event
    window.addEventListener("resize", handleResize);

    // Initial check on mount
    handleResize();

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);



  const dispatch = useDispatch();
  const handleCart = (product) => {
    console.log("product",product)
    dispatch(addToCart(product));
  };

  useEffect(()=>{
    dispatch(getProducts())
  },[])
  return (
    <>
      <div className="relative p-2">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            540: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 25,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
           { Array.isArray(product?.ProductData
           ) && product?.ProductData.map((product) => (
            <SwiperSlide key={product.
            _id}>
              <div className="w-60 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center px-5 py-5 ">
                <div>
                  <Link to={`/product/${product._id}`}>
                    <img
                      src={product.productBanner.secure_url}
                      alt={product.title}
                      className="w-40 h-40 object-cover rounded-md"
                    />
                    <h3 className="text-base font-semibold text-gray-800 mb-2 text-wrap">
                      {product.productTitle}
                    </h3>
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <span className="text-red-600 font-bold text-xl">
                        ₹{product.price}
                      </span>
                      <span className="text-gray-500 line-through text-sm">
                        ₹{product.originalPrice}
                      </span>
                      <span className="text-green-600 text-sm">
                        {product.discount}%
                      </span>
                    </div>
                  </Link>
       
<CiHeart className="absolute top-0 left-52 mt-4" size={20} />
                  <button
                    className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300"
                    onClick={() => {
                      handleCart(product);
                    }}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation buttons */}
        {isActive && (
          <div className="swiper-button-prev absolute !text-gray-500 "></div>
        )}
        {isActive && (
          <div className="swiper-button-next absolute sm:mr-4 !text-gray-500"></div>
        )}
      </div>
    </>
  );
}