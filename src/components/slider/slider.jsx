import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import {useDispatch} from 'react-redux'
import { addToCart } from '../../features/Slice/CartSlice';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';



// import required modules
import { Navigation } from 'swiper/modules';
export default function SimpleSlider() {

  const products = [
    {
      id: 1,
      image: 'https://cdn.moglix.com/p/37QirQZmdwXb0-medium.jpg', // Replace with actual image path or URL
      title: 'Fortune Black Gold 10 inch PVC Safety Work Boots',
      price: 219,
      originalPrice: 250,
      discount: '12% OFF',
    },
    {
      id: 2,
      image: 'https://cdn.moglix.com/p/6yL713EGnjuXR-medium.jpg',
      title: 'Dr. Morepen Gluco One 50 Strips, BG 03',
      price: 599,
      originalPrice: 899,
      discount: '33% OFF',
    },
    {
      id: 3,
      image: 'https://cdn.moglix.com/p/FMxIewipFqLxG-medium.jpg',
      title: 'Sameer 1 HP i-Flo Water Pump with 1 Year Warranty',
      price: 2749,
      originalPrice: 4600,
      discount: '40% OFF',
    },
    {
      id: 4,
      image: 'https://cdn.moglix.com/p/jfOf71LD2FpoS-medium.png',
      title: 'EGK 200W Cool White LED Flood Light',
      price: 439,
      originalPrice: 1349,
      discount: '67% OFF',
    },
    {
      id: 5,
      image: 'https://cdn.moglix.com/p/s1G00rm1VCaMI-medium.jpg',
      title: 'Kalinga Gold 1 Sq mm Red FR PVC Housing Wire',
      price: 599,
      originalPrice: 1100,
      discount: '45% OFF',
    },
    {
      id: 1,
      image: 'path-to-image-1.jpg', 
      title: 'Fortune Black Gold 10 inch PVC Safety Work Boots',
      price: 219,
      originalPrice: 250,
      discount: '12% OFF',
    },
    {
      id: 2,
      image: 'path-to-image-2.jpg',
      title: 'Dr. Morepen Gluco One 50 Strips, BG 03',
      price: 599,
      originalPrice: 899,
      discount: '33% OFF',
    },
    {
      id: 3,
      image: 'path-to-image-3.jpg',
      title: 'Sameer 1 HP i-Flo Water Pump with 1 Year Warranty',
      price: 2749,
      originalPrice: 4600,
      discount: '40% OFF',
    },
    {
      id: 4,
      image: 'path-to-image-4.jpg',
      title: 'EGK 200W Cool White LED Flood Light',
      price: 439,
      originalPrice: 1349,
      discount: '67% OFF',
    },
    {
      id: 5,
      image: 'path-to-image-5.jpg',
      title: 'Kalinga Gold 1 Sq mm Red FR PVC Housing Wire',
      price: 599,
      originalPrice: 1100,
      discount: '45% OFF',
    },
  ];

  const dispatch=useDispatch()
  const handleCart=(product)=>{
 dispatch(addToCart(product))

  }

  return (
    <>
    <div className='relative p-2'>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        // pagination={{
        //   type: 'fraction',
        // }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          540: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          480:{
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 25,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }}
        modules={[ Navigation]}
        className="mySwiper"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
         
            <div className="w-60 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center px-5 py-5"  >


                <div >
                <Link to={`/product/${product.id}`}>
              <img
                src={product.image}
                alt={product.title}
                className="w-40 h-40 object-cover rounded-md"
              />
              <h3 className="text-base font-semibold text-gray-800 mb-2 text-wrap">{product.title}</h3>
              <div className="flex items-center justify-center space-x-2 mb-2">
                <span className="text-red-600 font-bold text-xl">₹{product.price}</span>
                <span className="text-gray-500 line-through text-sm">₹{product.originalPrice}</span>
                <span className="text-green-600 text-sm">{product.discount}</span>
              </div></Link>
              <button className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300" onClick={()=>{
handleCart(product)
              }} >
          Add To Cart
              </button>
            </div></div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-button-prev absolute  !text-gray-500 "></div>
<div className="swiper-button-next absolute sm:mr-4 !text-gray-500"></div>
</div>
    </>
  );
}
