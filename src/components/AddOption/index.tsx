import React, { useState } from "react";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import Button from "../Button";

interface AddOptionProps {
  addOption: (option: string) => void;
}

const AddOption: React.FC<AddOptionProps> = ({ addOption }) => {
  const [value, setValue] = useState<string>("");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && value) {
      addOption(value);
      setValue("");
    }
  };

  const handleAddOnClick = (input: string) => {
    addOption(input);
    setValue("");
  };

  return (
    <div className="p-2 grid grid-flow-row grid-cols-2">
      <div>
        <input
          onKeyDown={e => handleKeyDown(e)}
          value={value}
          onChange={e => setValue(e.target.value)}
          placeholder="Enter an option..."
          className="bg-dark-secondary p-2 rounded-md w-full shadow-md border-2 border-dark-primary"
        />
      </div>
      <div className="px-4">
        <Button onClick={() => handleAddOnClick(value)}>
          <MdOutlineAddCircleOutline className="mr-2" />
          Add
        </Button>
      </div>
    </div>
  );
};

export default AddOption;

