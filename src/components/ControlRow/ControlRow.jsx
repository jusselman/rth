import React from 'react';
import RecordButton from '../Buttons/RecordButton';
import PlayButton from '../Buttons/PlayButton';
import StopButton from '../Buttons/StopButton';
import SaveButton from '../Buttons/SaveButton';
import './ControlRow.css';

const ControlRow = (props) => {

    return (
        <div className="control-row-container">
            <RecordButton />
            <PlayButton />
            <StopButton />
            <SaveButton />
        </div>
    )
}

export default ControlRow;