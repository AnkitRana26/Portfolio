import { Box } from '@mui/material'
import React from 'react'
import {AiFillGithub} from "react-icons"


const Sidebar = () => {
  return (
    <Box sx={{position:"fixed",bottom:"5%",left:"3%",display:"grid",justifyContent:"center",alignContent:"center",gap:"8px"}}>
        <a href='#' style={{textDecoration:"none",color:"white",fontSize:"2rem"}}><i className="fa-brands fa-github"></i></a>
        <a href='#' style={{textDecoration:"none",color:"white",fontSize:"2rem"}}><i class="fa-brands fa-linkedin"></i></a>
        <a href='#' style={{textDecoration:"none",color:"white",fontSize:"2rem"}}><i class="fa-brands fa-instagram"></i></a>
        <a href='#' style={{textDecoration:"none",color:"white",fontSize:"1.7rem"}}><i class="fa-regular fa-envelope"></i></a>

    </Box>
  )
}

export default Sidebar