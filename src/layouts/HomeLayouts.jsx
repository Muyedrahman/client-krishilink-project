import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';

const HomeLayouts = () => {
    return (
      <div>
        <header>
          <Navbar></Navbar>
        </header>

        <main>
          <Outlet></Outlet>
        </main>

        <Footer />

      </div>
    );
};

export default HomeLayouts;