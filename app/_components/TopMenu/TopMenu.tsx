import { BaseIcon } from "..";
import { ButtonLink } from "../ButtonLink";
import styles from "./TopMenu.module.scss";

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
      <div className={styles.filters}>
        <ButtonLink
          icon={"/icons/woman.svg"}
          iconAltText={"filter"}
          text={"Filter"}
          height={16}
          width={16}
        />
        <ButtonLink
          icon={"/icons/woman.svg"}
          iconAltText={"sort"}
          text={"Sort"}
          height={16}
          width={16}
        />
      </div>
    </div>
  );
};

export default TopMenu;
