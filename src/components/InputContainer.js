import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const InputContainer = () => {
  const navigate = useNavigate();

  const onSizemdIconLeftTypePrimaClick = useCallback(() => {
    navigate("/uploaded");
  }, [navigate]);

  return (
    <section className="w-[328px] rounded-3xs bg-light-gohan shadow-[4px_4px_15px_rgba(0,_0,_0,_0.04)] flex flex-col items-center justify-start p-4 box-border gap-[16px] max-w-full text-center text-base text-dark-trunks font-paragraph-ui-type-text-md-s">
      <div className="rounded-lg flex flex-col items-center justify-start pt-[91px] pb-[51px] pr-[73px] pl-[72px] gap-[16px] z-[1] border-[1px] border-dashed border-light-beerus-hover mq450:pl-5 mq450:pr-5 mq450:box-border">
        <img
          className="w-9 h-9 relative"
          loading="eager"
          alt=""
          src="/frame-7682.svg"
        />
        <div className="relative leading-[24px]">upload-template.xlsx</div>
        <div className="relative text-sm leading-[24px] text-supportive-dodoria-100">
          Remove
        </div>
        <div className="w-[296px] relative rounded-lg box-border h-[258px] hidden border-[1px] border-dashed border-light-beerus-hover" />
      </div>
      <div
        className="self-stretch h-[46px] rounded-lg bg-mediumslateblue-300 overflow-hidden shrink-0 flex flex-row items-center justify-center py-2 pr-4 pl-2 box-border cursor-pointer"
        onClick={onSizemdIconLeftTypePrimaClick}
      >
        <div className="h-[19px] w-[19px] relative rounded-81xl box-border border-[2px] border-solid border-light-gohan" />
      </div>
    </section>
  );
};

export default InputContainer;
