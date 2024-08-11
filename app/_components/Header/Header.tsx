import { BaseIcon } from "@components";
import { CartButton } from "../Cart";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <BaseIcon
        className={styles.diorLogo}
        src="/icons/dior-logo.svg"
        alt="dior"
        width={153}
        height={43}
        priority
      />
      <CartButton />
    </header>
  );
};

export default Header;
