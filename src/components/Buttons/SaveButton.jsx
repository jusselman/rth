import React from 'react';
import './SaveButton.css';
import './Buttons.css';
import SaveIcon from '@material-ui/icons/Save';

function SaveButton(props) {

    function handleClick() {
        document.getElementById('saveBtn').classList.add("save")
        setTimeout(() => {
            document.getElementById('saveBtn').classList.remove("save");
        }, 500);
    }

    return (
        <>
            <button
                className="save-btn"
                onClick={handleClick}
                id="saveBtn"
            >
                <p className="saving-btn-content"><SaveIcon /></p>
            </button>
        </>
    )
}

export default SaveButton;