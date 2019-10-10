import React, { Component } from 'react';
import ProfileSignUp from '../../components/ProfileSignUp/ProfileSignUp';

class SignupPage extends Component {
    constructor(props) {
        super(props);
        this.state = { message: '' }
    }

    updateMessage = (msg) => {
        this.setState({ message: msg });
    }

    render() {
        return (
            <div className='ProfileSignUpPage'>
                <ProfileSignUp {...this.props} updateMessage={this.updateMessage} />
                <p>{this.state.message}</p>
            </div>
        );
    }
}

export default ProfileSignUpPage;