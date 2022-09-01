import { useEffect, useState } from "react";
import Input from "../Input/Input";
import dark from "../../assets/icon-moon.svg";
import light from "../../assets/icon-sun.svg";
import User from "../User/User";
import axios from "axios";
import clsx from "clsx";

export const MainPage = () => {
  const [user, setUser] = useState([] as any);
  const [screenVersion, setScreenVersion] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`https://api.github.com/users/Josh-D18`);
      setUser(response.data);
    };
    getData();
  }, []);

  const handleClick = () => {
    setScreenVersion(!screenVersion);
  };

  return (
    <div
      className={clsx(
        "w-full h-full",
        screenVersion ? "bg-secondary-600" : "bg-secondary-300"
      )}
    >
      <div
        className={clsx(
          "flex flex-col items-center px-[24px] justify-between  m-[0_auto] h-auto",
          screenVersion ? "bg-secondary-600" : "bg-secondary-300"
        )}
      >
        <div className="flex max-w-[327px] w-full justify-between mb-[36px] mt-[31px] md:max-h-[481px] md:max-w-[573px] lg:max-w-[730px] lg:max-h-[444px] h-full">
          <h1
            className={clsx(
              "mr-[110px] leading-[39px] text-[26px] font-[700] not-italic  lowercase",
              screenVersion ? "text-tertiary-400" : "text-secondary-400"
            )}
          >
            devfinder
          </h1>
          <div
            className="flex items-center cursor-pointer hover:opacity-70"
            onClick={handleClick}
          >
            {screenVersion ? (
              <>
                <p className="font-[700] text-[13px] leading-[19px] tracking-[2.5px] text-tertiary-300">
                  Dark
                </p>
                <img src={dark} alt="" className="ml-[16px]" />
              </>
            ) : (
              <>
                <p className="font-[700] text-[13px] leading-[19px] tracking-[2.5px] text-secondary-400">
                  Light
                </p>
                <img src={light} alt="" className="ml-[16px]" />
              </>
            )}
          </div>
        </div>

        <Input setUser={setUser} screenVersion={screenVersion} />

        <User
          key={user.id}
          icon={user.avatar_url}
          bio={user.bio}
          createdAt={user.created_at}
          followers={user.followers}
          following={user.following}
          publicRepos={user.public_repos}
          twitter={user.twitter_username}
          name={user.name}
          loginName={user.login}
          location={user.location}
          company={user.company}
          blog={user.blog}
          screenVersion={screenVersion}
        />
      </div>
    </div>
  );
};
