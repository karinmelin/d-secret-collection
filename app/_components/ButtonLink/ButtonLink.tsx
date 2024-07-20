import { BaseIcon } from "..";
import styles from "./ButtonLink.module.scss";

type ButtonLinkProps = {
  icon: string;
  iconAltText: string;
  text: string;
  height: number;
  width: number;
};

const ButtonLink = ({
  icon,
  iconAltText,
  text,
  height = 32,
  width = 32,
}: ButtonLinkProps) => {
  return (
    <>
      <div className={styles.icon}>
        <BaseIcon
          src={icon}
          alt={iconAltText}
          width={width}
          height={height}
          priority
        />
      </div>
      <button className={styles.button}>{text}</button>
    </>
  );
};

export default ButtonLink;
