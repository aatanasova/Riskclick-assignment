"use client";
import React from "react";
import Image from "next/image";
import Sort from "../../images/arrow-down.png";
import Column from "../UI/Column";
import { useInterventionContext } from "@/context/InterventionContext";

const InterventionTableHeader: React.FC = () => {
  const { sort } = useInterventionContext();

  return (
    <thead className="h-12 self-stretch grow-0 flex-row justify-start items-center gap-3 bg-gray-50 px-6 py-3 border-[solid] border-[#eaecf0]">
      <tr>
        <Column
          colSpan={3}
          content="Title"
          isHeader
          className="pl-6 font-medium"
        />
        <Column
          colSpan={2}
          className="font-medium"
          content={
            <div className="inline-flex">
              Date
              <Image
                src={Sort}
                alt="Sort"
                className="ml-[7.5px] cursor-pointer"
                onClick={() => sort("issued-year", "asc")}
              />
            </div>
          }
          isHeader
        />
        <Column
          colSpan={2}
          className="font-medium"
          content={
            <div className="inline-flex">
              Document
              <Image src={Sort} alt="Sort" className="ml-[7.5px]" />
            </div>
          }
          isHeader
        />
        <Column
          colSpan={2}
          className="font-medium"
          content={
            <div className="inline-flex">
              Topic
              <Image src={Sort} alt="Sort" className="ml-[7.5px]" />
            </div>
          }
          isHeader
        />
        <Column
          colSpan={2}
          className="font-medium"
          content={
            <div className="inline-flex">
              Status
              <Image src={Sort} alt="Sort" className="ml-[7.5px]" />
            </div>
          }
          isHeader
        />
        <Column colSpan={1} content="" isHeader className="font-medium" />
      </tr>
    </thead>
  );
};

export default InterventionTableHeader;
