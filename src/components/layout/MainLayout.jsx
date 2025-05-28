import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router';
import Footer from './Footer';
import Lottie from 'lottie-react';
import loadingAnimation from '../../assets/lotties/Animation - 1748420547895.json';

const MainLayout = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-white">
        {/* <span className="loading loading-ring loading-xl"></span> */}
        <Lottie
          animationData={loadingAnimation}
          loop={true}
          className="w-40 h-40"
        ></Lottie>
      </div>
    );
  }

  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
