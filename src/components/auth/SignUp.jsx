import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../../features/actions/auth/authAction";
import { useEffect } from "react";
import { toggleSuccessReducer } from "../../features/Slice/Auth/authSlice";

export default function SignUp() {
  // Initialize React Hook Form
  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  const {isMailSent,isSuccess} = useSelector((state)=> state.auth);
  const navigate = useNavigate();
  // Handle form submission
  const onSubmit = (data) => {

    if(!(data.confirmPassword === data.password))
         {
            toast.error("Password And Confirm Match Failed !!");
            return;
         }
    console.log(data); 
    dispatch(signUp(data));


  };
  useEffect(()=>{
    if(isSuccess && isMailSent)
    {
       console.log("here we come man !!");
       dispatch(toggleSuccessReducer(false));
       navigate("/verifyYourMail");
    }
 },[isSuccess]);

  return (
    <main className="w-full h-screen flex flex-col items-center justify-center bg-gray-50 sm:px-4">
      <div className="w-full space-y-6 text-gray-600 sm:max-w-md">
        <div className="text-center">
          <div className="mt-5 space-y-2">
            <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">Create an account</h3>
            <p className="">
              Already have an account? 
              <Link to='/signIn' className="font-medium text-[#24B9D7] hover:text-[#24B9D7]/70">
                Log in
              </Link>
            </p>
          </div>
        </div>
        <div className="bg-white shadow p-4 py-6 sm:p-6 sm:rounded-lg">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* First Name */}
            <div>
              <label htmlFor="firstName" className="font-medium">First Name</label>
              <input
                id="firstName"
                {...register('firstName', { required: 'First Name is required' })}
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-[#24B9D7] shadow-sm rounded-lg"
              />
              {errors.firstName && <span className="text-red-500">{errors.firstName.message}</span>}
            </div>

            {/* Last Name */}
            <div>
              <label htmlFor="lastName" className="font-medium">Last Name</label>
              <input
                id="lastName"
                {...register('lastName', { required: 'Last Name is required' })}
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-[#24B9D7] shadow-sm rounded-lg"
              />
              {errors.lastName && <span className="text-red-500">{errors.lastName.message}</span>}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="font-medium">Email</label>
              <input
                id="email"
                type="email"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
                    message: 'Invalid email address'
                  }
                })}
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-[#24B9D7] shadow-sm rounded-lg"
              />
              {errors.email && <span className="text-red-500">{errors.email.message}</span>}
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="font-medium">Password</label>
              <input
                id="password"
                type="password"
                {...register('password', { required: 'Password is required' })}
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-[#24B9D7] shadow-sm rounded-lg"
              />
              {errors.password && <span className="text-red-500">{errors.password.message}</span>}
            </div>

            {/* Confirm Password */}
            <div>
              <label htmlFor="confirmPassword" className="font-medium">Confirm Password</label>
              <input
                id="confirmPassword"
                type="password"
                {...register('confirmPassword', { required: 'Confirm Password is required' })}
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-[#24B9D7] shadow-sm rounded-lg"
              />
              {errors.confirmPassword && <span className="text-red-500">{errors.confirmPassword.message}</span>}
            </div>

            {/* Gender Radio */}
            <div>
            <div className="flex items-center">
              <label className="text-sm font-medium">Gender</label>
              <div className="flex ml-3">
                <input
                  type="radio"
                  id="male"
                  {...register('gender', { required: 'Gender is required' })}
                  value="M"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                />
                <label htmlFor="male" className="ms-2 text-sm font-medium text-gray-900">Male</label>

                <input
                  type="radio"
                  id="female"
                  {...register('gender', { required: 'Gender is required' })}
                  value="F"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 ml-4"
                />
                <label htmlFor="female" className="ms-2 text-sm font-medium text-gray-900">Female</label>
              </div>

            </div>
            {errors.gender && 
              <p className="text-red-500">{errors.gender.message}</p>
              }
            </div>
           

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-4 py-2 text-white font-medium bg-[#24B9D7] hover:bg-[#24B9D7]/70 active:bg-[#24B9D7] rounded-lg duration-150"
            >
              Create account
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
