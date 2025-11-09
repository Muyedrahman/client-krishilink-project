import React from 'react';
import { Link } from 'react-router';

const Login = () => {

      const handleLogin = (e) => {
        e.preventDefault();

      };






    return (
      <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        {/* Left Text Section */}
        <div className="text-center lg:text-left">
          <h1 className="text-4xl font-bold text-green-700">
            Login to Your Account
          </h1>
          <p className="py-4 text-gray-600">
            Access your dashboard, manage crops, and connect with farmers.
          </p>
        </div>

        {/* Right Card Form */}
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleLogin} className="space-y-5">
              {/* Email */}
              <div>
                <label className="label font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="input input-bordered w-full"
                  placeholder="Enter your email"
                />
              </div>

              {/* Password */}
              <div className="relative">
                <label className="label font-medium">Password</label>
                <input
                  type={show ? "text" : "password"}
                  name="password"
                  required
                  className="input input-bordered w-full"
                  placeholder="Enter your password"
                />
                <span
                  onClick={() => setShow(!show)}
                  className="absolute right-4 top-[45px] cursor-pointer text-gray-500"
                >
                  {show ? <FaEye /> : <FaEyeSlash />}
                </span>
              </div>

              {/* Forgot Password */}
              <div className="text-right">
                <div
                  type=""
                  onClick={handleForgotPassword}
                  className="text-sm text-blue-600 hover:underline"
                >
                  Forgot Password?
                </div>
              </div>

              {/* Login Button */}
              <button type="submit" className="btn btn-primary w-full">
                Login
              </button>

              {/* Google Login */}
              <button
                type="button"
                onClick={handleGoogleSignin}
                className="btn btn-outline w-full flex items-center gap-2 justify-center"
              >
                <FaGoogle /> Continue with Google
              </button>

              {/* Register Link */}
              <p className="text-center text-sm">
                Don’t have an account?{" "}
                <Link
                  to="/register"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  Register
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );

};

export default Login;