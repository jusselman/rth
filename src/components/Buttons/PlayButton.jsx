import React, { useState } from 'react';
import './PlayButton.css';
import './Buttons.css';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

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
                    <p className="playing-btn-content"><PlayArrowIcon /></p> :
                    <p className="play-btn-content"><PlayArrowIcon /></p>
                }
            </button>
        </>
    )
}


export default PlayButton;