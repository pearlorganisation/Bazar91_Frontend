import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../features/actions/auth/authAction';

function ProfilePage() {
  const { authenticationData } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  if (!authenticationData) {
    return <div>Loading...</div>; // or you can redirect to login here
  }

  return (
    <div>
      <section className="bg-white p-4 md:p-6 shadow-md rounded-md mb-5">
        <h3 className="text-lg md:text-xl font-semibold mb-4">My Profile</h3>
        <div className="mb-4">
          <label className="block text-gray-600">Full Name*</label>
          <span className="text-gray-800">
            {authenticationData?.firstName} {authenticationData?.lastName}
          </span>
        </div>
        <div className="mb-4">
          <label className="block text-gray-600">Email ID*</label>
          <span className="text-gray-800">{authenticationData?.email}</span>
        </div>
        <div>
          <label className="block text-gray-600">Mobile Number</label>
          <span className="text-gray-800">{authenticationData?.mobile || 'Add Mobile Number'}</span>
        </div>
      </section>

      {/* Other sections like Language, Address, Password, Logout */}
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

      {/* Change Password */}
      <section className="bg-gray-50 p-3 md:p-4 shadow-md rounded-md mb-5">
        <button className="text-red-500 font-semibold hover:underline">
          CHANGE PASSWORD
        </button>
      </section>

      {/* Logout */}
      <section className="bg-gray-50 p-3 md:p-4 shadow-md rounded-md">
        <button onClick={() => dispatch(logout())} className="flex items-center text-gray-700 font-semibold hover:text-red-500">
          <i className="fas fa-power-off mr-3"></i> Logout
        </button>
      </section>
    </div>
  );
}

export default ProfilePage;
