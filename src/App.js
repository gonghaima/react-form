import React, { useState } from 'react';
import './App.scss';

const STATUS = ["initial", "invalid", "valid", "loading"];

function App() {
  const [stats, setStatus] = useState(STATUS[0]);
  const handleSubmit = e => {
    e.preventDefault();
    console.log(e);
    setStatus(STATUS[3]);
    setTimeout(() => {
      setStatus(STATUS[0]);
    }, 3000);
  }
  return (
    <form className="App" onSubmit={handleSubmit}>
      <div className="form-field">
        <input id="Name" type="text" className={stats === STATUS[3] ? "disabled" : null} disabled={stats === STATUS[3]} placeholder="Name" />
        <label htmlFor="Name">Name</label>
        {/* <span className="helper-text" data-error="wrong" data-success="right">* Name is required</span> */}
      </div>
      <div className="form-field">
        <input id="Salary" type="number" placeholder="Salary" className={stats === STATUS[3] ? "disabled" : null} disabled={stats === STATUS[3]} />
        <label htmlFor="Salary">Salary</label>
      </div>
      <div className="age">
        <div className="placeholder-container">
          <label className="label">Date of Birth</label>
        </div>
        <div className="date">
          <input id="birthdate" type="number" className={stats === STATUS[3] ? "disabled" : null} disabled={stats === STATUS[3]} pattern="\d*" maxLength="2" placeholder="birthdate" />
          <label htmlFor="birthdate">Day</label>
        </div>
        <div className="month">
          <input id="birthmonth" type="number" placeholder="birthmonth" className={stats === STATUS[3] ? "disabled" : null} disabled={stats === STATUS[3]} />
          <label htmlFor="birthmonth">Month</label>
        </div>
        <div className="year">
          <input id="birthyear" type="number" placeholder="birthmonth" className={stats === STATUS[3] ? "disabled" : null} disabled={stats === STATUS[3]} />
          <label htmlFor="birthyear">Year</label>
        </div>
      </div>
      <span className="helper-text-success">User: 3849172 has been created</span>
      <div className="submit-field">
        {/* <button className="submit-button-disabled">Submit</button> */}
        <button className={stats === STATUS[3] ? "submit-button-disabled" : "submit-button"}>Submit</button>
        {stats === STATUS[3] && <div className="progress-wrapper">
          <svg className="progress-svg" viewBox="22 22 44 44">
            <circle className="progress-circle" cx="44" cy="44" r="20.2" fill="none" strokeWidth="3.6"></circle>
          </svg>
        </div>}
      </div>
    </form>
  );
}

export default App;
