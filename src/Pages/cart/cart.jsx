import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addToCart,
  removeFromCart,
  decreaseQuantity,
} from "../../features/Slice/CartSlice";
import { MdDelete } from "react-icons/md";
import { IoIosFlash } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function Cart() {
  const navigate = useNavigate();
  const cartData = useSelector(state => state.cart.cartData);
  const totalPrice = useSelector(state => state.cart.totalPrice);
  const dispatch = useDispatch();

  return (
    <>
      <div className="container mx-auto px-4 gap-8">
        {cartData && cartData.length > 0 ? (
          <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start mt-8 gap-8">
            {/* Cart Table Section */}
            <div className="flex flex-col w-full lg:w-2/3 lg:ml-20 rounded-md shadow-lg bg-white mb-8 lg:mb-0">
              <h2 className="bg-[#EFEFF4] text-[#3C3C3C] p-4 lg:p-5 rounded-t-md text-center">My Cart</h2>
              <table className="min-w-full table-auto border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="px-2 py-2 text-left text-xs text-gray-500">Item in your cart</th>
                    <th className="px-4 py-2 text-left text-xs text-gray-500">Qty</th>
                    <th className="px-4 py-2 text-left text-xs text-gray-500">Price</th>
                    <th className="px-4 py-2 text-left text-xs text-gray-500">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {cartData.map(item => (
                    <tr key={item.id} className="bg-white border-b items-center flex-col">
                      <td className="px-4 py-2  flex-col lg:flex-row">
                        <div className="flex flex-col  lg:flex-row gap-4">
                          <img src={item.image} alt={item.name} className="w-20 h-auto" />
                          <div>
                            <p>{item.title}</p>
                            <p>₹{item.originalPrice}</p>
                            <p className="text-base text-[#D15F17] flex items-center">
                              <IoIosFlash className="mr-1" /> <span>24 hours Delivery</span>
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-2 flex flex-col lg:flex-row">
                        <div className="flex justify-center items-center gap-4">
                          <button
                            onClick={() => dispatch(decreaseQuantity(item.id))}
                            className="border bg-[#dbedff] border-[#8bc5ff] w-8 h-8 rounded-md text-[#3c3c3c] font-extrabold"
                          >
                            -
                          </button>
                          <p className="border w-12 h-8 py-1 rounded-md text-[#3c3c3c] border-[#3c3c3c] font-extrabold text-center">
                            {item.quantity}
                          </p>
                          <button
                            onClick={() => dispatch(addToCart(item))}
                            className="border bg-[#dbedff] border-[#8bc5ff] w-8 h-8 rounded-md text-[#3c3c3c] font-extrabold"
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="px-4 py-2 text-center">₹{item.originalPrice * item.quantity}</td>
                      <td className="px-4 py-2 text-center">
                        <MdDelete
                          className="text-red-500 cursor-pointer"
                          onClick={() => dispatch(removeFromCart(item.id))}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Total Price Section */}
              <div className="flex justify-end items-center mt-4 px-4">
                <p className="text-lg mb-4 bg-[#24B9D7] text-white rounded-md px-2 py-2">Total Price: ₹{totalPrice}</p>
              </div>
            </div>

            {/* Payment Summary Section */}
            <div className="mt-0 w-full lg:w-1/3 border boreder-gray-500 rounded-md lg:mr-20 box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;">
              <h2 className="text-xl font-semibold border-b border-grey px-2 py-4 text-[#3C3C3C] text-center lg:text-left box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;">Payment Summary</h2>
              <div className="flex flex-col space-y-4 p-4 bg-white">
                <div className="flex justify-between items-center">
                  <span>Total Amount</span>
                  <span>₹1,753.00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Total GST</span>
                  <span>₹316.00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Total Shipping</span>
                  <span>₹0.00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Total Coupon Discount</span>
                  <span>₹0.00</span>
                </div>
                <hr className="border-t border-gray-300 my-4" />
                <div className="flex justify-between items-center font-bold">
                  <span className="text-[#3C3C3C]">Amount Payable</span>
                  <span>₹2,069.00</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col md:flex-row justify-center items-center w-full px-4 py-8">
            <div
              className="px-4 md:px-16 lg:px-32 shadow-lg flex flex-col md:flex-row items-center w-full rounded-md space-y-4 md:space-y-0 md:space-x-8"
              style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
            >
              <img
                src="https://www.moglix.com/assets/img/empty-car-img.svg"
                alt="Empty Cart"
                className="w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 mb-4 md:mb-0"
              />
              <div className="text-center md:text-left">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
                  Your cart is currently empty!
                </h2>
                <p className="text-gray-500 mb-4">Add product and proceed</p>
                <button
                  onClick={() => navigate("/")}
                  className="bg-[#24B9D7] hover:bg-red-700 text-white font-bold py-2 px-10 sm:px-16 md:px-32 rounded-md"
                >
                  START SHOPPING
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Cart;
