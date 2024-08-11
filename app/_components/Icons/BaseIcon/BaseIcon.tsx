import Image from "next/image";

type BaseIconProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  sizes?: string;
  priority?: boolean;
  className?: string;
  children?: React.ReactNode;
};

const BaseIcon = ({ children, ...props }: BaseIconProps): JSX.Element => {
  return <Image {...props} className={props.className} >{children}</Image>;
};

export default BaseIcon;
