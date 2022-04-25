import React, { useState } from "react";
import { MdOutlineContentPaste } from "react-icons/md";
import Button from "../Button";
import ImportModal from "./ImportModal";

interface ImportProps {
  setOptions: (options: Array<string>) => void;
}

const Import: React.FC<ImportProps> = ({ setOptions }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleSubmitInput = (input: string) => {
    const parsedInput = input.trim().split(/[\s,]+/);
    setIsModalOpen(false);
    setOptions(parsedInput);
  };

  return (
    <>
      <ImportModal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        submitInput={handleSubmitInput}
      />
      <Button onClick={() => setIsModalOpen(true)}>
        <MdOutlineContentPaste className="mr-2" /> Import
      </Button>
    </>
  );
};

export default Import;

