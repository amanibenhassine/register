import type { NextPage } from "next";
import { useCallback } from "react";

const FrameComponent: NextPage = () => {
  const onGoToLoginClick = useCallback(() => {
    // Please sync "Mobile / Login" to the project
  }, []);

  return (
    <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 text-left text-base text-dark-blue font-body-text-1-bold">
      <div className="flex flex-col items-start justify-start gap-[8px]">
        <button className="cursor-pointer [border:none] py-3 px-[29.5px] bg-dark-blue rounded-8xs overflow-hidden flex flex-row items-start justify-start gap-[6px]">
          <b className="w-[55px] relative text-base leading-[100%] inline-block font-body-text-1-bold text-white text-right min-w-[55px]">
            Submit
          </b>
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
            alt=""
            src="/reset.svg"
          />
        </button>
        <div className="flex flex-row items-start justify-start py-0 pr-3 pl-[13px]">
          <b
            className="relative leading-[100%] inline-block min-w-[89px] cursor-pointer"
            onClick={onGoToLoginClick}
          >
            Go to Login
          </b>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
