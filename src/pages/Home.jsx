import React from 'react';
import Banner from '../components/home/Banner';
import CompanyAd from '../components/home/CompanyAd';
import RecentJobs from '../components/home/RecentJobs';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <CompanyAd></CompanyAd>
      <RecentJobs></RecentJobs>
    </div>
  );
};

export default Home;
