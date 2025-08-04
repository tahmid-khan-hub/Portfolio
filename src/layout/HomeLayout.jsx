import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Home from '../components/Home/Home';



const HomeLayout = () => {
    return (
            <>
            <Navbar></Navbar>
            <div className='w-[95%] max-w-[1500px] mx-auto'>
                <Home></Home>
                <Outlet></Outlet>
            </div>
            </>
    );
};

export default HomeLayout;