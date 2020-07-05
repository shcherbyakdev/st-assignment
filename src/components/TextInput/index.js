import React, { useState } from "react";

import styles from "./TextInput.module.css";

const TextInput = ({ onChange, placeholder, label, name, type }) => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
    if (onChange) onChange(event.target.value);
  };
  return (
    <div className={styles.wrapper}>
      <label htmlFor={`text-input-${name}`} className={styles.label}>
        {`${label}: `}
      </label>
      <input
        name={`text-input-${name}`}
        id={`text-input-${name}`}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        className={styles.input}
        type={type}
      />
    </div>
  );
};

export default React.memo(TextInput);
