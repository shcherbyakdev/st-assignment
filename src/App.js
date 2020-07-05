import React, { useState, useCallback } from "react";
import Box from "components/Box";
import ModeSelector from "components/ModeSelector";
import Parameters from "components/Parameters";
import Button from "components/Button";
import ResultInfo from "components/ResultInfo";
import { MODES } from "constants/index";
import { Base, CustomTwo, CustomOne } from "logic/index";
import "./App.css";

function App() {
  const [selectedMode, setSelectedMode] = useState(null);
  const [a, setA] = useState(null);
  const [b, setB] = useState(null);
  const [c, setC] = useState(null);
  const [d, setD] = useState("");
  const [e, setE] = useState("");
  const [f, setF] = useState("");
  const [result, setResult] = useState(null);

  // the button is enabled only when all fields are filled
  const isEnabledButton = a !== null && b !== null && c !== null && d && e && f;

  const handleAValueChange = (value) => {
    const isPublished = value === "true";
    setA(isPublished);
    setResult(null);
  };

  const handleBValueChange = (value) => {
    const isPublished = value === "true";
    setB(isPublished);
    setResult(null);
  };

  const handleCValueChange = (value) => {
    const isPublished = value === "true";
    setC(isPublished);
    setResult(null);
  };

  const handleDValueChange = (value) => {
    setD(value);
    setResult(null);
  };

  const handleEValueChange = (value) => {
    setE(value);
    setResult(null);
  };

  const handleFValueChange = (value) => {
    setF(value);
    setResult(null);
  };

  const handleResultClick = useCallback(() => {
    if (selectedMode === MODES.BASE) {
      const base = new Base(a, b, c, Number(d), Number(e), Number(f));
      setResult(base.getResult());
    }

    if (selectedMode === MODES.CUSTOM_1) {
      const customOne = new CustomOne(a, b, c, Number(d), Number(e), Number(f));
      setResult(customOne.getResult());
    }

    if (selectedMode === MODES.CUSTOM_2) {
      const customTwo = new CustomTwo(a, b, c, Number(d), Number(e), Number(f));
      setResult(customTwo.getResult());
    }
  }, [selectedMode, a, b, c, d, e, f]);

  return (
    <div className="app-wrapper">
      <Box>
        <ModeSelector mode={selectedMode} onChange={setSelectedMode} />
        <Parameters
          aValue={a}
          bValue={b}
          cValue={c}
          handleAValueChange={handleAValueChange}
          handleBValueChange={handleBValueChange}
          handleCValueChange={handleCValueChange}
          handleDValueChange={handleDValueChange}
          handleEValueChange={handleEValueChange}
          handleFValueChange={handleFValueChange}
        />

        {result && <ResultInfo result={result} />}

        <Button disabled={!isEnabledButton} onClick={handleResultClick}>
          Get Result
        </Button>
      </Box>
    </div>
  );
}

export default App;
