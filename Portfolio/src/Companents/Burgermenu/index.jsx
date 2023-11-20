
import {
  Box,
  Dialog,
  IconButton,
  Menu,
  MenuItem,
  Modal,
  Stack,
  Typography,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useLocation } from 'react-router-dom'

const BurgerMenu = () => {
  const [open, setOpen] = useState(false);



  return (
    <>
      <Box sx={{ display: { xs: "block", md: "none", color: "white" } }}>
        <IconButton
          sx={{ color: "white" }}
          onClick={() => {
            setOpen(!open);
          }}
        >
          {open ? <Close /> : <MenuIcon />}
        </IconButton>
        <div style={{ position: 'fixed', right: 0, top: 0, width: '100%', display: open ? 'block' : 'none', zIndex: 1000 }} className="dialog" color="white" fullScreen open={open} >
          <Box sx={{ background: "#0F1624", color: "white", marginLeft: '123px', color: "white" }} p={4} height="calc(96% - 50px)">
            <Stack flexDirection="row" justifyContent="flex-end">
              <IconButton
                sx={{ color: "white" }}
                edge="end"
                color="black"
                onClick={() => setOpen(false)}
              >
                <Close />
              </IconButton>
            </Stack>

            <Stack gap="30px" textAlign="center">
              <a style={{ color: "white" }} href="#about">

                <div >
                  <h3>About</h3>
                </div>
              </a>
              <Box border="1px solid white">

              </Box>
              <a style={{ color: "white" }} href="#projects">

                <div >
                  <h3>Projects</h3>
                </div>
              </a>
              <Box border="1px solid white">

              </Box>
              < a style={{ color: "white" }} href="#skils">

                <div >
                  <h3>Skills</h3>
                </div>
              </a>
              <Box border="1px solid white">

              </Box>
              < a style={{ color: "white" }} href="#Cv">

                <div  >
                  <h3>Cv</h3>
                </div>
              </a>

              <Box border="1px solid white">

              </Box>
              <a style={{ color: "white" }} href="#experience">

                <div >
                  <h3>Experience</h3>
                </div>
              </a>
              <Box border="1px solid white">

              </Box>
              <a style={{ color: "white" }} href="#contact">

                <div >
                  <h3>Contact</h3>
                </div>
              </a>

            </Stack>

          </Box>
        </div>
      </Box>
    </>
  );
};

export default BurgerMenu;