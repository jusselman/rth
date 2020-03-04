import React from 'react';
import BeatMachine from '../../components/BeatMachine/BeatMachine';
import Recorder from '../../components/Recorder/Recorder';
import './BeatPadPage.css';

const BeatPadPage = () => {
    return (
        <div className="BeatPadPage">
            <h1 className="beatPadPage-title">Beats On The Fly</h1>
            <BeatMachine />


        </div>
    )
}

export default BeatPadPage;