"use client";
import React from "react";
import ReactPaginate from "react-paginate";
import Image from "next/image";
import Next from "../images/arrow-right.png";
import Previous from "../images/arrow-left.png";

interface PaginationProps {
  currentPage: number;
  pageCount: number;
  onPageChange: (selectedItem: { selected: number }) => void;
}

const PaginationComponent: React.FC<PaginationProps> = ({
  currentPage,
  pageCount,
  onPageChange,
}) => {
  return (
    <div className="flex mt-4 pl-3.5">
      <ReactPaginate
        previousLabel={
          <div className="flex">
            <Image src={Previous} alt="Previous Img" className="mr-[8px]" />
            <span className="mr-[55px]">Previous</span>
          </div>
        }
        nextLabel={
          <div className="flex">
            <span className="ml-[55px]">Next</span>
            <Image src={Next} alt="Next Img" className="ml-[8px]" />
          </div>
        }
        breakLabel="..."
        breakClassName="border-gray-200 mx-4 w-[9px] h-[18px] grow-0 text-xs font-medium font-poppins text-center text-[#537087]"
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={onPageChange}
        containerClassName="flex"
        pageClassName="mx-2 grow-0 text-xs leading-[1.4rem] font-poppins text-center text-[#537087]"
        activeClassName="w-8 h-8 mt-[-0.4rem] p-1.5 grow-0 rounded bg-[#f1f3fd] grow-0 text-xs font-poppins text-center !text-[#4f68ec]"
        previousClassName="grow-0 text-sm font-poppins tracking-[normal] text-left text-[#537087]"
        nextClassName="grow-0 text-sm font-poppins  tracking-[normal] text-left text-[#537087]"
        disabledClassName="opacity-50 cursor-not-allowed"
        forcePage={currentPage - 1} // Adjust for zero-based index
      />
    </div>
  );
};

export default PaginationComponent;
