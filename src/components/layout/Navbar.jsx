import React from 'react';
import { PiSuitcaseSimpleFill } from 'react-icons/pi';
import { Link, NavLink, useLocation } from 'react-router';

const Navbar = () => {
  const location = useLocation();

  const isLogin = location.pathname === '/login';
  const isRegister = location.pathname === '/register';

  return (
    <div className="navbar bg-[#222222] text-white shadow-sm px-10 sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {' '}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{' '}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <a href="/" className="text-lg lg:text-2xl font-bold text-center">
          <PiSuitcaseSimpleFill
            className="inline-block mr-2"
            size={40}
            color="#309689"
          ></PiSuitcaseSimpleFill>
          careerHUB
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-10 ">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? 'font-bold text-base'
                : 'font-medium text-base opacity-60'
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/jobs"
            className={({ isActive }) =>
              isActive
                ? 'font-bold text-base'
                : 'font-medium text-base opacity-60'
            }
          >
            Jobs
          </NavLink>
          <NavLink
            to="/about-us"
            className={({ isActive }) =>
              isActive
                ? 'font-bold text-base'
                : 'font-medium text-base opacity-60'
            }
          >
            About Us
          </NavLink>
          <NavLink
            to="/contact-us"
            className={({ isActive }) =>
              isActive
                ? 'font-bold text-base'
                : 'font-medium text-base opacity-60'
            }
          >
            Contact Us
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end space-x-6">
        <Link
          to="/login"
          className={`px-6 py-2 rounded-md font-bold transition-all duration-200 ${
            isLogin
              ? 'bg-[#309689] text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          Login
        </Link>
        <Link
          to="/register"
          className={`px-6 py-2 rounded-md font-bold transition-all duration-200 ${
            isRegister
              ? 'bg-[#309689] text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          Register
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
