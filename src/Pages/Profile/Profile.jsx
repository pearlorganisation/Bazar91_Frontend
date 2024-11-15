import React from 'react';
import { FaCircleUser } from "react-icons/fa6";
function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row items-center">
      {/* Sidebar */}
      <aside className="w-full md:w-1/4 bg-white p-5 shadow-lg md:shadow-none md:sticky top-0">
        <div className="text-center mb-5 flex">
          <div className="w-20 h-20 mx-auto  rounded-full flex flex-row items-center justify-center text-white text-4xl mb-2">
    <div>
<FaCircleUser className='text-red-500'/>
          </div>
          <h2 className="text-xl font-semibold">User</h2>
          <p className="text-gray-500">Name</p>

          </div>
        </div>
        <ul className="space-y-2">
          <li className="flex items-center text-red-500 py-2">
            <i className="fas fa-map-marker-alt mr-3"></i> My Address
          </li>
          <li className="flex items-center text-gray-700 py-2 hover:text-red-500 cursor-pointer">
            <i className="fas fa-box mr-3"></i> My Orders
          </li>
          <li className="flex items-center text-gray-700 py-2 hover:text-red-500 cursor-pointer">
            <i className="fas fa-file-alt mr-3"></i> My RFQ's
          </li>
          <li className="flex items-center text-gray-700 py-2 hover:text-red-500 cursor-pointer">
            <i className="fas fa-briefcase mr-3"></i> My Business Details
          </li>
          <li className="flex items-center text-gray-700 py-2 hover:text-red-500 cursor-pointer">
            <i className="fas fa-heart mr-3"></i> My Wishlist
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="w-full md:w-3/4 p-4 md:p-6">
        <section className="bg-white p-4 md:p-6 shadow-md rounded-md mb-5">
          <h3 className="text-lg md:text-xl font-semibold mb-4">My Profile</h3>
          <div className="mb-4">
            <label className="block text-gray-600">Full Name*</label>
            <div className="flex justify-between items-center">
              <span className="text-gray-800">User</span>
              <button className="text-red-500 hover:underline">EDIT NAME</button>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-600">Email ID*</label>
            <div className="flex justify-between items-center">
              <span className="text-gray-800">Add Email</span>
              <button className="text-red-500 hover:underline">ADD EMAIL</button>
            </div>
          </div>
          <div>
            <label className="block text-gray-600">Mobile Number</label>
            <span className="text-gray-800">7906550720</span>
          </div>
        </section>

        <section className="bg-gray-50 p-3 md:p-4 shadow-md rounded-md mb-5">
          <button className="flex items-center text-gray-700 font-semibold">
            <i className="fas fa-globe mr-3"></i> Select Language
          </button>
        </section>

        <section className="bg-gray-50 p-3 md:p-4 shadow-md rounded-md mb-5">
          <button className="text-red-500 font-semibold hover:underline">
            + ADD NEW DELIVERY ADDRESS
          </button>
        </section>

        <section className="bg-gray-50 p-3 md:p-4 shadow-md rounded-md mb-5">
          <button className="text-red-500 font-semibold hover:underline">
            + ADD NEW BILLING ADDRESS
          </button>
        </section>

        <section className="bg-gray-50 p-3 md:p-4 shadow-md rounded-md mb-5">
          <button className="text-red-500 font-semibold hover:underline">
            CHANGE PASSWORD
          </button>
        </section>

        <section className="bg-gray-50 p-3 md:p-4 shadow-md rounded-md">
          <button className="flex items-center text-gray-700 font-semibold">
            <i className="fas fa-power-off mr-3"></i> Logout
          </button>
        </section>
      </main>
    </div>
  );
}

export default ProfilePage;
