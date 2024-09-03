"use client";
import styles from "../page.module.css";
import { Button, Carousel, Header, TopMenu } from "@components";
import carouselData from "../_data/carousel-data.json";
import { Box, Slide, ThemeProvider } from "@mui/material";
import { useEffect, useState } from "react";
import { theme } from "../_styles/theme";

const Showroom = () => {
  const [rendered, setRendered] = useState(false);
  useEffect(() => {
    setRendered(true);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Slide direction="down" in={rendered} mountOnEnter unmountOnExit>
        <Box>
          <Header />
        </Box>
      </Slide>
      <main className={styles.main}>
        <Slide direction="down" in={rendered} mountOnEnter unmountOnExit>
          <Box>
            <TopMenu />
          </Box>
        </Slide>
        <Carousel slides={carouselData} />
        <Slide direction="up" in={rendered} mountOnEnter unmountOnExit>
          <Box>
            <Button
              text={"Add to cart"}
              handleClick={() => console.log("Add to cart!")}
            />
          </Box>
        </Slide>
      </main>
    </ThemeProvider>
  );
};

export default Showroom;
