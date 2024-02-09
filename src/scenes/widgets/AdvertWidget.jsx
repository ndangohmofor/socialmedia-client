import Typography from "@mui/material/Typography";
import FlexBetween from "../../components/FlexBetween";
import WidgetWrappter from "../../components/WidgetWrapper";
import { useTheme } from "@mui/material";

import React from "react";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrappter>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight={"500"}>
          Sponsored
        </Typography>
        <Typography color={medium}>Create Ad</Typography>
      </FlexBetween>
      <img
        width={"100%"}
        height={"auto"}
        alt="advert"
        src="http://localhost:3001/assets/info4.jpeg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>MikaCostemtics</Typography>
        <Typography color={medium}>mikacosmetics.com</Typography>
      </FlexBetween>
      <Typography color={medium} m={"0.5rem 0"}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Typography>
    </WidgetWrappter>
  );
};

export default AdvertWidget;
