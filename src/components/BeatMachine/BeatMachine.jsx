import React, { setState } from 'react';
import BeatPad from '../BeatPad/BeatPad';
import './BeatMachine.css';


function BeatMachine(props) {

    const data = [
        { id: 'tom1', letter: '2', src: 'http://www.denhaku.com/r_box/sr16/sr16tom/loelectm.wav' },
        { id: 'tom2', letter: '3', src: 'http://www.denhaku.com/r_box/sr16/sr16tom/loelectm.wav' },
        { id: 'tom3', letter: '4', src: 'http://www.denhaku.com/r_box/sr16/sr16tom/loelectm.wav' },
        { id: 'cowbell', letter: '5', src: 'http://david.guerrero.free.fr/Effects/ShotgunReload.wav' },
        { id: 'kick1', letter: 'Q', src: 'http://billor.chsh.chc.edu.tw/sound/bass4.wav' },
        { id: 'kick2', letter: 'W', src: 'http://billor.chsh.chc.edu.tw/sound/bass4.wav' },
        { id: 'snare1', letter: 'E', src: 'https://www.myinstants.com/media/sounds/snare.mp3' },
        { id: 'snare2', letter: 'R', src: 'https://www.myinstants.com/media/sounds/snare.mp3' },
        { id: 'shaker1', letter: 'A', src: 'https://www.myinstants.com/media/sounds/ride.mp3' },
        { id: 'shaker2', letter: 'S', src: 'https://www.myinstants.com/media/sounds/ride.mp3' },
        { id: 'ride', letter: 'D', src: 'https://www.myinstants.com/media/sounds/ride.mp3' },
        { id: 'perc', letter: 'F', src: 'https://www.myinstants.com/media/sounds/ride.mp3' },
        { id: 'hihat', letter: 'Z', src: 'https://www.myinstants.com/media/sounds/ride.mp3' },
        { id: 'openhat', letter: 'X', src: 'https://www.myinstants.com/media/sounds/ride.mp3' },
        { id: 'clap', letter: 'C', src: 'https://www.myinstants.com/media/sounds/clap.mp3' },
        { id: 'crash', letter: 'V', src: 'https://www.myinstants.com/media/sounds/crash.mp3' },
    ];

    // handleDisplay = display => this.setState({ display })

    // function handleDisplay() {
    //     this.setState({ display })
    // }

    return (
        <div id='drum-machine'>
            <div id='drum-pads' className="drum-pads">{data.map(d => (
                <BeatPad
                    key={d.id}
                    id={d.id}
                    letter={d.letter}
                    src={d.src}
                />
            ))}</div>
        </div>
    )
}


export default BeatMachine;