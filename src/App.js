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
      <div className="submit">
        <button className="button">Submit</button>
      </div>
    </div>
  );
}

export default App;
