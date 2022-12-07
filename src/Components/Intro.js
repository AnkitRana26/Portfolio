import { Box, Button, Slide, Typography, Zoom } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { details } from '../details';
import LinearDeterminate from './MiniComponent/ProgressComp';


const Intro = () => {
    const [checked,setChecked]= useState(false);
    const [hoverEffect,SetHoverEffect]=useState(0);

    const introLoaded=()=>{
        setTimeout(()=>{
            setChecked(true);

        },800)
    }
    useEffect(()=>{
        introLoaded();
    },[])
  return (
    <Box  sx={{width:"80%",margin:"auto",marginTop:"5%"}}>
        <Box sx={{cursor:"pointer",width:"fit-content"}} onMouseOut={()=>{SetHoverEffect(0)}} onMouseOver={()=>SetHoverEffect(1)}>
            <Zoom  in={checked}>
                <Typography sx={{color:"rgb(191,201,232)",fontFamily:"arial",fontSize:"5rem"}} variant='h1' >{details.firstname+" "+details.lastname}</Typography>
                
            </Zoom>
            {hoverEffect==1?<LinearDeterminate color={"white"}/>:<Box sx={{height:"4px"}}>

                </Box>}
        </Box>
        <Zoom  in={checked}>
            <Typography sx={{color:"rgb(136,146,176)",fontSize:"5rem"}} variant='h1'>I Build Things for the Web</Typography>
        </Zoom>
        <Zoom  in={checked}>
            <Typography sx={{color:"rgb(136,146,176)",width:"65%",marginTop:"2%",fontSize:"1.4rem"}} variant='h5'>I’m a Full Stack Web Developer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products.</Typography>
        </Zoom>
        <Zoom in={checked}>
            <Button sx={{
              border: "1px solid #64ffda",
              color: "white",
              fontSize: "1rem",
              marginTop:"4%",
              padding:"1%"
            }}>Check Out My Work</Button>
        </Zoom>
    </Box>
  )
}

export default Intro