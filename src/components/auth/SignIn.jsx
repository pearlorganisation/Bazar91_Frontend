import React from 'react'
import { Link } from 'react-router-dom'

const SignIn = () => {
    return (
        <main className="w-full h-screen flex flex-col items-center justify-center bg-gray-50 sm:px-4">
            <div className="w-full space-y-6 text-gray-600 sm:max-w-md">
                <div className="text-center">
                    {/* <img src="https://floatui.com/logo.svg" width={150} className="mx-auto" /> */}
                    <div className="mt-5 space-y-2">
                        <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">Log in to your account</h3>
                        <p className="">Don't have an account? <Link to='/signUp' className="font-medium text-[#24B9D7]indigo-600 hover:text-[#24B9D7]/70">Sign up</Link></p>
                    </div>
                </div>
                <div className="bg-white shadow space-y-3 p-4 py-6 sm:p-6 sm:rounded-lg">
                    <form
                        onSubmit={(e) => e.preventDefault()}
                        className="space-y-5"

                    >

                        <div>
                            <label className="font-medium">
                                Email
                            </label>
                            <input
                                type="email"
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-[#24B9D7] shadow-sm rounded-lg"
                            />
                        </div>
                        <div>
                            <label className="font-medium">
                                Password
                            </label>
                            <input
                                type="password"
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-[#24B9D7] shadow-sm rounded-lg"
                            />
                        </div>
                        <button
                            className="w-full px-4 py-2 text-white font-medium bg-[#24B9D7] hover:bg-[#24B9D7]/70 active:bg-[#24B9D7] rounded-lg duration-150"
                        >
                            Create account
                        </button>
                    </form>
                    <div className="text-center">
                        <a href="javascript:void(0)" className="hover:text-[#24B9D7]">Forgot password?</a>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default SignIn