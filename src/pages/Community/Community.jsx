import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';

const Community = (props) => {
    return (
        <div className="Community">
            <NavBar
                user={props.user}
                handleLogout={props.handleLogout}
            />
        </div>
    )
}

export default Community