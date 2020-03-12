import React from 'react';
import BeatMachine from '../../components/BeatMachine/BeatMachine';
import './BeatPadPage.css';
import ControlRow from '../../components/ControlRow/ControlRow';
import DrumKit from '../../components/BeatMachine/DrumKit/DrumKit';

const BeatPadPage = () => {
    return (
        <div className="BeatPadPage">
            <div className="beat-container">
                <BeatMachine />
                <ControlRow />
                <DrumKit />
            </div>
        </div>
    )
}

export default BeatPadPage;