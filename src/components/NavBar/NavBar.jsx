import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
    let nav = props.user ?
        <div>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <Link to='/' className='NavBar-link'>HOME</Link>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <Link to='/about' className='NavBar-Link'>ABOUT</Link>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <Link to='/beatpadpage' className='NavBar-Link'>PADS</Link>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <Link to='/community' className='NavBar-link'>POSTS</Link>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <Link to='' className='NavBar-link' onClick={props.handleLogout}>LOG OUT</Link>
            &nbsp;&nbsp;|&nbsp;&nbsp;
        </div>
        :
        <div>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <Link to='/' className='NavBar-link'>HOME</Link>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <Link to='/about' className='NavBar-Link'>ABOUT</Link>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <Link to='/login' className='NavBar-link'>ENTER</Link>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <Link to='/signup' className='NavBar-link'>JOIN</Link>
            &nbsp;&nbsp;|&nbsp;&nbsp;
        </div>;

    return (
        <div className='NavBar'>
            {nav}
        </div>
    );
};

export default NavBar;