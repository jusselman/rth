import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
    let nav = props.user ?
        <div>
            &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
            <Link to='' className='NavBar-link' onClick={props.handleLogout}>LOG OUT</Link>
            &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
        </div>
        :
        <div>
            <Link to='/login' className='NavBar-link'>ENTER</Link>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <Link to='/signup' className='NavBar-link'>JOIN</Link>
        </div>;

    return (
        <div className='NavBar'>
            {nav}
        </div>
    );
};

export default NavBar;