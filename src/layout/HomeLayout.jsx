import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Home from '../components/Home/Home';



const HomeLayout = () => {
    return (
            <div className='w-[95%] md:max-w-[1500px] mx-auto'>
                <Navbar></Navbar>
                <Home></Home>
                <Outlet></Outlet>
            </div>
    );
};

export default HomeLayout;