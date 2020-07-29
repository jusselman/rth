import React, { Component } from 'react';
import RecordButton from '../Buttons/RecordButton';
import PlayButton from '../Buttons/PlayButton';
import StopButton from '../Buttons/StopButton';
import SaveButton from '../Buttons/SaveButton';
import './ControlRow.css';

class ControlRow extends Component {
    render() {
        return (
            <div className="control-row-container">
                <RecordButton onClick={this.start} disabled={this.state.isRecording} />
                <PlayButton />
                <StopButton onClick={this.start} disabled={!this.state.isRecording} />
                <SaveButton />
            </div>
        );
    }
}

export default ControlRow;