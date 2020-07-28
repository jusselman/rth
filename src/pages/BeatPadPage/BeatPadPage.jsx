import React from 'react';
import BeatMachine from '../../components/BeatMachine/BeatMachine';
import './BeatPadPage.css';
import ControlRow from '../../components/ControlRow/ControlRow';
import AudioRecorder from '../../components/AudioRecorder/AudioRecorder';

const BeatPadPage = () => {
    return (
        <div className="BeatPadPage">
            <div className="beat-container">
                <div className="pads">
                    <BeatMachine />

                </div>
            </div>
        </div>
    )
}

export default BeatPadPage;