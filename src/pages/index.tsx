import React, { useState } from "react";
import { TiArrowShuffle } from "react-icons/ti";
import { ImBin } from "react-icons/im";
import AddOption from "../components/AddOption";
import Button from "../components/Button";
import Option from "../components/Option";
import Wheel from "../components/Wheel";
import Winner from "../components/Winner";
import Title from "../components/Title";

const IndexPage = () => {
  const [options, setOptions] = useState<Array<string>>([]);

  const addOption = (option: string) => setOptions([...options, option]);

  const removeOption = (option: string) =>
    setOptions([...options].filter(x => x !== option));

  const clearOptions = () => setOptions([]);

  const shuffleOptions = () =>
    setOptions([...options].sort(() => Math.random() - 0.5));

  return (
    <div>
      <div className="grid grid-flow-row md:grid-cols-2">
        <div className="md:hidden p-4 text-center">
          <Title />
        </div>
        <div className="md:p-16 p-2">
          <Wheel options={options} />
        </div>
        <div className="md:p-16 px-4">
          <div className="hidden md:block">
            <Title />
          </div>
          <div className="flex space-x-2 p-2">
            <Button onClick={clearOptions}>
              <ImBin className="mr-2" /> Clear all
            </Button>
            <Button onClick={shuffleOptions}>
              <TiArrowShuffle className="mr-2" /> Shuffle
            </Button>
          </div>
          <div>
            {options.map((option, i) => (
              <div className="pl-1" key={`option-${i}`}>
                <Option option={option} removeOption={removeOption} />
              </div>
            ))}
          </div>
          <div>
            <AddOption addOption={addOption} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;

