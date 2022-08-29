import location from "../../../../assets/icon-location.svg";
import blog from "../../../../assets/icon-website.svg";
import twitter from "../../../../assets/icon-twitter.svg";
import company from "../../../../assets/icon-company.svg";

interface ILinks {
  locationLink: string;
  blogLink: string;
  twitterLink: string;
  companyLink: string;
}

const Links = (props: ILinks) => {
  const { locationLink, blogLink, twitterLink, companyLink } = props;

  return (
    <div className="pb-[48px] md:pb-[40px] w-[185px] md:flex md:items-center md:w-[429px] md:pl-[40px] lg:pl-[0] lg:pb-[48px]">
      <div className="md:mr-[65px]">
        <div className="flex items-center pb-[16px] max-w-[208px]">
          <img
            src={location}
            alt=""
            className="pl-[24px] pr-[19.25px] md:pl-[0]"
          />
          <p className="font-[400] text-[13px] leading-[19px] not-italic text-secondary-400 ">
            {locationLink === null ? "Not Available" : locationLink}
          </p>
        </div>
        <div className="flex items-center pb-[16px] max-w-[208px]">
          <img src={blog} alt="" className="pl-[24px] pr-[13.01px] md:pl-[0]" />
          <p className="font-[400] text-[13px] leading-[19px] not-italic text-secondary-400 ">
            {blogLink === "" ? "Not Available" : blogLink}
          </p>
        </div>
      </div>

      <div>
        <div className="flex items-center pb-[16px] max-w-[208px]">
          <img src={twitter} alt="" className="pl-[24px] pr-[13px] md:pl-[0]" />
          <p className="font-[400] text-[13px] leading-[19px] not-italic text-secondary-400">
            {twitterLink === null ? "Not Available" : twitterLink}
          </p>
        </div>
        <div className="flex items-center pb-[16px] max-w-[208px]">
          <img src={company} alt="" className="pl-[24px] pr-[13px] md:pl-[0]" />
          <p className="font-[400] text-[13px] leading-[19px] not-italic text-secondary-400">
            {companyLink === null ? "Not Available" : companyLink}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Links;
