import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import profileService from '../../utils/profileService';
import './Profile.css';

class Profile extends Component {
    state = {
        profile: '',
        user: this.props.user
    }

    async componentDidMount() {
        try {
            let result = await profileService.getProfileWithUserID(this.props.user._id.toString());
            this.props.addProfileToState(result);
        } catch (err) {
            console.log(err)
        }
    }


    render() {
        return (
            <div className="Profile">
                <h1>Profile</h1>
                {this.props.profile
                    ?
                    <div><img>{this.props.profile.photo}</img>
                        <p>{this.props.profile.name}</p>
                        <p>{this.props.profile.description}</p>
                        <p>{this.props.profile.link}</p>
                        <Link to='/edit-page' className='cancel-link'>EDIT</Link><br></br>
                        <Link to='/profile' className='cancel-link' onClick={() => this.props.handleDeleteProfile(this.props.profile._id.toString())}>DELETE</Link>

                    </div>
                    :
                    <Link to='/profile-sign-up' className="cancel-link">Create New Profile</Link>
                }
            </div>
        )
    };
}


export default Profile;