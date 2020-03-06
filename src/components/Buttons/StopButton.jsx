import React, { useState } from 'react';
import './StopButton.css';

function StopButton(props) {

    const [stopping, makeStop] = useState(false);

    const togglePlay = () => makeStop(!stopping);

    return (
        <>
            <button
                className={
                    stopping ?
                        'stop' :
                        'notStop'
                }
                onClick={togglePlay}
            >
                {stopping ?
                    <p className="stopping-btn-content">Stop</p> :
                    <p className="stop-btn-content">Stop</p>
                }
            </button>
        </>
    )
}


export default StopButton;