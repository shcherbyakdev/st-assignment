import React from "react";
import Radio from "components/Radio";
import { MODES } from "constants/index";

import styles from "./ModeSelector.module.css";

const ModeSelector = ({ mode, onChange }) => {
  const handleChangeMode = (value) => {
    onChange(value);
  };

  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>Please, select mode</p>
      <div className={styles.controlsWrapper}>
        <Radio
          name="base-mode"
          label="Base"
          value={MODES.BASE}
          checked={mode === MODES.BASE}
          onChange={handleChangeMode}
        />
        <Radio
          name="custom-1-mode"
          label="Custom 1"
          value={MODES.CUSTOM_1}
          checked={mode === MODES.CUSTOM_1}
          onChange={handleChangeMode}
        />
        <Radio
          name="custom-2-mode"
          label="Custom 2"
          value={MODES.CUSTOM_2}
          checked={mode === MODES.CUSTOM_2}
          onChange={handleChangeMode}
        />
      </div>
    </div>
  );
};

export default React.memo(ModeSelector);
