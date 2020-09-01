import React, { useState, useEffect } from 'react';
import TextField from './components/TextField';
import AgeField from './components/AgeField';
import SubmitButton from './components/SubmitButton';
import Alert from './components/Alert';
import './App.scss';

const STATUS = { INITIAL: 0, INVALID: 1, VALID: 2, LOADING: 3 };
const MSG_STATUS = { INITIAL: 0, SUCCESS: 1, FAILURE: 2 };
const INITIAL_FORM_VALUES = { name: "", salary: "", day: "", month: "", year: "" };

function App() {
  const [stats, setStatus] = useState(STATUS.INITIAL);
  const [msgStats, setMsgStatus] = useState(MSG_STATUS.INITIAL);
  const [formValues, setFormValues] = useState(INITIAL_FORM_VALUES);
  const { name, salary, day, month, year } = formValues;

  const onChange = (e, type) => {
    setFormValues({ ...formValues, ...{ [type]: e.target.value } });
  }

  const onKeyDown = (e) => {
    if (e.keyCode === 69) {
      e.preventDefault();
    }
  }

  const handleSubmit = e => {
    e.preventDefault();
    setStatus(STATUS.LOADING);
    setTimeout(() => {
      setStatus(STATUS.INITIAL);
      setMsgStatus(MSG_STATUS.SUCCESS);
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
      <Alert msgStats={msgStats} MSG_STATUS={MSG_STATUS} />
      <SubmitButton stats={stats} STATUS={STATUS} />
    </form>
  );
}

export default App;
