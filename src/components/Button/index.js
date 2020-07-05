import React from "react";

import styles from "./Button.module.css";

const Button = ({ children, onClick, disabled }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${styles.styledButton} ${disabled && styles.disabled}`}
    >
      {children}
    </button>
  );
};

export default React.memo(Button);
