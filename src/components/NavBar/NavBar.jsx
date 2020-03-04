import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {

    let nav = props.user ?
        <div>

            <Link to='/' className='NavBar-link'>HOME</Link>

            <Link to='/about' className='NavBar-link'>ABOUT</Link>

            <Link to='/beatpadpage' className='NavBar-link'>PADS</Link>

            <Link to='/community' className='NavBar-link'>POSTS</Link>

            <Link to='/profile' className='NavBar-link'>PROFILE</Link>

            <Link to='' className='NavBar-link' onClick={props.handleLogout}>LOG OUT</Link>

        </div>
        :
        <div>

            <Link to='/' className='NavBar-link'>HOME</Link>

            <Link to='/about' className='NavBar-Link'>ABOUT</Link>

            <Link to='/login' className='NavBar-link'>ENTER</Link>

            <Link to='/signup' className='NavBar-link'>JOIN</Link>

        </div>;

    return (
        <div className='NavBar'>
            {nav}
        </div>
    );
};

export default NavBar;