import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useRef, useState } from 'react';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router';
import { auth } from '../firebase/firebase.config';
import { toast } from 'react-toastify';
import { AuthContext } from '../context/AuthContext';





const Login = () => {
  // const [user, setUser] = useState(null);
  const [show, setShow] = useState(false);
  const {
    signInWithEmailAndPasswordFunc,
    signInWithEmailFunc,
    sendPassResetEmailFunc,
    setUser,
    setLoading,
  } = useContext(AuthContext);

    const emailRef = useRef(null);
    // console.log(location);
    const navigate = useNavigate();

 

  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email?.value;
    const password = e.target.password?.value;
        setLoading(true);
    signInWithEmailAndPasswordFunc(email, password)
      .then((res) => {
        setUser(res.user);

        toast.success("Login Success");
        navigate("/");
      })
      .catch((e) => {
        // console.log(e);
        toast.error("Login failed");
      })
      .finally(() => setLoading(false));
     
  };

  const handleGoogleSignin = () => {
    signInWithEmailFunc()
      .then((res) => {
        // console.log(res);
        setLoading(false);
        toast.success("Google Login Success");
      })
      .catch((e) => {
        // console.log(e);
        toast.error(e.message);
      });
  };


  // handleForgotPassword
  const handleForgotPassword = () => {
    //  e.preventDefault();
    // console.log();
    const email = emailRef.current.value;
    sendPassResetEmailFunc(email)
      .then((res) => {
        setLoading(false);
        toast.success("Check your email to reset password");
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6 text-orange-500 fornt-semibold">
            Farmer Login
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleLogin} className="space-y-5">
              {/* Email 1*/}
              <label className=" font-bold">Email</label>
              <input
                type="email"
                name="email"
                ref={emailRef}
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
                className="input label"
                placeholder="Email"
              />

              {/* Password 2*/}
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
              {/* Forgot password 3 */}
              {/* <div> */}
              <button
                onClick={handleForgotPassword}
                className="hover:underline cursor-pointer"
                type="button"
              >
                Forgot password?
              </button>
              {/* <a className="link link-hover">Forgot password?</a> */}
             
              {/*  Login Button 4  to="/"*/}
              <button type="submit" className="btn btn-success w-full">
                Login
              </button>

              {/* Google Login 5 type="submit"*/}
              <button
                type="button"
                onClick={handleGoogleSignin}
                className="btn btn-outline w-full cursor-pointer"
              >
                <FaGoogle />
                Continue with Google
              </button>

              {/* Signup Link 7*/}
              <p className="text-center ">
                You have an account?
                <Link
                  to="/register"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  Ragister
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