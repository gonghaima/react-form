import React from 'react';

export default ({ stats, STATUS }) => {
    return <div className="submit-field">
        <button className={(stats === STATUS.VALID) ? "submit-button" : "submit-button-disabled"} disabled={(stats === STATUS.VALID) ? false : true}>Submit</button>
        {stats === STATUS.LOADING && <div className="progress-wrapper">
            <svg className="progress-svg" viewBox="22 22 44 44">
                <circle className="progress-circle" cx="44" cy="44" r="20.2" fill="none" strokeWidth="3.6"></circle>
            </svg>
        </div>}
    </div>
}