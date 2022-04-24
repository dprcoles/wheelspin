import React from "react";
import { MdOutlineRemoveCircleOutline } from "react-icons/md";
import Button from "../Button";

interface OptionProps {
  option: string;
  removeOption: (option: string) => void;
}

const Option: React.FC<OptionProps> = ({ option, removeOption }) => {
  return (
    <div className="p-2 grid grid-flow-row grid-cols-2 items-center">
      {option}
      <div className="px-4">
        <Button onClick={() => removeOption(option)}>
          <MdOutlineRemoveCircleOutline className="mr-2" /> Remove
        </Button>
      </div>
    </div>
  );
};

export default Option;

