const TableDemo = () => {
  return (
    <div className="h-[419px] rounded-lg bg-background overflow-x-auto shrink-0 flex flex-col items-end justify-start pt-3.5 pb-[26px] pr-0 pl-6 box-border gap-[12px] text-left text-sm text-light-popo font-paragraph-ui-type-text-md-s mq450:h-auto">
      <div className="w-72 flex flex-row items-start justify-start py-0 px-0 box-border shrink-0">
        <div className="w-[849px] flex flex-row items-start justify-start max-w-[295%] shrink-0">
          <div className="h-[89px] w-[849px] relative max-w-full mq450:h-auto mq450:min-h-[89]">
            <div className="absolute top-[0px] left-[0px] flex flex-col items-start justify-start gap-[29px]">
              <div className="relative leading-[24px] font-semibold">
                Sl No.
              </div>
              <div className="w-6 relative text-xs leading-[24px] flex items-center">
                01
              </div>
            </div>
            <div className="absolute top-[0px] left-[72px] w-[777px] flex flex-col items-start justify-start gap-[19px] min-h-[117px] max-w-full">
              <div className="w-72 flex flex-row items-start justify-start py-0 px-[41px] box-border">
                <div className="flex-1 flex flex-row items-start justify-between gap-[20px]">
                  <div className="w-[43px] relative leading-[24px] font-semibold flex items-center shrink-0">
                    Links
                  </div>
                  <div className="w-[47px] relative leading-[24px] font-semibold flex items-center shrink-0">
                    Prefix
                  </div>
                </div>
              </div>
              <div className="self-stretch rounded-lg bg-light-gohan flex flex-row items-center justify-start py-[9px] pr-4 pl-[41px] gap-[38px] text-xs mq450:flex-wrap">
                <a
                  className="w-[116px] relative [text-decoration:underline] leading-[24px] text-dodgerblue-100 flex items-center shrink-0"
                  href="https://www.google.com"
                  target="_blank"
                >
                  www.google.com
                </a>
                <div className="w-[70px] relative leading-[24px] flex items-center">
                  prefixsample
                </div>
                <div className="h-7 w-[150px] rounded-lg bg-light-gohan box-border overflow-hidden shrink-0 flex flex-row items-center justify-start py-0.5 pr-[60px] pl-7 relative gap-[8px] border-[1px] border-solid border-light-beerus-beerus">
                  <div className="self-stretch flex-1 relative leading-[24px] flex items-center">
                    Select Tags
                  </div>
                  <div className="my-0 mx-[!important] absolute top-[calc(50%_-_12px)] right-[28px] rounded-lg overflow-hidden flex flex-row items-center justify-start p-1">
                    <img
                      className="h-4 w-4 relative"
                      alt=""
                      src="/controls-5.svg"
                    />
                  </div>
                </div>
                <div className="flex-1 flex flex-row flex-wrap items-start justify-start gap-[8px] min-w-[175px] text-center text-3xs text-light-gohan">
                  <div className="h-6 flex-1 rounded bg-mediumslateblue-300 overflow-hidden flex flex-row items-center justify-start py-1 pr-6 pl-2 box-border relative gap-[4px] min-w-[24px] whitespace-nowrap">
                    <div className="self-stretch flex-1 relative tracking-[0.5px] leading-[16px] uppercase font-semibold flex items-center justify-center">
                      TAG 1
                    </div>
                    <img
                      className="h-4 w-4 absolute my-0 mx-[!important] top-[calc(50%_-_8px)] right-[4px]"
                      alt=""
                      src="/icon-1.svg"
                    />
                  </div>
                  <div className="h-6 flex-1 rounded bg-mediumslateblue-300 overflow-hidden flex flex-row items-center justify-start py-1 pr-6 pl-2 box-border relative gap-[4px] min-w-[25px] whitespace-nowrap">
                    <div className="self-stretch flex-1 relative tracking-[0.5px] leading-[16px] uppercase font-semibold flex items-center justify-center">
                      TAG 2
                    </div>
                    <img
                      className="h-4 w-4 absolute my-0 mx-[!important] top-[calc(50%_-_8px)] right-[4px]"
                      alt=""
                      src="/icon-1.svg"
                    />
                  </div>
                  <div className="h-6 flex-1 rounded bg-mediumslateblue-300 overflow-hidden flex flex-row items-center justify-start py-1 pr-6 pl-2 box-border relative gap-[4px] min-w-[25px] whitespace-nowrap">
                    <div className="self-stretch flex-1 relative tracking-[0.5px] leading-[16px] uppercase font-semibold flex items-center justify-center">
                      TAG 3
                    </div>
                    <img
                      className="h-4 w-4 absolute my-0 mx-[!important] top-[calc(50%_-_8px)] right-[4px]"
                      alt=""
                      src="/icon-1.svg"
                    />
                  </div>
                  <div className="h-6 flex-1 rounded bg-mediumslateblue-300 overflow-hidden flex flex-row items-center justify-start py-1 pr-6 pl-2 box-border relative gap-[4px] min-w-[25px] whitespace-nowrap">
                    <div className="self-stretch flex-1 relative tracking-[0.5px] leading-[16px] uppercase font-semibold flex items-center justify-center">
                      TAG 4
                    </div>
                    <img
                      className="h-4 w-4 absolute my-0 mx-[!important] top-[calc(50%_-_8px)] right-[4px]"
                      alt=""
                      src="/icon-1.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-[0px] left-[385px] leading-[24px] font-semibold flex items-center w-[65px]">
              Add Tags
            </div>
          </div>
          <div className="w-[90px] relative leading-[24px] font-semibold flex items-center shrink-0 ml-[-286px]">
            Selected Tags
          </div>
        </div>
      </div>
      <div className="w-6 h-6 hidden" />
      <div className="w-6 h-6 hidden" />
      <div className="w-6 h-6 hidden" />
      <div className="w-6 h-6 hidden" />
      <div className="w-[287px] flex flex-row items-start justify-start py-0 px-0 box-border shrink-0 text-xs">
        <div className="w-[848px] flex flex-row items-center justify-start gap-[47px] max-w-[295%] shrink-0 mq450:flex-wrap mq450:gap-[23px]">
          <div className="w-6 flex flex-col items-start justify-start py-5 px-0 box-border gap-[34px]">
            <div className="relative leading-[24px] z-[1]">02</div>
            <div className="self-stretch relative leading-[24px]">03</div>
            <div className="self-stretch relative leading-[24px]">04</div>
            <div className="relative leading-[24px] z-[1]">05</div>
            <div className="relative leading-[24px] z-[1]">06</div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[12px] min-w-[505px] min-h-[306px] max-w-full mq450:min-h-[auto] mq625:min-w-full">
            <div className="self-stretch rounded-lg bg-light-gohan flex flex-row items-center justify-start py-[9px] pr-4 pl-[41px] gap-[38px] mq450:flex-wrap mq450:gap-[19px]">
              <a
                className="w-[116px] relative [text-decoration:underline] leading-[24px] text-dodgerblue-100 flex items-center shrink-0"
                href="https://www.google.com"
                target="_blank"
              >
                www.google.com
              </a>
              <div className="w-[70px] relative leading-[24px] flex items-center">
                prefixsample
              </div>
              <div className="h-7 w-[150px] rounded-lg bg-light-gohan box-border overflow-hidden shrink-0 flex flex-row items-center justify-start py-0.5 pr-[60px] pl-7 relative gap-[8px] border-[1px] border-solid border-light-beerus-beerus">
                <div className="self-stretch flex-1 relative leading-[24px] flex items-center">
                  Select Tags
                </div>
                <div className="my-0 mx-[!important] absolute top-[calc(50%_-_12px)] right-[28px] rounded-lg overflow-hidden flex flex-row items-center justify-start p-1">
                  <img
                    className="h-4 w-4 relative"
                    alt=""
                    src="/controls-5.svg"
                  />
                </div>
              </div>
              <div className="flex-1 flex flex-row flex-wrap items-start justify-start gap-[8px] min-w-[122px] text-center text-3xs text-light-gohan">
                <div className="h-6 w-[60px] rounded bg-mediumslateblue-300 overflow-hidden shrink-0 flex flex-row items-center justify-start py-1 pr-6 pl-2 box-border relative gap-[4px] whitespace-nowrap">
                  <div className="self-stretch flex-1 relative tracking-[0.5px] leading-[16px] uppercase font-semibold flex items-center justify-center">
                    TAG 1
                  </div>
                  <img
                    className="h-4 w-4 absolute my-0 mx-[!important] top-[calc(50%_-_8px)] right-[4px]"
                    alt=""
                    src="/icon-1.svg"
                  />
                </div>
                <div className="h-6 w-[62px] rounded bg-mediumslateblue-300 overflow-hidden shrink-0 flex flex-row items-center justify-start py-1 pr-6 pl-2 box-border relative gap-[4px] whitespace-nowrap">
                  <div className="self-stretch flex-1 relative tracking-[0.5px] leading-[16px] uppercase font-semibold flex items-center justify-center">
                    TAG 2
                  </div>
                  <img
                    className="h-4 w-4 absolute my-0 mx-[!important] top-[calc(50%_-_8px)] right-[4px]"
                    alt=""
                    src="/icon-1.svg"
                  />
                </div>
              </div>
            </div>
            <div className="self-stretch rounded-lg bg-light-gohan flex flex-row items-center justify-start py-[9px] pr-4 pl-[41px] gap-[38px] mq450:flex-wrap mq450:gap-[19px]">
              <a
                className="w-[116px] relative [text-decoration:underline] leading-[24px] text-dodgerblue-100 flex items-center shrink-0"
                href="https://www.google.com"
                target="_blank"
              >
                www.google.com
              </a>
              <div className="w-[70px] relative leading-[24px] flex items-center">
                prefixsample
              </div>
              <div className="h-7 w-[150px] rounded-lg bg-light-gohan box-border overflow-hidden shrink-0 flex flex-row items-center justify-start py-0.5 pr-[60px] pl-7 relative gap-[8px] border-[1px] border-solid border-light-beerus-beerus">
                <div className="self-stretch flex-1 relative leading-[24px] flex items-center">
                  Select Tags
                </div>
                <div className="my-0 mx-[!important] absolute top-[calc(50%_-_12px)] right-[28px] rounded-lg overflow-hidden flex flex-row items-center justify-start p-1">
                  <img
                    className="h-4 w-4 relative"
                    alt=""
                    src="/controls-5.svg"
                  />
                </div>
              </div>
              <div className="flex-1 flex flex-row flex-wrap items-start justify-start gap-[8px] min-w-[175px] text-center text-3xs text-light-gohan">
                <div className="h-6 flex-1 rounded bg-mediumslateblue-300 overflow-hidden flex flex-row items-center justify-start py-1 pr-6 pl-2 box-border relative gap-[4px] min-w-[24px] whitespace-nowrap">
                  <div className="self-stretch flex-1 relative tracking-[0.5px] leading-[16px] uppercase font-semibold flex items-center justify-center">
                    TAG 1
                  </div>
                  <img
                    className="h-4 w-4 absolute my-0 mx-[!important] top-[calc(50%_-_8px)] right-[4px]"
                    alt=""
                    src="/icon-1.svg"
                  />
                </div>
                <div className="h-6 flex-1 rounded bg-mediumslateblue-300 overflow-hidden flex flex-row items-center justify-start py-1 pr-6 pl-2 box-border relative gap-[4px] min-w-[25px] whitespace-nowrap">
                  <div className="self-stretch flex-1 relative tracking-[0.5px] leading-[16px] uppercase font-semibold flex items-center justify-center">
                    TAG 2
                  </div>
                  <img
                    className="h-4 w-4 absolute my-0 mx-[!important] top-[calc(50%_-_8px)] right-[4px]"
                    alt=""
                    src="/icon-1.svg"
                  />
                </div>
                <div className="h-6 flex-1 rounded bg-mediumslateblue-300 overflow-hidden flex flex-row items-center justify-start py-1 pr-6 pl-2 box-border relative gap-[4px] min-w-[25px] whitespace-nowrap">
                  <div className="self-stretch flex-1 relative tracking-[0.5px] leading-[16px] uppercase font-semibold flex items-center justify-center">
                    TAG 3
                  </div>
                  <img
                    className="h-4 w-4 absolute my-0 mx-[!important] top-[calc(50%_-_8px)] right-[4px]"
                    alt=""
                    src="/icon-1.svg"
                  />
                </div>
                <div className="h-6 flex-1 rounded bg-mediumslateblue-300 overflow-hidden flex flex-row items-center justify-start py-1 pr-6 pl-2 box-border relative gap-[4px] min-w-[25px] whitespace-nowrap">
                  <div className="self-stretch flex-1 relative tracking-[0.5px] leading-[16px] uppercase font-semibold flex items-center justify-center">
                    TAG 4
                  </div>
                  <img
                    className="h-4 w-4 absolute my-0 mx-[!important] top-[calc(50%_-_8px)] right-[4px]"
                    alt=""
                    src="/icon-1.svg"
                  />
                </div>
              </div>
            </div>
            <div className="self-stretch rounded-lg bg-light-gohan flex flex-row items-center justify-start py-[9px] pr-4 pl-[41px] gap-[38px] mq450:flex-wrap mq450:gap-[19px]">
              <a
                className="w-[116px] relative [text-decoration:underline] leading-[24px] text-dodgerblue-100 flex items-center shrink-0"
                href="https://www.google.com"
                target="_blank"
              >
                www.google.com
              </a>
              <div className="w-[70px] relative leading-[24px] flex items-center">
                prefixsample
              </div>
              <div className="h-7 w-[150px] rounded-lg bg-light-gohan box-border overflow-hidden shrink-0 flex flex-row items-center justify-start py-0.5 pr-[60px] pl-7 relative gap-[8px] border-[1px] border-solid border-light-beerus-beerus">
                <div className="self-stretch flex-1 relative leading-[24px] flex items-center">
                  Select Tags
                </div>
                <div className="my-0 mx-[!important] absolute top-[calc(50%_-_12px)] right-[28px] rounded-lg overflow-hidden flex flex-row items-center justify-start p-1">
                  <img
                    className="h-4 w-4 relative"
                    alt=""
                    src="/controls-5.svg"
                  />
                </div>
              </div>
              <div className="flex-1 flex flex-row flex-wrap items-start justify-start gap-[8px] min-w-[122px] text-center text-3xs text-light-gohan">
                <div className="h-6 w-[60px] rounded bg-mediumslateblue-300 overflow-hidden shrink-0 flex flex-row items-center justify-start py-1 pr-6 pl-2 box-border relative gap-[4px] whitespace-nowrap">
                  <div className="self-stretch flex-1 relative tracking-[0.5px] leading-[16px] uppercase font-semibold flex items-center justify-center">
                    TAG 1
                  </div>
                  <img
                    className="h-4 w-4 absolute my-0 mx-[!important] top-[calc(50%_-_8px)] right-[4px]"
                    alt=""
                    src="/icon-1.svg"
                  />
                </div>
                <div className="h-6 w-[62px] rounded bg-mediumslateblue-300 overflow-hidden shrink-0 flex flex-row items-center justify-start py-1 pr-6 pl-2 box-border relative gap-[4px] whitespace-nowrap">
                  <div className="self-stretch flex-1 relative tracking-[0.5px] leading-[16px] uppercase font-semibold flex items-center justify-center">
                    TAG 2
                  </div>
                  <img
                    className="h-4 w-4 absolute my-0 mx-[!important] top-[calc(50%_-_8px)] right-[4px]"
                    alt=""
                    src="/icon-1.svg"
                  />
                </div>
              </div>
            </div>
            <div className="self-stretch rounded-lg bg-light-gohan flex flex-row items-center justify-start py-[9px] pr-4 pl-[41px] gap-[38px] mq450:flex-wrap mq450:gap-[19px]">
              <a
                className="w-[116px] relative [text-decoration:underline] leading-[24px] text-dodgerblue-100 flex items-center shrink-0"
                href="https://www.google.com"
                target="_blank"
              >
                www.google.com
              </a>
              <div className="w-[70px] relative leading-[24px] flex items-center">
                prefixsample
              </div>
              <div className="h-7 w-[150px] rounded-lg bg-light-gohan box-border overflow-hidden shrink-0 flex flex-row items-center justify-start py-0.5 pr-[60px] pl-7 relative gap-[8px] border-[1px] border-solid border-light-beerus-beerus">
                <div className="self-stretch flex-1 relative leading-[24px] flex items-center">
                  Select Tags
                </div>
                <div className="my-0 mx-[!important] absolute top-[calc(50%_-_12px)] right-[28px] rounded-lg overflow-hidden flex flex-row items-center justify-start p-1">
                  <img
                    className="h-4 w-4 relative"
                    alt=""
                    src="/controls-5.svg"
                  />
                </div>
              </div>
              <div className="flex-1 flex flex-row flex-wrap items-start justify-start gap-[8px] min-w-[175px] text-center text-3xs text-light-gohan">
                <div className="h-6 w-[60px] rounded bg-mediumslateblue-300 overflow-hidden shrink-0 flex flex-row items-center justify-start py-1 pr-6 pl-2 box-border relative gap-[4px] whitespace-nowrap">
                  <div className="self-stretch flex-1 relative tracking-[0.5px] leading-[16px] uppercase font-semibold flex items-center justify-center">
                    TAG 1
                  </div>
                  <img
                    className="h-4 w-4 absolute my-0 mx-[!important] top-[calc(50%_-_8px)] right-[4px]"
                    alt=""
                    src="/icon-1.svg"
                  />
                </div>
                <div className="h-6 w-[62px] rounded bg-mediumslateblue-300 overflow-hidden shrink-0 flex flex-row items-center justify-start py-1 pr-6 pl-2 box-border relative gap-[4px] whitespace-nowrap">
                  <div className="self-stretch flex-1 relative tracking-[0.5px] leading-[16px] uppercase font-semibold flex items-center justify-center">
                    TAG 2
                  </div>
                  <img
                    className="h-4 w-4 absolute my-0 mx-[!important] top-[calc(50%_-_8px)] right-[4px]"
                    alt=""
                    src="/icon-1.svg"
                  />
                </div>
                <div className="h-6 w-[62px] rounded bg-mediumslateblue-300 overflow-hidden shrink-0 flex flex-row items-center justify-start py-1 pr-6 pl-2 box-border relative gap-[4px] whitespace-nowrap">
                  <div className="self-stretch flex-1 relative tracking-[0.5px] leading-[16px] uppercase font-semibold flex items-center justify-center">
                    TAG 3
                  </div>
                  <img
                    className="h-4 w-4 absolute my-0 mx-[!important] top-[calc(50%_-_8px)] right-[4px]"
                    alt=""
                    src="/icon-1.svg"
                  />
                </div>
              </div>
            </div>
            <div className="self-stretch rounded-lg bg-light-gohan flex flex-row items-center justify-start py-[9px] pr-4 pl-[41px] gap-[38px] mq450:flex-wrap mq450:gap-[19px]">
              <a
                className="w-[116px] relative [text-decoration:underline] leading-[24px] text-dodgerblue-100 flex items-center shrink-0"
                href="https://www.google.com"
                target="_blank"
              >
                www.google.com
              </a>
              <div className="w-[70px] relative leading-[24px] flex items-center">
                prefixsample
              </div>
              <div className="h-7 w-[150px] rounded-lg bg-light-gohan box-border overflow-hidden shrink-0 flex flex-row items-center justify-start py-0.5 pr-[60px] pl-7 relative gap-[8px] border-[1px] border-solid border-light-beerus-beerus">
                <div className="self-stretch flex-1 relative leading-[24px] flex items-center">
                  Select Tags
                </div>
                <div className="my-0 mx-[!important] absolute top-[calc(50%_-_12px)] right-[28px] rounded-lg overflow-hidden flex flex-row items-center justify-start p-1">
                  <img
                    className="h-4 w-4 relative"
                    alt=""
                    src="/controls-5.svg"
                  />
                </div>
              </div>
              <div className="flex-1 flex flex-row flex-wrap items-start justify-start gap-[8px] min-w-[175px] text-center text-3xs text-light-gohan">
                <div className="h-6 w-[60px] rounded bg-mediumslateblue-300 overflow-hidden shrink-0 flex flex-row items-center justify-start py-1 pr-6 pl-2 box-border relative gap-[4px] whitespace-nowrap">
                  <div className="self-stretch flex-1 relative tracking-[0.5px] leading-[16px] uppercase font-semibold flex items-center justify-center">
                    TAG 1
                  </div>
                  <img
                    className="h-4 w-4 absolute my-0 mx-[!important] top-[calc(50%_-_8px)] right-[4px]"
                    alt=""
                    src="/icon-1.svg"
                  />
                </div>
                <div className="h-6 w-[62px] rounded bg-mediumslateblue-300 overflow-hidden shrink-0 flex flex-row items-center justify-start py-1 pr-6 pl-2 box-border relative gap-[4px] whitespace-nowrap">
                  <div className="self-stretch flex-1 relative tracking-[0.5px] leading-[16px] uppercase font-semibold flex items-center justify-center">
                    TAG 2
                  </div>
                  <img
                    className="h-4 w-4 absolute my-0 mx-[!important] top-[calc(50%_-_8px)] right-[4px]"
                    alt=""
                    src="/icon-1.svg"
                  />
                </div>
                <div className="h-6 w-[62px] rounded bg-mediumslateblue-300 overflow-hidden shrink-0 flex flex-row items-center justify-start py-1 pr-6 pl-2 box-border relative gap-[4px] whitespace-nowrap">
                  <div className="self-stretch flex-1 relative tracking-[0.5px] leading-[16px] uppercase font-semibold flex items-center justify-center">
                    TAG 3
                  </div>
                  <img
                    className="h-4 w-4 absolute my-0 mx-[!important] top-[calc(50%_-_8px)] right-[4px]"
                    alt=""
                    src="/icon-1.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableDemo;
