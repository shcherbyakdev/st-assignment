import React from "react";

import styles from "./ResultInfo.module.css";

const ResultInfo = ({ result }) => {
  if (result?.error) {
    return (
      <div className={styles.wrapper}>
        <span className={styles.error}>{result.error}</span>
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <span>Result: </span>
      <span>H = {`'${result.H}'`}</span>
      <span>K = {result.K}</span>
    </div>
  );
};

export default React.memo(ResultInfo);
