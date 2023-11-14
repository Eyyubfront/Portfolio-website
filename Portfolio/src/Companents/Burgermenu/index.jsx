
import {
    Box,
    Dialog,
    IconButton,
    Menu,
    MenuItem,
    Stack,
    Typography,
  } from "@mui/material";
  import { Close } from "@mui/icons-material";
  import MenuIcon from "@mui/icons-material/Menu";
  import { useState } from "react";

  import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
  import PersonIcon from '@mui/icons-material/Person';
  import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const BurgerMenu = () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Box sx={{ display: { xs: "block", md: "none",color:"white" } }}>
          <IconButton
          sx={{color:"white"}}
            onClick={() => {
              setOpen(!open);
            }}
          >
            {open ? <Close /> : <MenuIcon />}
          </IconButton>
          <Dialog className="dialog" color="white"  fullScreen open={open} onClose={() => setOpen(false)}>
            <Box sx={{background:"#0F1624",color:"white", marginLeft:'123px', color:"white"}} p={4} height="calc(81% - 50px)">
              <Stack flexDirection="row" justifyContent="flex-end">
                <IconButton
                sx={{color:"white"}}
                  edge="end"
                  color="black"
                  onClick={() => setOpen(false)}
                >
                  <Close />
                </IconButton>
              </Stack>
     
         <Stack gap="30px" textAlign="center">
         <a  style={{color:"white"}} href="#about">

<div>
    <h3>About</h3>
</div>
</a>
<Box border="1px solid white">
  
</Box>
<a style={{color:"white"}} href="#projects">

<div>
<h3>Projects</h3>
</div>
</a>
<Box border="1px solid white">
  
</Box>
< a style={{color:"white"}} href="#skils">

<div>
<h3>Skills</h3>
</div>
</a>
<Box border="1px solid white">
  
</Box>
<a style={{color:"white"}} href="#experince">

<div>
<h3>Experince</h3>
</div>
</a>
<Box border="1px solid white">
  
</Box>
<a style={{color:"white"}} href="#contact">

<div>
<h3>Contact</h3>
</div>
</a>

         </Stack>

            </Box>
          </Dialog>
        </Box>
      </>
    );
  };
  
  export default BurgerMenu;