import React from "react";
import { BiReset } from "react-icons/bi";
import { ImSpinner4 } from "react-icons/im";
import Button from "../Button";

interface WinnerProps {
  winner: string;
  restart: () => void;
  reset: () => void;
}

const Winner: React.FC<WinnerProps> = ({ winner, restart, reset }) => {
  return (
    <div className="px-16">
      <div className="mx-auto">
        <div>The winner is...</div>
        <div className="font-black text-7xl">{winner}</div>
      </div>
      <div className="flex pt-8 space-x-2">
        <Button onClick={restart} fullWidth>
          <ImSpinner4 className="mr-2" />
          <span className="flex text-xl font-bold">Spin again</span>
        </Button>
        <Button onClick={reset} fullWidth>
          <BiReset className="mr-2" />
          <span className="flex text-xl font-bold">Reset</span>
        </Button>
      </div>
    </div>
  );
};

export default Winner;

