import React, { useState } from "react";
import { TiArrowShuffle } from "react-icons/ti";
import { ImBin } from "react-icons/im";
import { AnimatePresence, motion } from "framer-motion";
import AddOption from "../components/AddOption";
import Button from "../components/Button";
import Option from "../components/Option";
import Wheel from "../components/Wheel";
import Title from "../components/Title";
import Wrapper from "../components/Wrapper";
import { FADE_DOWN, FADE_IN } from "../animations/variants";
import { shuffle } from "../utils/helpers";
import { getOptionsFromStorage, setOptionsInStorage } from "../utils/storage";
import Import from "../components/Import";

const IndexPage = () => {
  const [options, setOptions] = useState<Array<string>>(
    getOptionsFromStorage()
  );

  const handleSetOptions = (newOptions: Array<string>) => {
    setOptionsInStorage(newOptions);
    setOptions(newOptions);
  };

  const addOption = (option: string) => {
    handleSetOptions([...options, option]);
  };

  const removeOption = (option: string) =>
    handleSetOptions([...options].filter(x => x !== option));

  const clearOptions = () => handleSetOptions([]);

  const shuffleOptions = () => handleSetOptions(shuffle([...options]));

  return (
    <Wrapper>
      <motion.div variants={FADE_IN}>
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
              <Button onClick={clearOptions} disabled={!options.length}>
                <ImBin className="mr-2" /> Clear all
              </Button>
              <Button onClick={shuffleOptions} disabled={!options.length}>
                <TiArrowShuffle className="mr-2" /> Shuffle
              </Button>
              <Import setOptions={handleSetOptions} />
            </div>
            <AnimatePresence>
              {options.map((option, i) => (
                <motion.div
                  className="pl-1"
                  key={`option-${i}`}
                  variants={FADE_DOWN}
                  exit={{ opacity: 0 }}
                >
                  <Option option={option} removeOption={removeOption} />
                </motion.div>
              ))}
            </AnimatePresence>
            <div>
              <AddOption addOption={addOption} />
            </div>
          </div>
        </div>
      </motion.div>
    </Wrapper>
  );
};

export default IndexPage;

