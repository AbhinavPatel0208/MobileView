import { useState, useMemo, useCallback } from "react";
import Menu from "./Menu";
import PortalPopup from "./PortalPopup";

const Component1 = ({ propMargin }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const baseStyle = useMemo(() => {
    return {
      margin: propMargin,
    };
  }, [propMargin]);

  const openMenu = useCallback(() => {
    setMenuOpen(true);
  }, []);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  return (
    <>
      <header className="self-stretch [background:linear-gradient(180deg,_#fff,_#fff)] flex flex-row items-start justify-between p-5 box-border gap-[20px] top-[0] z-[99] sticky max-w-full text-left text-xl text-text font-nunito">
        <div className="h-20 w-[360px] relative [background:linear-gradient(180deg,_#fff,_#fff)] hidden max-w-full" />
        <div className="flex flex-row items-center justify-start py-0 pr-[18px] pl-0 gap-[11px]">
          <div className="h-10 w-10 relative">
            <div className="absolute top-[0px] left-[0px] w-full h-full">
              <div className="absolute top-[0px] left-[0px] rounded-31xl w-full h-full z-[1]" />
              <input
                className="m-0 absolute top-[14px] left-[0px] box-border w-4 h-3 cursor-pointer z-[2] border-[1.5px] border-solid border-light-popo"
                type="checkbox"
                onClick={openMenu}
              />
              <img
                className="absolute top-[calc(50%_-_13px)] right-[-18px] w-[26px] h-[26px] z-[3]"
                loading="eager"
                alt=""
                src="/subtract.svg"
              />
            </div>
            <img
              className="absolute top-[7px] left-[32px] w-[26px] h-[26px] hidden z-[2]"
              alt=""
              src="/subtract.svg"
            />
          </div>
          <h3
            className="m-0 h-[27px] relative text-inherit font-semibold font-inherit inline-block z-[1]"
            style={baseStyle}
          >
            Base
          </h3>
        </div>
        <div className="flex flex-row items-center justify-start gap-[18px]">
          <img
            className="h-[23px] w-[18px] relative z-[1]"
            alt=""
            src="/vector-11.svg"
          />
          <div className="h-10 w-10 relative">
            <div className="absolute top-[0px] left-[0px] rounded-31xl w-full h-full z-[1]" />
            <img
              className="absolute top-[5px] left-[9.6px] w-[30px] h-[30px] object-cover z-[2]"
              loading="eager"
              alt=""
              src="/mask-group@2x.png"
            />
          </div>
        </div>
      </header>
      {isMenuOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeMenu}
        >
          <Menu onClose={closeMenu} />
        </PortalPopup>
      )}
    </>
  );
};

export default Component1;
