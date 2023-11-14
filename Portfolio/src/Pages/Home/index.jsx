
import {  Box,  Button,Container,Stack,Typography, Grid, AppBar} from "@mui/material";
  import AOS from 'aos';
  import 'aos/dist/aos.css';
  import { useEffect } from "react"
  import * as React from 'react';
import Contact from "../../Companents/Burgermenu/Contact";
import Experince from "../../Companents/Experince";
import Skils from "../../Companents/Skils";
import Project from "../../Companents/Project";
import About from "../../Companents/About";
import Navbar from "../../Companents/Navbar";
import Websitestart from "../../Companents/Websitestart";
const Home=()=>{
    useEffect(() => {
        AOS.init();
      }, [])
    return(
        <>
<Box  sx={{background:"#0F1624",height:"100%vh"}}>
           <Navbar/>
          <Websitestart/>
<About/>
<Project/>
<Skils/>
<Experince/>
<Contact/>
</Box>   
        </>
    )
}
export default Home