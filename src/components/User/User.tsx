import Links from "./ui/Links/Links";
import moment from "moment";
import clsx from "clsx";

interface IUser {
  icon: string;
  bio: string;
  createdAt: string;
  followers: number;
  following: number;
  publicRepos: number;
  twitter: string;
  name: string;
  loginName: string;
  location: string;
  company: string;
  blog: string;
  screenVersion: boolean;
}

const User = (props: IUser) => {
  const {
    icon,
    bio,
    createdAt,
    followers,
    following,
    publicRepos,
    twitter,
    name,
    loginName,
    location,
    company,
    blog,
    screenVersion,
  } = props;

  return (
    <div className="m-[0_auto]">
      <div
        className={clsx(
          "w-[327px] rounded-[15px] mx-[auto] mt-[16px] mb-[79px] md:w-[573px] md:h-[481px] lg:w-[730px] lg:flex lg:h-[419px] h-full",
          screenVersion ? "bg-primary-100" : "bg-secondary-200"
        )}
      >
        <img
          src={icon}
          alt=""
          className="max-w-[70px] max-h-[70px] w-full h-full md:max-w-[117px] md:max-h-[117px] sm:hidden lg:block mt-[48px] ml-[48px] rounded-[100px]"
        />
        <div className="lg:pl-[37px] lg:pt-[44px]">
          <div className="flex items-center pl-[24px] pr-[69px] md:pt-[40px] lg:p-[0]">
            <img
              src={icon}
              alt=""
              className="max-w-[70px] max-h-[70px] w-full h-full md:max-w-[117px] md:max-h-[117px]  lg:hidden rounded-[100px]"
            />
            <div className=" pt-[33px] md:pl-[41px] pl-[19.5px] lg:flex lg:w-full lg:justify-start lg:p-[0] md:pt-[0] justify-between">
              <div>
                <p
                  className={clsx(
                    "font-[700] text-[16px] leading-[24px] not-italic pb-[5px] lg:pr-[138px]",
                    screenVersion ? "text-tertiary-500" : "text-secondary-400"
                  )}
                >
                  {name === null ? "Name Not Available" : name}
                </p>
                <p className="leading-[19px] text-[13px] font-[400] text-secondary-500 not-italic pb-[6px] lg:pb-[20px]">
                  @{loginName}
                </p>
              </div>
              <div>
                <p
                  className={clsx(
                    "font-[400] text-[13px] leading-[19px] not-italic pb-[6px]",
                    screenVersion ? "text-tertiary-300" : "text-secondary-400"
                  )}
                >
                  Joined {moment(createdAt).format("DD MMM YYYY")}
                </p>
              </div>
            </div>
          </div>
          <div>
            <p
              className={clsx(
                "px-[24px] pt-[33px] font-[400] text-[13px] leading-[25px]  md:px-[40px] lg:pr-[48px] lg:py-[0] lg:pl-0",
                screenVersion ? "text-tertiary-600" : "text-secondary-400"
              )}
            >
              {bio === null ? "Bio Not Available" : bio}
            </p>
          </div>
          <div
            className={clsx(
              "w-[279px] h-[85px] flex justify-center items-center m-auto rounded-[10px] mt-[23px] mb-[24px] md:w-[493px] md:justify-start md:mb-[30px] lg:w-[480px] lg:h-[85px] lg:mt-[32px] lg:mx-[0px]",
              screenVersion ? "bg-primary-200" : "bg-secondary-300"
            )}
          >
            <div className="mr-[1px] text-center w-[79px] pt-[18px] pb-[19px] md:mr-[99px] md:w-[40px] md:ml-[32px] ">
              <p
                className={clsx(
                  "font-[400] not-italic text-[11px] leading-[16px] text-secondary-400 mb-[8px]",
                  screenVersion ? "text-tertiary-600" : "text-secondary-400"
                )}
              >
                Repos
              </p>
              <p
                className={clsx(
                  "not-italic font-[700] text-[16px] leading-[24px] uppercase",
                  screenVersion ? "text-tertiary-500" : "text-secondary-400"
                )}
              >
                {publicRepos}
              </p>
            </div>
            <div className="mr-[1px] text-center w-[79px] pt-[18px] pb-[19px] md:mr-[99px] md:w-[40px] ">
              <p
                className={clsx(
                  "font-[400] not-italic text-[11px] leading-[16px] text-secondary-400 mb-[8px]",
                  screenVersion ? "text-tertiary-600" : "text-secondary-400"
                )}
              >
                Followers
              </p>
              <p
                className={clsx(
                  "not-italic font-[700] text-[16px] leading-[24px] uppercase",
                  screenVersion ? "text-tertiary-500" : "text-secondary-400"
                )}
              >
                {followers}
              </p>
            </div>
            <div className="mr-[1px] text-center w-[79px] pt-[18px] pb-[19px] md:mr-[99px] md:w-[40px]">
              <p
                className={clsx(
                  "font-[400] not-italic text-[11px] leading-[16px] text-secondary-400 mb-[8px]",
                  screenVersion ? "text-tertiary-600" : "text-secondary-400"
                )}
              >
                Following
              </p>
              <p
                className={clsx(
                  "not-italic font-[700] text-[16px] leading-[24px] uppercase",
                  screenVersion ? "text-tertiary-500" : "text-secondary-400"
                )}
              >
                {following}
              </p>
            </div>
          </div>
          <Links
            locationLink={location}
            blogLink={blog}
            twitterLink={twitter}
            companyLink={company}
            screenVersion={screenVersion}
          />
        </div>
      </div>
    </div>
  );
};

export default User;
