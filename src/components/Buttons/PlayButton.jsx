import React, { useState } from 'react';
import './PlayButton.css';

function PlayButton(props) {

    const [playing, makePlay] = useState(false);

    const togglePlay = () => makePlay(!playing);

    return (
        <>
            <button
                className={
                    playing ?
                        'play' :
                        'notPlay'
                }
                onClick={togglePlay}
            >
                {playing ?
                    <p className="playing-btn-content">Playing</p> :
                    <p className="play-btn-content">Play</p>
                }
            </button>
        </>
    )
}


export default PlayButton;