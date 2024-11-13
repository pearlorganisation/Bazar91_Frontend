import React from 'react';
import { useForm } from 'react-hook-form';

export default function ProfilePage() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      name: 'John Doe',
      email: 'johndoe@example.com',
      bio: 'Enthusiastic web developer with a passion for building dynamic web applications.',
      location: 'San Francisco, CA',
    },
  });

  const onSubmit = (data) => {
    console.log("Updated Profile Data:", data);
    // Here, you could send the updated data to your server or update it in global state
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      {/* Profile Header */}
     
      {/* Editable Personal Information Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-lg shadow-md p-6 mt-8">
        <h3 className="text-xl font-semibold mb-4">Profile Information</h3>
        <div className="grid md:grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-600">Full Name</label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">Email</label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  message: "Invalid email format",
                },
              })}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

     <div>
            <label className="block text-sm font-medium text-gray-600">Location</label>
            <input
              type="text"
              {...register("location")}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            />
          </div>
        </div>

        <button type="submit" className="bg-blue-600 text-white font-medium py-2 px-4 mt-4 rounded-md hover:bg-blue-700 transition-colors duration-300">
          Save
        </button>
      </form>

      {/* Account Settings Section */}
      {/* <div className="bg-white rounded-lg shadow-md p-6 mt-8">
        <h3 className="text-xl font-semibold mb-4">Account Settings</h3>
        <button className="bg-red-600 text-white font-medium py-2 px-4 rounded-md hover:bg-red-700 transition-colors duration-300">
          Delete Account
        </button>
      </div> */}
    </div>
  );
}
