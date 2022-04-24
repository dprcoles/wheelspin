import React from "react";
import { BiReset } from "react-icons/bi";
import { ImSpinner4 } from "react-icons/im";
import { motion } from "framer-motion";
import Button from "../Button";
import { FADE_UP } from "../../animations/variants";

interface WinnerProps {
  winner: string;
  restart: () => void;
  reset: () => void;
}

const Winner: React.FC<WinnerProps> = ({ winner, restart, reset }) => {
  return (
    <motion.div variants={FADE_UP} className="px-16">
      <div className="mx-auto">
        <div>The winner is...</div>
        <div className="font-black text-7xl">{winner}</div>
      </div>
      <div className="flex pt-8 space-x-2">
        <Button onClick={restart}>
          <ImSpinner4 className="mr-2" />
          <span className="flex text-xl font-bold">Spin again</span>
        </Button>
        <Button onClick={reset}>
          <BiReset className="mr-2" />
          <span className="flex text-xl font-bold">Reset</span>
        </Button>
      </div>
    </motion.div>
  );
};

export default Winner;

