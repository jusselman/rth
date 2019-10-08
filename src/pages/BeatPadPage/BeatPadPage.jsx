import React from 'react';
import BeatPad from '../../components/BeatPad/BeatPad';
import './BeatPadPage.css';

const BeatPadPage = (props) => {
    return (
        <div className="BeatPadPage">
            <h1>BeatPad</h1>
            <BeatPad />
        </div>
    )
}

export default BeatPadPage;