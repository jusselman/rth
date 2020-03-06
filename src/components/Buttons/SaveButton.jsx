import React, { useState } from 'react';
import './SaveButton.css';

function SaveButton(props) {

    const [saving, makeSave] = useState(false);

    const toggleSave = () => makeSave(!saving);

    return (
        <>
            <button
                className={
                    saving ?
                        'save' :
                        'notSave'
                }
                onClick={toggleSave}
            >
                {saving ?
                    <p className="saving-btn-content">Save</p> :
                    <p className="save-btn-content">Save</p>
                }
            </button>
        </>
    )
}

export default SaveButton;