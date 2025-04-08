import { Container, Stack } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        <Container>
          <Stack className="footer__hrefs">
            <a style={{ color: "white" }} href="#about">
              <div className="navbarhref">
                <h3>About</h3>
              </div>
            </a>

            <a style={{ color: "white" }} href="#skils">
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
          </Stack>

          <p className="allrights">
            © 2024 Eyyub Bayramov. All rights reserved.
          </p>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
