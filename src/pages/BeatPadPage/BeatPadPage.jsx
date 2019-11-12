import React from 'react';
import BeatPad from '../../components/BeatPad/BeatPad';
import './BeatPadPage.css';

const BeatPadPage = (props) => {
    return (
        <div className="BeatPadPage">
            <h1>Beats On The Fly</h1>
            <BeatPad />

            {/* <!-- FIRST ROW OF KEYPADS --> */}
            <audio data-key="50" src="../sounds/kick1.wav"></audio>
            <audio data-key="51" src="../sounds/tom-808.wav"></audio>
            <audio data-key="52" src="../sounds/tom-acoustic01.wav"></audio>
            <audio data-key="53" src="../sounds/tom-acoustic02.wav"></audio>

            {/* <!-- SECOND ROW OF KEYPADS --> */}
            <audio data-key="81" src="../sounds/shaker-analog.wav"></audio>
            <audio data-key="87" src="../sounds/shaker-suckup.wav"></audio>
            <audio data-key="69" src="../sounds/cowbell-808.wav"></audio>
            <audio data-key="82" src="../sounds/clap-tape.wav"></audio>

            {/* <!-- THIRD ROW OF KEYPADS --> */}
            <audio data-key="65" src="sounds/openhat-acoustic01.wav"></audio>
            <audio data-key="83" src="sounds/ride.wav"></audio>
            <audio data-key="68" src="sounds/crash-acoustic.wav"></audio>
            <audio data-key="70" src="sounds/snare-808.wav"></audio>

            {/* <!-- FOURTH ROW OF KEYPADS --> */}
            <audio data-key="90" src="sounds/kick.wav"></audio>
            <audio data-key="88" src="sounds/perc-808.wav"></audio>
            <audio data-key="67" src="sounds/hihat-808.wav"></audio>
            <audio data-key="86" src="sounds/snare.wav"></audio>
        </div>
    )
}

export default BeatPadPage;