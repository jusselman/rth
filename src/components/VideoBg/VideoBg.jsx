import React, { setState } from 'react';
import vid from './VideoBg.mp4';
import './VideoBg.css';

const VideoBg = () => {

    return (
        <>
            <div className="video-container">
                <video height="100%" overflow="hidden" autoPlay muted loop className="Video" >
                    <source src={vid} type="video/mp4" />
                </video>
            </div>
        </>
    )
}

export default VideoBg;