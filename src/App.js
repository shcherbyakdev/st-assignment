import React, { useState } from "react";
import Box from "components/Box";
import ModeSelector from "components/ModeSelector";
import Parameters from "components/Parameters";
import Button from "components/Button";
import "./App.css";

function App() {
  const [selectedMode, setSelectedMode] = useState(null);
  const [aValue, setAValue] = useState(null);
  const [bValue, setBValue] = useState(null);
  const [cValue, setCValue] = useState(null);
  const [dValue, setDValue] = useState("");
  const [eValue, setEValue] = useState("");
  const [fValue, setFValue] = useState("");
  // const [result, setResult] = useState(null);

  const handleAValueChange = (value) => {
    const isPublished = value === "true";
    setAValue(isPublished);
  };

  const handleBValueChange = (value) => {
    const isPublished = value === "true";
    setBValue(isPublished);
  };

  const handleCValueChange = (value) => {
    const isPublished = value === "true";
    setCValue(isPublished);
  };

  const handleDValueChange = (value) => {
    setDValue(value);
  };

  const handleEValueChange = (value) => {
    setEValue(value);
  };

  const handleFValueChange = (value) => {
    setFValue(value);
  };

  // const handleResultClick = () => {
  //   if (selectedMode === MODES.BASE) {
  //     const base = new Base(aValue, bValue, cValue, dValue, eValue, fValue);

  //     setResult(base.getResult());
  //   }

  //   if (selectedMode === MODES.CUSTOM_1) {
  //     const custom1 = new Custom1(
  //       aValue,
  //       bValue,
  //       cValue,
  //       dValue,
  //       eValue,
  //       fValue
  //     );

  //     setResult(custom1.getResult());
  //   }

  //   if (selectedMode === MODES.CUSTOM_2) {
  //     const custom2 = new Custom2(
  //       aValue,
  //       bValue,
  //       cValue,
  //       dValue,
  //       eValue,
  //       fValue
  //     );

  //     setResult(custom2.getResult());
  //   }
  // };

  return (
    <div className="app-wrapper">
      <Box>
        <ModeSelector mode={selectedMode} onChange={setSelectedMode} />
        <Parameters
          aValue={aValue}
          bValue={bValue}
          cValue={cValue}
          handleAValueChange={handleAValueChange}
          handleBValueChange={handleBValueChange}
          handleCValueChange={handleCValueChange}
          handleDValueChange={handleDValueChange}
          handleEValueChange={handleEValueChange}
          handleFValueChange={handleFValueChange}
        />
        <Button onClick={null}>Get Result</Button>
      </Box>
    </div>
  );
}

export default App;
