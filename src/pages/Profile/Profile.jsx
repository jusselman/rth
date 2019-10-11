import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import profileService from '../../utils/profileService';
import ProfileSignUp from '../../components/ProfileSignUp/ProfileSignUp';

class Profile extends Component {
    state = {
        profile: '',
        user: this.props.user
    }

    async componentDidMount() {
        let result = await profileService.getProfile(this.props.user._id);
        this.props.addProfileToState(result);
    }

    render() {
        return (
            <div className="Profile">
                <h1>Profile</h1>
                {this.props.profile
                    ?
                    <div><p>{this.props.profile.photo}</p>
                        <p>{this.props.profile.name}</p>
                        <p>{this.props.profile.description}</p>
                        <p>{this.props.profile.link}</p></div>

                    : <Link to='/profile-sign-up'>Create New Profile</Link>

                }


            </div>
        )
    };
}


export default Profile;