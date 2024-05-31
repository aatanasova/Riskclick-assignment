"use client";
import { FC, ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({ children, className = "", onClick }) => {
  return (
    <button
      className={`flex flex-row justify-center items-center gap-2 px-4 py-2.5 border rounded-lg ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
