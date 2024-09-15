import { ReactElement, ReactNode } from "react";
import { BaseIcon } from "..";
import styles from "./ButtonLink.module.scss";

type ButtonLinkProps = {
  icon?: string;
  iconAltText?: string;
  text: string;
  height?: number;
  width?: number;
  handleButtonLinkClick: () => void;
  children?: ReactElement;
};

const ButtonLink = ({
  icon,
  iconAltText,
  text,
  height = 32,
  width = 32,
  handleButtonLinkClick,
  children,
}: ButtonLinkProps) => {
  return (
    <div className={styles.buttonLinkWrapper}>
      <button className={styles.button} onClick={handleButtonLinkClick}>
        {children
          ? children
          : icon &&
            iconAltText && (
              <BaseIcon
                className={styles.icon}
                src={icon}
                alt={iconAltText}
                width={width}
                height={height}
                priority
              />
            )}
        {text}
      </button>
    </div>
  );
};

export default ButtonLink;
