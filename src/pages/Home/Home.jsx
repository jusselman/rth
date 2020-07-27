import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import VideoBg from '../../components/VideoBg/VideoBg';


const Home = (props) => {
    return (
        <div className="Home-Containter">
            <div>
                <VideoBg />
            </div>
            <div className="Home anim">
                <h1 className="home-title">RTHH</h1>
                <h2 className="home-description">Make Beats on the fly</h2>
                <Link to='/beatpadpage' className="home-link">Start Playing</Link>
            </div>
        </div>

    )
};

export default Home;