import React, { useEffect } from 'react';
import { FaCircleUser } from 'react-icons/fa6';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../features/actions/auth/authAction';
import { Link, Outlet, useNavigate } from 'react-router-dom';

function Profile() {
  const { authenticationData } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!authenticationData) {
      navigate('/'); // Redirect to home if no authentication data
    }
  }, [authenticationData, navigate]);

  const dispatch = useDispatch();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-1/4 bg-white p-5 shadow-lg md:shadow-none md:sticky top-0 rounded-lg">
        <div className="text-center mb-5">
          <div className="w-20 h-20 mx-auto rounded-full flex  items-center justify-center bg-red-500 text-white text-4xl mb-2">
            <FaCircleUser />
          </div>
          <h2 className="text-xl font-semibold">{authenticationData?.name}</h2>
          <p className="text-gray-500">User</p>
        </div>
        <ul className="space-y-2">
          <li className="flex items-center text-red-500 py-2 hover:bg-gray-100 rounded">
            <i className="fas fa-map-marker-alt mr-3"></i> My Profile
          </li>

          <Link to="/profile/order">
            <li className="flex items-center text-gray-700 py-2 hover:text-red-500 cursor-pointer hover:bg-gray-100 rounded">
              <i className="fas fa-box mr-3"></i> My Orders
            </li>
          </Link>

          <Link to="/profile/wishlist">
            <li className="flex items-center text-gray-700 py-2 hover:text-red-500 cursor-pointer hover:bg-gray-100 rounded">
              <i className="fas fa-heart mr-3"></i> My Wishlist
            </li>
          </Link>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="w-full md:w-3/4 p-4 md:p-6">
        <Outlet /> {/* Renders the nested route component (ProfilePage, MyOrdersPage, Wishlist) */}
      </main>
    </div>
  );
}

export default Profile;
