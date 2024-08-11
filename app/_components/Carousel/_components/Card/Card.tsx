import { FunctionComponent } from "react";
import Image from "next/image";
import styles from "./Card.module.scss";

type CardProps = {
  id: number;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  price: number;
};

const Card: FunctionComponent<CardProps> = ({
  title,
  description,
  image,
  imageAlt,
  price,
}) => {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.cardImageWrapper}>
        <Image
          src={image}
          height={230}
          width={230}
          alt={imageAlt}
          className={styles.cardImage}
        />
      </div>
      <div className={styles.textContentWrapper}>
        <p className={styles.cardDescription}>{description}</p>
        <div className={styles.titlePriceWrapper}>
          <h2 className={styles.cardTitle}>{title}</h2>
          <p className={styles.cardPrice}>{price}€</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
