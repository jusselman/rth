import React from 'react';
import BeatMachine from '../../components/BeatMachine/BeatMachine';
import './BeatPadPage.css';

const BeatPadPage = () => {
    return (
        <div className="BeatPadPage">
            <h1>Beats On The Fly</h1>
            <BeatMachine />
        </div>
    )
}

export default BeatPadPage;