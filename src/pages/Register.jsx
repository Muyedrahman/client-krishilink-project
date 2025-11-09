import React from 'react';
import { Link } from 'react-router';

const Register = () => {
  const handleRegister = () =>{

  }



    return (
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6 text-orange-500 font-semibold">
              Farmer Registration
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form className="space-y-5">
                {/* Name 1*/}
                <label className=" font-bold">Name</label>
                <input
                  type="text"
                  name="name"
                  className="input label input-bordered w-full"
                  placeholder="Your Name"
                />

                {/* Email 2*/}
                <label className=" font-bold">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input label"
                  placeholder="Email"
                />
                {/* Photo URL 3*/}
                <label className="font-bold">Photo URL</label>
                <input
                  type="url"
                  name="photo"
                  className="input label input-bordered w-full"
                  placeholder="Paste your photo link"
                />

                {/* Password 4*/}
                <div className="relative">
                  <label className=" font-bold">Password</label>
                  <input
                    name="password"
                    className="input label"
                    placeholder="Password"
                  />
                  {/* <span className="absolute right-[30px] top-[35px] cursor-pointer  z-50">
                    <FaEye />
                    {show ? <FaEye /> : <FaEyeSlash />}
                  </span> */}
                </div>
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                {/* Register Button 5 to="/" */}
                <button className="btn btn-primary w-full">
                  Signup Register
                </button>

                {/* Google Login 6 type="submit"*/}
                <button
                  type="button"
                  //   onClick={handleGoogleSigning}
                  className="btn btn-outline w-full"
                >
                  {/*  <FaGoogle /> */}
                  Continue with Google
                </button>

                {/* Signup Link 7*/}
                <p className="text-center ">
                  You have an account?
                  <Link
                    // to="/login"
                    className="text-blue-600 font-semibold hover:underline"
                  >
                    Login
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Register;