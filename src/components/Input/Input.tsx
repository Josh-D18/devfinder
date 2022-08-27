import searchIcon from "../../assets/icon-search.svg";
import styles from "./Input.module.css";

const Input = () => {
  return (
    <form className="flex justify-center ">
      <div className="absolute w-[20.05px] h-[20px]  ">
        <div>
          <img
            src={searchIcon}
            alt=""
            className="max-w-[20.05px] max-h-[20px] w-full h-full relative right-[139px] top-[20px]"
          />
        </div>
      </div>
      <input className={styles.input} placeholder="Search GitHub username…" />
      <div className="absolute">
        <button
          type="submit"
          className="bg-secondary-500 rounded-[10px] w-[84px] h-[46px] relative top-[1px] left-[120px] mr-[7px] mb-[7.5px] mt-[6.5px] text-secondary-400"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default Input;

// w-[327px] h-[60px] bg-secondary-200  rounded-[15px] bg-searchIcon bg-no-repeat  px-[16px] pl-[45px] bg-[16px_50%]
