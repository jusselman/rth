import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProfileSignUp from '../../components/ProfileSignUp/ProfileSignUp';

const Profile = (props) => {
    return (
        <div className="Profile">
            <h1>Profile</h1>
            {props.profile
                ?
                <div><p>{props.profile.photo}</p>
                    <p>{props.profile.name}</p>
                    <p>{props.profile.description}</p>
                    <p>{props.profile.link}</p></div>

                : <Link to='/profile-sign-up'>Create New Profile</Link>

            }


        </div>





    )
};

export default Profile;