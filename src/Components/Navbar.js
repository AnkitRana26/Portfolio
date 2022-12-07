import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import LinearDeterminate from "./MiniComponent/ProgressComp";
import logo from "../media/logo.png";
import "./Navbar.css";

const Navbar = () => {
  const [hoverEffect, SetHoverEffect] = useState(0);
  const [scrolled, setScrolled] = useState(0);

  const openResume = () => {
    window.open(
      "https://drive.google.com/file/d/1-2HpCSCQC5zxqolM5PbS7qBz9sTtRjCy/view?usp=sharing",
      "_blank"
    );
  };

  window.addEventListener("scroll", () => {
    setScrolled(document.documentElement.scrollTop);
  });

  return (
    <Box
      className={scrolled >= 100 ? "navbarboxShadow" : ""}
      sx={{
        display: "flex",
        justifiyContent: "space-between",
        width: "100%",
        padding: "1% 1%",
        position: "sticky",
        top: "0%",
      }}
    >
      <Box
        sx={{
          width: "100%",
          padding: "0% 25px",
          display: "flex",
          alignItems: "center",
          gap: "5px",
          color: "white",
        }}
      >
        <img className="logoImage" height={"70px"} width={"75px"} src={logo} />
        
      </Box>
      <Box className="logoBox" sx={{ display: "none" }}>
        <img height={"69px"} width={"62px"} src={logo} />
      </Box>
      <Box
        className="navbar-part-2"
        sx={{
          display: "flex",
          width: "80%",
          color: "white",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          className="navbarList"
          sx={{ cursor: "pointer" }}
          onMouseOut={() => {
            SetHoverEffect(0);
          }}
          onMouseOver={() => SetHoverEffect(1)}
        >
          <Typography variant="h5">About</Typography>
          {hoverEffect == 1 ? (
            <LinearDeterminate color={"white"} />
          ) : (
            <Box sx={{ height: "4px" }}></Box>
          )}
        </Box>
        <Box
          className="navbarList"
          sx={{ cursor: "pointer" }}
          onMouseOut={() => {
            SetHoverEffect(0);
          }}
          onMouseOver={() => SetHoverEffect(2)}
        >
          <Typography variant="h5">Education</Typography>
          {hoverEffect == 2 ? (
            <LinearDeterminate color={"white"} />
          ) : (
            <Box sx={{ height: "4px" }}></Box>
          )}
        </Box>
        <Box
          className="navbarList"
          sx={{ cursor: "pointer" }}
          onMouseOut={() => {
            SetHoverEffect(0);
          }}
          onMouseOver={() => SetHoverEffect(3)}
        >
          <Typography variant="h5">Work</Typography>
          {hoverEffect == 3 ? (
            <LinearDeterminate color={"white"} />
          ) : (
            <Box sx={{ height: "4px" }}></Box>
          )}
        </Box>
        <Box
          className="navbarList"
          sx={{ cursor: "pointer" }}
          onMouseOut={() => {
            SetHoverEffect(0);
          }}
          onMouseOver={() => SetHoverEffect(4)}
        >
          <Typography variant="h5">Contact</Typography>
          {hoverEffect == 4 ? (
            <LinearDeterminate color={"white"} />
          ) : (
            <Box sx={{ height: "4px" }}></Box>
          )}
        </Box>
        <Box>
          <Button
            onClick={openResume}
            variant="outlined"
            sx={{
              border: "1px solid #64ffda",
              color: "white",
              fontSize: "1rem",
            }}
          >
            Resume
          </Button>
          {/* <LinearDeterminate color={"transparent"}/> */}
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
