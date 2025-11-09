import React, { useState } from 'react';
import logo from "../assets/logo.png";
import { Link, NavLink } from 'react-router';
import MyLink from './MyLink';





const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  



  
  return (
    <div>
      <nav className="bg-base-100 shadow-sm w-full px-4 md:px-8">
        <div className="flex items-center justify-between w-full py-3">
          {/* left Logo text*/}
          <div className="flex items-center gap-2">
            <img className="w-12 h-12" src={logo} alt="" />
            <h2 className="text-2xl font-bold text-green-600">Krishi Network</h2>
          </div>

          {/* middle menu */}
          <div className="hidden md:flex flex-1 justify-center">
            <ul className="flex gap-8 font-medium">
              <li>
                <MyLink to={"/"} className="">
                  Home
                </MyLink>
              </li>

              <li>
                <MyLink to={"/all-crops"} className="">
                  All Crops
                </MyLink>
              </li>
            </ul>
          </div>

          {/* right Auth btn */}
          <div className="hidden md:flex gap-3">
            <Link to="/login">
              <button className="btn">Log in</button>
            </Link>
            <Link to="/register">
              <button className="btn bg-[#C1E899]">Register</button>
            </Link>
          </div>

          {/*  menu for mobile */}
          <button
            className="md:hidden text-2xl text-green-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>

        {/* mobile dropdown menu */}
        {isOpen && (
          <div className="md:hidden mt-3 bg-white shadow-md rounded-lg p-4 space-y-3">
            <ul className="flex flex-col gap-3">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "text-green-500 font-semibold" : ""
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/all-crops"
                  className={({ isActive }) =>
                    isActive ? "text-green-500 font-semibold" : ""
                  }
                >
                  All Crops
                </NavLink>
              </li>
            </ul>
            <div className="flex gap-3 pt-2">
              <Link to="/login" className="btn w-1/2">
                Login
              </Link>
              <Link to="/register" className="btn bg-[#C1E899] w-1/2">
                Register
              </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;