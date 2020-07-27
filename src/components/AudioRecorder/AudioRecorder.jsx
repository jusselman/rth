import React, { Component } from 'react';
import MicRecorder from 'mic-recorder-to-mp3';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import StopIcon from '@material-ui/icons/Stop';
import RecordButton from '../Buttons/RecordButton';
import PlayButton from '../Buttons/PlayButton';
import StopButton from '../Buttons/StopButton';
import SaveButton from '../Buttons/SaveButton';
import './AudioRecorder.css'

const Mp3Recorder = new MicRecorder({ bitRate: 128 });

class AudioRecorder extends Component {
    state = {
        isRecording: false,
        blobURL: '',
        isBlocked: false,
        playing: false
    };


    start = () => {
        if (this.state.isBlocked) {
            console.log('Permission Denied');
        } else {
            Mp3Recorder
                .start()
                .then(() => {
                    this.setState({
                        isRecording: true,
                        playing: true
                    });
                }).catch((e) => console.error(e));
        }
    };

    handleStop = () => {
        const stopBtn = document.getElementById('stopBtn');
        stopBtn.classList.add("stop")
        setTimeout(() => {
            stopBtn.classList.remove("stop");
        }, 500);
    }

    stop = () => {
        const stopBtn = document.getElementById('stopBtn');
        stopBtn.classList.add("stop")
        setTimeout(() => {
            stopBtn.classList.remove("stop");
        }, 500);
        Mp3Recorder
            .stop()
            .getMp3()
            .then(([buffer, blob]) => {
                const blobURL = URL.createObjectURL(blob)
                this.setState({
                    blobURL,
                    isRecording: false,
                    playing: false
                });
            }).catch((e) => console.log(e));
    };

    componentDidMount = () => {
        navigator.getUserMedia({ audio: true },
            () => {
                console.log('Permission Granted');
                this.setState({ isBlocked: false });
            },
            () => {
                console.log('Permission Denied');
                this.setState({ isBlocked: true })
            },
        );
    }

    render() {
        return (
            <div className="Controls">
                <button
                    className={
                        this.state.playing ?
                            'rec' :
                            'notRec'}
                    onClick={this.start}
                    disabled={this.state.isRecording}>
                    {this.state.playing ?
                        <p className="recording-btn-content"><FiberManualRecordIcon /></p> :
                        <p className="record-btn-content"><FiberManualRecordIcon /></p>
                    }
                </button>

                <button
                    className="stop-btn"
                    id="stopBtn"
                    onClick={this.stop}
                    disabled={!this.state.isRecording}>
                    <p className="saving-btn-content"><StopIcon /></p>
                </button>
                <div className="AudioContainer">
                    <audio
                        className="Audio"
                        src={this.state.blobURL}
                        controls="controls"
                    />
                    <div className="SubAudio">
                        <p>RTHH: Beats on the Fly</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default AudioRecorder;