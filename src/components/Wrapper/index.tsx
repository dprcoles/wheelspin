import React from "react";
import { motion } from "framer-motion";

interface WrapperProps {
  children?: React.ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <div className="p-2 h-screen text-white">
      <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
        <main>{children}</main>
      </motion.div>
    </div>
  );
};

export default Wrapper;
