import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../components/Footer';
import Loding from '../pages/Loding';

const HomeLayouts = () => {
  const {state} = useNavigation();

    return (
      <div>
        <header>
          <Navbar></Navbar>
        </header>

        <main>
        {state == "loading" ? <Loding />  : <Outlet></Outlet> }  
        </main>

        <Footer />

      </div>
    );
};

export default HomeLayouts;