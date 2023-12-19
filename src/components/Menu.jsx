import { NavLink, Outlet } from 'react-router-dom';
import React from 'react';
import { Header } from './Header';

export const Menu = () => {
    return (
        <>
            {/* <Header /> */}
            Главное меню
            <div>
                <NavLink to='/' />
            </div>
            <Outlet />
        </>
    );
};
