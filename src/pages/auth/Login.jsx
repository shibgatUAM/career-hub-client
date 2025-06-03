import React from 'react';
import { FaXTwitter } from 'react-icons/fa6';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router';

const Login = () => {
  return (
    <div className="w-4/12 m-auto max-w-md p-8 mt-12 space-y-3 rounded-xl bg-[#EBF5F4]">
      <h1 className="text-4xl font-bold text-center mb-8">Login</h1>
      <form noValidate="" action="" className="space-y-6">
        <div className="space-y-1 font-medium">
          <label htmlFor="username" className="block font-bold">
            User Email
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
          <div className="flex justify-end text-xs dark:text-gray-600">
            <a rel="noopener noreferrer" href="#">
              Forgot Password?
            </a>
          </div>
        </div>
        <button className="block w-full p-3 text-center rounded-sm bg-[#309689] text-white font-bold cursor-pointer">
          Sign in
        </button>
      </form>
      <div className="flex items-center pt-4 space-x-1">
        <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
        <p className="px-3 text-sm dark:text-gray-600">
          Login with social accounts
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
        Don't have an account?
        <Link
          rel="noopener noreferrer"
          to="/register"
          className="underline text-[#309689] font-bold"
        >
          Sign up
        </Link>
      </p>
    </div>
  );
};

export default Login;
