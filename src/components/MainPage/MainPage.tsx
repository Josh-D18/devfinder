import { useEffect } from "react";
import Input from "../Input/Input";
// import dark from "../../assets/icon-moon.svg";
import light from "../../assets/icon-sun.svg";
import User from "../User/User";
import { getUserApi } from "../api/getUser";

export const MainPage = () => {
  console.log(getUserApi());
  useEffect(() => {}, []);

  return (
    <div className="w-full h-full bg-secondary-300 ">
      <div className="flex flex-col items-center px-[24px] justify-between  m-[0_auto] h-auto">
        <div className="flex max-w-[327px] w-full justify-between mb-[36px] mt-[31px] md:max-h-[481px] md:max-w-[573px] lg:max-w-[730px] lg:max-h-[444px] h-full">
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
        <User />
      </div>
    </div>
  );
};
