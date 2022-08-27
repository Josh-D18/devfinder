import { useState } from "react";
import searchIcon from "../../assets/icon-search.svg";
import styles from "./Input.module.css";

const Input = () => {
  return (
    <form className="flex justify-center w-[327px] h-[60px] bg-secondary-200  rounded-[15px] ">
      <input className={styles.input} placeholder="Search GitHub username…" />
      <div>
        <button
          type="submit"
          className="bg-secondary-500 rounded-[10px] w-[84px] h-[46px]"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default Input;

// w-[327px] h-[60px] bg-secondary-200  rounded-[15px] bg-searchIcon bg-no-repeat  px-[16px] pl-[45px] bg-[16px_50%]
