import React, { useState } from 'react';
import './RecordButton.css';
import './Buttons.css';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function RecordButton(props) {

    const [recording, makeRecord] = useState(false);

    const toggleRecord = () => {
        makeRecord(!recording);
    }

    const toggleConsole = () => {
        console.log('Ya toggled!!!!!!!!!!!!!!!')
    }

    return (
        <>
            <button
                className={
                    recording ?
                        'rec' :
                        'notRec'
                }
                onClick={toggleRecord}
            >
                {recording ?
                    <p className="recording-btn-content"><FiberManualRecordIcon /></p> :
                    <p className="record-btn-content"><FiberManualRecordIcon /></p>
                }
            </button>

        </>
    )
}


export default RecordButton;