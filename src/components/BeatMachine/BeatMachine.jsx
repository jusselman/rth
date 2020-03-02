import React, { setState } from 'react';
import BeatPad from '../BeatPad/BeatPad';
import './BeatMachine.css';
import { v4 as uuidv4 } from 'uuid';


function BeatMachine(props) {

    const data1 = [
        { id: uuidv4(), name: 'tom1', letter: '2', src: 'http://www.denhaku.com/r_box/sr16/sr16tom/loelectm.wav' },
        { id: uuidv4(), name: 'tom2', letter: '3', src: 'http://www.denhaku.com/r_box/sr16/sr16tom/loelectm.wav' },
        { id: uuidv4(), name: 'tom3', letter: '4', src: 'http://www.denhaku.com/r_box/sr16/sr16tom/loelectm.wav' },
        { id: uuidv4(), name: 'cowbell', letter: '5', src: 'http://david.guerrero.free.fr/Effects/ShotgunReload.wav' }
    ];

    const data2 = [
        { id: uuidv4(), name: 'kick1', letter: 'Q', src: 'http://billor.chsh.chc.edu.tw/sound/bass4.wav' },
        { id: uuidv4(), name: 'kick2', letter: 'W', src: 'http://billor.chsh.chc.edu.tw/sound/bass4.wav' },
        { id: uuidv4(), name: 'snare1', letter: 'E', src: 'https://www.myinstants.com/media/sounds/snare.mp3' },
        { id: uuidv4(), name: 'snare2', letter: 'R', src: 'https://www.myinstants.com/media/sounds/snare.mp3' }
    ];

    const data3 = [
        { id: uuidv4(), name: 'shaker1', letter: 'A', src: 'https://www.myinstants.com/media/sounds/ride.mp3' },
        { id: uuidv4(), name: 'shaker2', letter: 'S', src: 'https://www.myinstants.com/media/sounds/ride.mp3' },
        { id: uuidv4(), name: 'ride', letter: 'D', src: 'https://www.myinstants.com/media/sounds/ride.mp3' },
        { id: uuidv4(), name: 'perc', letter: 'F', src: 'https://www.myinstants.com/media/sounds/ride.mp3' }
    ];

    const data4 = [
        { id: uuidv4(), name: 'hihat', letter: 'Z', src: 'https://www.myinstants.com/media/sounds/ride.mp3' },
        { id: uuidv4(), name: 'openhat', letter: 'X', src: 'https://www.myinstants.com/media/sounds/ride.mp3' },
        { id: uuidv4(), name: 'clap', letter: 'C', src: 'https://www.myinstants.com/media/sounds/clap.mp3' },
        { id: uuidv4(), name: 'crash', letter: 'V', src: 'https://www.myinstants.com/media/sounds/crash.mp3' }
    ];

    return (
        <div id='drum-container' div className='drum-container'>
            <div id='drum-pads' className="drum-row">{data1.map(d => (
                <BeatPad
                    key={d.id}
                    id={d.id}
                    letter={d.letter}
                    name={d.name}
                    src={d.src}
                />
            ))}</div>
            <div id='drum-pads' className="drum-row">{data2.map(d => (
                <BeatPad
                    key={d.id}
                    id={d.id}
                    letter={d.letter}
                    name={d.name}
                    src={d.src}
                />
            ))}</div>
            <div id='drum-pads' className="drum-row">{data3.map(d => (
                <BeatPad
                    key={d.id}
                    id={d.id}
                    letter={d.letter}
                    name={d.name}
                    src={d.src}
                />
            ))}</div>
            <div id='drum-pads' className="drum-row">{data4.map(d => (
                <BeatPad
                    key={d.id}
                    id={d.id}
                    letter={d.letter}
                    name={d.name}
                    src={d.src}
                />
            ))}</div>
        </div>
    )
}


export default BeatMachine;