import React, { useState, useEffect } from "react";
import Winner from "../Winner";

interface WheelProps {
  options: Array<string>;
}

const Wheel: React.FC<WheelProps> = ({ options }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [winner, setWinner] = useState<string>("");

  useEffect(() => {
    if (options.length === 0) {
      setSelectedIndex(null);
      setWinner("");
    }
  }, [options]);

  const spin = () => {
    const selected = Math.floor(Math.random() * options.length);
    setSelectedIndex(selected);

    setTimeout(() => setWinner(options[selected]), 4000);
  };

  const reset = () => {
    setSelectedIndex(null);
    setWinner("");
  };

  const restart = () => {
    reset();
    setTimeout(spin, 500);
  };

  const wheelVars = {
    "--nb-item": options.length,
    "--selected-item": selectedIndex,
  };
  const spinning = selectedIndex !== null ? "spinning" : "";

  return (
    <>
      <div className="wheel-container">
        <button
          className={`wheel ${spinning}`}
          style={wheelVars}
          onClick={selectedIndex !== null ? restart : spin}
          disabled={options.length === 0}
        >
          {options.map((option, index) => (
            <div
              className="wheel-item"
              key={index}
              style={{ "--item-nb": index }}
            >
              {option}
            </div>
          ))}
        </button>
      </div>
      {selectedIndex === null && (
        <div className="flex pt-8">
          <div className="mx-auto">
            <button
              className="flex md:w-fit w-full align-middle items-center p-8 rounded-md border-2 border-dark-background bg-dark-primary hover:bg-dark-secondary disabled:hover:bg-dark-primary shadow-md disabled:opacity-50 ease-linear transition-all duration-150"
              onClick={selectedIndex !== null ? restart : spin}
              disabled={options.length === 0}
            >
              <span className="text-4xl font-bold">Click to Spin!</span>
            </button>
          </div>
        </div>
      )}
      <div className="pt-8">
        {winner && <Winner winner={winner} reset={reset} restart={restart} />}
      </div>
    </>
  );
};

export default Wheel;

