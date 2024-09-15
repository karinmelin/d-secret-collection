"use client"
import { BaseIcon } from "..";
import Filter from "../Filter/Filter";
import styles from "./TopMenu.module.scss";

// Todo: move as component into Header
const TopMenu = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.iconTitleContainer}>
        <BaseIcon
          src="/icons/key.svg"
          alt="secret"
          width={153}
          height={43}
          priority
        />
        <h1 className={styles.title}>The secret collection</h1>
      </div>
      <Filter />
    </div>
  );
};

export default TopMenu;
