import icon from "../../assets/favicon-32x32.png";
import Links from "./ui/Links/Links";

const User = () => {
  return (
    <div className="m-[0_auto]">
      <div className="w-[327px] bg-secondary-200 rounded-[15px] h-[517px] mx-[auto] mt-[16px] mb-[79px] md:w-[573px] md:h-[481px]">
        <div className="flex items-center pl-[24px] pr-[69px] md:pt-[40px]">
          <img
            src={icon}
            alt=""
            className="max-w-[70px] max-h-[70px] w-full h-full md:max-w-[117px] md:max-h-[117px] md:p-[40px]"
          />
          <div className=" pt-[33px] md:pl-[41px] pl-[19.5px]">
            <p className="font-[700] text-[16px] leading-[24px] text-secondary-400 not-italic pb-[5px]">
              The Octocat
            </p>
            <p className="leading-[19px] text-[13px] font-[400] text-secondary-500 not-italic pb-[6px]">
              @octocat
            </p>
            <p className="font-[400] text-[13px] leading-[19px] not-italic text-secondary-400 pb-[6px]">
              Joined 25 Jan 2011
            </p>
          </div>
        </div>
        <div>
          <p className="px-[24px] pt-[33px] font-[400] text-[13px] leading-[25px] text-secondary-400 md:px-[40px]">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
            odio. Quisque volutpat mattis eros.
          </p>
        </div>
        <div className="w-[279px] h-[85px] bg-secondary-300 flex justify-center items-center m-auto rounded-[10px] mt-[23px] mb-[24px] md:w-[493px] md:justify-start md:mb-[30px]">
          <div className="mr-[1px] text-center w-[79px] pt-[18px] pb-[19px] md:mr-[99px] md:w-[40px] md:ml-[32px]">
            <p className="font-[400] not-italic text-[11px] leading-[16px] text-secondary-400">
              Repos
            </p>
            <p className="not-italic font-[700] text-[16px] leading-[24px] uppercase text-secondary-400">
              8
            </p>
          </div>
          <div className="mr-[1px] text-center w-[79px] pt-[18px] pb-[19px] md:mr-[99px] md:w-[40px]">
            <p className="font-[400] not-italic text-[11px] leading-[16px] text-secondary-400">
              Followers
            </p>
            <p className="not-italic font-[700] text-[16px] leading-[24px] uppercase text-secondary-400">
              3938
            </p>
          </div>
          <div className="mr-[1px] text-center w-[79px] pt-[18px] pb-[19px] md:mr-[99px] md:w-[40px]">
            <p className="font-[400] not-italic text-[11px] leading-[16px] text-secondary-400">
              Following
            </p>
            <p className="not-italic font-[700] text-[16px] leading-[24px] uppercase text-secondary-400">
              9
            </p>
          </div>
        </div>
        <Links />
      </div>
    </div>
  );
};

export default User;
