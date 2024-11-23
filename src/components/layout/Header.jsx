import React from "react";
import { ShoppingCart, Menu, Search, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaRegCircleUser } from "react-icons/fa6";
import { logout } from "../../features/actions/auth/authAction";
import { togglesidebar } from "../../features/Slice/CartSlice";
import { TbLogin2 } from "react-icons/tb";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { authenticationData } = useSelector((state) => state.auth);
  const CartData = useSelector((state) => state.cart);
  console.log("cart", CartData);

  return (
    <header className="sticky top-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-[#24B9D7]">Bazzar91</span>
          </Link>

          {/* Search Bar - Hidden on mobile, visible on tablet and above */}
          <div className="hidden  sm:flex items-center flex-1 max-w-md mx-4">
            <input
              type="search"
              placeholder="Search products..."
              className="w-full px-4 py-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#24B9D7]/70 focus:border-transparent"
            />
            <button
              type="submit"
              className="bg-[#24B9D7] !h-full text-white px-4 py-2 rounded-r-md hover:bg-[#24B9D7] focus:outline-none focus:ring-2 focus:ring-[#24B9D7]/70 focus:ring-offset-2"
            >
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </button>
          </div>

          {/* Desktop Navigation - Hidden on mobile and tablet */}
          {!authenticationData?.email && (
            <nav className="hidden lg:flex items-center space-x-4">
         
      
            </nav>
          )}
          
         {!authenticationData?.email && <nav className="hidden lg:flex items-center space-x-4">
            <Link
              to="/signIn"
              className="text-gray-600 hover:text-[#24B9D7] font-medium flex flex-row items-center"
            >
            <div><TbLogin2 size={30} className="text-gray-600 hover:text-[#24B9D7] font-medium" /></div> <div className="text-gray-600 hover:text-[#24B9D7] font-medium text-xl ">Login</div>
            </Link>
            <Link
              to="/signUp"
              className="bg-[#24B9D7] text-white px-4 py-2 rounded-md hover:bg-[#24B9D7] focus:outline-none focus:ring-2 focus:ring-[#24B9D7] focus:ring-offset-2"
            >
              Sign Up
            </Link>
          </nav>
}
          {/* Cart and Mobile Menu Icons - Always visible */}
          <div className="flex items-center space-x-4   relative">
            <Link to="/cart">
              <button className="text-gray-600 hover:text-[#24B9D7] focus:outline-none focus:ring-2 focus:ring-[#24B9D7] focus:ring-offset-2 p-2 rounded-md">
                <ShoppingCart className="h-6 w-6 " />
                <span className="sr-only ">
                  Cart{CartData?.cartData?.length}
                </span>
                <p className="bg-red-500 absolute top-0 left-4 text-xs text-white  h-4 w-4 rounded-sm">
                  {CartData?.cartData?.length}
                </p>
              </button>
            </Link>
            {authenticationData?.email && (
              <Link to="/profile">
                <FaRegCircleUser className="h-6 w-6 text-gray-600" />
              </Link>
            )}
            <button
              className="lg:hidden text-gray-600 hover:text-[#24B9D7] focus:outline-none focus:ring-2 focus:ring-[#24B9D7] focus:ring-offset-2 p-2 rounded-md"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
              <span className="sr-only">Menu</span>
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="sm:hidden mt-4">
          <form className="flex items-center">
            <input
              type="search"
              placeholder="Search products..."
              className="w-full px-4 py-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#24B9D7] focus:border-transparent"
            />
            <button
              type="submit"
              className="bg-[#24B9D7] text-white px-4 py-2 rounded-r-md hover:bg-[#24B9D7] focus:outline-none focus:ring-2 focus:ring-[#24B9D7] focus:ring-offset-2"
            >
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </button>
          </form>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && !authenticationData?.email && (
          <nav className="lg:hidden mt-4 py-4 border-t border-gray-200">
            <ul className="flex flex-col space-y-2">
              <li>
                <Link
                  to="/signIn"
                  className="w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-[#24B9D7] font-medium"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to="/signUp"
                  className="w-full text-left px-4 py-2 bg-[#24B9D7] text-white hover:bg-[#24B9D7] focus:outline-none focus:ring-2 focus:ring-[#24B9D7] focus:ring-offset-2 rounded-md"
                >
                  Sign Up
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
