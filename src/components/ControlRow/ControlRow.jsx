import React, { Component } from 'react';
import RecordButton from '../Buttons/RecordButton';
import PlayButton from '../Buttons/PlayButton';
import StopButton from '../Buttons/StopButton';
import SaveButton from '../Buttons/SaveButton';
import './ControlRow.css';
import MicRecorder from 'mic-recorder-to-mp3';

const Mp3Recorder = new MicRecorder({ bitRate: 128 });


class ControlRow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isRecording: false,
            blobURL: '',
            isBlocked: false,
        };
    }

    start = () => {
        if (this.state.isBlocked) {
            console.log('Permission Denied');
        } else {
            Mp3Recorder
                .start()
                .then(() => {
                    this.setState({ isRecording: true });
                }).catch((e) => console.error(e));
        }
    };

    stop = () => {
        Mp3Recorder
            .stop()
            .getMp3()
            .then(([buffer, blob]) => {
                const blobURL = URL.createObjectURL(blob)
                this.setState({ blobURL, isRecording: false });
            }).catch((e) => console.log(e));
    };

    componentDidMount() {
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
            <div className="control-row-container">
                <RecordButton onClick={this.start} disabled={this.state.isRecording} />
                <PlayButton />
                <StopButton onClick={this.start} disabled={!this.state.isRecording} />
                <SaveButton />

            </div>
        );
    }
}


export default ControlRow;