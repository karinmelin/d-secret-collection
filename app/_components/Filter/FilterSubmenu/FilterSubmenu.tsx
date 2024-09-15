import { FunctionComponent } from "react";
import styles from "./FilterSubmenu.module.scss";

type FilterSubmenuProps = {
  items: Record<string, string[]>;
};

const FilterSubmenu: FunctionComponent<FilterSubmenuProps> = ({ items }) => {
  const categories = Object.keys(items);

  return (
    <div className={styles.filterSubmenuWrapper}>
      {categories.map((category) => (
        <ul key={category} className={styles.filterSubmenuList}>
          {items[category].map((item) => (
            <li key={item} className={styles.filterSubmenuItem}>
              {item}
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
};

export default FilterSubmenu;
