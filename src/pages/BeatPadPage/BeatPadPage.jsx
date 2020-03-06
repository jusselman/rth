import React from 'react';
import BeatMachine from '../../components/BeatMachine/BeatMachine';
import './BeatPadPage.css';
import ControlRow from '../../components/ControlRow/ControlRow';

const BeatPadPage = () => {
    return (
        <div className="BeatPadPage">
            <h1 className="beatPadPage-title">Beats On The Fly</h1>
            <BeatMachine />
            <ControlRow />


        </div>
    )
}

export default BeatPadPage;