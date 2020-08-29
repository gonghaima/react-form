import React, { useState, useEffect } from 'react';
import TextField from './components/TextField';
import AgeField from './components/AgeField';
import './App.scss';

const STATUS = { INITIAL: 0, INVALID: 1, VALID: 2, LOADING: 3 };
const INITIAL_FORM_VALUES = { name: "", salary: "", day: "", month: "", year: "" };

function App() {
  const [stats, setStatus] = useState(STATUS.INITIAL);
  const [formValues, setFormValues] = useState(INITIAL_FORM_VALUES);
  const { name, salary, day, month, year } = formValues;

  const onChange = (e, type) => {
    // debugger;
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
      <TextField fieldName='Name' type='text' value={name} onChange={onChange} disabled={stats === STATUS.LOADING} />
      <TextField fieldName='Salary' type='number' value={salary} onChange={onChange} onKeyDown={onKeyDown} disabled={stats === STATUS.LOADING} />
      <AgeField onChange={onChange} onKeyDown={onKeyDown} day={day} month={month} year={year} stats={stats} STATUS={STATUS} />
      <span className="helper-text-success">User: 3849172 has been created</span>
      <div className="submit-field">
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
