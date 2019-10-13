import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import profileService from '../../utils/profileService';


class ProfileSignUp extends Component {
    state = {
        photo: "",
        name: "",
        description: "",
        link: "",
        user: this.props.user
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const profile = await profileService.addProfile(this.state);
            let result = await profileService.getProfile(profile._id.toString());
            // this.props.addProfile({ profile: result })
            this.props.addProfileToState(result);
            this.props.history.push('/profile');
        } catch (err) {
            console.log(err)
        }
    }

    isFormInvalid() {
        return !(this.state.photo && this.state.name && this.state.description && this.state.link);
    }

    render() {
        return (
            <div>
                <header className="header-footer">Create Rth Profile</header>
                <form className="form-horizontal" onSubmit={this.handleSubmit} >
                    <div className="form-group">
                        <div className="col-sm-12">
                            <input type="text" className="form-control" placeholder="Photo" value={this.state.photo} name="photo" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-12">
                            <input type="text" className="form-control" placeholder="Name" value={this.state.name} name="name" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-12">
                            <input type="text" className="form-control" placeholder="Description" value={this.state.description} name="description" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-12">
                            <input type="text" className="form-control" placeholder="Link" value={this.state.link} name="link" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-12 text-center">
                            <button className="btn btn-default" onClick={this.profileFormSubmit} disabled={this.isFormInvalid()}>Submit</button>&nbsp;&nbsp;
                            <Link to='/'>Cancel</Link>
                        </div>
                    </div>
                </form>

            </div>
        );
    }
}

export default ProfileSignUp;


