import searchIcon from "../../assets/icon-search.svg";
import styles from "./Input.module.css";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";

type Inputs = {
  githubUser: string;
};

interface IInput {
  setUser: any;
}

const Input = (props: IInput) => {
  const { setUser } = props;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const response = await axios.get(
      `https://api.github.com/users/${data.githubUser}`
    );
    setUser(response.data);
  };

  return (
    <form className="flex justify-center" onSubmit={handleSubmit(onSubmit)}>
      <div className="absolute w-[20.05px] h-[20px]">
        <img
          src={searchIcon}
          alt=""
          className="max-w-[20.05px] max-h-[20px] w-full h-full relative right-[139px] top-[20px] md:right-[244px] md:top-[25px] md:max-w-[24.06px] md:max-h-[24px] lg:right-[319px] "
        />
      </div>
      <input
        className={styles.input}
        placeholder="Search GitHub username…"
        {...register("githubUser", { required: true })}
      />
      <div className="absolute">
        <button
          type="submit"
          className="bg-secondary-500 rounded-[10px] w-[84px] h-[46px] relative top-[1px] left-[120px] mr-[7px] mb-[7.5px] mt-[6.5px] text-secondary-400 md:left-[230px] md:top-[3px] md:w-[106px] md:h-[50px] lg:left-[305px]"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default Input;
