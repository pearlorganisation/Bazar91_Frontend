import React from 'react';
import { CiCircleRemove } from "react-icons/ci";

const Wishlist = () => {
  const wishlistItems=[
    {
      id: 1,
      name: "Beanie with Logo",
      imageUrl: "https://bazar91.com/1859-home_default/ricoma-em-1010-single-head-computerized-embroidery-machine.jpg",
      originalPrice: 20.0,
      discountedPrice: 18.0,
      stockStatus: "In Stock",
      addedDate: "December 5, 2019",
    },
    {
      id: 2,
      name: "Classy Shirt",
      imageUrl: "https://bazar91.com/108-home_default/brother-innov-is-nv2600.jpg",
      originalPrice: 16.0,
      discountedPrice: 16.0,
      stockStatus: "In Stock",
      addedDate: "December 6, 2019",
    },
    {
      id: 3,
      name: "Beanie",
      imageUrl: "https://bazar91.com/2734-home_default/brother-pr1-single-head-embroidery-machine.jpg",
      originalPrice: 20.0,
      discountedPrice: 18.0,
      stockStatus: "In Stock",
      addedDate: "December 6, 2019",
    },
  ];
  

  

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">My Wishlist</h1>
      {wishlistItems.length > 0 ? (
        <div className="flex flex-col max-w-3xl gap-6   mx-auto ">
          {wishlistItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-wrap md:flex-nowrap border p-4 rounded-lg gap-3 shadow-md bg-white "
            >
              <CiCircleRemove size={30}  className='self-center text-red-500'/>
              {/* Image Section */}
              <img
                src={item.imageUrl}
                alt={item.name}
                className="w-full md:w-48 h-48 object-cover rounded-md"
              />
              
              {/* Details Section */}
              <div className="flex flex-col flex-grow md:ml-6 mt-4 md:mt-0">
                <h2 className="text-xl font-semibold">{item.name}</h2>
                <div className="mt-2">
                  <span className="line-through text-gray-500">${item.originalPrice}</span>{" "}
                  <span className="text-green-600 font-bold">${item.discountedPrice}</span>
                </div>
                <p className="text-sm text-gray-500 mt-1">{item.stockStatus}</p>
                <p className="text-sm text-gray-500 mt-1">Added on: {item.addedDate}</p>

                {/* Action Buttons */}
                <div className="mt-4 flex justify-end gap-4">
                  <button className="bg-[#24B9D7] text-white px-4 py-2 rounded-md hover:bg-blue-600">
                    Add to cart
                  </button>
                  {/* <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
                    Del
                  </button> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center mt-10">
          <p className="text-gray-600">Your wishlist is currently empty. Start adding your favorite items!</p>
        </div>
      )}
    </div>
  );
};


export default Wishlist;
