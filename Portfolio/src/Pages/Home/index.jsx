
import { Box, Button, Container, Stack, Typography, Grid, AppBar } from "@mui/material";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react"
import * as React from 'react';
import Contact from "../../Companents/Contact";
import Experince from "../../Companents/Experince";
import Skils from "../../Companents/Skils";
import Project from "../../Companents/Project";
import About from "../../Companents/About";
import Navbar from "../../Companents/Navbar";
import Footer from "../../Companents/Footer";
const Home = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>

<div className="allspage">
        <Navbar />
        <About />
        <Skils />
        <Experince />
        <Project />
        <Contact />
      <Footer/>
</div>

    </>
  )
}
export default Home