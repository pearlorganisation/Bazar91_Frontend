import { Link } from "react-router-dom";

export default function MailVerificationPage() {
   



  return (
    <main className="w-full h-screen flex flex-col items-center justify-center bg-gray-50 sm:px-4">
      <div className="w-full space-y-6 text-gray-600 sm:max-w-md">
        <div className="text-center">
          <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">Check Your Email</h3>
          <p className="mt-4 text-lg">
            A verification email has been sent to your email address. Please check your inbox and follow the instructions to verify your account.
          </p>
          {/* <p className="mt-2 text-sm text-gray-500">
           
            <Link
              to="/resend-verification" // Use your actual route for resending verification email
              className="font-medium text-[#24B9D7] hover:text-[#24B9D7]/70"
            >
              Resend Verification Email
            </Link>
          </p> */}
        </div>

        <div className="bg-white shadow space-y-3 p-4 py-6 sm:p-6 sm:rounded-lg">
          <div className="text-center">
            <p className="text-sm text-gray-500">
              If you have any issues or didn’t receive the email, feel free to{" "}
              <Link
                to="/contact-us" // Use your actual contact route
                className="font-medium text-[#24B9D7] hover:text-[#24B9D7]/70"
              >
                contact us
              </Link>.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
