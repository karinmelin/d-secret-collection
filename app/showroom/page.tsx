import styles from "../page.module.css";
import { Button, Carousel, Header, TopMenu } from "@components";
import carouselData from '../_data/carousel-data.json';

const Products = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <TopMenu />
        <Carousel slides={carouselData} />
        <Button text={"Add to cart"} />
      </main>
    </>
  );
};

export default Products;
