import React from 'react';
import './BeatPad.css';

const BeatPad = (props) => (
    <div>
        <div className="wrapper anim">
            <div className="keys">
                {/* <!-- FIRST ROW OF FOUR KEYPADS --> */}
                <div data-key="50" className="key">
                    <div className="kdb"><span className="keyStrike">2</span></div>
                    <span className="sound">KICK1</span>
                </div>

                <div data-key="51" className="key">
                    <div className="kdb"><span className="keyStrike">3</span></div>
                    <span className="sound">TOM1</span>
                </div>

                <div data-key="52" className="key">
                    <div className="kdb"><span className="keyStrike">4</span></div>
                    <span className="sound">TOM2</span>
                </div>

                <div data-key="53" className="key">
                    <div className="kdb"><span className="keyStrike">5</span></div>
                    <span className="sound">TOM3</span>
                </div>

                {/* <!-- SECOND ROW --> */}
                <div data-key="81" className="key">
                    <div className="kdb"><span className="keyStrike">Q</span></div>
                    <span className="sound">SHAKE</span>
                </div>

                <div data-key="87" className="key">
                    <div className="kdb"><span className="keyStrike">W</span></div>
                    <span className="sound">SHHH</span>
                </div>

                <div data-key="69" className="key">
                    <div className="kdb"><span className="keyStrike">E</span></div>
                    <span className="sound">BELL</span>
                </div>

                <div data-key="82" className="key">
                    <div className="kdb"><span className="keyStrike">R</span></div>
                    <span className="sound">CLAP</span>
                </div>

                {/* <!-- THIRD ROW OF KEYS --> */}
                <div data-key="65" className="key">
                    <div className="kdb"><span className="keyStrike">A</span></div>
                    <span className="sound">OPEN</span>
                </div>

                <div data-key="83" className="key">
                    <div className="kdb"><span className="keyStrike">S</span></div>
                    <span className="sound">RIDE</span>
                </div>

                <div data-key="68" className="key">
                    <div className="kdb"><span className="keyStrike">D</span></div>
                    <span className="sound">CRASH</span>
                </div>

                <div data-key="70" className="key">
                    <div className="kdb"><span className="keyStrike">F</span></div>
                    <span className="sound">SNARE1</span>
                </div>

                {/* <!-- FOURTH ROW OF KEYS --> */}
                <div data-key="90" className="key">
                    <div className="kdb"><span className="keyStrike">Z</span></div>
                    <span className="sound">KICK2</span>
                </div>

                <div data-key="88" className="key">
                    <div className="kdb"><span className="keyStrike">X</span></div>
                    <span className="sound">CLICK</span>
                </div>

                <div data-key="67" className="key">
                    <div className="kdb"><span className="keyStrike">C</span></div>
                    <span className="sound">HIHAT</span>
                </div>

                <div data-key="86" className="key">
                    <div className="kdb"><span className="keyStrike">V</span></div>
                    <span className="sound">SNARE2</span>
                </div>
            </div>
        </div>
    </div>
)

export default BeatPad;