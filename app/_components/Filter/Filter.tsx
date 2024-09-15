import { FunctionComponent, useState } from "react";
import TuneIcon from "@mui/icons-material/Tune";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import { ButtonLink } from "@components";
import { FilterSubmenu } from "./FilterSubmenu";
import filterData from "../../_data/filter-data.json";
import styles from "./Filter.module.scss";

const Filter: FunctionComponent = () => {
  const [showFilterMenu, setShowFilterMenu] = useState(false);
  const [showSortMenu, setShowSortMenu] = useState(false);

  return (
    <div className={styles.filters}>
      <ButtonLink
        text={"Filter"}
        handleButtonLinkClick={() => setShowFilterMenu(!showFilterMenu)}
      >
        <TuneIcon fontSize="medium" />
      </ButtonLink>
      {showFilterMenu && <FilterSubmenu items={filterData} />}
      <ButtonLink
        text={"Sort"}
        handleButtonLinkClick={() => setShowSortMenu(!showSortMenu)}
      >
        {<SwapVertIcon fontSize="medium" />}
      </ButtonLink>
    </div>
  );
};

export default Filter;
