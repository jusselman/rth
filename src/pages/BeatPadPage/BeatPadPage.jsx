import React from 'react';
import BeatMachine from '../../components/BeatMachine/BeatMachine';
import './BeatPadPage.css';
import RecordButton from '../../components/RecordButton/RecordButton';

const BeatPadPage = () => {
    return (
        <div className="BeatPadPage">
            <h1 className="beatPadPage-title">Beats On The Fly</h1>
            <BeatMachine />
            <RecordButton />


        </div>
    )
}

export default BeatPadPage;