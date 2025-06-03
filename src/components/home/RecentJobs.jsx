import React from 'react';
import { Link } from 'react-router';

const RecentJobs = () => {
  return (
    <div className="mt-10 p-16">
      <h1 className="text-4xl font-bold mb-10">Recent Jobs Available</h1>
      <div className="flex justify-between items-center">
        <p className="font-normal text-base">
          Discover the latest job opportunities from top companies across
          Bangladesh
        </p>
        <Link className="text-xl font-semibold text-[#309689] underline">
          View All
        </Link>
      </div>
    </div>
  );
};

export default RecentJobs;
