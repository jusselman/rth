import React from 'react';
import BeatMachine from '../../components/BeatMachine/BeatMachine';
import ControlRow from '../../components/ControlRow/ControlRow';
import './BeatPadPage.css';

const BeatPadPage = () => {
    return (
        <div className="BeatPadPage">
            <div className="beat-container">
                <div className="pads">
                    <BeatMachine />
                    <ControlRow />
                </div>
            </div>
        </div>
    )
}

export default BeatPadPage;