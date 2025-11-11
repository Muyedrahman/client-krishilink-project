import { GoogleAuthProvider, signInWithPopup, updateProfile } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { auth } from '../firebase/firebase.config';
import { toast } from 'react-toastify';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../context/AuthContext';

const googleProvider = new GoogleAuthProvider();




const Register = () => {

   const [show, setShow] = useState(false);
    const { createUserWithEmailAndPasswordFunc, updateProfileFunc, setLoading} =
      useContext(AuthContext);

  const navigate = useNavigate();




  const handleRegister = (e) =>{
    e.preventDefault();

    const email = e.target.email?.value;
    const password = e.target.password?.value;
    const displayName = e.target.name?.value;
    const photoURL = e.target.photo?.value;

   

    console.log("Register function enter", {
      displayName,
      email,
      photoURL,
      password,
    });

    // password validation
    if (password.length < 6) {
      toast.error("Password should be at least 6 characters");
      return;
    }
     if (!/[A-Z]/.test(password)) {
       toast.error("Password must contain at least one uppercase letter");
       return;
     }
     if (!/[a-z]/.test(password)) {
       toast.error("Password must contain at least one lowercase letter");
       return;
     }

    // createUserWithEmailAndPasswordFunc
     createUserWithEmailAndPasswordFunc(email, password)
           .then((res) => {
             // 2 Updat Profile
             updateProfileFunc(displayName, photoURL)
               .then(() => {
                 console.log(res);
                 //  setLoading(false);
                 toast.success("Registe succesful");
                 navigate("/");
               })
               .catch((e) => {
                 toast.error(e.message);
               })
               .finally(() => setLoading(false));
           
             
           })
          .catch((e) => {
            console.log(e);
            console.log(e.code);
            if (e.code === "auth/email-already-in-use") {
              toast.error("This email is already registered.");
            } else if (e.code === "auth/invalid-email") {
              toast.error("Invalid email address.");
            } else if (e.code === "auth/weak-password") {
              toast.error("Password should be at least 6 characters long.");
            } else if (e.code === "auth/missing-email") {
              toast.error("Please enter your email.");
            } else if (e.code === "auth/missing-password") {
              toast.error("Please enter your password.");
            } else if (e.code === "auth/operation-not-allowed") {
              toast.error("Email/password sign-in is not enabled in Firebase.");
            } else if (e.code === "auth/network-request-failed") {
              toast.error(
                "Network error. Please check your internet connection."
              );
            } else if (e.code === "auth/too-many-requests") {
              toast.error("Too many attempts. Please try again later.");
            } else if (e.code === "auth/internal-error") {
              toast.error("An internal error occurred. Please try again.");
            } else {
              toast.error("Something went wrong: " + e.message);
            }
          });
  };

  // google
  const handleGoogleRegister = () => {
    signInWithPopup(auth, googleProvider)
      .then((res) => {
        console.log(res);

        toast.success("Google Login Success");
      })
      .catch((e) => {
        console.log(e);
        toast.error(e.message);
      });
  };
  





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
              <form onSubmit={handleRegister} className="space-y-5">
                
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
                {/* Photo 3*/}
                <label className="font-bold">Photo </label>
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
                    type={show ? "text" : "password"}
                    name="password"
                    className="input label"
                    placeholder="******"
                  />
                  <span
                    onClick={() => setShow(!show)}
                    className="absolute right-[35px] top-[35px] cursor-pointer  z-50"
                  >
                    {show ? <FaEye /> : <FaEyeSlash />}
                  </span>
                </div>
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                {/* Register Button 5  */}
                <button to="/" className="btn btn-success w-full">
                  Register
                </button>

                {/* Google Login 6 type="submit"*/}
                <button
                  type="button"
                  onClick={handleGoogleRegister}
                  className="btn btn-outline w-full"
                >
                  <FaGoogle />
                  Continue with Google
                </button>

                {/* Signup Link 7*/}
                <p className="text-center ">
                  You have an account?
                  <Link
                    to="/login"
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