import React from 'react'
import { ShoppingCart, Menu, Search, X } from "lucide-react"
import { useState } from "react"
import { Link } from 'react-router-dom'

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    return (
        <header className="bg-white shadow-md">
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-[#24B9D7]">Bazzar91</span>
                    </Link>

                    {/* Search Bar - Hidden on mobile, visible on tablet and above */}
                    <div className="hidden border sm:flex items-center flex-1 max-w-md mx-4">
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
                    <nav className="hidden lg:flex items-center space-x-4">
                        <Link to='/signIn' className="text-gray-600 hover:text-[#24B9D7] font-medium">
                            Login
                        </Link>
                        <Link to='/signUp' className="bg-[#24B9D7] text-white px-4 py-2 rounded-md hover:bg-[#24B9D7] focus:outline-none focus:ring-2 focus:ring-[#24B9D7] focus:ring-offset-2">
                            Sign Up
                        </Link>
                    </nav>

                    {/* Cart and Mobile Menu Icons - Always visible */}
                    <div className="flex items-center space-x-4">
                       <div className="flex items-center space-x-4">
      <Link to="/cart">
        <button className="text-gray-600 hover:text-[#24B9D7] focus:outline-none focus:ring-2 focus:ring-[#24B9D7] focus:ring-offset-2 p-2 rounded-md">
          <ShoppingCart className="h-6 w-6" />
          <span className="sr-only">Cart</span>
        </button>
      </Link>
    </div>
                        <button
                            className="lg:hidden text-gray-600 hover:text-[#24B9D7] focus:outline-none focus:ring-2 focus:ring-[#24B9D7] focus:ring-offset-2 p-2 rounded-md"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
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
                {isMobileMenuOpen && (
                    <nav className="lg:hidden mt-4 py-4 border-t border-gray-200">
                        <ul className="flex flex-col space-y-2">
                            <li>
                                <button className="w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-[#24B9D7] font-medium">
                                    Login
                                </button>
                            </li>
                            <li>
                                <button className="w-full text-left px-4 py-2 bg-[#24B9D7] text-white hover:bg-[#24B9D7] focus:outline-none focus:ring-2 focus:ring-[#24B9D7] focus:ring-offset-2 rounded-md">
                                    Sign Up
                                </button>
                            </li>
                        </ul>
                    </nav>
                )}
            </div>
        </header>
    )
}