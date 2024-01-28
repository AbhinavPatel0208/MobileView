import FrameComponent from "./FrameComponent";

const FormWithChildAndInputsAndButto = () => {
  return (
    <form className="m-0 flex-1 flex flex-col items-center justify-start pt-0 px-0 pb-0 box-border gap-[26px] max-w-full">
      <div className="self-stretch h-[33px] flex flex-row items-start justify-start gap-[22px]">
        <button className="cursor-pointer [border:none] pt-[9px] px-4 pb-[7px] bg-[transparent] flex flex-row items-center justify-start relative gap-[9px]">
          <div className="h-full w-full absolute my-0 mx-[!important] top-[0.3px] right-[0.6px] bottom-[-0.2px] left-[0px]">
            <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-3xs bg-light-gohan" />
          </div>
          <img
            className="h-3 w-3 relative overflow-hidden shrink-0 object-cover z-[1]"
            alt=""
            src="/googleicon-1@2x.png"
          />
          <div className="relative text-3xs font-montserrat text-secondary-text text-center z-[1]">
            Sign in with Google
          </div>
        </button>
        <button className="cursor-pointer [border:none] py-[7px] px-5 bg-[transparent] self-stretch flex flex-row items-start justify-start relative gap-[9px]">
          <div className="h-full w-full absolute my-0 mx-[!important] top-[0.3px] right-[-0.8px] bottom-[-0.2px] left-[0.4px]">
            <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-3xs bg-light-gohan" />
          </div>
          <img
            className="h-[15.4px] w-[9.8px] relative overflow-hidden shrink-0 object-cover z-[1]"
            alt=""
            src="/apple-1@2x.png"
          />
          <div className="relative text-3xs font-montserrat text-secondary-text text-center z-[1]">
            Sign in with Apple
          </div>
        </button>
      </div>
      <FrameComponent />
      <div className="w-[242px] h-[57px] relative text-base font-lato text-center inline-block pl-5 pr-5">
        <p className="m-0 text-secondary-text">{`Don’t have an account? `}</p>
        <p className="m-0 text-link">&nbsp;</p>
        <p className="m-0 text-link">Register here</p>
      </div>
    </form>
  );
};

export default FormWithChildAndInputsAndButto;
