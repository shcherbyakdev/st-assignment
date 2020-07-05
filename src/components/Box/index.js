import React from "react";

import styles from "./Box.module.css";

const Card = ({ children }) => {
  return <div className={styles.box}>{children}</div>;
};

export default Card;
