import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type FrameComponent1Type = {
  inputField?: string;
  inputTextPlaceholder?: string;

  /** Style props */
  helperTextWidth?: CSSProperties["width"];
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({
  inputField,
  inputTextPlaceholder,
  helperTextWidth,
}) => {
  const inputFieldStyle: CSSProperties = useMemo(() => {
    return {
      width: helperTextWidth,
    };
  }, [helperTextWidth]);

  return (
    <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-1 text-left text-base text-dark-blue font-caption-regular">
      <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
        <div
          className="w-[82px] relative leading-[100%] inline-block box-border pr-5"
          style={inputFieldStyle}
        >
          {inputField}
        </div>
        <div className="self-stretch rounded-8xs bg-white overflow-hidden flex flex-row items-start justify-start py-4 px-[11px] gap-[6px] border-[1px] border-solid border-dark-blue">
          <input
            className="w-full [border:none] [outline:none] font-caption-regular text-base bg-[transparent] h-4 flex-1 relative leading-[100%] text-dark-blue text-left inline-block min-w-[158px] whitespace-nowrap p-0"
            placeholder={inputTextPlaceholder}
            type="text"
          />
          <img
            className="h-5 w-5 relative overflow-hidden shrink-0 hidden"
            alt=""
            src="/visibility-on.svg"
          />
        </div>
        <div className="w-[65px] relative text-xs leading-[100%] hidden">
          Helper_text
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
