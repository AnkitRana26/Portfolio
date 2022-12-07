import { Box, Slide, Typography, Zoom } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { details } from '../details';

const Intro = () => {
    const [checked,setChecked]= useState(false);
    
    const introLoaded=()=>{
        setTimeout(()=>{
            setChecked(true);

        },1000)
    }
    useEffect(()=>{
        introLoaded();
    },[])
  return (
    <Box  sx={{width:"80%",margin:"auto",marginTop:"5%"}}>
        <Zoom  in={checked}>
            <Typography sx={{color:"rgb(191,201,232)",fontFamily:"arial"}} variant='h1' >{details.firstname+" "+details.lastname}</Typography>
        </Zoom>
        <Zoom  in={checked}>
            <Typography sx={{color:"rgb(136,146,176)"}} variant='h1'>I Build Things for the Web</Typography>
        </Zoom>
        <Zoom  in={checked}>
            <Typography sx={{color:"rgb(136,146,176)",width:"65%",marginTop:"1%"}} variant='h5'>I’m a Full Stack Web Developer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products.</Typography>
        </Zoom>
        
    </Box>
  )
}

export default Intro