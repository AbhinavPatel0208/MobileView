import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ScheduleFrame from "./ScheduleFrame";

const Menu = ({ onClose }) => {
  const navigate = useNavigate();

  const onGroupButtonClick = useCallback(() => {
    navigate("/upload");
  }, [navigate]);

  return (
    <div className="w-[300px] rounded-tl-none rounded-tr-xl rounded-br-xl rounded-bl-none bg-light-gohan overflow-hidden flex flex-col items-center justify-start pt-7 pb-[260px] pr-[21px] pl-5 box-border gap-[39px] max-w-full max-h-full text-left text-base text-text font-nunito">
      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-1.5 text-xl">
        <div className="flex-1 flex flex-row items-center justify-start gap-[11px]">
          <div className="h-[26px] w-[26px] relative">
            <img
              className="absolute top-[-0.5px] left-[0px] w-[26px] h-[26px] hidden"
              alt=""
              src="/subtract.svg"
            />
            <img
              className="absolute top-[-0.5px] left-[0px] w-[26px] h-[26px] z-[1]"
              loading="eager"
              alt=""
              src="/subtract.svg"
            />
          </div>
          <div className="flex-1 flex flex-col items-start justify-start">
            <div className="h-[27px] relative font-semibold inline-block">
              Base
            </div>
          </div>
          <div className="h-10 w-10 relative">
            <div className="absolute top-[0px] left-[0px] rounded-31xl w-10 h-10" />
            <img
              className="absolute top-[9px] left-[8.4px] w-[22.6px] h-[22.6px] object-contain z-[1]"
              loading="eager"
              alt=""
              src="/plus.svg"
            />
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 px-[13px] text-darkgray-100">
        <div className="flex flex-row items-center justify-start gap-[14px]">
          <img
            className="h-6 w-6 relative object-cover min-h-[24px]"
            loading="eager"
            alt=""
            src="/iconlyboldcategory@2x.png"
          />
          <div className="h-[22px] relative font-semibold inline-block">
            Dashboard
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 px-[13px]">
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-start justify-start relative gap-[14px]"
          onClick={onGroupButtonClick}
        >
          <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0">
            <img
              className="w-6 h-[26.4px] relative object-cover"
              alt=""
              src="/iconlyboldchart@2x.png"
            />
          </div>
          <div className="relative text-base font-semibold font-nunito text-mediumslateblue-300 text-left">
            Upload
          </div>
          <div className="h-12 w-[105px] absolute my-0 mx-[!important] top-[-13px] left-[-33px] rounded-tl-none rounded-tr-8xs rounded-br-8xs rounded-bl-none [background:linear-gradient(90deg,_#aca9ff,_rgba(172,_169,_255,_0))] opacity-[0.2] z-[1]" />
        </button>
      </div>
      <div className="self-stretch h-6 flex flex-row items-start justify-start py-0 px-[13px] box-border">
        <div className="self-stretch flex flex-row items-start justify-start gap-[14px]">
          <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
            <img
              className="w-6 h-[16.4px] relative object-cover"
              loading="eager"
              alt=""
              src="/iconlyboldticket@2x.png"
            />
          </div>
          <div className="relative font-semibold inline-block h-[13.6px] opacity-[0.5]">
            Invoice
          </div>
        </div>
      </div>
      <ScheduleFrame />
    </div>
  );
};

export default Menu;
