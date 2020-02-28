import React from 'react';
import './BeatPad.css';

class BeatPad extends React.Component {

    componentDidMount() {
        console.log(this.audio)
        document.addEventListener('keydown', this.handleKeydown)
        window.focus()
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeydown)
    }

    handleKeydown = e => {
        if (e.keyCode === this.props.letter.charCodeAt()) {
            this.audio.play()
            this.audio.currentTime = 0
        }
    }

    handleClick = () => {
        this.audio.play()
        this.audio.currentTime = 0
    }

    render() {
        return (
            <div
                className='drum-pad'
                id={this.props.id}
                onClick={this.handleClick}
            >
                <div className="key">{this.props.letter}</div>
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