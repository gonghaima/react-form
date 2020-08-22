import React from 'react';

export default function TextField({ fieldName, type, value, onChange, onKeyDown = () => { }, disabled }) {
    return <div className="form-field">
        {/* <h2>{value}</h2> */}
        <input id={fieldName} type={type} value={value}
            onChange={(e) => onChange(e, fieldName.toLowerCase())}
            onKeyDown={onKeyDown}
            className={disabled ? "disabled" : null}
            disabled={disabled}
            placeholder={fieldName} />
        <label htmlFor={fieldName}>{fieldName}</label>
    </div>
}