import React from "react";
import library from "../public/assets/library-2.jpg";
import { Box, Container } from "@mui/material";

const Home = () => {
  return (
    <Box
      sx={{
        position: "relative",
        height: "100vh",
        width: "100%",
        overflow: "hidden",
        border: "1px solid red",
      }}
    >
      <img
        src={library}
        alt="Library"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
        }}
      />
    </Box>
  );
};

export default Home;
