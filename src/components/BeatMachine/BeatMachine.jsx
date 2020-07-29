import React from 'react';
import BeatPad from '../BeatPad/BeatPad';
import './BeatMachine.css';
import AudioRecorder from '../../components/AudioRecorder/AudioRecorder';

function BeatMachine(props) {


    // default drum kit //
    const data1 = [
        { id: 'tom1', name: 'tom1', letter: '2', src: 'http://www.denhaku.com/r_box/sr16/sr16tom/loelectm.wav' },
        { id: 'tom2', name: 'tom2', letter: '3', src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/969699/slamdam-tom-low-vm.mp3' },
        { id: 'tom3', name: 'tom3', letter: '4', src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/969699/slamdam-tom-high-vh.mp3' },
        { id: 'cowbell', name: 'cowbell', letter: '5', src: 'http://david.guerrero.free.fr/Effects/ShotgunReload.wav' }
    ];

    const data2 = [
        { id: 'kick1', name: 'kick1', letter: 'Q', src: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3' },
        { id: 'kick2', name: 'kick2', letter: 'W', src: 'http://billor.chsh.chc.edu.tw/sound/bass4.wav' },
        { id: 'snare1', name: 'snare1', letter: 'E', src: 'https://www.myinstants.com/media/sounds/snare.mp3' },
        { id: 'snare2', name: 'snare2', letter: 'R', src: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3' }
    ];

    const data3 = [
        { id: 'shaker1', name: 'shaker1', letter: 'A', src: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3' },
        { id: 'shaker2', name: 'shaker2', letter: 'S', src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/969699/808-hihat-open-vl.mp3' },
        { id: 'ride', name: 'ride', letter: 'D', src: 'https://www.myinstants.com/media/sounds/ride.mp3' },
        { id: 'perc', name: 'perc', letter: 'F', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3' }
    ];

    const data4 = [
        { id: 'hihat', name: 'hihat', letter: 'Z', src: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3' },
        { id: 'openhat', name: 'openhat', letter: 'X', src: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3' },
        { id: 'clap', name: 'clap', letter: 'C', src: 'https://www.myinstants.com/media/sounds/clap.mp3' },
        { id: 'crash', name: 'crash', letter: 'V', src: 'https://www.myinstants.com/media/sounds/crash.mp3' }
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
            <div>
                <AudioRecorder />
            </div>

        </div>
    )
}


export default BeatMachine;