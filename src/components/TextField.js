import React from 'react';

export default ({ fieldWrapper = "form-field", fieldName, type, value, validate, onChange, maxLength, onKeyDown = () => { }, pattern, disabled }) => {
    return <div className={fieldWrapper}>
        <input id={fieldName} type={type} value={value}
            onChange={(e) => (validate)
                ? (validate(e) ? onChange(e, fieldName.toLowerCase()) : false)
                : onChange(e, fieldName.toLowerCase())}
            onKeyDown={onKeyDown}
            className={disabled ? "disabled" : null}
            disabled={disabled}
            pattern={pattern}
            maxLength={maxLength}
            placeholder={fieldName} />
        <label htmlFor={fieldName}>{fieldName}</label>
    </div>
}