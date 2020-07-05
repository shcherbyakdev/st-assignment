import React from "react";

import { isFloat } from "utils";
import Radio from "components/Radio";
import TextInput from "components/TextInput";
import styles from "./Parameters.module.css";

const ParameterRadioItem = ({ value, handleChange, label, name }) => {
  return (
    <div className={styles.itemWrapper}>
      <span className={styles.label}>{`${label}: `} </span>
      <Radio
        name={`${name}-true`}
        label="True"
        value="true"
        checked={value === true}
        onChange={handleChange}
      />
      <Radio
        name={`${name}-false`}
        label="False"
        value="false"
        checked={value === false}
        onChange={handleChange}
      />
    </div>
  );
};

const Parameters = ({
  aValue,
  handleAValueChange,
  bValue,
  handleBValueChange,
  cValue,
  handleCValueChange,
  handleDValueChange,
  handleEValueChange,
  handleFValueChange,
  setValidationError,
  validationError,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <ParameterRadioItem
          label="A"
          name="a"
          value={aValue}
          handleChange={handleAValueChange}
        />
        <ParameterRadioItem
          label="B"
          name="b"
          value={bValue}
          handleChange={handleBValueChange}
        />
        <ParameterRadioItem
          label="C"
          name="c"
          value={cValue}
          handleChange={handleCValueChange}
        />
      </div>
      <div className={styles.right}>
        <TextInput
          type="number"
          name="d"
          placeholder="Type D..."
          onChange={handleDValueChange}
          label="D (float)"
          validateFn={isFloat}
          setValidationError={setValidationError}
          validationError={validationError}
        />
        <TextInput
          type="number"
          name="e"
          placeholder="Type E..."
          onChange={handleEValueChange}
          label="E (Int)"
          validateFn={Number.isInteger}
          setValidationError={setValidationError}
          validationError={validationError}
        />
        <TextInput
          type="number"
          name="f"
          placeholder="Type F..."
          onChange={handleFValueChange}
          label="F (Int)"
          validateFn={Number.isInteger}
          setValidationError={setValidationError}
          validationError={validationError}
        />
      </div>
    </div>
  );
};

export default React.memo(Parameters);
