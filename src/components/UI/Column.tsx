import React from "react";

interface ColumnProps {
  colSpan: number;
  content: React.ReactNode;
  isHeader?: boolean;
  className?: string;
}

const Column: React.FC<ColumnProps> = ({
  colSpan,
  content,
  isHeader = false,
  className = "",
}) => {
  const Component = isHeader ? "th" : "td";
  return (
    <Component
      colSpan={colSpan}
      className={`border px-4 py-2 h-[18px] grow-0 text-xs font-poppins leading-normal tracking-[normal] text-left text-[#537087] ${className}`}
    >
      {content}
    </Component>
  );
};

export default Column;
