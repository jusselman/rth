import React, { setState } from 'react';
import vid from './VideoBg.mp4';
// import './Video.css';
import './VideoBg.css';
// import Player from 'video-react';


const VideoBg = () => {

    return (
        <>
            <video autoPlay muted loop className="Video" >
                <source src={vid} type="video/mp4" />
            </video>
        </>
    )
}

export default VideoBg;