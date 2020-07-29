import React from 'react';
import BeatMachine from '../../components/BeatMachine/BeatMachine';
import ControlRow from '../../components/ControlRow/ControlRow';
import AudioRecorder from '../../components/AudioRecorder/AudioRecorder';
import PlayButton from '../../components/Buttons/PlayButton';
import './BeatPadPage.css';

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