import React, { Component } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
// import './SignupPage.css';

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
            <div className='form-signup'>
                <header className="header-signup">Sign Up</header>
                <SignUpForm {...this.props} updateMessage={this.updateMessage} />
                <p>{this.state.message}</p>
            </div>
        );
    }
}

export default SignupPage;