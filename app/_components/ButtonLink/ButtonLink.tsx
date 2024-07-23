import { BaseIcon } from "..";
import styles from "./ButtonLink.module.scss";

type ButtonLinkProps = {
  icon: string;
  iconAltText: string;
  text: string;
  height: number;
  width: number;
  handleButtonLinkClick: () => void;
};

const ButtonLink = ({
  icon,
  iconAltText,
  text,
  height = 32,
  width = 32,
  handleButtonLinkClick,
}: ButtonLinkProps) => {
  return (
    <div className={styles.buttonLinkWrapper}>
      <button className={styles.button} onClick={handleButtonLinkClick}>
        <BaseIcon
          className={styles.icon}
          src={icon}
          alt={iconAltText}
          width={width}
          height={height}
          priority
        />
        {text}
      </button>
    </div>
  );
};

export default ButtonLink;
