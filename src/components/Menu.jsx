import { NavLink, Outlet } from 'react-router-dom';
import React from 'react';
import { Header } from './Header';

export const Menu = () => {
    return (
        <>
            <Header />
            <div>
                {/* Menu */}
                <NavLink to='/' />
            </div>
            <Outlet />
        </>
    );
};
