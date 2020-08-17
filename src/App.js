import React from 'react';
import './App.scss';

function App() {
  return (
    <div className="App" onSubmit={() => console.log('submitted value!')}>
      <div className="form-field">
        <input id="Name" type="text" placeholder="Name" />
        <label htmlFor="Name">Name</label>
        <span className="helper-text" data-error="wrong" data-success="right">* Name is required</span>
      </div>
      <div className="form-field">
        <input id="Salary" type="number" placeholder="Salary" />
        <label htmlFor="Salary">Salary</label>
      </div>
      <div className="age">
        <div className="placeholder-container">
          <label className="label">Date of Birth</label>
        </div>
        <div className="date">
          <input id="birthdate" type="number" pattern="\d*" maxLength="2" placeholder="birthdate" />
          <label htmlFor="birthdate">Day</label>
        </div>
        <div className="month">
          <input id="birthmonth" type="number" placeholder="birthmonth" />
          <label htmlFor="birthmonth">Month</label>
        </div>
        <div className="year">
          <input id="birthyear" type="number" placeholder="birthmonth" />
          <label htmlFor="birthyear">Year</label>
        </div>
      </div>
      <span className="helper-text-success">User: 3849172 has been created</span>
      <div className="submit-field">
        <button className="submit-button-disabled">Submit</button>
        <div className="progress-wrapper">
          <svg class="progress-svg" viewBox="22 22 44 44">
            <circle class="progress-circle" cx="44" cy="44" r="20.2" fill="none" stroke-width="3.6"></circle>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default App;
