import React from 'react';
import './StopButton.css';
import './Buttons.css';
import StopIcon from '@material-ui/icons/Stop';

function StopButton(props) {

    function handleClick() {
        document.getElementById('stopBtn').classList.add("stop")
        setTimeout(() => {
            document.getElementById('stopBtn').classList.remove("stop");
        }, 500);
    }

    return (
        <>
            <button
                className="stop-btn"
                onClick={handleClick}
                id="stopBtn"
            >
                <p className="saving-btn-content"><StopIcon /></p>
            </button>
        </>
    )
}


export default StopButton;