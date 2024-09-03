"use client"
import { useState } from "react";
import { BaseIcon } from "..";
import { ButtonLink } from "../ButtonLink";
import styles from "./TopMenu.module.scss";
import filterData from '../../_data/filter-data.json';
import { FilterSubmenu } from "./_components/FilterSubmenu";

// Todo: move as component into Header
const TopMenu = () => {
  const [showFilterMenu, setShowFilterMenu] = useState(false);
  const [showSortMenu, setShowSortMenu] = useState(false);

  return (
    <div className={styles.wrapper}>
      <div className={styles.iconTitleContainer}>
        <BaseIcon
          src="/icons/key.svg"
          alt="secret"
          width={153}
          height={43}
          priority
        />
        <h1 className={styles.title}>The secret collection</h1>
      </div>
      {/* Todo: move to filter */}
      <div className={styles.filters}>
        <ButtonLink
          icon={"/icons/woman.svg"}
          iconAltText={"filter"}
          text={"Filter"}
          height={16}
          width={16}
          handleButtonLinkClick={() => setShowFilterMenu(!showFilterMenu)}
        />
        {showFilterMenu && (
          <FilterSubmenu items={filterData} />
        )}
        <ButtonLink
          icon={"/icons/woman.svg"}
          iconAltText={"sort"}
          text={"Sort"}
          height={16}
          width={16}
          handleButtonLinkClick={() => setShowSortMenu(!showSortMenu)}
        />
      </div>
    </div>
  );
};

export default TopMenu;
