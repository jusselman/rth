import React from 'react';
import BeatMachine from '../../components/BeatMachine/BeatMachine';
import PlayButton from '../../components/Buttons/PlayButton';
import RecordButton from '../../components/Buttons/RecordButton';
import StopButton from '../../components/Buttons/StopButton';
import SaveButton from '../../components/Buttons/SaveButton';
import ControlRow from '../../components/ControlRow/ControlRow';
import './BeatPadPage.css';

const BeatPadPage = () => {
    return (
        <div className="BeatPadPage">
            <div className="beat-container">
                <div className="pads">
                    <BeatMachine />
                    <div className="control-row-container">
                        <RecordButton />
                        <PlayButton />
                        <StopButton />
                        <SaveButton />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BeatPadPage;