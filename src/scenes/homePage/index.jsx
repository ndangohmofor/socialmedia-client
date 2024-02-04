import Box from "@mui/material/Box";
import React from "react";
import Navbar from "../navbar";
import { useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";

const HomePage = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const { _id, picturePath } = useSelector((state) => state.user);
  return (
    <Box>
      <Navbar />
    </Box>
  );
};

export default HomePage;
