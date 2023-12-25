import '../style/Header.css';
import { NavLink } from 'react-router-dom';

export const Header = () => {
    return (
        <>
            <div className='header'>
                <div className='logo'>Logo</div>
                <div className='navi'>
                    <NavLink className='btn' to='/'>
                        На главную
                    </NavLink>
                    <NavLink className='btn' to='/posts'>
                        Открыть посты
                    </NavLink>
                </div>
            </div>
        </>
    );
};
