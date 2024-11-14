// import React, { useState } from 'react';

// function ProfilePage() {
//     const [firstName, setFirstName] = useState("Flipkart");
//     const [lastName, setLastName] = useState("Customer");
//     const [gender, setGender] = useState("");
//     const [email, setEmail] = useState("");
//     const [mobile, setMobile] = useState("+917906550720");
//     const [profileImage, setProfileImage] = useState(null);

//     const handleImageUpload = (e) => {
//         const file = e.target.files[0];
//         if (file) {
//             const reader = new FileReader();
//             reader.onloadend = () => {
//                 setProfileImage(reader.result);
//             };
//             reader.readAsDataURL(file);
//         }
//     };

//     return (
//         <div className="flex h-screen bg-gray-100">
//             <div className="w-64 bg-white p-6 shadow-md">
//                 <h2 className="text-lg font-bold mb-6">Flipkart Customer</h2>
//                 <ul className="space-y-4">
//                     <li><strong>MY ORDERS</strong></li>
//                     <li><strong>ACCOUNT SETTINGS</strong>
//                         <ul className="pl-4 mt-2 space-y-2">
//                             <li>Profile Information</li>
//                             <li>Manage Addresses</li>
//                             <li>PAN Card Information</li>
//                         </ul>
//                     </li>
//                     <li><strong>PAYMENTS</strong>
//                         <ul className="pl-4 mt-2 space-y-2">
//                             <li>Gift Cards</li>
//                             <li>Saved UPI</li>
//                             <li>Saved Cards</li>
//                         </ul>
//                     </li>
//                     <li><strong>MY STUFF</strong>
//                         <ul className="pl-4 mt-2 space-y-2">
//                             <li>My Coupons</li>
//                         </ul>
//                     </li>
//                 </ul>
//             </div>

//             <div className="flex-1 p-10 bg-white">
//                 <h2 className="text-xl font-semibold mb-6">Personal Information</h2>
                
//                 {/* Profile Image Upload Section */}
//                 <div className="mb-6">
//                     <label className="block text-gray-700 font-bold mb-2">Profile Image</label>
//                     <div className="w-32 h-32 mb-2 overflow-hidden rounded-full border border-gray-300">
//                         {profileImage ? (
//                             <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
//                         ) : (
//                             <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-500">
//                                 No Image
//                             </div>
//                         )}
//                     </div>
//                     <input
//                         type="file"
//                         accept="image/*"
//                         onChange={handleImageUpload}
//                         className="block"
//                     />
//                 </div>
                
//                 <div className="mb-4">
//                     <label className="block text-gray-700 font-bold mb-2">First Name</label>
//                     <input
//                         type="text"
//                         value={firstName}
//                         onChange={(e) => setFirstName(e.target.value)}
//                         className="w-full p-2 border border-gray-300 rounded"
//                     />
//                 </div>
//                 <div className="mb-4">
//                     <label className="block text-gray-700 font-bold mb-2">Last Name</label>
//                     <input
//                         type="text"
//                         value={lastName}
//                         onChange={(e) => setLastName(e.target.value)}
//                         className="w-full p-2 border border-gray-300 rounded"
//                     />
//                 </div>
//                 <div className="mb-4">
//                     <label className="block text-gray-700 font-bold mb-2">Gender</label>
//                     <div className="flex items-center space-x-4">
//                         <label className="flex items-center">
//                             <input
//                                 type="radio"
//                                 name="gender"
//                                 value="Male"
//                                 checked={gender === "Male"}
//                                 onChange={(e) => setGender(e.target.value)}
//                                 className="mr-2"
//                             />
//                             Male
//                         </label>
//                         <label className="flex items-center">
//                             <input
//                                 type="radio"
//                                 name="gender"
//                                 value="Female"
//                                 checked={gender === "Female"}
//                                 onChange={(e) => setGender(e.target.value)}
//                                 className="mr-2"
//                             />
//                             Female
//                         </label>
//                     </div>
//                 </div>
//                 <div className="mb-4">
//                     <label className="block text-gray-700 font-bold mb-2">Email Address</label>
//                     <input
//                         type="email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         className="w-full p-2 border border-gray-300 rounded"
//                     />
//                 </div>
//                 <div className="mb-4">
//                     <label className="block text-gray-700 font-bold mb-2">Mobile Number</label>
//                     <input
//                         type="tel"
//                         value={mobile}
//                         onChange={(e) => setMobile(e.target.value)}
//                         className="w-full p-2 border border-gray-300 rounded"
//                     />
//                 </div>
//                 <div className="mt-8">
//                     <h3 className="text-lg font-semibold mb-2">FAQs</h3>
//                     <p className="text-gray-700">What happens when I update my email address (or mobile number)?</p>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default ProfilePage;
import React from 'react';
import { FaCircleUser } from "react-icons/fa6";
function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row">
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
