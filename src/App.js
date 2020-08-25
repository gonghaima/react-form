import React, { useState, useEffect } from 'react';
import TextField from './components/TextField';
import './App.scss';

const STATUS = { INITIAL: 0, INVALID: 1, VALID: 2, LOADING: 3 };
const INITIAL_FORM_VALUES = { name: "", salary: "", day: "", month: "", year: "" };

function App() {
  const [stats, setStatus] = useState(STATUS.INITIAL);
  const [formValues, setFormValues] = useState(INITIAL_FORM_VALUES);
  const { name, salary, day, month, year } = formValues;

  const onChange = (e, type) => {
    debugger;
    setFormValues({ ...formValues, ...{ [type]: e.target.value } });
  }

  const onKeyDown = (e) => {
    if (e.keyCode === 69) {
      e.preventDefault();
    }
  }

  const vd = (e) => {
    const isValid = e.target.value.length <= 2;
    debugger;
    return isValid;
  }

  let handleSubmit = e => {
    e.preventDefault();
    console.log(e);
    setStatus(STATUS.LOADING);
    setTimeout(() => {
      setStatus(STATUS.INITIAL);
      setFormValues(INITIAL_FORM_VALUES);
    }, 3000);
  }

  useEffect(() => {
    if (stats === STATUS.LOADING) return;
    name && salary && day && month && year ? setStatus(STATUS.VALID) : setStatus(STATUS.INVALID);
  }, [stats, formValues, name, salary, day, month, year]);


  return (
    <form className="App" onSubmit={handleSubmit}>
      {/* <div className="form-field">
        <input id="Name" type="text" value={name} onChange={(e) => onChange(e, 'name')} className={stats === STATUS.LOADING ? "disabled" : null} disabled={stats === STATUS.LOADING} placeholder="Name" />
        <label htmlFor="Name">Name</label>
      </div> */}
      <TextField fieldName='Name' type='text' value={name} onChange={onChange} disabled={stats === STATUS.LOADING} />
      <TextField fieldName='Salary' type='number' value={salary} onChange={onChange} onKeyDown={onKeyDown} disabled={stats === STATUS.LOADING} />
      <div className="age">
        <div className="placeholder-container">
          <label className="label">Date of Birth</label>
        </div>
        <TextField fieldWrapper="day" fieldName='Day' type='number'
          value={day}
          onChange={onChange}
          validate={(e) => e.target.value.length <= 2}
          onKeyDown={onKeyDown}
          pattern='\d*'
          maxLength='2'
          disabled={stats === STATUS.LOADING} />
        <div className="split">/</div>
        <TextField fieldWrapper="month" fieldName='Month' type='number'
          value={month}
          onChange={onChange}
          validate={(e) => (e.target.value.length <= 4)}
          onKeyDown={onKeyDown}
          pattern='\d*'
          maxLength='4'
          disabled={stats === STATUS.LOADING} />
        <div className="split">/</div>
        <div className="year">
          <input id="birthyear" type="number" value={year} onChange={(e) => (e.target.value.length === 5) ? false : onChange(e, 'year')} placeholder="year" className={stats === STATUS.LOADING ? "disabled" : null} disabled={stats === STATUS.LOADING} onKeyDown={e => onKeyDown(e)} />
          <label htmlFor="birthyear">Year</label>
        </div>
      </div>
      <span className="helper-text-success">User: 3849172 has been created</span>
      <div className="submit-field">
        {/* <button className="submit-button-disabled">Submit</button> */}
        <button className={(stats === STATUS.VALID) ? "submit-button" : "submit-button-disabled"} disabled={(stats === STATUS.VALID) ? false : true}>Submit</button>
        {stats === STATUS.LOADING && <div className="progress-wrapper">
          <svg className="progress-svg" viewBox="22 22 44 44">
            <circle className="progress-circle" cx="44" cy="44" r="20.2" fill="none" strokeWidth="3.6"></circle>
          </svg>
        </div>}
      </div>
      {JSON.stringify(formValues)}
      {JSON.stringify(stats)}
      {JSON.stringify((stats === STATUS.VALID))}
    </form>
  );
}

export default App;
