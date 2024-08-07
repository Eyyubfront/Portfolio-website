import { Box, Button, Container, Stack, Typography, Grid, AppBar } from "@mui/material";
import BurgerMenu from "../../Companents/Burgermenu";
import * as React from 'react';

const Navbar = () => {
    return (
        <>

            <div className="navbar">
<Container>

                <div className="navbar__container">
                    <div className="navbar__top">
                        <h3 className="navbar__name">
                            Portfolio<span className="navbar_slachs">/</span>
                        </h3>
                        <Stack
                            className="navbar__href"
                           
                        >
                            <a  style={{ color: "white" }} href="#about">

                                <div className="navbarhref">
                                    <h3>About</h3>
                                </div>
                            </a>

                            < a style={{ color: "white" }} href="#skils">

                                <div className="navbarhref">
                                    <h3>Skills</h3>
                                </div>
                            </a>




                            <a style={{ color: "white" }} href="#experience">

                                <div className="navbarhref">
                                    <h3>Experience</h3>
                                </div>
                            </a>
                            <a style={{ color: "white" }} href="#projects">

                                <div className="navbarhref">
                                    <h3>Projects</h3>
                                </div>
                            </a>



                            <a style={{ color: "white" }} href="#contact">

                                <div className="navbarhref">
                                    <h3>Contact</h3>
                                </div>
                            </a>


                        <a className="githubseyyub" href="https://github.com/Eyyubfront">

                        <div className="navbar__github">
                            Github Profile
                        </div>
                        </a>
                        </Stack>
                    </div>
                    <BurgerMenu />
                </div>
</Container>


            </div>


        </>
    )
}
export default Navbar