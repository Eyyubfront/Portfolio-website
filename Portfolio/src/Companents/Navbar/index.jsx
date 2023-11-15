import {  Box,  Button,Container,Stack,Typography, Grid, AppBar} from "@mui/material";
 import BurgerMenu from "../../Companents/Burgermenu";
 import * as React from 'react';

const Navbar=()=>{
    return(
        <>
        
            

        <Stack justifyContent="space-between"  gap="30px" padding="14px" alignItems="center" flexDirection="row"  >
          <Typography marginLeft="0px" variant="h5" color="white" fontFamily="Inter"  >
          Portfolio
          </Typography>
          <Stack
                gap="30px"
                justifyContent="space-between"
                flexDirection="row"
                sx={{ display: { xs: "none", md: "flex" } }}
              >
                <a  style={{color:"white"}} href="#about">

                <div>
                    <h3>About</h3>
                </div>
                </a>

                <a style={{color:"white"}} href="#projects">

<div>
    <h3>Projects</h3>
</div>
</a>

< a style={{color:"white"}} href="#skils">

<div>
    <h3>Skills</h3>
</div>
</a>

< a style={{color:"white"}} href="#Cv">

<div>
    <h3>Cv</h3>
</div>
</a>

<a style={{color:"white"}} href="#experince">

<div>
    <h3>Experience</h3>
</div>
</a>

<a style={{color:"white"}} href="#contact">

<div>
    <h3>Contact</h3>
</div>
</a>
         
              
              </Stack>
              <BurgerMenu/>
       </Stack> 
    
    <Typography fontFamily="monospace" color="white" variant="h4" textAlign="center" marginTop="5%">
        Frontend Developer
    </Typography>
    <Box border="1px solid white">

    </Box>
        
        </>
    )
}
export default Navbar