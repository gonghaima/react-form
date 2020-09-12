import React from 'react';
import TextField from '../TextField';
import { STATUS } from '../../constants';
import { validateDay, validateMonth, validateYear } from './validation';

export default ({ onChange, onKeyDown = () => { }, day, month, year, stats }) => {
    return <div className="age">
        <div className="placeholder-container">
            <label className="label">Date of Birth</label>
        </div>
        <TextField fieldWrapper="day" fieldName='Day' type='number'
            value={day}
            onChange={onChange}
            validate={validateDay}
            onKeyDown={onKeyDown}
            pattern='\d*'
            maxLength='2'
            disabled={stats === STATUS.LOADING} />
        <div className="split">/</div>
        <TextField fieldWrapper="month" fieldName='Month' type='number'
            value={month}
            onChange={onChange}
            validate={validateMonth}
            onKeyDown={onKeyDown}
            pattern='\d*'
            maxLength='2'
            disabled={stats === STATUS.LOADING} />
        <div className="split">/</div>
        <TextField fieldWrapper="year" fieldName='Year' type='number'
            value={year}
            onChange={onChange}
            validate={validateYear}
            onKeyDown={onKeyDown}
            pattern='\d*'
            maxLength='4'
            disabled={stats === STATUS.LOADING} />
    </div>
}