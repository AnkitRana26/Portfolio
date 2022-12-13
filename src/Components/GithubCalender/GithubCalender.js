import { Box, Typography } from "@mui/material";
import React from "react";
import GitHubCalendar from "react-github-calendar";

export default function GithubCalender() {
  return (
    <Box sx={{textAlign:"center",width:"fit-content",margin:"auto",color:"white",borderRadius:"8px",padding:"3% 1%",border:"2px solid white"}}>
        <Typography></Typography>
        <GitHubCalendar
          
          color="skyblue"
          username="ankitrana26" />
    </Box>
  );
}