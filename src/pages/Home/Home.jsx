import React from 'react';
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
                <h2 className="home-description">Upload, Share, Link</h2>
            </div>
        </div>

    )
};

export default Home;