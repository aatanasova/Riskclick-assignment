"use client";
import { FC } from 'react';

interface RadioButtonProps {
  label: string;
  value: string;
  name: string;
  checked?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const RadioButton: FC<RadioButtonProps> = ({ label, value, name, checked = false, onChange }) => {
  return (
    <label className="inline-flex items-center">
      <input
        type="radio"
        value={value}
        name={name}
        checked={checked}
        onChange={onChange}
        className="w-5 h-5 bg-white rounded-full border border-gray-300 checked:bg-[#5e75ee]"
      />
      {/* {checked && <div className="w-2 h-2 rounded-full bg-white"></div>} */}
      <span className="ml-2 text-sm font-medium text-gray-700">{label}</span>
    </label>
  );
};

export default RadioButton;