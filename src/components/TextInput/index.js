import React, { useState } from "react";

import styles from "./TextInput.module.css";

const TextInput = ({
  onChange,
  placeholder,
  label,
  name,
  type,
  validateFn,
}) => {
  const [value, setValue] = useState("");
  const [validationError, setValidationError] = useState(false);

  const handleChange = (event) => {
    setValue(event.target.value);
    setValidationError(false);
    if (onChange) onChange(event.target.value);
  };

  const handleValidate = () => {
    if (validateFn && !validateFn(Number(value))) {
      setValidationError(true);
    } else {
      setValidationError(false);
    }
  };

  return (
    <div className={styles.wrapper}>
      <label htmlFor={`text-input-${name}`} className={styles.label}>
        {`${label}: `}
      </label>
      <div className={styles.inputWrapper}>
        <input
          onBlur={handleValidate}
          name={`text-input-${name}`}
          id={`text-input-${name}`}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          className={`${styles.input} ${
            validationError && styles.errorHighlight
          }`}
          type={type}
        />
        {validationError && <span className={styles.error}>Type</span>}
      </div>
    </div>
  );
};

export default React.memo(TextInput);
