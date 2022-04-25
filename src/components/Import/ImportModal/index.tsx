import React, { useState } from "react";

interface ImportModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  submitInput: (input: string) => void;
}

const ImportModal: React.FC<ImportModalProps> = ({
  isOpen,
  setIsOpen,
  submitInput,
}) => {
  const [value, setValue] = useState<string>("");
  const [isPasting, setIsPasting] = useState<boolean>();

  const handleSubmitInput = (input: string) => {
    submitInput(input);
    setIsOpen(false);
    setValue("");
  };

  return (
    <>
      {isOpen ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-dark-secondary outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-dark-secondary rounded-t">
                  <h3 className="text-3xl font-semibold">Import Options</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 opacity-25 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setIsOpen(false)}
                  >
                    <span>X</span>
                  </button>
                </div>
                <div className="px-5">
                  <p>Values can be comma, space or line separated.</p>
                </div>
                <div className="relative p-6 flex-auto">
                  <textarea
                    className="h-32 p-4 border-2 border-dark-secondary focus:border-blue-500 focus:outline-none w-full md:w-96 rounded-md bg-dark-primary"
                    value={value}
                    onChange={e => {
                      if (isPasting) {
                        handleSubmitInput(e.target.value);
                      } else {
                        setIsPasting(false);
                        setValue(e.target.value);
                      }
                    }}
                    onPaste={e => setIsPasting(true)}
                  />
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-dark-primary rounded-b">
                  <button
                    className="w-full bg-blue-500 text-white active:bg-blue-600 px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 disabled:opacity-25"
                    type="button"
                    onClick={() => handleSubmitInput(value)}
                    disabled={value.length === 0}
                  >
                    Paste or click here to import
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default ImportModal;

