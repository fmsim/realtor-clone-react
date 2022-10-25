import React, { useState } from "react";
import { Link } from "react-router-dom";

// components
import OAuth from "../components/OAuth";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  function onChange(e) {
    setEmail(e.target.value);
  }

  return (
    <section>
      <h1 className="text-3xl text-center mt-6 font-bold">Forget Password</h1>
      <div className="flex flex-wrap justify-center items-center mx-auto px-12 py-6 max-w-6xl">
        <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
          <img src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80" alt="Hand with key inside before a door" className="w-full rounded-2xl" />
        </div>
        {/* end of image div */}
        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
          <form>
            <input type="email" className="w-full px-4 py.2 text-xl text-gray-700 bg-white border-gray-700 rounded transition ease-in-out mb-6" id="email" value={email} onChange={onChange} placeholder="Email address" />

            <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg">
              <p className="mb-6">
                Don't have an account?
                <Link to="/sign-up" className="text-red-600 hover:text-red-700 ml-1 transition duration-200">
                  Register
                </Link>
              </p>
              <p>
                <Link to="/sign-in" className="text-blue-600 hover:text-blue-800 ml-2 transition duration-200">
                  Sign in instead
                </Link>
              </p>
            </div>
            {/* end of account questions div */}
            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 transition duration-150 ease-in-out text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:shadow-lg">
              Send reset password
            </button>
            <div className="flex items-center my-4 before:border-t before:border-gray-300 before:flex-1 after:border-t after:border-gray-300 after:flex-1">
              <p className="text-center font-semibold mx-4">OR</p>
            </div>
            {/* end of or div */}
            <OAuth />
          </form>
        </div>
        {/* end of form div */}
      </div>
      {/* end of flex div */}
    </section>
  );
}
