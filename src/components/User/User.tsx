import icon from "../../assets/favicon-32x32.png";
import Links from "./ui/Links/Links";

const User = () => {
  return (
    <div className="m-[0_auto]">
      <div className="w-[327px] bg-secondary-200 rounded-[15px] h-[517px] mx-[auto] mt-[16px] mb-[79px] md:w-[573px] md:h-[481px] lg:w-[730px] lg:flex lg:h-[419px]">
        <img
          src={icon}
          alt=""
          className="max-w-[70px] max-h-[70px] w-full h-full md:max-w-[117px] md:max-h-[117px] sm:hidden lg:block mt-[48px] ml-[48px]"
        />
        <div className="lg:pl-[37px] lg:pt-[44px]">
          <div className="flex items-center pl-[24px] pr-[69px] md:pt-[40px]  lg:p-[0]">
            <img
              src={icon}
              alt=""
              className="max-w-[70px] max-h-[70px] w-full h-full md:max-w-[117px] md:max-h-[117px] md:p-[40px] lg:hidden"
            />
            <div className=" pt-[33px] md:pl-[41px] pl-[19.5px] lg:flex lg:w-full lg:justify-start lg:p-[0]">
              <div>
                <p className="font-[700] text-[16px] leading-[24px] text-secondary-400 not-italic pb-[5px] lg:pr-[138px]">
                  The Octocat
                </p>
                <p className="leading-[19px] text-[13px] font-[400] text-secondary-500 not-italic pb-[6px] lg:pb-[20px]">
                  @octocat
                </p>
              </div>
              <div>
                <p className="font-[400] text-[13px] leading-[19px] not-italic text-secondary-400 pb-[6px]">
                  Joined 25 Jan 2011
                </p>
              </div>
            </div>
          </div>
          <div>
            <p className="px-[24px] pt-[33px] font-[400] text-[13px] leading-[25px] text-secondary-400 md:px-[40px] lg:pr-[48px] lg:py-[0] lg:pl-0">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
              odio. Quisque volutpat mattis eros.
            </p>
          </div>
          <div className="w-[279px] h-[85px] bg-secondary-300 flex justify-center items-center m-auto rounded-[10px] mt-[23px] mb-[24px] md:w-[493px] md:justify-start md:mb-[30px] lg:w-[480px] lg:h-[85px] lg:mt-[32px] lg:mx-[0px] ">
            <div className="mr-[1px] text-center w-[79px] pt-[18px] pb-[19px] md:mr-[99px] md:w-[40px] md:ml-[32px] ">
              <p className="font-[400] not-italic text-[11px] leading-[16px] text-secondary-400">
                Repos
              </p>
              <p className="not-italic font-[700] text-[16px] leading-[24px] uppercase text-secondary-400">
                8
              </p>
            </div>
            <div className="mr-[1px] text-center w-[79px] pt-[18px] pb-[19px] md:mr-[99px] md:w-[40px] ">
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
    </div>
  );
};

export default User;
