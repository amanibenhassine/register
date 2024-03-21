import type { NextPage } from "next";
import FrameComponent1 from "../components/frame-component1";
import FrameComponent from "../components/frame-component";

const MobileRegister: NextPage = () => {
  return (
    <div className="w-full relative bg-light-blue overflow-hidden flex flex-col items-start justify-start pt-[58px] px-4 pb-[90px] box-border gap-[40px] tracking-[normal] text-left text-9xl text-dark-blue font-caption-regular">
      <div className="self-stretch flex flex-row items-start justify-start py-0 px-[21px]">
        <h2 className="m-0 flex-1 relative text-inherit leading-[100%] font-bold font-inherit">
          Welcome to Chat!
        </h2>
      </div>
      <form className="m-0 self-stretch flex flex-col items-start justify-start gap-[20px]">
        <FrameComponent1
          inputField="Number "
          inputTextPlaceholder="+34674441747"
        />
        <FrameComponent1
          inputField="Full name"
          inputTextPlaceholder="Yenny Garza"
          helperTextWidth="93px"
        />
        <div className="self-stretch h-[76px] flex flex-col items-start justify-start gap-[8px]">
          <div className="w-[93px] relative text-base leading-[100%] font-caption-regular text-dark-blue text-left inline-block box-border pr-5">
            Password
          </div>
          <div className="self-stretch flex-1 rounded-8xs bg-white overflow-hidden flex flex-row items-start justify-start py-4 px-[11px] gap-[6px] border-[1px] border-solid border-dark-blue">
            <input
              className="w-[calc(100%_-_42px)] [border:none] [outline:none] bg-[transparent] h-[18px] flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border font-caption-regular text-base text-dark-blue min-w-[143px]"
              placeholder="**************"
              type="text"
            />
            <img
              className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
              alt=""
              src="/visibility-on.svg"
            />
          </div>
          <div className="w-[65px] relative text-xs leading-[100%] font-caption-regular text-dark-blue text-left hidden">
            Helper_text
          </div>
        </div>
        <FrameComponent />
      </form>
    </div>
  );
};

export default MobileRegister;
