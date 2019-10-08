import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Profile = (props) => {
    return (
        <div className="Profile">
            <NavBar
                user={props.user}
                handleLogout={props.handleLogout}
            />

        </div>
    )
};

export default Profile;