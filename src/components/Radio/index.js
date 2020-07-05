import React from "react";

import styles from "./Radio.module.css";

const Radio = ({ label, value, onChange, checked, name }) => {
  const handleOptionChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div className={styles.wrapper}>
      <label htmlFor={`radio-${name}`} className={styles.label}>
        {label}
      </label>
      <input
        name={`radio-${name}`}
        id={`radio-${name}`}
        className={styles.input}
        type="radio"
        value={value}
        checked={checked}
        onChange={handleOptionChange}
      />
    </div>
  );
};

export default React.memo(Radio);
