import location from "../../../../assets/icon-location.svg";
import website from "../../../../assets/icon-website.svg";
import twitter from "../../../../assets/icon-twitter.svg";
import company from "../../../../assets/icon-company.svg";

interface ILinks {
  locationLink?: string;
  websiteLink?: string;
  twitterLink?: string;
  companyLink?: string;
}

const Links = (props: ILinks) => {
  return (
    <div className="mb-[48px] w-[185px]">
      <div className="flex items-center pb-[16px]">
        <img src={location} alt="" className="pl-[24px] pr-[19.25px]" />
        <p className="font-[400] text-[13px] leading-[19px] not-italic text-secondary-400">
          San Francisco
        </p>
      </div>
      <div className="flex items-center pb-[16px]">
        <img src={website} alt="" className="pl-[24px] pr-[13.01px]" />
        <p className="font-[400] text-[13px] leading-[19px] not-italic text-secondary-400">
          https://github.blog
        </p>
      </div>
      <div className="flex items-center pb-[16px]">
        <img src={twitter} alt="" className="pl-[24px] pr-[13px]" />
        <p className="font-[400] text-[13px] leading-[19px] not-italic text-secondary-400">
          Not Available
        </p>
      </div>
      <div className="flex items-center pb-[16px]">
        <img src={company} alt="" className="pl-[24px] pr-[13px]" />
        <p className="font-[400] text-[13px] leading-[19px] not-italic text-secondary-400">
          @github
        </p>
      </div>
    </div>
  );
};

export default Links;
