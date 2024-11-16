import React from 'react';
import { FaCircleUser } from 'react-icons/fa6';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../features/actions/auth/authAction';
import { useNavigate } from 'react-router-dom';

function ProfilePage() {
  const { authenticationData } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  if (!authenticationData)
  {
    navigate('/');
  }
  
  const dispatch = useDispatch();
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row items-center">
      {/* Sidebar */}
      <aside className="w-full md:w-1/4 bg-white p-5 shadow-lg md:shadow-none md:sticky top-0 rounded-lg">
        <div className="text-center mb-5">
          <div className="w-20 h-20 mx-auto rounded-full flex items-center justify-center bg-red-500 text-white text-4xl mb-2">
            <FaCircleUser />
          </div>
          <h2 className="text-xl font-semibold">{authenticationData?.name}</h2>
          <p className="text-gray-500">User</p>
        </div>
        <ul className="space-y-2">
          <li className="flex items-center text-red-500 py-2 hover:bg-gray-100 rounded">
            <i className="fas fa-map-marker-alt mr-3"></i> My Address
          </li>
          <li className="flex items-center text-gray-700 py-2 hover:text-red-500 cursor-pointer hover:bg-gray-100 rounded">
            <i className="fas fa-box mr-3"></i> My Orders
          </li>
          <li className="flex items-center text-gray-700 py-2 hover:text-red-500 cursor-pointer hover:bg-gray-100 rounded">
            <i className="fas fa-file-alt mr-3"></i> My RFQs
          </li>
          <li className="flex items-center text-gray-700 py-2 hover:text-red-500 cursor-pointer hover:bg-gray-100 rounded">
            <i className="fas fa-briefcase mr-3"></i> My Business Details
          </li>
          <li className="flex items-center text-gray-700 py-2 hover:text-red-500 cursor-pointer hover:bg-gray-100 rounded">
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
              <span className="text-gray-800">{authenticationData?.firstName +" "+authenticationData?.lastName}</span>
              <button className="text-red-500 hover:underline">EDIT NAME</button>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-600">Email ID*</label>
            <div className="flex justify-between items-center">
              <span className="text-gray-800">{authenticationData?.email}</span>
              <button className="text-red-500 hover:underline">ADD EMAIL</button>
            </div>
          </div>
          <div>
            <label className="block text-gray-600">Mobile Number</label>
            <span className="text-gray-800">{authenticationData?.mobile||"Add Mobile Number"}</span>
          </div>
        </section>

        {/* Language Selection */}
        <section className="bg-gray-50 p-3 md:p-4 shadow-md rounded-md mb-5">
          <button className="flex items-center text-gray-700 font-semibold hover:text-red-500">
            <i className="fas fa-globe mr-3"></i> Select Language
          </button>
        </section>

        {/* Add New Delivery Address */}
        <section className="bg-gray-50 p-3 md:p-4 shadow-md rounded-md mb-5">
          <button className="text-red-500 font-semibold hover:underline">
            + ADD NEW DELIVERY ADDRESS
          </button>
        </section>

        {/* Add New Billing Address */}
        <section className="bg-gray-50 p-3 md:p-4 shadow-md rounded-md mb-5">
          <button className="text-red-500 font-semibold hover:underline">
            + ADD NEW BILLING ADDRESS
          </button>
        </section>

        {/* Change Password */}
        <section className="bg-gray-50 p-3 md:p-4 shadow-md rounded-md mb-5">
          <button className="text-red-500 font-semibold hover:underline">
            CHANGE PASSWORD
          </button>
        </section>

        {/* Logout */}
        <section className="bg-gray-50 p-3 md:p-4 shadow-md rounded-md">
          <button onClick={()=>dispatch(logout())}  className="flex items-center text-gray-700 font-semibold hover:text-red-500">
            <i className="fas fa-power-off mr-3"></i> Logout
          </button>
        </section>
      </main>
    </div>
  );
}

export default ProfilePage;
