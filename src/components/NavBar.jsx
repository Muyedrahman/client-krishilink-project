import React, { useContext, useState } from 'react';
import logo from "../assets/logo.png";
import { Link, NavLink } from 'react-router';
import MyLink from './MyLink';
import { AuthContext } from '../context/AuthContext';
import { toast } from 'react-toastify';
import { FadeLoader} from 'react-spinners';





const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logOutFunc, setUser, loading, setLoading } =
    useContext(AuthContext);
  console.log(user);


    // logOutFunc profile ar
    const handleSignout = () => {
      logOutFunc()
        .then(() => {
          toast.success("Logout Succesful");
          setUser(null);
        })
        .catch((e) => {
          toast.error(e.message);
        })
        .finally(() => {
          setLoading(false);
        });
    };

  


// console.log(loading)
  
  return (
    <nav className="bg-white shadow-md px-4 md:px-8 py-3">
      <div className="flex items-center justify-between">
        {/* logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="w-12 h-12" />
          <h1 className="text-2xl font-bold text-green-600">Krishi Network</h1>
        </div>

        <ul className="hidden md:flex gap-6">
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

        
          {user && (
            <>
              <li>
                <NavLink
                  to="/profile"
                  className={({ isActive }) =>
                    isActive ? "text-green-500 font-semibold" : "hover:text-green-600"
                  }
                >
                  Profile
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/add-crop"
                  className={({ isActive }) =>
                    isActive ? "text-green-500 font-semibold" : "hover:text-green-600"
                  }
                >
                  Add Crop
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/my-posts"
                  className={({ isActive }) =>
                    isActive ? "text-green-500 font-semibold" : "hover:text-green-600"
                  }
                >
                  My Posts
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/my-interests"
                  className={({ isActive }) =>
                    isActive ? "text-green-500 font-semibold" : "hover:text-green-600"
                  }
                >
                  My Interests
                </NavLink>
              </li>
            </>
          )}
        </ul>
  

        <div className="hidden md:flex gap-3">
          {loading ? (
            <FadeLoader color="#008000" />
          ) : user ? (
            <>
              {/* <span>{user.displayName}</span> */}
              <button onClick={handleSignout} className="btn">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn">
                Login
              </Link>
              <Link to="/register" className="btn bg-green-200">
                Register
              </Link>
            </>
          )}
        </div>

        {/* manu */}
        <button
          className="md:hidden text-2xl text-green-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

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
            {user ? (
              <div className="text-center space-y-2">
                <img
                  src={user?.photoURL || "User"}
                  alt=""
                  className="h-16 w-16 rounded-full mx-auto"
                />
                {/* <p>{user.displayName}</p> */}
                <button onClick={handleSignout} className="btn w-full">
                  Logout
                </button>
              </div>
            ) : (
              <>
                <Link to="/login" className="btn w-1/2">
                  Login
                </Link>
                <Link to="/register" className="btn bg-green-200 w-1/2">
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );

};

export default Navbar;