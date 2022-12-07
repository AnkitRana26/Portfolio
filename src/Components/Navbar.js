import { Box, Button, Slide, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import LinearDeterminate from "./MiniComponent/ProgressComp";
import logo from "../media/logo.png";
import "./Navbar.css";

const Navbar = () => {
    const [checked,setChecked]= useState(false);
  const [hoverEffect, SetHoverEffect] = useState(0);
  const [scrolled, setScrolled] = useState(0);

  const introLoaded=()=>{
    setTimeout(()=>{
        setChecked(true);

    },600)
}
    useEffect(()=>{
        introLoaded();
    },[])

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
        <img height={"70px"} width={"75px"} src={logo} />
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
        <Slide direction="down" in={checked}>

            <Box
            className="navbarList"
            sx={{ cursor: "pointer" }}
            onMouseOut={() => {
                SetHoverEffect(0);
                }}
                onMouseOver={() => SetHoverEffect(1)}
                >
            <Typography variant="h5" sx={{fontSize:"1.1rem" }}>About</Typography>
            {hoverEffect == 1 ? (
                <LinearDeterminate color={"white"} />
                ) : (
                    <Box sx={{ height: "4px" }}></Box>
                    )}
            </Box>
        </Slide>

        <Slide direction="down" in={checked}>
            <Box
            className="navbarList"
            sx={{ cursor: "pointer" }}
            onMouseOut={() => {
                SetHoverEffect(0);
                }}
                onMouseOver={() => SetHoverEffect(2)}
                >
            <Typography variant="h5" sx={{fontSize:"1.1rem" }}>Education</Typography>
            {hoverEffect == 2 ? (
                <LinearDeterminate color={"white"} />
                ) : (
                    <Box sx={{ height: "4px"}}></Box>
                    )}
            </Box>
        </Slide>
        <Slide direction="down" in={checked}>
            <Box
            className="navbarList"
            sx={{ cursor: "pointer" }}
            onMouseOut={() => {
                SetHoverEffect(0);
                }}
                onMouseOver={() => SetHoverEffect(3)}
                >
            <Typography variant="h5" sx={{fontSize:"1.1rem" }}>Work</Typography>
            {hoverEffect == 3 ? (
                <LinearDeterminate color={"white"} />
                ) : (
                    <Box sx={{ height: "4px" }}></Box>
                    )}
            </Box>
        </Slide>

        <Slide direction="down" in={checked}>
            <Box
            className="navbarList"
            sx={{ cursor: "pointer" }}
            onMouseOut={() => {
                SetHoverEffect(0);
                }}
                onMouseOver={() => SetHoverEffect(4)}
                >
            <Typography variant="h5" sx={{fontSize:"1.1rem" }}>Contact</Typography>
            {hoverEffect == 4 ? (
                <LinearDeterminate color={"white"} />
                ) : (
                    <Box sx={{ height: "4px" }}></Box>
                    )}
            </Box>
        </Slide>
        <Box>
          <Button
            onClick={openResume}
            variant="outlined"
            sx={{
              border: "1px solid #64ffda",
              color: "white",
              fontSize: "0.8rem",
            }}
          >
            Resume
          </Button>
          <LinearDeterminate color={"transparent"}/>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
