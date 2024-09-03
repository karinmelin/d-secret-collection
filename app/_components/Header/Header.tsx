"use client"
import { BaseIcon } from "@components";
import { CartButton } from "../Cart";
import styles from "./Header.module.scss";
import { FunctionComponent, forwardRef } from "react";
import { Box } from "@mui/material";

const Header: FunctionComponent = forwardRef(() => {
  return (
    <Box component={"header"} className={styles.header}>
      <BaseIcon
        className={styles.diorLogo}
        src="/icons/dior-logo.svg"
        alt="dior"
        width={153}
        height={43}
        priority
      />
      <CartButton />
    </Box>
  );
});

export default Header;
