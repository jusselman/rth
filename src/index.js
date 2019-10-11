import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProfileSignUp from './components/ProfileSignUp/ProfileSignUp';

ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById('root')



);

serviceWorker.unregister();


