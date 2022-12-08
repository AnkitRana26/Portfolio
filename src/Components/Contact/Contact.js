import { Box, Button, Typography, Zoom } from '@mui/material'
import React, { useState } from 'react'
import "./Contact.css"

const Contact = () => {
    const [checked1,setChecked1]= useState(false);
    
    const [scrolled,setScrolled]= useState(0);
    
    window.addEventListener("scroll",()=>{
        setScrolled(document.documentElement.scrollTop);
    })
  
    if(scrolled>=2700){
        
        setTimeout(()=>{
            setChecked1(true)
        },500) 
    }



    const mailTo=()=>{
        window.open("mailto:ranaankitr@outlook.com","_blank");
    }
  return (
    <Zoom in={checked1}>

    <Box sx={{width:"80%",margin:"20% auto",padding:"0% 10px"}}>
        
        <Typography className='contactheading' sx={{textAlign:"center",fontWeight:"600",color:"rgb(204,214,246)"}} variant='h2'>Get In Touch</Typography>
        <Typography className='contactSubHeading' sx={{textAlign:"center",width:"70%",margin:"auto",color:"rgb(124,134,164)"}} variant='h5'>I’m currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</Typography>
        
        <Button className='contactButton' onClick={mailTo} variant="outlined" sx={{border: "1px solid #64ffda",color: "white",fontSize: "0.9rem",margin:"auto",padding:"1% 3%",display:"block",marginTop:"2%"}}>Say Hello</Button>

        
    </Box>
    </Zoom>
  )
}

export default Contact