import styles from "../page.module.css";
import { Header, TopMenu } from "@components";

const Products = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <TopMenu />
        <div>You're on the product page</div>
      </main>
    </>
  );
};

export default Products;
