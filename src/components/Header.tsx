import Image from "next/image";
import MessageCircle from "../images/message-circle.png";

const Header = () => {
  return (
    <div className="flex pb-[10px] font-poppins">
      <div className="float-left w-[100%]">
        <h3 className="w-[90%] h-8 grow-0 text-2xl font-medium leading-[1.33] tracking-[normal] text-left text-[#334d62] pt-[30px] pb-[40px]">
          Developer
        </h3>
        <h6 className="w-[90%] h-5 grow-0 text-sm font-medium leading-[1.43] tracking-[normal] text-left text-[#8ca0af]">
          Project
        </h6>
      </div>
      <div className="float-right w-12 h-12 mt-[30px] grow-0 flex flex-row justify-center items-center gap-2 shadow-[0_1px_2px_0_rgba(16,24,40,0.05)] bg-white p-3.5 rounded-lg border-[solid] border-[#d0d5dd] border-[1px]">
        <Image src={MessageCircle} alt="Message" />
      </div>
    </div>
  );
};

export default Header;
