import { Box, Button, Typography } from '@mui/material'
import React, { useState } from 'react'
import LinearDeterminate from './MiniComponent/ProgressComp';
import logo from "../media/logo.png"


const Navbar = () => {
    const [hoverEffect,SetHoverEffect]=useState(0);


    const openResume=()=>{
        window.open("https://drive.google.com/file/d/1-2HpCSCQC5zxqolM5PbS7qBz9sTtRjCy/view?usp=sharing","_blank");
    }



  return (
    <Box sx={{display:"flex",justifiyContent:"space-between",width:"100%",padding:"1% 0%",position:"sticky",top:"0%"}}>
        <Box sx={{width:"100%",padding:"0% 25px",display:"flex",alignItems:"center",gap:"15px",color:"white" }} >
           <img height={"69px"} width={"62px"} src={logo} />
           <Typography variant='h4'>Ankit Rana</Typography>
        </Box>
        <Box sx={{display:"flex",width:"90%",color:"white",justifyContent:"space-around",alignItems:"center"}}>
            <Box sx={{cursor:"pointer"}} onMouseOut={()=>{SetHoverEffect(0)}} onMouseOver={()=>SetHoverEffect(1)} >
                <Typography  variant='h5'>About</Typography>
                {hoverEffect==1?<LinearDeterminate color={"white"}/>:""}
            </Box>
            <Box sx={{cursor:"pointer"}} onMouseOut={()=>{SetHoverEffect(0)}} onMouseOver={()=>SetHoverEffect(2)}>
                <Typography variant='h5'>Education</Typography>
                {hoverEffect==2?<LinearDeterminate color={"white"}/>:""}
            </Box>
            <Box sx={{cursor:"pointer"}} onMouseOut={()=>{SetHoverEffect(0)}} onMouseOver={()=>SetHoverEffect(3)}>
                <Typography variant='h5'>Work</Typography>
                {hoverEffect==3?<LinearDeterminate color={"white"}/>:""}
            </Box>
            <Box sx={{cursor:"pointer"}} onMouseOut={()=>{SetHoverEffect(0)}} onMouseOver={()=>SetHoverEffect(4)}>
                <Typography variant='h5'>Contact</Typography>
                {hoverEffect==4?<LinearDeterminate color={"white"}/>:""}
            </Box>
            <Box>
                <Button onClick={openResume} variant='outlined' sx={{border:"1px solid white",color:"white",fontSize:"1rem"}} >Resume</Button>
                {/* <LinearDeterminate color={"transparent"}/> */}
            </Box>
            
        </Box>


        
    </Box>
  )
}

export default Navbar