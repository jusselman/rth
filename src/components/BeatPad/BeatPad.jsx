import React from 'react';
import './BeatPad.css';

class BeatPad extends React.Component {

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeydown)
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeydown)
    }

    handleKeydown = e => {
        let beatKey = document.getElementById(this.props.id);
        if (e.keyCode === this.props.letter.charCodeAt()) {
            this.audio.play()
            this.audio.currentTime = 0
            beatKey.classList.add("playing");
            // beatKey.classList.remove("key");
            setTimeout(() => {
                document.getElementById(this.props.id).classList.remove("playing");
            }, 250);
        }
    }

    handleClick = () => {
        let beatKey = document.getElementById(this.props.id);
        this.audio.play();
        this.audio.currentTime = 0
        beatKey.classList.add("playing");
        // beatKey.classList.remove("key");
        setTimeout(() => {
            document.getElementById(this.props.id).classList.remove("playing");
        }, 250);
    }

    render() {
        return (
            <div
                className='drum-pad'
                id={this.props.id}
                onClick={this.handleClick}
            >
                <div className="key">{this.props.letter}<br></br>{this.props.name}</div>
                <audio id={this.props.letter}
                    className='clip'
                    src={this.props.src}
                    ref={ref => this.audio = ref}
                ></audio>
            </div>
        )
    }
}

export default BeatPad;