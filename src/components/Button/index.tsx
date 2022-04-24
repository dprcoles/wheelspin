import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, disabled }) => {
  return (
    <button
      className="flex md:w-fit w-full align-middle items-center p-2 rounded-md border-2 border-dark-background bg-dark-primary hover:bg-dark-secondary disabled:hover:bg-dark-primary shadow-md disabled:opacity-50 ease-linear transition-all duration-150"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;

