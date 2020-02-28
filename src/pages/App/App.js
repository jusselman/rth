import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import Home from '../Home/Home';
import BeatPadPage from '../BeatPadPage/BeatPadPage';
import About from '../About/About';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import Community from '../Community/Community';
import Profile from '../Profile/Profile';
import EditPage from '../EditPage/EditPage';
import ProfileSignUp from '../../components/ProfileSignUp/ProfileSignUp';
import userService from '../../utils/userService';
import tokenService from '../../utils/tokenService';
import profileService from '../../utils/profileService';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser(),
      profile: ''
    }
  }

  

  handleDeleteProfile = async (id) => {
    console.log(typeof (id));
    await profileService.deleteProfile(id);
    this.setState({ profile: '' })
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  }

  addProfileToState = (profile) => {
    this.setState({ profile })
  }

  async componentDidMount() {
    const { user } = this.props;
    if (user != null) {
      let result = await profileService.getProfile(user._id);
      this.props.addProfileToState(result);
    }
  }

  render() {
    return (
      <div>
        <NavBar
          user={this.state.user}
          handleLogout={this.handleLogout}
        />
        <Switch>
          <Route exact path='/' render={() =>
            <Home
            />
          } />
          <Route exact path='/about' render={() =>
            <About
            />
          } />
          <Route exact path='/community' render={() =>
            <Community
            />
          } />
          <Route exact path='/beatpadpage' render={() =>
            <BeatPadPage
            />
          } />
          <Route exact path='/profile-sign-up' render={({ history }) =>
            <ProfileSignUp
              history={history}
              addProfileToState={
                this.addProfileToState
              }
              user={this.state.user}
            />
          } />
          <Route exact path='/profile' render={() =>
            <Profile
              user={this.state.user}
              profile={this.state.profile}
              handleProfileBtn={this.handleProfileBtn}
              profileFormSubmit={this.profileFormSubmit}
              addProfileToState={this.addProfileToState}
              handleDeleteProfile={this.handleDeleteProfile}
            />
          } />
          <Route exact path='/edit-page' render={({ history }) =>
            <EditPage
              addProfileToState={this.addProfileToState}
              profile={this.state.profile}
              user={this.state.user}
              history={history}
            />
          } />

          <Route exact path='/signup' render={({ history }) =>
            <SignupPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          } />
          <Route exact path='/login' render={({ history }) =>
            <LoginPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          } />

        </Switch>
      </div>
    );
  }
}


export default App;
