"use client";
import { FC } from "react";

interface InputProps {
  type: string;
  value: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const Input: FC<InputProps> = ({
  type,
  value,
  placeholder,
  onChange,
  className = "",
}) => {
  return (
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className={`px-4 py-2 border rounded-md ${className}`}
    />
  );
};

export default Input;
