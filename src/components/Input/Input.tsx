import searchIcon from "../../assets/icon-search.svg";
import styles from "./Input.module.css";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
import clsx from "clsx";

type Inputs = {
  githubUser: string;
};

interface IInput {
  setUser: any;
  screenVersion: boolean;
}

const Input = (props: IInput) => {
  const { setUser, screenVersion } = props;
  const [errorRequestMessage, setErrorRequestMessage] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${data.githubUser}`
      );
      setErrorRequestMessage("");
      setUser(response.data);
    } catch (error: any) {
      console.log(error, error.code === "ERR_BAD_REQUEST", errors);
      if (error.code === "ERR_BAD_REQUEST") {
        setErrorRequestMessage("Not Found!");
      }
    }
  };

  return (
    <form className="flex justify-center" onSubmit={handleSubmit(onSubmit)}>
      <div className="absolute w-[20.05px] h-[20px]">
        <img
          src={searchIcon}
          alt=""
          className="max-w-[20.05px] max-h-[20px] w-full h-full relative right-[139px] top-[20px] md:right-[244px] md:top-[25px] md:max-w-[24.06px] md:max-h-[24px] lg:right-[319px]"
        />
      </div>
      <input
        className={clsx(
          styles.input,
          screenVersion
            ? "bg-primary-100 text-tertiary-400 placeholder:text-tertiary-600"
            : "bg-secondary-200 text-secondary-400 placeholder:text-secondary-400"
        )}
        placeholder="Search GitHub username…"
        {...register("githubUser", { required: true })}
      />
      <div className="relative">
        <p className="hidden md:block absolute right-[113px] top-[23px] text-secondary-100 whitespace-nowrap pr-[24px]">
          {errorRequestMessage}
        </p>
      </div>
      <div className="absolute">
        <button
          type="submit"
          className={clsx(
            "bg-secondary-500 rounded-[10px] w-[84px] h-[46px] relative top-[1px] left-[120px] mr-[7px] mb-[7.5px] mt-[6.5px] text-secondary-400 md:left-[230px] md:top-[3px] md:w-[106px] md:h-[50px] lg:left-[305px] hover:opacity-70",
            errorRequestMessage.length > 0 && "hover:opacity-60"
          )}
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default Input;
