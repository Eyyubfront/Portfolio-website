
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
  import NavLink from "../Navlink";
  import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
  import PersonIcon from '@mui/icons-material/Person';
  import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const BurgerMenu = () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Box sx={{ display: { xs: "block", md: "none" } }}>
          <IconButton
            onClick={() => {
              setOpen(!open);
            }}
          >
            {open ? <Close /> : <MenuIcon />}
          </IconButton>
          <Dialog  fullScreen open={open} onClose={() => setOpen(false)}>
            <Box sx={{background:"linear-gradient(278deg, rgb(11, 63, 55) -7.03%, rgb(203, 141, 98) 136.33%);", marginLeft:'123px', color:"black"}} p={4} height="calc(111% - 50px)">
              <Stack flexDirection="row" justifyContent="flex-end">
                <IconButton
                  edge="end"
                  color="black"
                  onClick={() => setOpen(false)}
                >
                  <Close />
                </IconButton>
              </Stack>
     
              <Stack
              color="black"
          textAlign="center"
          marginTop="40px"
                gap="20px"
                flexDirection="column"
                justifyContent="center"
              >
                <NavLink to="/" title="Bayramov Eyyub" />
                <Box border="1px solid gray">

                </Box>
                <NavLink to="/about" title="Haqqımda" />
                <Box border="1px solid gray">

</Box>
                <NavLink to="/projects" title="Proyektlər" />
                <Box border="1px solid gray">

</Box>
                <NavLink to="/skils" title="Bacarıqlar" />
                <Box border="1px solid gray">

</Box>
                <NavLink to="/basket" title="Təcrübə" />
                <Box border="1px solid gray">

</Box>
                <NavLink to="/contact"title="Əlaqə" />
              </Stack>


            </Box>
          </Dialog>
        </Box>
      </>
    );
  };
  
  export default BurgerMenu;