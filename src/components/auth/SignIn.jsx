import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../features/actions/auth/authAction";
import { useEffect } from "react";
import { toggleSuccessReducer } from "../../features/Slice/Auth/authSlice";
export default function SignIn() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const {authenticationData,isSuccess} = useSelector((state)=> state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    console.log("SignIn Data:", data);
    dispatch(login(data));

  };

  useEffect(()=>{
     if(isSuccess && authenticationData  )
     {
        console.log("here we come man !!");
        dispatch(toggleSuccessReducer(false));
        navigate(-1);
     }
  },[isSuccess]);

  return (
    <main className="w-full h-screen flex flex-col items-center justify-center bg-gray-50 sm:px-4">
      <div className="w-full space-y-6 text-gray-600 sm:max-w-md">
        <div className="text-center">
          <div className="mt-5 space-y-2">
            <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">Log in to your account</h3>
            <p className="">
              Don't have an account?{" "}
              <Link
                to="/signUp"
                className="font-medium text-[#24B9D7] hover:text-[#24B9D7]/70"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
        <div className="bg-white shadow space-y-3 p-4 py-6 sm:p-6 sm:rounded-lg">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Email */}
            <div>
              <label htmlFor="email" className="font-medium">Email</label>
              <input
                id="email"
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
                    message: "Invalid email address",
                  },
                })}
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-[#24B9D7] shadow-sm rounded-lg"
              />
              {errors.email && (
                <span className="text-red-500">{errors.email.message}</span>
              )}
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="font-medium">Password</label>
              <input
                id="password"
                type="password"
                {...register("password", { required: "Password is required" })}
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-[#24B9D7] shadow-sm rounded-lg"
              />
              {errors.password && (
                <span className="text-red-500">{errors.password.message}</span>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-4 py-2 text-white font-medium bg-[#24B9D7] hover:bg-[#24B9D7]/70 active:bg-[#24B9D7] rounded-lg duration-150"
            >
              Log in
            </button>
          </form>
          <div className="text-center">
            <a
              href="#"
              className="hover:text-[#24B9D7]"
            >
              Forgot password?
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
