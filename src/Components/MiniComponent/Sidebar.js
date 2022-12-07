import { Box, Slide } from '@mui/material'
import React, { useEffect, useState } from 'react'
import {AiFillGithub} from "react-icons"
import "./Sidebar.css";

const Sidebar = () => {
    const [checked,setChecked]= useState(false);
    const introLoaded=()=>{
        setTimeout(()=>{
            setChecked(true);
    
        },900)
    }
        useEffect(()=>{
            introLoaded();
        },[])
  return (

    <Slide direction='up'  in={checked}>

        <Box sx={{position:"fixed",bottom:"5%",left:"4%",display:"grid",justifyContent:"center",alignContent:"center",gap:"10px"}}>
            <a className='socialLogo' href='#' style={{textDecoration:"none",color:"white",fontSize:"1.7rem"}}><i className="fa-brands fa-github"></i></a>
            <a href='#' style={{textDecoration:"none",color:"white",fontSize:"1.7rem"}}><i class="fa-brands fa-linkedin"></i></a>
            <a href='#' style={{textDecoration:"none",color:"white",fontSize:"1.7rem"}}><i class="fa-brands fa-instagram"></i></a>
            <a href='#' style={{textDecoration:"none",color:"white",fontSize:"1.5rem"}}><i class="fa-regular fa-envelope"></i></a>

        </Box>
    </Slide>
  )
}

export default Sidebar