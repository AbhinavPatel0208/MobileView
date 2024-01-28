import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const FrameComponent = () => {
  const navigate = useNavigate();

  const onButtonPrimaryClick = useCallback(() => {
    navigate("/upload");
  }, [navigate]);

  return (
    <div className="self-stretch flex flex-col items-center justify-start pt-[33px] pb-[34px] pr-[25px] pl-[26px] relative gap-[23px] text-left text-base text-black font-lato mq450:pt-[21px] mq450:pb-[22px] mq450:box-border">
      <div className="w-full h-full absolute my-0 mx-[!important] top-[0.5px] right-[0px] bottom-[2.5px] left-[0px]">
        <div className="absolute h-full w-full top-[0.7px] right-[0px] bottom-[-0.7px] left-[0px] rounded-xl bg-light-gohan" />
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
        <div className="w-[111.6px] relative inline-block z-[1]">
          Email address
        </div>
        <div className="self-stretch flex flex-row items-center justify-start">
          <div className="h-[43.9px] w-[276.9px] relative z-[1]">
            <div className="absolute h-full w-full top-[-0.11%] right-[0.14%] bottom-[0.11%] left-[-0.14%] rounded-3xs bg-background" />
          </div>
          <input
            className="w-[139px] [border:none] [outline:none] font-lato text-base bg-[transparent] h-[19px] relative text-black text-left inline-block whitespace-nowrap z-[2] ml-[-264px]"
            placeholder="johndoe@gmail.com"
            type="text"
          />
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[13px]">
        <div className="relative z-[1]">Password</div>
        <div className="self-stretch rounded-3xs bg-field-color-darker flex flex-row items-center justify-start pt-[11px] px-[13px] pb-3 z-[1]">
          <div className="h-[43.9px] w-[276.9px] relative rounded-3xs bg-field-color-darker hidden" />
          <div className="w-[78px] flex flex-row items-start justify-start gap-[9px]">
            <input
              className="w-full [border:none] [outline:none] font-lato text-base bg-[transparent] h-[19px] flex-1 relative text-black text-left inline-block min-w-[41px] z-[2]"
              placeholder="••••••••"
              type="text"
            />
            <div className="h-[20.8px] w-px relative box-border z-[2] border-r-[1px] border-solid border-darkgray-200" />
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start text-link">
        <div className="w-[153.1px] relative inline-block shrink-0 z-[1]">
          Forgot password?
        </div>
      </div>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch h-11 relative">
        <div className="absolute top-[0.4px] left-[-0.4px] w-full h-full z-[1]">
          <div
            className="absolute h-full w-full top-[1.59%] right-[0%] bottom-[-1.59%] left-[0%] rounded-3xs bg-mediumslateblue-300 cursor-pointer"
            onClick={onButtonPrimaryClick}
          />
        </div>
        <b className="absolute top-[10.2px] left-[99.7px] text-base inline-block font-montserrat text-light-gohan text-center w-[77.7px] z-[2]">
          Sign In
        </b>
      </button>
    </div>
  );
};

export default FrameComponent;
