import React, { useState } from 'react';
import './RecordButton.css';

function RecordButton(props) {

    const [recording, makeRecord] = useState(false);

    const toggleRecord = () => makeRecord(!recording);

    return (
        <div className="record-btn-container">
            <button
                className={
                    recording ?
                        'rec' :
                        'notRec'
                }
                onClick={toggleRecord}
            >
                {recording ?
                    <p className="recording-btn-content">Recording</p> :
                    <p className="record-btn-content">Record</p>
                }
            </button>

        </div>
    )

}


export default RecordButton;