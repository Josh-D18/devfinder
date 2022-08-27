import Input from "../Input/Input";
import dark from "../../assets/icon-moon.svg";
import light from "../../assets/icon-sun.svg";

export const MainPage = () => {
  return (
    <div className="w-full h-full bg-secondary-300">
      <div className="flex items-center px-[24px] justify-between pt-[31px] pb-[36px]">
        <h1 className="mr-[110px] leading-[39px] text-[26px] font-[700] not-italic text-secondary-400 lowercase">
          devfinder
        </h1>
        <div className="flex items-center">
          <p className="font-[700] text-[13px] leading-[19px] tracking-[2.5px] text-secondary-400">
            Light
          </p>
          <img src={light} alt="" className="ml-[16px]" />
        </div>
      </div>
      <Input />
    </div>
  );
};
