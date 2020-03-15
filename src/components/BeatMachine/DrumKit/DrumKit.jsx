import React from 'react';
import './DrumKit.css';
import '../BeatMachine.css';
import Select from 'react-select';


const options = [
    { value: 'default', label: 'Default', id: 'default' },
    { value: 'second', label: 'Second', id: 'second' },
    { value: 'third', label: 'Third', id: 'third' }
]

const customStyles = {
    option: (provided, state) => ({
        ...provided,
        border: '3px solid black',
        height: '205px',
        width: '120px',
        color: state.isSelected ? 'teal' : '#2f3421',
        placeholder: 'Default',
        overflowX: 'hidden',
    }),
    control: () => ({
        // none of react-select's styles are passed to <Control />
        width: '120px',
        height: '120px',
        color: '#000',
        boxShadow: 'inset 3px 3px 20px #000000',
        border: '4px solid black',
        borderRadius: '5px',
        fontSize: '1.5rem',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transition: '.3s all ease',
        background: 'rgb(195, 194, 215)',
        transition: '.3s all ease',
        placeholder: 'DrumKit',
    }),
    menu: () => ({
        width: '120px',
        height: '120px',
        color: '#000',
        background: 'white',
        boxShadow: 'inset 3px 3px 20px #000000',
        border: '4px solid black',
        borderRadius: '5px',
        fontSize: '1.5rem',
        transition: 'all 0.07s',
        textAlign: 'center',
        color: '',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: 'inset 3px 3px 20px #000000',
        transition: '.3s all ease',
        background: 'rgb(195, 194, 215)',
    }),
    menuList: () => ({
        height: '120px',
    }),
    singleValue: (provided, state) => {
        const opacity = state.isDisabled ? 0.5 : 1;
        const transition = 'opacity 300ms';

        return { ...provided, opacity, transition };
    },
}

function handleClick() {
    const drumKitPlaceholder = document.getElementById('drumKitPlaceholder');
    const audio = new Audio('https://www.myinstants.com/media/sounds/splat.mp3');
    audio.play();
    drumKitPlaceholder.classList.add("drum-place-click");
    setTimeout(() => {
        drumKitPlaceholder.classList.remove("drum-place-click");
    }, 250);
    console.log('clicked');
}

class DrumKit extends React.Component {

    componentDidMount() {
        document.addEventListener('keydown', this.handleClick)
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleClick)
    }

    state = {
        selectedOption: "default",
    };
    handleChange = selectedOption => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
    };
    render() {
        const { selectedOption } = this.state;

        return (
            <>
                <Select
                    value={selectedOption}
                    onChange={this.handleChange}
                    options={options}
                    styles={customStyles}
                    placeholder="DrumKit"
                />
                <div
                    className="drum-pad drumkit-placeholder"
                    onClick={handleClick}
                    id="drumKitPlaceholder"
                >
                    <p>↟</p>
                    <p>Choose</p>
                </div>
            </>
        );
    }
}


export default DrumKit;