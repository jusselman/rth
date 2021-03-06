import React, { useState, useEffect } from 'react';
import './PlayButton.css';
import './Buttons.css';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

function PlayButton() {

    const [playing, makePlay] = useState(false);

    const togglePlay = () => {
        makePlay(!playing);
    }

    const beatTracker = {
        beats: [0, 0, 0, 0],
        currentBeat: 0,
        playing: false
    }

    const beat = document.getElementById('beatTracker')

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
                    <p className="playing-btn-content"><PlayArrowIcon /></p> :
                    <p className="play-btn-content"><PlayArrowIcon /></p>
                }
            </button>

        </>
    )
}


export default PlayButton;