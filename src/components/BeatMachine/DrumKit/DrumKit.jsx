import React, { useState } from 'react';

function DrumKit(props) {

    const [state, setState] = useState({
        value: "default"
    });

    function handleChange(e) {
        const { value } = ({ value: e.target.value });
    }

    function handleSubmit() {

    }

    return (
        <div className="drumkit-container">
            <form onSubmit={handleSubmit}>
                <label>
                    Choose Drum Kit Preset

                {/* <select className="drumkit-select"> */}
                    <select
                        value={state.value}
                        onChange={handleChange}
                    >
                        <option value="default">Default</option>
                        <option value="secondary">Secondary</option>
                    </select>
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}


export default DrumKit;