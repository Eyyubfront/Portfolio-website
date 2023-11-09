import {
    Box,
    Button,
    Container,
    Stack,
    Typography,
    Grid,
    AppBar,
  } from "@mui/material";
import NavLink from "../Navlink";
import BurgerMenu from "../Burgermenu";
const Header=()=>{
    return(
        <>
        <AppBar  sx={{
                 background:"linear-gradient(278deg, rgb(11, 63, 55) -7.03%, rgb(203, 141, 98) 136.33%);",
                 position: "sticky",
                 color:"black",
                 top: "10",        
               }} >
       <Stack padding="14px" alignItems="center" flexDirection="row" justifyContent="space-between" >
          <Typography color="white" fontFamily="Inter" variant="h6" component="div">
           Bayramov Eyyub
          </Typography>
          <Stack
                gap="30px"
                flexDirection="row"
                sx={{ display: { xs: "none", md: "flex" } }}
              >
                <NavLink to="/" title="Əsas səhifə" />
                <NavLink to="/about" title="Haqqımda" />
                <NavLink to="/cv"title="Cv" />
                <NavLink to="/projects" title="Proyektlər" />
                <NavLink to="/skils" title="Bacarıqlar" />
                <NavLink to="/experience" title="Təcrübə" />
                <NavLink to="/contact"title="Əlaqə" />
              </Stack>
              <BurgerMenu/>
       </Stack>  
      </AppBar>     
        </>
    )
}

export default Header