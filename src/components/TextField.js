import React from 'react';

// export default function TextField({ fieldName, type, value, onChange, onKeyDown = () => { }, disabled }) {
//     return <div className="form-field">
//         <input id={fieldName} type={type} value={value}
//             onChange={(e) => onChange(e, fieldName.toLowerCase())}
//             onKeyDown={onKeyDown}
//             className={disabled ? "disabled" : null}
//             disabled={disabled}
//             placeholder={fieldName} />
//         <label htmlFor={fieldName}>{fieldName}</label>
//     </div>
// }


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