import location from "../../../../assets/icon-location.svg";
import blog from "../../../../assets/icon-website.svg";
import twitter from "../../../../assets/icon-twitter.svg";
import company from "../../../../assets/icon-company.svg";
import clsx from "clsx";

interface ILinks {
  locationLink: string;
  blogLink: string;
  twitterLink: string;
  companyLink: string;
  screenVersion: boolean;
}

const Links = (props: ILinks) => {
  const { locationLink, blogLink, twitterLink, companyLink, screenVersion } =
    props;

  return (
    <div className="pb-[48px] md:pb-[40px] w-[185px] md:flex md:items-center md:w-[429px] md:pl-[40px] lg:pl-[0] lg:pb-[48px]">
      <div className="md:mr-[65px]">
        <div className="flex items-center pb-[16px] max-w-[208px]">
          <img
            src={location}
            alt="location"
            className="pl-[24px] pr-[19.25px] md:pl-[0]"
          />
          <p
            className={clsx(
              "font-[400] text-[13ax] leading-[19px] not-italic",
              screenVersion ? "text-tertiary-600" : "text-secondary-400",
              locationLink === null && "opacity-75 cursor-auto"
            )}
          >
            {locationLink === null ? "Not Available" : locationLink}
          </p>
        </div>
        <div className="flex items-center pb-[16px] max-w-[208px]">
          <img
            src={blog}
            className="pl-[24px] pr-[13.01px] md:pl-[0]"
            alt="blog"
          />
          <a
            href={`https://${blogLink}.com`}
            className={clsx(
              "font-[400] text-[13px] leading-[19px] not-italic text-secondary-400 hover:underline",
              screenVersion ? "text-tertiary-600" : "text-secondary-400",
              blogLink === "" && "opacity-75 cursor-auto"
            )}
          >
            {blogLink === "" ? "Not Available" : blogLink}
          </a>
        </div>
      </div>

      <div>
        <div className="flex items-center pb-[16px] max-w-[208px]">
          <img
            src={twitter}
            alt="twitter"
            className="pl-[24px] pr-[13px] md:pl-[0]"
          />
          <a
            href={`https://twitter.com/${twitterLink}`}
            className={clsx(
              "font-[400] text-[13px] leading-[19px] not-italic text-secondary-400 hover:underline cursor-pointer",
              screenVersion ? "text-tertiary-600" : "text-secondary-400",
              twitterLink === null && "opacity-75 cursor-auto"
            )}
          >
            {twitterLink === null ? "Not Available" : twitterLink}
          </a>
        </div>
        <div className="flex items-center pb-[16px] max-w-[208px]">
          <img
            src={company}
            alt="company"
            className="pl-[24px] pr-[13px] md:pl-[0]"
          />
          <p
            className={clsx(
              "font-[400] text-[13px] leading-[19px] not-italic text-secondary-400",
              screenVersion ? "text-tertiary-600" : "text-secondary-400",
              companyLink === null && "opacity-75 cursor-auto"
            )}
          >
            {companyLink === null ? "Not Available" : companyLink}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Links;
