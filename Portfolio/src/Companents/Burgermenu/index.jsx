import { Close } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton, Stack, Hidden } from "@mui/material";
import { useState } from "react";


const BurgerMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <>

      <Hidden mdUp> 
  
        <div className="burger-container">
          <IconButton
            className="menu-icon"
            onClick={() => setOpen(!open)}
          >
            {open ? <Close  /> : <MenuIcon />}
          </IconButton>
          {open && (
            <div className={`menu-drawer ${open ? 'open' : ''}`}>
              <div data-aos="fade-down"  data-aos-easing="linear"
     data-aos-duration="300">
              <Stack flexDirection="row" justifyContent="flex-end">
                <IconButton
                  className="close-icon"
                  edge="end"
                  onClick={() => setOpen(false)}
                >
                  <Close className="cloceicon" />
                </IconButton>
              </Stack>
              <div className="navbar__container">
                <div className="navbar__top">
                  <div className="navbar__hrefs">
                    <a href="#about">
                      <div className="navbarhref">
                        <h3 className="burgermenunames">About</h3>
                      </div>
                    </a>
                    <a href="#skils">
                      <div className="navbarhref">
                        <h3 className="burgermenunames">Skills</h3>
                      </div>
                    </a>
                    <a href="#experience">
                      <div className="navbarhref">
                        <h3 className="burgermenunames">Experience</h3>
                      </div>
                    </a>
                    <a href="#projects">
                      <div className="navbarhref">
                        <h3 className="burgermenunames">Projects</h3>
                      </div>
                    </a>
                    <a href="#contact">
                      <div className="navbarhref">
                        <h3 className="burgermenunames">Contact</h3>
                      </div>
                    </a>
                    <a href="https://github.com/Eyyubfront">
                      <div className="navbar__githubeyyub">
                        Github Profile
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          )}
          </div>
 
      </Hidden>
    
    </>
  );
};

export default BurgerMenu;
