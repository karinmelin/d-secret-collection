"use client";
import styles from "../page.module.css";
import { Button, Carousel, Header, TopMenu } from "@components";
import carouselData from "../_data/carousel-data.json";
import { Box, Slide } from "@mui/material";
import { useEffect, useState } from "react";

const Showroom = () => {
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    setShowButton(true);
  }, []);

  return (
    <>
      <Header />
      <main className={styles.main}>
        <TopMenu />
        <Carousel slides={carouselData} />
        <Slide direction="up" in={showButton} mountOnEnter unmountOnExit timeout={2000}>
          <Box>
            <Button
              text={"Add to cart"}
              handleClick={() => console.log("Add to cart!")}
            />
          </Box>
        </Slide>
      </main>
    </>
  );
};

export default Showroom;
