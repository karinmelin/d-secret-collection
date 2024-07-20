import { BaseIcon } from "@components";
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
      {/* Todo: update to button */}
      <BaseIcon
        className={styles.cartIcon}
        src="/icons/cart.svg"
        alt="cart"
        width={48}
        height={48}
        sizes="(max-width: 1024px) 29px"
        priority
      />
    </header>
  );
};

export default Header;
