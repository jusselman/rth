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
                    <ControlRow />
                </div>
                {/* <img src="https://images.unsplash.com/photo-1535979014625-490762ceb2ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" /> */}
            </div>
        </div>
    )
}

export default BeatPadPage;