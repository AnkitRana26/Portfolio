import { Box, ListItem, Slide, Typography, Zoom } from '@mui/material'
import React, { useState } from 'react'
import { details } from '../../details';
import "./Work.css"

const Work = () => {

    const [checked1,setChecked1]= useState(false);
    const [checked2,setChecked2]= useState(false);
    const [scrolled,setScrolled]= useState(0);
    
    window.addEventListener("scroll",()=>{
        setScrolled(document.documentElement.scrollTop);
    })
  
    if(scrolled>=1400){
        setTimeout(()=>{
            setChecked2(true)
        },600) 
        setTimeout(()=>{
            setChecked1(true)
        },800) 
    }
    const getImage=(ele)=>{
        for(let i=0;i<details.techStack.length;i++){
            if(ele==details.techStack[i].name){
                return details.techStack[i].img
            }
        }
    }
  return (
    <Box className='workDiv' sx={{width:"80%",margin:"15% auto",padding:"0% 10px"}}>
        <Box sx={{borderTop:"2px solid rgb(35,53,84)",position:"relative"}} >
          <Zoom in={checked2}>

          <Typography variant='h4' sx={{color:"rgb(191,201,232)",backgroundColor:"rgb(11,24,47)",position:"absolute",top:"-25px",left:"41%",padding:"0% 5% 0% 5%"}} >Work</Typography>
          </Zoom>
        </Box>
        <Box className='projectContainer' sx={{display:"grid",gridTemplateColumns:"1fr 1fr",justifyContent:"center",marginTop:"5%",flexWrap:"wrap",rowGap:"10px"}}>
              {
                details.projects.map((ele,index)=>{
                  return(

                      <ListItem key={index} style={{display:"block"}}>
                            <Zoom   in={checked1}>
                              <Box className='projects' sx={{display:"grid",gap:"15px",backgroundColor:"rgb(17,34,64)",padding:"10px",borderRadius:"5px",width:"90%",margin:"auto",height:"100%"}}>
                                <video autoPlay="autoplay" loop="true" muted className='projectImage' height={"240px"}  width={"100%"}  >
                                <source src={ele.img} type="video/mp4" />
                                </video>
                                <Box className='projectDescription'sx={{height:"100%"}} >
                                    <Box sx={{display:"flex",justifyContent:"space-between"}}>
                                        <a style={{textDecoration:"none"}} href={ele.github} target="_blank">
                                            <Typography sx={{color:"rgb(203,213,245)"}} variant='h5'>{ele.name}</Typography>
                                        </a>
                                        <Box className='iconBox' sx={{display:"flex",justifyContent:"space-between",width:"14%"}}>
                                            <a style={{textDecoration:"none",color:"white",fontSize:"1.3rem"}} href={ele.github} target={"_blank"} ><i className="fa-brands fa-github"></i></a>
                                            <a style={{textDecoration:"none",color:"white",fontSize:"1.3rem"}} href={ele.live} target={"_blank"} ><i className="fa-solid fa-globe"></i></a>
                                        </Box>
                                    </Box>
                                    <Typography sx={{color:"rgb(129,141,171)",marginTop:"10px",fontSize:"1.1rem"}} >{ele.type} Project</Typography>
                                    <Typography sx={{color:"rgb(129,141,171)",marginTop:"5px",fontSize:"1rem"}} >{ele.description} Project</Typography>
                                    <Box sx={{display:"flex",justifyContent:"center",width:"fit-content",margin:"2% auto",gap:"5px"}}>
                                        {
                                            ele.tech.map((ele,index)=>{

                                                return<img className='skillStack' width={"40px"} key={index} src={getImage(ele)}/>


                                            })
                                        }
                                    </Box>
                                </Box>
                              </Box>
                            </Zoom>
                      </ListItem>
                  )
                })
              }
        </Box>
        
    </Box>
  )
}

export default Work