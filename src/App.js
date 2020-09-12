import React, { useState, useEffect } from 'react';
import TextField from './components/TextField';
import AgeField from './components/AgeField';
import SubmitButton from './components/SubmitButton';
import Alert from './components/Alert';
import { STATUS, MSG_STATUS, INITIAL_FORM_VALUES } from './constants';
import './App.scss';

function App() {
  const [stats, setStatus] = useState(STATUS.INITIAL);
  const [msgStats, setMsgStatus] = useState({ status: MSG_STATUS.INITIAL, message: null });
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
      setMsgStatus({ status: MSG_STATUS.SUCCESS, message: `User: ${Math.floor(Math.random() * 100)} has been created successfully.` });
      setFormValues(INITIAL_FORM_VALUES);
    }, 3000);
  }

  useEffect(() => {
    if (stats === STATUS.LOADING) return;
    name && salary && day && month && year ? setStatus(STATUS.VALID) : setStatus(STATUS.INVALID);
  }, [stats, msgStats, formValues, name, salary, day, month, year]);


  return (
    <form className="App" onSubmit={handleSubmit}>
      <TextField fieldName='Name' type='text' value={name} onChange={onChange} disabled={stats === STATUS.LOADING} />
      <TextField fieldName='Salary' type='number' value={salary} onChange={onChange} onKeyDown={onKeyDown} disabled={stats === STATUS.LOADING} />
      <AgeField onChange={onChange} onKeyDown={onKeyDown} day={day} month={month} year={year} stats={stats} STATUS={STATUS} />
      <Alert msgStats={msgStats} />
      <SubmitButton stats={stats} STATUS={STATUS} />
    </form>
  );
}

export default App;
