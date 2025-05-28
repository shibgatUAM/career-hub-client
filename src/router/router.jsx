import React from 'react';
import { createBrowserRouter } from 'react-router';
import MainLayout from '../components/layout/MainLayout';
import Home from '../pages/Home';
import Jobs from '../pages/Jobs';
import About from '../pages/About';
import Contact from '../pages/Contact';

const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: '/jobs',
        Component: Jobs,
      },
      {
        path: '/about-us',
        Component: About,
      },
      {
        path: '/contact-us',
        Component: Contact,
      },
    ],
  },
]);

export default router;
