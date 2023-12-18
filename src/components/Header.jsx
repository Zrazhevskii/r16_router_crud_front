import React from 'react';
import '../style/Header.css';
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <div className='header'>
            <div className='logo'>Logo</div>
            <div className='navi'>
                <Link className='btn' to='/'>
                    На главную
                </Link>
                <Link className='btn' to='/posts'>
                    Открыть посты
                </Link>
            </div>
        </div>
    );
};
