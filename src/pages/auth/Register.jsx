import React, { useState } from 'react';
import { FaXTwitter } from 'react-icons/fa6';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="w-4/12 m-auto max-w-md p-8 mt-12 space-y-3 rounded-xl bg-[#EBF5F4]">
      <h1 className="text-4xl font-bold text-center mb-4">Sign up</h1>
      <p className="text-lg  text-center text-gray-600/80 mb-8">
        Create an account get started
      </p>
      <form noValidate="" action="" className="space-y-6">
        <div className="space-y-1 font-medium">
          <label htmlFor="username" className="block font-bold">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            id="Name"
            placeholder="Full Name"
            className="w-full px-4 py-3 rounded-md bg-white placeholder-gray-400"
          />
        </div>
        <div className="space-y-1 font-medium">
          <label htmlFor="username" className="block font-bold">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded-md bg-white placeholder-gray-400"
          />
        </div>
        <div className="space-y-1 font-medium">
          <label htmlFor="password" className="block font-bold">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-md bg-white placeholder-gray-400"
          />
        </div>
        <div className="space-y-1 font-medium">
          <label htmlFor="confirm-password" className="block font-bold">
            Confirm Password
          </label>
          <input
            type="password"
            name="confirm-password"
            id="confirm-password"
            placeholder="Confirm Password"
            className="w-full px-4 py-3 rounded-md bg-white placeholder-gray-400"
          />
        </div>
        <button className="block w-full p-3 text-center rounded-sm bg-[#309689] text-white font-bold cursor-pointer">
          Sign up
        </button>
      </form>
      <div className="flex items-center pt-4 space-x-1">
        <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
        <p className="px-3 text-sm dark:text-gray-600">
          Register with social accounts
        </p>
        <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
      </div>
      <div className="flex justify-center space-x-4">
        <button aria-label="Log in with Google" className="cursor-pointer p-3">
          <FcGoogle size={30}></FcGoogle>
        </button>
        <button aria-label="Log in with Twitter" className="cursor-pointer p-3">
          <FaXTwitter size={28}></FaXTwitter>
        </button>
      </div>
      <p className="text-xs text-center sm:px-6 dark:text-gray-600">
        Already have an account?
        <Link
          rel="noopener noreferrer"
          to="/login"
          className="underline text-[#309689] font-bold"
        >
          Sign in
        </Link>
      </p>
    </div>
  );
};

export default Register;
