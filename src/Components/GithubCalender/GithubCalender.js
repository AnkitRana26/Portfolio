import { Box, Typography } from "@mui/material";
import React from "react";
import { GithubContributions } from "react-github-graph"

export default function GithubCalender() {
  return (
    <Box sx={{textAlign:"center",width:"80%",margin:"auto",color:"white",borderRadius:"8px",background:"rgba(255,255,255,0.5)",backdropFilter: "saturate(180%) blur(10px)",padding:"3% 1%"}}>
        <Typography></Typography>
        <GithubContributions
          color="white"
          username="ankitrana26" />
    </Box>
  );
}