"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Intervention } from "../../types";
import Down from "../../images/chevron-down.png";
import Up from "../../images/chevron-up.png";
import Column from "../UI/Column";

interface InterventionTableRowProps {
  item: Intervention;
}

const InterventionTableRow: React.FC<InterventionTableRowProps> = ({
  item,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <tr key={item.id}>
        <Column colSpan={3} content={item.title} />
        <Column colSpan={2} content={item["issued-year"]} />
        <Column
          colSpan={2}
          content={
            <a
              href={item["web-link"]}
              target="_blank"
              rel="noopener noreferrer"
            >
              Link
            </a>
          }
        />
        <Column colSpan={2} content={item["Assigned Topics"].join(", ")} />
        <Column colSpan={2} content={item.status} />
        <Column
          colSpan={1}
          content={
            <Image
              src={isOpen ? Down : Up}
              alt="Down Or Up"
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-pointer"
            />
          }
        />
      </tr>
      {isOpen && (
        <tr>
          <Column
            colSpan={12}
            content={
              <>
                <b>Summary:</b>
                <br />
                {item.summary}
              </>
            }
            className="bg-gray-100"
          />
        </tr>
      )}
    </>
  );
};

export default InterventionTableRow;
