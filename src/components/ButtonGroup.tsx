"use client";
import Button from "./UI/Button";

const ButtonGroup = () => {
  return (
    <div className="inline-flex font-poppins">
      <Button className="w-24 h-10 bg-blue-100 border-blue-200 rounded-tl-md rounded-bl-md text-blue-700">
        <span className="w-[68px] h-5 grow-0 text-sm font-semibold leading-[1.43] tracking-[normal] text-left text-[#4f68ec]">
          Guideline
        </span>
      </Button>
      <Button className="w-16 h-10 bg-white border-gray-300 text-gray-700">
        <span className="w-[31px] h-5 grow-0 text-sm font-medium leading-[1.43] tracking-[normal] text-left text-[#537087]">
          SOC
        </span>
      </Button>
      <Button className="w-36 h-10 bg-white border-gray-300 rounded-tr-md rounded-br-md text-gray-700">
        <span className="w-[114px] h-5 grow-0 text-sm font-medium not-italic leading-[1.43] tracking-[normal] text-left text-[#537087]">
          Reimbursement
        </span>
      </Button>
    </div>
  );
};

export default ButtonGroup;
